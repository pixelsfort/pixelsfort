import { usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { useAppearance } from '@/hooks/use-appearance';
import type { Auth } from '@/types';
import { BrandLogo } from './header/brand-logo';
import { HeaderActions } from './header/header-actions';
import { MobileNav } from './header/mobile-nav';
import { DesktopNav } from './header/nav-dropdowns';

export function SiteHeader() {
    const { auth } = usePage<{ auth: Auth }>().props;
    const { resolvedAppearance, updateAppearance } = useAppearance();
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

    const toggleTheme = () => {
        updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark');
    };

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                scrolled
                    ? 'border-b border-border/60 bg-background/85 shadow-xs backdrop-blur-xl'
                    : 'border-b border-border/30 bg-background/95 backdrop-blur-md'
            }`}
        >
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <BrandLogo />
                <DesktopNav />
                <div className="flex items-center gap-2 sm:gap-3">
                    <HeaderActions
                        auth={auth}
                        resolvedAppearance={resolvedAppearance}
                        toggleTheme={toggleTheme}
                    />
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
