import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import headerNavData from '@/data/header-navigation.json';
import { cn } from '@/lib/utils';
import type {
    NavDropdownMenu,
    NavMenuItem,
    NavSubItem,
} from '@/types/navigation';
import { isDirectLink, isDropdownMenu } from '@/types/navigation';
import { NavLink } from './nav-link';

export const headerNavItems = headerNavData as NavMenuItem[];

interface MegamenuShowcase {
    badge: {
        text: string;
        icon?: string;
    };
    title: string;
    description: string;
    highlightText?: string;
    cta: {
        label: string;
        href: string;
        external?: boolean;
    };
    stats?: {
        value: string;
        accent?: string;
        label: string;
    }[];
}

const megamenuShowcases: Record<string, MegamenuShowcase> = {
    ai: {
        badge: {
            text: 'AI-FIRST COMPANY',
        },
        title: 'Future-ready AI solutions for modern enterprises!',
        description:
            'From LLMs to generative AI, we build production-ready AI systems, fine-tuned for your industry, and designed to deliver measurable results —',
        highlightText: 'Free Consultation!',
        cta: {
            label: 'Talk to our AI Experts',
            href: '/#contact',
        },
        stats: [
            { value: '1800', accent: '+', label: 'PROJECTS' },
            { value: '20', accent: '+', label: 'YEARS EXPERIENCE' },
        ],
    },
    services: {
        badge: {
            text: 'ENGINEERING LAB',
        },
        title: 'Scalable cloud systems & high-performance software!',
        description:
            'From cloud-native microservices to enterprise mobile apps, we design resilient architectures engineered for continuous velocity —',
        highlightText: 'Sprint-Based Delivery!',
        cta: {
            label: 'Talk to our Architects',
            href: '/#contact',
        },
        stats: [
            { value: '99.99%', accent: '', label: 'UPTIME SLA' },
            { value: '150', accent: '+', label: 'GLOBAL CLIENTS' },
        ],
    },
    solutions: {
        badge: {
            text: 'ENTERPRISE BLUEPRINTS',
        },
        title: 'Transform legacy systems into high-speed cloud platforms!',
        description:
            'Proven delivery blueprints that cut infrastructure expenses by 32% and 4x deploy frequency with zero downtime —',
        highlightText: 'Measurable Outcomes!',
        cta: {
            label: 'Explore Case Studies',
            href: '/#case-studies',
        },
        stats: [
            { value: '4x', accent: '', label: 'DEPLOY FREQUENCY' },
            { value: '32%', accent: '', label: 'CLOUD SAVINGS' },
        ],
    },
    company: {
        badge: {
            text: "WE'RE HIRING",
        },
        title: 'Engineering the future of global software platforms!',
        description:
            'We are a high-ownership engineering culture solving complex distributed computing and AI automation challenges across the globe —',
        highlightText: 'Join Our Squad!',
        cta: {
            label: 'View Open Positions',
            href: '/#careers',
        },
        stats: [
            { value: '100%', accent: '', label: 'REMOTE CULTURE' },
            { value: '4', accent: '+', label: 'OPEN ROLES' },
        ],
    },
};

export function NavDropdownItemContent({
    item,
}: {
    item: NavSubItem;
    isGrid?: boolean;
}) {
    return (
        <NavLink
            href={item.href}
            external={item.external}
            className="flex w-full items-center gap-3"
        >
            <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-semibold">
                        {item.label}
                    </span>
                    {item.badge && (
                        <span className="shrink-0 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                            {typeof item.badge === 'string'
                                ? item.badge
                                : item.badge.text}
                        </span>
                    )}
                </div>
                {item.description && (
                    <div className="line-clamp-1 text-xs text-muted-foreground">
                        {item.description}
                    </div>
                )}
            </div>
        </NavLink>
    );
}

export interface DesktopNavProps {
    activeMenuId?: string | null;
    onOpenMenu?: (id: string) => void;
    onToggleMenu?: (id: string) => void;
    onCloseMenu?: () => void;
    onCancelClose?: () => void;
    onScheduleClose?: (delay?: number) => void;
}

