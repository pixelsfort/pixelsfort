import { usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import type { Auth } from '@/types';
import { BrandLogo } from './header/brand-logo';
import { HeaderActions } from './header/header-actions';
import { MobileNav } from './header/mobile-nav';
import { DesktopNav } from './header/nav-dropdowns';

export function SiteHeader() {
    const { auth } = usePage<{ auth: Auth }>().props;
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled || mobileOpen
                    ? 'border-b border-border/40 bg-background/95 backdrop-blur-xl'
                    : 'bg-background/95 backdrop-blur-md'
            }`}
        >
            <div className="mx-auto flex h-16 max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">
                <div className="flex min-w-0 flex-1 items-center">
                    <BrandLogo />
                </div>
                <DesktopNav />
                <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
                    <HeaderActions auth={auth} />
                    <MobileNav
                        auth={auth}
                        mobileOpen={mobileOpen}
                        setMobileOpen={setMobileOpen}
                    />
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;
