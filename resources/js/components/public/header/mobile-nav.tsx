import { Link } from '@inertiajs/react';
import { ArrowRight, Code2, LayoutGrid, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
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

export function MobileNav({ auth, mobileOpen, setMobileOpen }: MobileNavProps) {
    const dropdownMenus = headerNavItems.filter(
        (item): item is NavDropdownMenu =>
            isDropdownMenu(item) && item.showOnMobile !== false,
    );

    const directLinks = headerNavItems.filter(
        (item): item is NavDirectLink =>
            isDirectLink(item) && item.showOnMobile !== false,
    );

    return (
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Toggle navigation menu"
                >
                    <Menu className="size-5" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0 sm:w-[350px]">
                <SheetHeader className="border-b border-border/50 p-4 text-left">
                    <SheetTitle className="flex items-center gap-2">
                        <div className="flex size-8 items-center justify-center bg-primary text-primary-foreground">
                            <Code2 className="size-4" />
                        </div>
                        <span className="text-lg font-bold">PixelsFort</span>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 overflow-y-auto p-5">
                    {/* Dynamic Sections from Dropdowns */}
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
                                <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                    {menu.label}
                                </div>
                                <div className="grid grid-cols-1 gap-1 text-sm font-medium">
                                    {items.map((subItem) => (
                                        <NavLink
                                            key={subItem.label}
                                            href={subItem.href}
                                            external={subItem.external}
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-2.5 rounded-md p-2 transition-colors hover:bg-accent"
                                        >
                                            {subItem.icon && (
                                                <NavIcon
                                                    name={subItem.icon}
                                                    className={cn(
                                                        'size-4 shrink-0',
                                                        subItem.iconColor ||
                                                            'text-primary',
                                                    )}
                                                />
                                            )}
                                            <span className="flex-1 truncate">
                                                {subItem.label}
                                            </span>
                                            {subItem.badge && (
                                                <span className="bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                                                    {typeof subItem.badge ===
                                                    'string'
                                                        ? subItem.badge
                                                        : subItem.badge.text}
                                                </span>
                                            )}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {/* Direct Links Section */}
                    {directLinks.length > 0 && (
                        <div className="space-y-3">
                            <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                Quick Links
                            </div>
                            <div className="grid grid-cols-1 gap-1 text-sm font-medium">
                                {directLinks.map((link) => (
                                    <NavLink
                                        key={link.id || link.label}
                                        href={link.href}
                                        external={link.external}
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-2.5 rounded-md p-2 transition-colors hover:bg-accent"
                                    >
                                        {link.icon && (
                                            <NavIcon
                                                name={link.icon}
                                                className={cn(
                                                    'size-4 shrink-0',
                                                    link.iconColor ||
                                                        'text-primary',
                                                )}
                                            />
                                        )}
                                        <span className="flex-1 truncate">
                                            {link.label}
                                        </span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Header Action Buttons */}
                    <div className="mt-auto flex flex-col gap-2 border-t border-border/50 pt-4">
                        {auth.user && (
                            <Button asChild variant="outline" className="w-full">
                                <Link
                                    href={dashboard.url()}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <LayoutGrid className="mr-2 size-4" />
                                    Go to Dashboard
                                </Link>
                            </Button>
                        )}
                        <Button
                            asChild
                            className="group relative w-full overflow-hidden bg-gradient-to-r from-primary via-indigo-600 to-blue-600 text-white shadow-md transition-all hover:shadow-indigo-500/25"
                        >
                            <a
                                href="#contact"
                                onClick={() => setMobileOpen(false)}
                            >
                                <span>Contact Us</span>
                                <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