export function DesktopNav({
    activeMenuId,
    onOpenMenu,
    onToggleMenu,
    onCancelClose,
    onScheduleClose,
}: DesktopNavProps) {
    return (
        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
            {headerNavItems.map((entry) => {
                if (isDropdownMenu(entry)) {
                    const isOpen = activeMenuId === entry.id;

                    return (
                        <div
                            key={entry.id || entry.label}
                            className="relative"
                            onMouseEnter={() => {
                                onCancelClose?.();
                                onOpenMenu?.(entry.id);
                            }}
                        >
                            <Button
                                variant="ghost"
                                type="button"
                                aria-expanded={isOpen}
                                aria-haspopup="true"
                                onClick={() => {
                                    onCancelClose?.();
                                    onToggleMenu?.(entry.id);
                                }}
                                className={cn(
                                    'gap-1 text-sm font-medium transition-colors cursor-pointer',
                                    isOpen && 'bg-accent text-accent-foreground',
                                    entry.featured &&
                                        'group/featured font-semibold text-primary',
                                )}
                            >
                                {entry.featured && (
                                    <sup>
                                        <img
                                            src="/ai-icon.svg"
                                            alt="AI"
                                            className="h-6 w-6"
                                        />
                                    </sup>
                                )}
                                <span
                                    className={cn(
                                        entry.featured &&
                                            'bg-gradient-to-r from-indigo-400 via-primary to-indigo-400 bg-clip-text text-transparent',
                                    )}
                                >
                                    {entry.label}
                                </span>
                                <ChevronDown
                                    className={cn(
                                        'size-3.5 opacity-60 transition-transform duration-200',
                                        isOpen && 'rotate-180 opacity-100 text-primary',
                                        entry.featured &&
                                            'text-primary opacity-80',
                                    )}
                                />
                            </Button>
                        </div>
                    );
                }

                if (isDirectLink(entry)) {
                    if (entry.featured) {
                        return (
                            <Button
                                key={entry.id || entry.label}
                                variant="ghost"
                                asChild
                                onMouseEnter={() => onScheduleClose?.(80)}
                                className="group/featured relative gap-1.5 text-sm font-semibold text-primary"
                            >
                                <NavLink
                                    href={entry.href}
                                    external={entry.external}
                                    className="!gap-[2px]"
                                >
                                    <sup>
                                        <img
                                            src="/ai-icon.svg"
                                            alt="AI"
                                            className="h-6 w-6"
                                        />
                                    </sup>
                                    <span className="bg-gradient-to-r from-indigo-400 via-primary to-indigo-400 bg-clip-text text-transparent">
                                        {entry.label}
                                    </span>
                                </NavLink>
                            </Button>
                        );
                    }

                    return (
                        <Button
                            key={entry.id || entry.label}
                            variant="ghost"
                            asChild
                            onMouseEnter={() => onScheduleClose?.(80)}
                            className="text-sm font-medium cursor-pointer"
                        >
                            <NavLink
                                href={entry.href}
                                external={entry.external}
                            >
                                {entry.label}
                            </NavLink>
                        </Button>
                    );
                }

                return null;
            })}
        </nav>
    );
}

