import { Link } from '@inertiajs/react';
import { PixelsfortLogo } from '@/components/pixelsfort-logo';
import { home } from '@/routes';

interface BrandLogoProps {
    className?: string;
    showTagline?: boolean;
}

export function BrandLogo({
    className = '',
    showTagline = true,
}: BrandLogoProps) {
    return (
        <Link
            href={home.url()}
            className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-90 ${className}`}
            aria-label="Pixelsfort Home"
        >
            <PixelsfortLogo className="h-8 w-auto text-foreground transition-transform duration-300 group-hover:scale-[1.02]" />
            {showTagline && (
                <span className="hidden border-l border-border/80 pl-3 text-[10px] font-semibold tracking-widest text-muted-foreground uppercase sm:inline-block">
                    IT Solutions & Services
                </span>
            )}
        </Link>
    );
}

export default BrandLogo;
