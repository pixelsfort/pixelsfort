import { Link } from '@inertiajs/react';
import type { MouseEvent, ReactNode } from 'react';

export interface NavLinkProps {
    href: string;
    children: ReactNode;
    external?: boolean;
    className?: string;
    onClick?: (event: MouseEvent<Element, globalThis.MouseEvent>) => void;
    title?: string;
    id?: string;
}

export function isExternalUrl(href: string, external?: boolean): boolean {
    if (external) {
        return true;
    }

    return (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
    );
}

export function NavLink({
    href,
    children,
    external,
    className,
    onClick,
    ...props
}: NavLinkProps) {
    const isExplicitExternal = isExternalUrl(href, external);
    const isAnchor = href.startsWith('#');

    if (isExplicitExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                onClick={onClick}
                {...props}
            >
                {children}
            </a>
        );
    }

    if (isAnchor) {
        return (
            <a
                href={href}
                className={className}
                onClick={onClick}
                {...props}
            >
                {children}
            </a>
        );
    }

    // Default to Inertia Link for internal SPA routes (e.g., /about, /blog)
    return (
        <Link
            href={href}
            className={className}
            onClick={onClick}
            {...props}
        >
            {children}
        </Link>
    );
}
