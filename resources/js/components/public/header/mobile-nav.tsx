import { Link } from '@inertiajs/react';
import {
    Menu,
    Code2,
    Smartphone,
    Cloud,
    Cpu,
    Building2,
    Users,
    FileText,
    Sparkles,
    LayoutGrid,
    BookOpen,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { about, blog, dashboard, login, register } from '@/routes';
import type { Auth } from '@/types';

interface MobileNavProps {
    auth: Auth;
    mobileOpen: boolean;
    setMobileOpen: (open: boolean) => void;
}

export function MobileNav({ auth, mobileOpen, setMobileOpen }: MobileNavProps) {
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
                    {/* Mobile Nav Sections */}
                    <div className="space-y-3">
                        <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Services
                        </div>
                        <div className="grid grid-cols-1 gap-1 text-sm font-medium">
                            <a
                                href="#services-software"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 hover:bg-accent"
                            >
                                <Code2 className="size-4 text-primary" />
                                Custom Software
                            </a>
                            <a
                                href="#services-mobile"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 hover:bg-accent"
                            >
                                <Smartphone className="size-4 text-blue-500" />
                                Mobile Apps
                            </a>
                            <a
                                href="#services-cloud"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 hover:bg-accent"
                            >
                                <Cloud className="size-4 text-indigo-500" />
                                Cloud & DevOps
                            </a>
                            <a
                                href="#services-ai"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 hover:bg-accent"
                            >
                                <Cpu className="size-4 text-purple-500" />
                                AI & Automation
                            </a>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            Solutions & Company
                        </div>
                        <div className="grid grid-cols-1 gap-1 text-sm font-medium">
                            <a
                                href="#solutions-enterprise"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 hover:bg-accent"
                            >
                                <Building2 className="size-4 text-primary" />
                                Enterprise Modernization
                            </a>
                            <Link
                                href={about.url()}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 hover:bg-accent"
                            >
                                <Users className="size-4 text-primary" />
                                About PixelsFort
                            </Link>
                            <Link
                                href={blog.url()}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 hover:bg-accent"
                            >
                                <BookOpen className="size-4 text-primary" />
                                Blog & Tech Insights
                            </Link>
                            <a
                                href="#case-studies"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 hover:bg-accent"
                            >
                                <FileText className="size-4 text-primary" />
                                Case Studies
                            </a>
                            <a
                                href="#pricing"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2.5 p-2 hover:bg-accent"
                            >
                                <Sparkles className="size-4 text-primary" />
                                Pricing Plans
                            </a>
                        </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-2 border-t border-border/50 pt-4">
                        {auth.user ? (
                            <Button asChild className="w-full">
                                <Link
                                    href={dashboard.url()}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <LayoutGrid className="mr-2 size-4" />
                                    Go to Dashboard
                                </Link>
                            </Button>
                        ) : (
                            <>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full"
                                >
                                    <Link
                                        href={login.url()}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Log in
                                    </Link>
                                </Button>
                                <Button asChild className="w-full bg-primary">
                                    <Link
                                        href={register.url()}
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        Get Started
                                    </Link>
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
