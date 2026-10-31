import type { InertiaLinkProps } from '@inertiajs/react';
import type { LucideIcon } from 'lucide-react';

export type BreadcrumbItem = {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
};

export type NavItem = {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
};

/* Public Header Navigation Types */
export interface NavItemBadge {
    text: string;
    className?: string;
}

export interface NavSubItem {
    label: string;
    description?: string;
    href: string;
    icon?: string;
    iconBg?: string;
    iconColor?: string;
    badge?: string | NavItemBadge;
    external?: boolean;
    showOnMobile?: boolean;
}

export interface NavDropdownMenu {
    id: string;
    label: string;
    type?: 'dropdown';
    heading?: string;
    layout?: 'grid' | 'list';
    columns?: number;
    dropdownWidth?: string;
    items: NavSubItem[];
    showOnMobile?: boolean;
}

export interface NavDirectLink {
    id: string;
    label: string;
    type?: 'link';
    href: string;
    icon?: string;
    iconColor?: string;
    external?: boolean;
    showOnMobile?: boolean;
    featured?: boolean;
}

export type NavMenuItem = NavDropdownMenu | NavDirectLink;

export function isDropdownMenu(item: NavMenuItem): item is NavDropdownMenu {
    return 'items' in item && Array.isArray((item as NavDropdownMenu).items);
}

export function isDirectLink(item: NavMenuItem): item is NavDirectLink {
    return 'href' in item && typeof (item as NavDirectLink).href === 'string';
}
