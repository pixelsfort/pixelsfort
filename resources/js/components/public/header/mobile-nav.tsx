import { Link, router } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    ChevronDown,
    ChevronRight,
    LayoutGrid,
    Sparkles,
} from 'lucide-react';
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
    NavSubItem,
} from '@/types/navigation';
import { isDirectLink, isDropdownMenu } from '@/types/navigation';
import { NavLink } from './nav-link';

const headerNavItems = headerNavData as NavMenuItem[];

const showcaseActionLabels: Record<string, { label: string; href: string }> = {
    ai: { label: 'Talk to our AI Experts', href: '/#contact' },
    services: { label: 'Talk to our Architects', href: '/#contact' },
    solutions: { label: 'Explore Case Studies', href: '/#case-studies' },
    industries: { label: 'Talk to Domain Specialists', href: '/#contact' },
    company: { label: 'View Open Positions', href: '/#careers' },
};

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

    // Collapsible navigation state: all main items closed by default
    const [openMenuId, setOpenMenuId] = useState<string | null>(null);
    const [openCategoryKey, setOpenCategoryKey] = useState<string | null>(null);

    // Reset all collapsed states whenever mobile drawer opens or closes
    useEffect(() => {
        if (!mobileOpen) {
            setOpenMenuId(null);
            setOpenCategoryKey(null);
        }
    }, [mobileOpen]);

    const handleToggleMenu = (menuId: string) => {
        setOpenMenuId((prev) => (prev === menuId ? null : menuId));
        setOpenCategoryKey(null);
    };

    const handleToggleCategory = (catKey: string) => {
        setOpenCategoryKey((prev) => (prev === catKey ? null : catKey));
    };

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
                <div className="mx-auto flex max-w-2xl flex-col gap-2.5 px-4 py-5 sm:px-6">
                    {headerNavItems.map((item) => {
                        if (item.showOnMobile === false) {
                            return null;
                        }

                        if (isDropdownMenu(item)) {
                            const isOpen = openMenuId === item.id;
                            const items = item.items.filter(
                                (subItem) => subItem.showOnMobile !== false,
                            );

                            if (items.length === 0) {
                                return null;
                            }

                            return (
                                <div
                                    key={item.id || item.label}
                                    className={cn(
                                        'overflow-hidden rounded-xl border transition-all duration-200',
                                        isOpen
                                            ? 'border-primary/50 bg-card shadow-sm dark:bg-zinc-900/80'
                                            : 'border-border/60 bg-card/60 hover:border-border hover:bg-card/90 dark:bg-zinc-900/40',
                                        item.featured &&
                                            (isOpen
                                                ? 'border-indigo-500/60 bg-indigo-500/5 dark:bg-indigo-950/25'
                                                : 'border-indigo-500/30 bg-indigo-500/[0.03] hover:border-indigo-500/50'),
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => handleToggleMenu(item.id)}
                                        aria-expanded={isOpen}
                                        className="flex w-full cursor-pointer items-center justify-between p-3.5 text-left"
                                    >
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className={cn(
                                                        'text-sm font-semibold tracking-wide',
                                                        item.featured
                                                            ? 'bg-gradient-to-r from-indigo-500 via-primary to-indigo-500 bg-clip-text text-transparent'
                                                            : 'text-foreground',
                                                    )}
                                                >
                                                    {item.label}
                                                </span>
                                                {item.featured && (
                                                    <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-600 dark:text-indigo-400">
                                                        Featured
                                                    </span>
                                                )}
                                            </div>
                                            {item.heading && (
                                                <span className="line-clamp-1 text-[11px] text-muted-foreground">
                                                    {item.heading}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <span className="text-[11px] font-medium opacity-70">
                                                {items.length}
                                            </span>
                                            <ChevronDown
                                                className={cn(
                                                    'size-4 transition-transform duration-200',
                                                    isOpen && 'rotate-180 text-primary',
                                                )}
                                            />
                                        </div>
                                    </button>

                                    {/* Collapsible Content */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.22,
                                                    ease: [0.16, 1, 0.3, 1],
                                                }}
                                                className="overflow-hidden border-t border-border/40"
                                            >
                                                <div className="space-y-2 bg-muted/20 p-3 dark:bg-zinc-950/40">
                                                    {items.map((subItem, catIdx) => {
                                                        const catKey = `${item.id}-${catIdx}`;
                                                        const isCatOpen =
                                                            openCategoryKey === catKey;
                                                        const hasChildren =
                                                            subItem.children &&
                                                            subItem.children.length > 0;

                                                        return (
                                                            <div
                                                                key={subItem.label}
                                                                className={cn(
                                                                    'overflow-hidden rounded-lg border transition-all duration-150',
                                                                    isCatOpen
                                                                        ? 'border-blue-500/30 bg-background shadow-xs dark:bg-zinc-900/90'
                                                                        : 'border-border/40 bg-background/60 hover:border-border hover:bg-background/90 dark:bg-zinc-900/40',
                                                                )}
                                                            >
                                                                {hasChildren ? (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() =>
                                                                            handleToggleCategory(
                                                                                catKey,
                                                                            )
                                                                        }
                                                                        aria-expanded={isCatOpen}
                                                                        className="flex w-full cursor-pointer items-start justify-between p-2.5 text-left"
                                                                    >
                                                                        <div className="min-w-0 flex-1">
                                                                            <div className="flex items-center gap-1.5">
                                                                                <span className="truncate text-xs font-semibold text-foreground">
                                                                                    {subItem.label}
                                                                                </span>
                                                                                {subItem.badge && (
                                                                                    <span className="shrink-0 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-600 dark:text-emerald-400">
                                                                                        {typeof subItem.badge ===
                                                                                        'string'
                                                                                            ? subItem.badge
                                                                                            : subItem.badge.text}
                                                                                    </span>
                                                                                )}
                                                                            </div>
                                                                            {subItem.description && (
                                                                                <p className="line-clamp-1 text-[11px] text-muted-foreground">
                                                                                    {subItem.description}
                                                                                </p>
                                                                            )}
                                                                        </div>

                                                                        <div className="flex items-center gap-1.5 pl-2 pt-0.5 text-muted-foreground">
                                                                            <span className="text-[10px] font-medium opacity-60">
                                                                                {
                                                                                    subItem
                                                                                        .children!
                                                                                        .length
                                                                                }
                                                                            </span>
                                                                            <ChevronDown
                                                                                className={cn(
                                                                                    'size-3.5 transition-transform duration-200',
                                                                                    isCatOpen &&
                                                                                        'rotate-180 text-blue-600 dark:text-blue-400',
                                                                                )}
                                                                            />
                                                                        </div>
                                                                    </button>
                                                                ) : (
                                                                    <NavLink
                                                                        href={subItem.href}
                                                                        external={subItem.external}
                                                                        onClick={() =>
                                                                            setMobileOpen(false)
                                                                        }
                                                                        className="flex w-full items-start justify-between p-2.5 text-left"
                                                                    >
                                                                        <div className="min-w-0 flex-1">
                                                                            <span className="truncate text-xs font-semibold text-foreground">
                                                                                {subItem.label}
                                                                            </span>
                                                                            {subItem.description && (
                                                                                <p className="line-clamp-1 text-[11px] text-muted-foreground">
                                                                                    {subItem.description}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                        <ChevronRight className="mt-0.5 size-3.5 text-muted-foreground" />
                                                                    </NavLink>
                                                                )}

                                                                {/* Sub-links (children) accordion */}
                                                                {hasChildren && (
                                                                    <AnimatePresence initial={false}>
                                                                        {isCatOpen && (
                                                                            <motion.div
                                                                                initial={{
                                                                                    height: 0,
                                                                                    opacity: 0,
                                                                                }}
                                                                                animate={{
                                                                                    height: 'auto',
                                                                                    opacity: 1,
                                                                                }}
                                                                                exit={{
                                                                                    height: 0,
                                                                                    opacity: 0,
                                                                                }}
                                                                                transition={{
                                                                                    duration: 0.18,
                                                                                    ease: 'easeOut',
                                                                                }}
                                                                                className="overflow-hidden border-t border-border/40 bg-muted/30 px-3 py-2 dark:bg-zinc-950/60"
                                                                            >
                                                                                <div className="grid grid-cols-1 gap-1">
                                                                                    {subItem.children!.map(
                                                                                        (child) => (
                                                                                            <NavLink
                                                                                                key={
                                                                                                    child.label
                                                                                                }
                                                                                                href={
                                                                                                    child.href
                                                                                                }
                                                                                                external={
                                                                                                    child.external
                                                                                                }
                                                                                                onClick={() =>
                                                                                                    setMobileOpen(
                                                                                                        false,
                                                                                                    )
                                                                                                }
                                                                                                className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:bg-background hover:text-blue-600 dark:hover:text-blue-400"
                                                                                            >
                                                                                                <span className="size-1.5 shrink-0 rounded-[1px] bg-blue-600 dark:bg-blue-400" />
                                                                                                <span className="flex-1 truncate">
                                                                                                    {
                                                                                                        child.label
                                                                                                    }
                                                                                                </span>
                                                                                                <ArrowRight className="size-3 text-muted-foreground/30 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                                                                                            </NavLink>
                                                                                        ),
                                                                                    )}
                                                                                </div>

                                                                                {subItem.note && (
                                                                                    <p className="mt-2 border-t border-border/30 px-1 pt-1.5 text-[10px] italic text-muted-foreground">
                                                                                        {subItem.note}
                                                                                    </p>
                                                                                )}

                                                                                <div className="mt-2 border-t border-border/30 pt-1.5">
                                                                                    <NavLink
                                                                                        href={subItem.href}
                                                                                        external={subItem.external}
                                                                                        onClick={() => setMobileOpen(false)}
                                                                                        className="flex items-center gap-1.5 px-1 text-[11px] font-semibold text-blue-600 hover:underline dark:text-blue-400"
                                                                                    >
                                                                                        <span>View {subItem.label}</span>
                                                                                        <ArrowRight className="size-3" />
                                                                                    </NavLink>
                                                                                </div>
                                                                            </motion.div>
                                                                        )}
                                                                    </AnimatePresence>
                                                                )}
                                                            </div>
                                                        );
                                                    })}

                                                    {/* Showcase Action Button */}
                                                    {showcaseActionLabels[item.id] && (
                                                        <div className="pt-1">
                                                            <NavLink
                                                                href={showcaseActionLabels[item.id].href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="flex items-center justify-between rounded-lg bg-blue-600/10 px-3.5 py-2.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-600/15 dark:bg-blue-500/10 dark:text-blue-400"
                                                            >
                                                                <span>{showcaseActionLabels[item.id].label}</span>
                                                                <ArrowRight className="size-3.5" />
                                                            </NavLink>
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        if (isDirectLink(item)) {
                            return (
                                <div
                                    key={item.id || item.label}
                                    className="overflow-hidden rounded-xl border border-border/60 bg-card/60 transition-all duration-200 hover:border-border hover:bg-card/90 dark:bg-zinc-900/40"
                                >
                                    <NavLink
                                        href={item.href}
                                        external={item.external}
                                        onClick={() => setMobileOpen(false)}
                                        className="group flex w-full items-center justify-between p-3.5 text-left"
                                    >
                                        <span className="text-sm font-semibold text-foreground">
                                            {item.label}
                                        </span>
                                        <ArrowRight className="size-4 text-muted-foreground/60 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary" />
                                    </NavLink>
                                </div>
                            );
                        }

                        return null;
                    })}
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
