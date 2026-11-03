import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import headerNavData from '@/data/header-navigation.json';
import { cn } from '@/lib/utils';
import type {
    NavDropdownMenu,
    NavMenuItem,
    NavSubItem,
} from '@/types/navigation';
import { isDirectLink, isDropdownMenu } from '@/types/navigation';
import { NavIcon } from './nav-icon';
import { NavLink } from './nav-link';

export const headerNavItems = headerNavData as NavMenuItem[];

interface MegamenuShowcase {
    badge: {
        text: string;
        icon?: string;
        className?: string;
    };
    title: string;
    description: string;
    cta: {
        label: string;
        href: string;
        external?: boolean;
    };
    stats?: {
        label: string;
    }[];
    note?: string;
    gradientClass?: string;
}

const megamenuShowcases: Record<string, MegamenuShowcase> = {
    ai: {
        badge: {
            text: 'AI & Automation Lab',
            icon: 'Sparkles',
            className:
                'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/25',
        },
        title: 'Custom AI & Intelligent Automation',
        description:
            'Deploy production-ready LLMs, autonomous agent workflows, and predictive data pipelines engineered for enterprise scale.',
        cta: {
            label: 'Explore AI Engineering',
            href: '/#contact',
        },
        stats: [
            { label: 'Autonomous Agents' },
            { label: 'Custom RAG & LLMs' },
        ],
        note: 'Accelerate enterprise operations with custom AI systems',
        gradientClass:
            'from-purple-500/10 via-primary/5 to-muted/40 border-purple-500/25 dark:from-purple-950/30 dark:via-zinc-900/60 dark:to-zinc-950',
    },
    services: {
        badge: {
            text: 'Architecture & AI Lab',
            icon: 'Sparkles',
            className: 'bg-primary/10 text-primary border-primary/25',
        },
        title: 'Custom AI & Scalable Cloud Systems',
        description:
            'Deploy production-grade LLM workflows, microservice backends, and self-hosted automation infrastructure with enterprise SLA.',
        cta: {
            label: 'Explore AI Engineering',
            href: '/ai-and-automation',
        },
        stats: [
            { label: '99.99% Uptime SLA' },
            { label: 'Enterprise Security' },
        ],
        note: 'Fast-track product velocity with dedicated senior squads',
        gradientClass:
            'from-primary/10 via-primary/5 to-muted/40 border-primary/25 dark:from-primary/15 dark:via-zinc-900/60 dark:to-zinc-950',
    },
    solutions: {
        badge: {
            text: 'Enterprise Delivery',
            icon: 'Building2',
            className:
                'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25',
        },
        title: 'Legacy to Modern Cloud Native',
        description:
            'See how enterprise clients achieved 99.99% reliability and reduced infrastructure costs by 32% with our modernization framework.',
        cta: {
            label: 'View Case Studies & Metrics',
            href: '/#case-studies',
        },
        stats: [
            { label: '4x Deploy Velocity' },
            { label: '32% Cloud Savings' },
        ],
        note: 'Proven delivery framework for mission-critical systems',
        gradientClass:
            'from-blue-500/10 via-blue-500/5 to-muted/40 border-blue-500/25 dark:from-blue-950/30 dark:via-zinc-900/60 dark:to-zinc-950',
    },
    company: {
        badge: {
            text: "We're Hiring",
            className:
                'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
        },
        title: 'Build the Future of Software',
        description:
            'We are an engineering-driven culture solving complex distributed computing and AI automation challenges across the globe.',
        cta: {
            label: 'View Open Roles (4 Positions)',
            href: '/#careers',
        },
        stats: [
            { label: 'Remote-First Team' },
            { label: 'High Ownership Culture' },
        ],
        note: 'Join our senior engineering team worldwide',
        gradientClass:
            'from-emerald-500/10 via-emerald-500/5 to-muted/40 border-emerald-500/25 dark:from-emerald-950/30 dark:via-zinc-900/60 dark:to-zinc-950',
    },
};

