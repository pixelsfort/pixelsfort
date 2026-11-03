import { router, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { Auth } from '@/types';
import { BrandLogo } from './header/brand-logo';
import { HeaderActions } from './header/header-actions';
import { MobileNav } from './header/mobile-nav';
import { DesktopNav, MegamenuContainer } from './header/nav-dropdowns';

export function SiteHeader() {
    const { auth } = usePage<{ auth: Auth }>().props;
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
    const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const cancelClose = useCallback(() => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    }, []);

    const scheduleClose = useCallback((delay = 180) => {
        cancelClose();
        closeTimeoutRef.current = setTimeout(() => {
            setActiveMenuId(null);
        }, delay);
    }, [cancelClose]);

    const openMenu = useCallback((id: string) => {
        cancelClose();
        setActiveMenuId(id);
    }, [cancelClose]);

    const toggleMenu = useCallback((id: string) => {
        cancelClose();
        setActiveMenuId((prev) => (prev === id ? null : id));
    }, [cancelClose]);

    const closeMenu = useCallback(() => {
        cancelClose();
        setActiveMenuId(null);
    }, [cancelClose]);

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

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeMenu();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [closeMenu]);

    // Close on Inertia navigation
    useEffect(() => {
        const removeListener = router.on('navigate', () => {
            closeMenu();
        });

        return () => removeListener();
    }, [closeMenu]);

    const handleSetMobileOpen = useCallback(
        (open: boolean) => {
            if (open) {
                closeMenu();
            }

            setMobileOpen(open);
        },
        [closeMenu],
    );

    return (
        <>
            <header
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                    scrolled || mobileOpen || activeMenuId
                        ? 'border-b border-border/40 bg-background/95 backdrop-blur-xl'
                        : 'bg-background/95 backdrop-blur-md'
                }`}
                onMouseLeave={() => scheduleClose(180)}
            >
                <div className="mx-auto flex h-16 max-w-[1440px] items-center px-4 sm:px-6 lg:px-8">
                    <div className="flex min-w-0 flex-1 items-center">
                        <BrandLogo />
                    </div>
                    <DesktopNav
                        activeMenuId={activeMenuId}
                        onOpenMenu={openMenu}
                        onToggleMenu={toggleMenu}
                        onCloseMenu={closeMenu}
                        onCancelClose={cancelClose}
                        onScheduleClose={scheduleClose}
                    />
                    <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
                        <HeaderActions auth={auth} />
                        <MobileNav
                            auth={auth}
                            mobileOpen={mobileOpen}
                            setMobileOpen={handleSetMobileOpen}
                        />
                    </div>
                </div>

                <AnimatePresence>
                    {activeMenuId && (
                        <MegamenuContainer
                            key="megamenu-dropdown"
                            activeMenuId={activeMenuId}
                            onClose={closeMenu}
                            onMouseEnter={cancelClose}
                            onMouseLeave={() => scheduleClose(180)}
                        />
                    )}
                </AnimatePresence>
            </header>

            {/* Black backdrop overlay with opacity 0.5 covering all body content */}
            <AnimatePresence>
                {activeMenuId && (
                    <motion.div
                        key="megamenu-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        className="fixed inset-0 top-16 z-40 bg-black/80 backdrop-blur-[2px] cursor-pointer"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default SiteHeader;
