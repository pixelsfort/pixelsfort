import { Link, router } from '@inertiajs/react';
import { ArrowRight, ChevronRight, LayoutGrid, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '@/components/ui/button';
import headerNavData from '@/data/header-navigation.json';
import { cn } from '@/lib/utils';
import { dashboard } from '@/routes';
import type { Auth } from '@/types';
import type {
    NavDirectLink,
    NavDropdownMenu,
    NavMenuItem,
} from '@/types/navigation';
import { isDirectLink, isDropdownMenu } from '@/types/navigation';
import { NavIcon } from './nav-icon';
import { NavLink } from './nav-link';

const headerNavItems = headerNavData as NavMenuItem[];

interface MobileNavProps {
    auth: Auth;
    mobileOpen: boolean;
    setMobileOpen: (open: boolean) => void;
}

export function HamburgerIcon({ open }: { open: boolean }) {
    return (
        <div
            className={cn(
                'relative flex size-6 items-center justify-center transition-transform duration-300 ease-in-out',
                open && 'rotate-90',
            )}
            aria-hidden="true"
        >
            <span
                className={cn(
                    'absolute h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ease-in-out',
                    open
                        ? 'translate-y-0 rotate-45'
                        : '-translate-y-1.5',
                )}
            />
            <span
                className={cn(
                    'absolute h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ease-in-out',
                    open
                        ? 'scale-x-0 opacity-0'
                        : 'scale-x-100 opacity-100',
                )}
            />
            <span
                className={cn(
                    'absolute h-0.5 w-6 rounded-full bg-foreground transition-all duration-300 ease-in-out',
                    open
                        ? 'translate-y-0 -rotate-45'
                        : 'translate-y-1.5',
                )}
            />
        </div>
    );
}

export function MobileNav({ auth, mobileOpen, setMobileOpen }: MobileNavProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent body scrolling when mobile navigation is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileOpen]);

    // Close on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMobileOpen(false);
            }
        };

        if (mobileOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [mobileOpen, setMobileOpen]);

    // Close on Inertia navigation
    useEffect(() => {
        return router.on('navigate', () => {
            setMobileOpen(false);
        });
    }, [setMobileOpen]);

    const dropdownMenus = headerNavItems.filter(
        (item): item is NavDropdownMenu =>
            isDropdownMenu(item) && item.showOnMobile !== false,
    );

    const directLinks = headerNavItems.filter(
        (item): item is NavDirectLink =>
            isDirectLink(item) && item.showOnMobile !== false,
    );

    const featuredDirectLinks = directLinks.filter((link) => link.featured);
    const standardDirectLinks = directLinks.filter((link) => !link.featured);

    const drawerContent = (
        <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={cn(
                'fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col border-t border-border/40 bg-background/95 backdrop-blur-2xl transition-all duration-300 ease-in-out md:hidden',
                mobileOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0',
            )}
        >
            <div className="flex-1 overflow-y-auto">
                <div className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-6 sm:px-6">
                    {/* Featured Link (AI & Automation) */}
                    {featuredDirectLinks.map((link) => (
                        <NavLink
                            key={link.id || link.label}
                            href={link.href}
                            external={link.external}
                            onClick={() => setMobileOpen(false)}
                            className="group flex items-center justify-between rounded-xl border border-indigo-500/30 p-3.5 transition-all duration-300 hover:border-indigo-500/60"
                        >
                            <div className="flex items-center gap-2.5">
                                <Sparkles className="size-4 animate-pulse text-indigo-400" />
                                <span className="bg-gradient-to-r from-indigo-400 via-primary to-indigo-400 bg-clip-text text-sm font-semibold text-transparent">
                                    {link.label}
                                </span>
                            </div>
                            <ChevronRight className="size-4 text-indigo-400 transition-transform duration-200 group-hover:translate-x-1" />
                        </NavLink>
                    ))}

                    {/* Categorized Dropdown Sections */}
                    {dropdownMenus.map((menu) => {
                        const items = menu.items.filter(
                            (subItem) => subItem.showOnMobile !== false,
                        );
                        if (items.length === 0) {
                            return null;
                        }

                        return (
                            <div
                                key={menu.id || menu.label}
                                className="space-y-3"
                            >
                                <div className="flex items-center justify-between border-b border-border/30 pb-2">
                                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                        {menu.label}
                                    </span>
                                    {menu.heading && (
                                        <span className="hidden text-[11px] text-muted-foreground/60 sm:inline">
                                            {menu.heading}
                                        </span>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                                    {items.map((subItem) => (
                                        <NavLink
                                            key={subItem.label}
                                            href={subItem.href}
                                            external={subItem.external}
                                            onClick={() => setMobileOpen(false)}
                                            className="group flex items-start gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-border/50 hover:bg-muted/40"
                                        >
                                            {subItem.icon && (
                                                <div
                                                    className={cn(
                                                        'flex size-8 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105',
                                                        subItem.iconBg ||
                                                            'bg-primary/10',
                                                        subItem.iconColor ||
                                                            'text-primary',
                                                    )}
                                                >
                                                    <NavIcon
                                                        name={subItem.icon}
                                                        className="size-4"
                                                    />
                                                </div>
                                            )}
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between gap-2">
                                                    <span className="truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                                                        {subItem.label}
                                                    </span>
                                                    {subItem.badge && (
                                                        <span className="shrink-0 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                                                            {typeof subItem.badge ===
                                                            'string'
                                                                ? subItem.badge
                                                                : subItem.badge
                                                                      .text}
                                                        </span>
                                                    )}
                                                </div>
                                                {subItem.description && (
                                                    <p className="line-clamp-1 text-xs text-muted-foreground/80">
                                                        {subItem.description}
                                                    </p>
                                                )}
                                            </div>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* Standard Direct Links */}
                    {standardDirectLinks.length > 0 && (
                        <div className="space-y-3">
                            <div className="border-b border-border/30 pb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                Quick Links
                            </div>
                            <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                                {standardDirectLinks.map((link) => (
                                    <NavLink
                                        key={link.id || link.label}
                                        href={link.href}
                                        external={link.external}
                                        onClick={() => setMobileOpen(false)}
                                        className="group flex items-center gap-3 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-border/50 hover:bg-muted/40"
                                    >
                                        {link.icon && (
                                            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform duration-200 group-hover:scale-105">
                                                <NavIcon
                                                    name={link.icon}
                                                    className="size-4"
                                                />
                                            </div>
                                        )}
                                        <span className="flex-1 truncate text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                                            {link.label}
                                        </span>
                                        <ChevronRight className="size-4 text-muted-foreground/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-border/40 bg-background/50 px-4 py-4 sm:px-6">
                <div className="mx-auto flex max-w-2xl flex-col gap-2.5">
                    {auth.user && (
                        <Button
                            asChild
                            variant="outline"
                            className="h-11 w-full justify-center gap-2"
                        >
                            <Link
                                href={dashboard.url()}
                                onClick={() => setMobileOpen(false)}
                            >
                                <LayoutGrid className="size-4" />
                                <span>Go to Dashboard</span>
                            </Link>
                        </Button>
                    )}
                    <Button
                        asChild
                        className="group h-11 w-full justify-center gap-2 bg-gradient-to-r from-primary via-indigo-600 to-blue-600 text-white shadow-md transition-all hover:shadow-indigo-500/25"
                    >
                        <a
                            href="#contact"
                            onClick={() => setMobileOpen(false)}
                        >
                            <span>Contact Us</span>
                            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="relative text-foreground hover:bg-accent/80 focus-visible:ring-2 focus-visible:ring-primary md:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={
                    mobileOpen
                        ? 'Close navigation menu'
                        : 'Open navigation menu'
                }
            >
                <HamburgerIcon open={mobileOpen} />
            </Button>

            {mounted && createPortal(drawerContent, document.body)}
        </>
    );
}