export function NavDropdownItemContent({
    item,
    isGrid,
}: {
    item: NavSubItem;
    isGrid?: boolean;
}) {
    return (
        <NavLink
            href={item.href}
            external={item.external}
            className={cn(
                'flex w-full gap-3',
                isGrid ? 'items-start' : 'items-center',
            )}
        >
            {item.iconBg ? (
                <div
                    className={cn(
                        'shrink-0 p-2',
                        item.iconBg,
                        item.iconColor,
                    )}
                >
                    <NavIcon name={item.icon} className="size-4" />
                </div>
            ) : item.icon ? (
                <NavIcon
                    name={item.icon}
                    className={cn(
                        'size-4 shrink-0',
                        item.iconColor || 'text-primary',
                    )}
                />
            ) : null}
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
            text: 'Featured',
            icon: 'Sparkles',
            className: 'bg-primary/10 text-primary border-primary/25',
        },
        title: currentMenu.heading || 'Explore Capabilities',
        description:
            'Engineered solutions designed for high performance, security, and enterprise growth.',
        cta: {
            label: 'Get in Touch',
            href: '/#contact',
        },
        note: 'Custom development & consulting services',
        gradientClass:
            'from-primary/10 via-background to-muted/40 border-primary/20',
    };

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
                            {/* Main Section */}
                            <div className="lg:col-span-8 xl:col-span-9">
                                <div className="mb-4 flex items-center justify-between border-b border-border/40 pb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                                            {currentMenu.label}
                                        </span>
                                        {currentMenu.heading && (
                                            <>
                                                <span className="h-1 w-1 rounded-full bg-border" />
                                                <span className="text-xs text-muted-foreground">
                                                    {currentMenu.heading}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div
                                    className={cn(
                                        'grid gap-3',
                                        currentMenu.id === 'solutions'
                                            ? 'grid-cols-1 md:grid-cols-2'
                                            : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
                                    )}
                                >
                                    {currentMenu.items.map((subItem) => (
                                        <NavLink
                                            key={subItem.label}
                                            href={subItem.href}
                                            external={subItem.external}
                                            onClick={onClose}
                                            className="group/card flex items-start gap-3 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-border/60 hover:bg-muted/50 dark:hover:bg-zinc-900/60"
                                        >
                                            {subItem.iconBg ? (
                                                <div
                                                    className={cn(
                                                        'shrink-0 rounded-lg p-2.5 transition-transform duration-200 group-hover/card:scale-105',
                                                        subItem.iconBg,
                                                        subItem.iconColor,
                                                    )}
                                                >
                                                    <NavIcon
                                                        name={subItem.icon}
                                                        className="size-4"
                                                    />
                                                </div>
                                            ) : subItem.icon ? (
                                                <div className="shrink-0 rounded-lg bg-primary/10 p-2.5 text-primary transition-transform duration-200 group-hover/card:scale-105">
                                                    <NavIcon
                                                        name={subItem.icon}
                                                        className={cn(
                                                            'size-4',
                                                            subItem.iconColor ||
                                                                'text-primary',
                                                        )}
                                                    />
                                                </div>
                                            ) : null}
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between gap-1.5">
                                                    <span className="text-sm font-semibold text-foreground transition-colors group-hover/card:text-primary">
                                                        {subItem.label}
                                                    </span>
                                                    <div className="flex items-center gap-1.5">
                                                        {subItem.badge && (
                                                            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                                                                {typeof subItem.badge ===
                                                                'string'
                                                                    ? subItem.badge
                                                                    : subItem
                                                                          .badge
                                                                          .text}
                                                            </span>
                                                        )}
                                                        <ArrowRight className="size-3.5 -translate-x-1 text-muted-foreground opacity-0 transition-all duration-200 group-hover/card:translate-x-0 group-hover/card:text-primary group-hover/card:opacity-100" />
                                                    </div>
                                                </div>
                                                {subItem.description && (
                                                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                                                        {subItem.description}
                                                    </p>
                                                )}
                                            </div>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>

                            {/* Right Featured Showcase Card */}
                            <div className="lg:col-span-4 xl:col-span-3">
                                <div
                                    className={cn(
                                        'flex h-full flex-col justify-between rounded-xl border p-5 transition-all duration-300',
                                        showcase.gradientClass,
                                    )}
                                >
                                    <div className="space-y-3">
                                        <div
                                            className={cn(
                                                'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold',
                                                showcase.badge.className,
                                            )}
                                        >
                                            {currentMenu.id === 'company' ? (
                                                <span className="relative flex size-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                                                </span>
                                            ) : showcase.badge.icon ? (
                                                <NavIcon
                                                    name={showcase.badge.icon}
                                                    className="size-3"
                                                />
                                            ) : null}
                                            {showcase.badge.text}
                                        </div>
                                        <h4 className="font-funnel text-base font-semibold text-foreground">
                                            {showcase.title}
                                        </h4>
                                        <p className="text-xs leading-relaxed text-muted-foreground">
                                            {showcase.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 space-y-3 border-t border-border/50 pt-4">
                                        <NavLink
                                            href={showcase.cta.href}
                                            external={showcase.cta.external}
                                            onClick={onClose}
                                            className="group/cta flex items-center justify-between text-xs font-semibold text-primary hover:underline"
                                        >
                                            <span>{showcase.cta.label}</span>
                                            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover/cta:translate-x-1" />
                                        </NavLink>
                                        {showcase.stats &&
                                            showcase.stats.length > 0 && (
                                                <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                                                    {showcase.stats.map(
                                                        (stat, idx) => (
                                                            <span
                                                                key={stat.label}
                                                                className="flex items-center gap-2"
                                                            >
                                                                {idx > 0 && (
                                                                    <span>
                                                                        •
                                                                    </span>
                                                                )}
                                                                <span>
                                                                    {stat.label}
                                                                </span>
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            )}
                                        {showcase.note && (
                                            <div className="text-[11px] text-muted-foreground/80">
                                                {showcase.note}
                                            </div>
                                        )}
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