export interface MegamenuContainerProps {
    activeMenuId: string | null;
    onClose: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export function MegamenuContainer({
    activeMenuId,
    onClose,
    onMouseEnter,
    onMouseLeave,
}: MegamenuContainerProps) {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    // Reset selected category whenever active menu changes
    useEffect(() => {
        setActiveCategoryIndex(0);
    }, [activeMenuId]);

    if (!activeMenuId) {
        return null;
    }

    const currentMenu = headerNavItems.find(
        (item) => item.id === activeMenuId && isDropdownMenu(item),
    ) as NavDropdownMenu | undefined;

    if (!currentMenu) {
        return null;
    }

    const showcase = megamenuShowcases[currentMenu.id] || {
        badge: {
            text: 'AI-FIRST COMPANY',
        },
        title: currentMenu.heading || 'Future-ready digital solutions!',
        description:
            'Engineered solutions designed for high performance, enterprise security, and measurable outcomes —',
        highlightText: 'Free Consultation!',
        cta: {
            label: 'Talk to our Experts',
            href: '/#contact',
        },
        stats: [
            { value: '1800', accent: '+', label: 'PROJECTS' },
            { value: '20', accent: '+', label: 'YEARS EXPERIENCE' },
        ],
    };

    const safeCategoryIndex =
        activeCategoryIndex >= 0 &&
        activeCategoryIndex < currentMenu.items.length
            ? activeCategoryIndex
            : 0;
    const activeCategory = currentMenu.items[safeCategoryIndex];

    const subLinks =
        activeCategory?.children && activeCategory.children.length > 0
            ? activeCategory.children
            : [
                  {
                      label: activeCategory?.label || '',
                      href: activeCategory?.href || '#',
                  },
              ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -16, scaleY: 0.9, scaleX: 0.99 }}
            animate={{ opacity: 1, y: 0, scaleY: 1, scaleX: 1 }}
            exit={{
                opacity: 0,
                y: -12,
                scaleY: 0.94,
                transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
            }}
            transition={{
                duration: 0.28,
                ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: 'top center' }}
            className="absolute left-0 right-0 top-full z-50 pointer-events-auto"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden rounded-b-2xl border-x border-b border-border/80 bg-background/98 shadow-2xl backdrop-blur-2xl ring-1 ring-black/5 dark:border-zinc-800/80 dark:bg-zinc-950/98 dark:ring-white/10">
                    <motion.div
                        key={activeMenuId}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        className="p-6 lg:p-8"
                    >
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
                            {/* Left Category Column */}
                            <div className="lg:col-span-3">
                                <div className="mb-3 px-1">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                        {currentMenu.label}
                                    </span>
                                </div>
                                <div className="space-y-1">
                                    {currentMenu.items.map((subItem, idx) => {
                                        const isActive =
                                            safeCategoryIndex === idx;
                                        return (
                                            <button
                                                key={subItem.label}
                                                type="button"
                                                onMouseEnter={() =>
                                                    setActiveCategoryIndex(idx)
                                                }
                                                onClick={() =>
                                                    setActiveCategoryIndex(idx)
                                                }
                                                className={cn(
                                                    'group flex w-full cursor-pointer items-center justify-between rounded-md px-3.5 py-2.5 text-left text-sm transition-all duration-150',
                                                    isActive
                                                        ? 'border-l-2 border-blue-600 bg-blue-50/80 font-semibold text-blue-600 dark:border-blue-500 dark:bg-blue-950/40 dark:text-blue-400'
                                                        : 'border-l-2 border-transparent font-medium text-slate-700 hover:bg-slate-100/70 dark:text-slate-300 dark:hover:bg-zinc-900/60',
                                                )}
                                            >
                                                <span className="truncate">
                                                    {subItem.label}
                                                </span>
                                                <ChevronRight
                                                    className={cn(
                                                        'size-3.5 shrink-0 transition-transform duration-150',
                                                        isActive
                                                            ? 'text-blue-600 dark:text-blue-400 translate-x-0.5'
                                                            : 'text-slate-400 group-hover:text-slate-600 dark:text-zinc-500',
                                                    )}
                                                />
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Middle Content Column */}
                            <div className="flex flex-col justify-between lg:col-span-5 xl:col-span-5">
                                <div>
                                    <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-2.5">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                                            {activeCategory?.label}
                                        </span>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${currentMenu.id}-${safeCategoryIndex}`}
                                            initial={{ opacity: 0, x: -4 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 4 }}
                                            transition={{ duration: 0.15 }}
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5"
                                        >
                                            {subLinks.map((child) => (
                                                <NavLink
                                                    key={child.label}
                                                    href={child.href}
                                                    external={child.external}
                                                    onClick={onClose}
                                                    className="group flex items-start gap-2.5 py-0.5 text-sm font-medium text-slate-800 transition-colors hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                                                >
                                                    <span className="size-1.5 shrink-0 rounded-[1px] bg-blue-600 dark:bg-blue-400 mt-2 transition-transform duration-150 group-hover:scale-125" />
                                                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                                                        {child.label}
                                                    </span>
                                                </NavLink>
                                            ))}
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Bottom category callout note */}
                                <div className="mt-8 border-t border-border/50 pt-4">
                                    {activeCategory?.note ? (
                                        activeCategory.note.includes('?') ? (
                                            <p className="text-xs text-muted-foreground">
                                                <span className="font-semibold text-slate-800 dark:text-slate-200">
                                                    {
                                                        activeCategory.note.split(
                                                            '?',
                                                        )[0]
                                                    }
                                                    ?
                                                </span>{' '}
                                                <span>
                                                    {activeCategory.note
                                                        .split('?')
                                                        .slice(1)
                                                        .join('?')
                                                        .trim()}
                                                </span>
                                            </p>
                                        ) : (
                                            <p className="text-xs text-muted-foreground">
                                                {activeCategory.note}
                                            </p>
                                        )
                                    ) : currentMenu.heading ? (
                                        <p className="text-xs text-muted-foreground">
                                            {currentMenu.heading}
                                        </p>
                                    ) : null}
                                </div>
                            </div>

                            {/* Right Showcase Column */}
                            <div className="lg:col-span-4 xl:col-span-4">
                                <div className="flex h-full flex-col justify-between rounded-xl bg-[#071936] p-6 lg:p-7 text-white shadow-xl dark:bg-[#06152d] border border-blue-900/30">
                                    <div>
                                        <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-400">
                                            <span>✦</span>
                                            <span>{showcase.badge.text}</span>
                                        </div>
                                        <h3 className="mt-3.5 font-funnel text-xl font-bold leading-snug text-white">
                                            {showcase.title}
                                        </h3>
                                        <p className="mt-3 text-xs leading-relaxed text-slate-300">
                                            {showcase.description}{' '}
                                            {showcase.highlightText && (
                                                <span className="font-semibold text-white">
                                                    {showcase.highlightText}
                                                </span>
                                            )}
                                        </p>
                                    </div>

                                    <div>
                                        {showcase.stats &&
                                            showcase.stats.length > 0 && (
                                                <div className="mt-6 mb-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-4">
                                                    {showcase.stats.map(
                                                        (stat) => (
                                                            <div
                                                                key={stat.label}
                                                            >
                                                                <div className="text-xl font-bold tracking-tight text-white">
                                                                    {stat.value}
                                                                    {stat.accent && (
                                                                        <span className="ml-1 font-bold text-blue-400">
                                                                            {
                                                                                stat.accent
                                                                            }
                                                                        </span>
                                                                    )}
                                                                </div>
                                                                <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                                                                    {stat.label}
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            )}

                                        <NavLink
                                            href={showcase.cta.href}
                                            external={showcase.cta.external}
                                            onClick={onClose}
                                            className="group/cta flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/25 transition-all duration-200 hover:bg-blue-500 active:scale-[0.99]"
                                        >
                                            <span>{showcase.cta.label}</span>
                                            <ArrowRight className="size-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom Quick Links Strip */}
                    <div className="flex flex-col items-center justify-between gap-3 border-t border-border/50 bg-muted/30 px-6 py-3.5 text-xs text-muted-foreground dark:bg-zinc-900/40 sm:flex-row lg:px-8">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-foreground">
                                PixelsFort
                            </span>
                            <span className="hidden text-border sm:inline">
                                •
                            </span>
                            <span className="hidden sm:inline">
                                Engineering resilient digital products for global scale.
                            </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                            <NavLink
                                href="/#contact"
                                onClick={onClose}
                                className="flex items-center gap-1 font-semibold text-foreground transition-colors hover:text-primary"
                            >
                                <span>Talk to an Architect</span>
                                <ArrowRight className="size-3" />
                            </NavLink>
                            <span className="hidden h-3 w-px bg-border sm:block" />
                            <NavLink
                                href="/blog"
                                onClick={onClose}
                                className="transition-colors hover:text-foreground"
                            >
                                Engineering Blog
                            </NavLink>
                            <span className="hidden h-3 w-px bg-border sm:block" />
                            <NavLink
                                href="/#tech-stack"
                                onClick={onClose}
                                className="transition-colors hover:text-foreground"
                            >
                                Tech Stack
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Backwards-compatible exports
export function NavDropdown({ menu }: { menu: NavDropdownMenu }) {
    return (
        <div className="relative">
            <Button variant="ghost" className="gap-1 text-sm font-medium cursor-pointer">
                {menu.label}
                <ChevronDown className="size-3.5 opacity-60" />
            </Button>
        </div>
    );
}

export function ServicesDropdown() {
    const services = headerNavItems.find(
        (item) => isDropdownMenu(item) && item.id === 'services',
    ) as NavDropdownMenu | undefined;

    return services ? <NavDropdown menu={services} /> : null;
}

export function SolutionsDropdown() {
    const solutions = headerNavItems.find(
        (item) => isDropdownMenu(item) && item.id === 'solutions',
    ) as NavDropdownMenu | undefined;

    return solutions ? <NavDropdown menu={solutions} /> : null;
}

export function CompanyDropdown() {
    const company = headerNavItems.find(
        (item) => isDropdownMenu(item) && item.id === 'company',
    ) as NavDropdownMenu | undefined;

    return company ? <NavDropdown menu={company} /> : null;
}
