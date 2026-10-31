import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

export function NavDropdown({ menu }: { menu: NavDropdownMenu }) {
    const isGrid = menu.columns === 2 || menu.layout === 'grid';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-sm font-medium">
                    {menu.label}
                    <ChevronDown className="size-3.5 opacity-60" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="start"
                className={cn(
                    menu.dropdownWidth || (isGrid ? 'w-[540px]' : 'w-[360px]'),
                    isGrid ? 'p-4' : 'p-3',
                    'shadow-xl',
                )}
            >
                {menu.heading && (
                    <div className="mb-2 px-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        {menu.heading}
                    </div>
                )}
                <div
                    className={
                        isGrid ? 'grid grid-cols-2 gap-2' : 'space-y-1'
                    }
                >
                    {menu.items.map((subItem) => (
                        <DropdownMenuItem
                            key={subItem.label}
                            asChild
                            className={cn(
                                'cursor-pointer hover:bg-accent',
                                isGrid ? 'p-2.5' : 'p-2',
                            )}
                        >
                            <NavDropdownItemContent
                                item={subItem}
                                isGrid={isGrid}
                            />
                        </DropdownMenuItem>
                    ))}
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export function DesktopNav() {
    return (
        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
            {headerNavItems.map((entry) => {
                if (isDropdownMenu(entry)) {
                    return (
                        <NavDropdown
                            key={entry.id || entry.label}
                            menu={entry}
                        />
                    );
                }

                if (isDirectLink(entry)) {
                    return (
                        <Button
                            key={entry.id || entry.label}
                            variant="ghost"
                            asChild
                            className="text-sm font-medium"
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

// Backwards-compatible exports
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
