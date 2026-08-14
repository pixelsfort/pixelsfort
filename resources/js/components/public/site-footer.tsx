import { Link } from '@inertiajs/react';

export function SiteFooter() {
    return (
        <footer className="w-full border-t border-sidebar-border/70 bg-background py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 max-w-7xl px-4 md:h-16 md:flex-row sm:px-6 lg:px-8">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} PixelsFort. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                </div>
            </div>
        </footer>
    );
}
