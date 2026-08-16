import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import {
    ChevronDown,
    Menu,
    X,
    Sun,
    Moon,
    Code2,
    Smartphone,
    Cloud,
    Cpu,
    ShieldCheck,
    Palette,
    Building2,
    Rocket,
    ShoppingCart,
    RefreshCw,
    Users,
    FileText,
    Layers,
    Briefcase,
    LayoutGrid,
    ArrowRight,
    Sparkles,
    PhoneCall,
} from 'lucide-react';
import { dashboard, login, register, home } from '@/routes';
import type { Auth } from '@/types';
import { useAppearance } from '@/hooks/use-appearance';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
            {/* Top Announcement Bar */}
            <div className="hidden border-b border-border/40 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 py-1.5 text-xs text-muted-foreground sm:block">
                <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-medium text-primary dark:text-primary">
                            <Sparkles className="size-3" />
                            Next-Gen IT
                        </span>
                        <span>
                            Enterprise Cloud Solutions & Custom Software
                            Architecture
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="flex items-center gap-1 font-medium transition-colors hover:text-foreground"
                        >
                            <PhoneCall className="size-3" />
                            +1 (800) 555-PIXEL
                        </a>
                        <span className="text-border">|</span>
                        <a
                            href="#quote"
                            className="font-medium text-primary hover:underline"
                        >
                            Request Tech Consultation &rarr;
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header Nav */}
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Brand Logo */}
                <Link
                    href={home.url()}
                    className="group flex items-center gap-3"
                >
                    <div className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-indigo-600 to-blue-500 shadow-md transition-transform duration-300 group-hover:scale-105">
                        <div className="grid grid-cols-2 gap-1 p-1">
                            <span className="size-2 rounded-xs bg-white" />
                            <span className="size-2 rounded-xs bg-white/70" />
                            <span className="size-2 rounded-xs bg-white/70" />
                            <span className="size-2 rounded-xs bg-white" />
                        </div>
                        <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 ring-inset" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl leading-tight font-bold tracking-tight text-foreground">
                            Pixels
                            <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                                Fort
                            </span>
                        </span>
                        <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                            IT Solutions & Services
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation Links */}
                <nav className="hidden items-center gap-1 md:flex lg:gap-2">
                    {/* Services Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="gap-1 text-sm font-medium"
                            >
                                Services
                                <ChevronDown className="size-3.5 opacity-60" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="start"
                            className="w-[540px] p-4 shadow-xl"
                        >
                            <div className="mb-2 px-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                Our Core Engineering Capabilities
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2.5 hover:bg-accent"
                                >
                                    <a
                                        href="#services-software"
                                        className="flex items-start gap-3"
                                    >
                                        <div className="rounded-md bg-primary/10 p-2 text-primary">
                                            <Code2 className="size-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">
                                                Custom Software
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Web apps & API systems
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2.5 hover:bg-accent"
                                >
                                    <a
                                        href="#services-mobile"
                                        className="flex items-start gap-3"
                                    >
                                        <div className="rounded-md bg-blue-500/10 p-2 text-blue-600 dark:text-blue-400">
                                            <Smartphone className="size-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">
                                                Mobile Apps
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                iOS & Android solutions
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2.5 hover:bg-accent"
                                >
                                    <a
                                        href="#services-cloud"
                                        className="flex items-start gap-3"
                                    >
                                        <div className="rounded-md bg-indigo-500/10 p-2 text-indigo-600 dark:text-indigo-400">
                                            <Cloud className="size-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">
                                                Cloud & DevOps
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                AWS, Azure & CI/CD
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2.5 hover:bg-accent"
                                >
                                    <a
                                        href="#services-ai"
                                        className="flex items-start gap-3"
                                    >
                                        <div className="rounded-md bg-purple-500/10 p-2 text-purple-600 dark:text-purple-400">
                                            <Cpu className="size-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">
                                                AI & Automation
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                LLMs & Machine learning
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2.5 hover:bg-accent"
                                >
                                    <a
                                        href="#services-security"
                                        className="flex items-start gap-3"
                                    >
                                        <div className="rounded-md bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                                            <ShieldCheck className="size-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">
                                                Cybersecurity
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Security audits & defense
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2.5 hover:bg-accent"
                                >
                                    <a
                                        href="#services-design"
                                        className="flex items-start gap-3"
                                    >
                                        <div className="rounded-md bg-rose-500/10 p-2 text-rose-600 dark:text-rose-400">
                                            <Palette className="size-4" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">
                                                UI/UX Design
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Design systems & interfaces
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Solutions Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="gap-1 text-sm font-medium"
                            >
                                Solutions
                                <ChevronDown className="size-3.5 opacity-60" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="start"
                            className="w-[420px] p-3 shadow-xl"
                        >
                            <div className="mb-2 px-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                Industry Solutions
                            </div>
                            <div className="space-y-1">
                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                                >
                                    <a
                                        href="#solutions-enterprise"
                                        className="flex items-center gap-3"
                                    >
                                        <Building2 className="size-4 text-primary" />
                                        <div>
                                            <div className="text-sm font-semibold">
                                                Enterprise IT Modernization
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Scale legacy architecture to
                                                cloud native
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                                >
                                    <a
                                        href="#solutions-saas"
                                        className="flex items-center gap-3"
                                    >
                                        <Rocket className="size-4 text-primary" />
                                        <div>
                                            <div className="text-sm font-semibold">
                                                SaaS Acceleration
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Rapid MVP to enterprise ready
                                                multi-tenant apps
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                                >
                                    <a
                                        href="#solutions-ecommerce"
                                        className="flex items-center gap-3"
                                    >
                                        <ShoppingCart className="size-4 text-primary" />
                                        <div>
                                            <div className="text-sm font-semibold">
                                                High-Scale Digital Commerce
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                Headless commerce & payment
                                                infrastructure
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                    asChild
                                    className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                                >
                                    <a
                                        href="#solutions-migration"
                                        className="flex items-center gap-3"
                                    >
                                        <RefreshCw className="size-4 text-primary" />
                                        <div>
                                            <div className="text-sm font-semibold">
                                                Digital Transformation
                                            </div>
                                            <div className="text-xs text-muted-foreground">
                                                End-to-end IT process automation
                                            </div>
                                        </div>
                                    </a>
                                </DropdownMenuItem>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Company Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="gap-1 text-sm font-medium"
                            >
                                Company
                                <ChevronDown className="size-3.5 opacity-60" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            align="start"
                            className="w-[360px] p-3 shadow-xl"
                        >
                            <DropdownMenuItem
                                asChild
                                className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                            >
                                <a
                                    href="#about"
                                    className="flex items-center gap-3"
                                >
                                    <Users className="size-4 text-primary" />
                                    <div>
                                        <div className="text-sm font-semibold">
                                            About PixelsFort
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Our story, team & global vision
                                        </div>
                                    </div>
                                </a>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                asChild
                                className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                            >
                                <a
                                    href="#case-studies"
                                    className="flex items-center gap-3"
                                >
                                    <FileText className="size-4 text-primary" />
                                    <div>
                                        <div className="text-sm font-semibold">
                                            Case Studies
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            See how we transformed client tech
                                        </div>
                                    </div>
                                </a>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                asChild
                                className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                            >
                                <a
                                    href="#tech-stack"
                                    className="flex items-center gap-3"
                                >
                                    <Layers className="size-4 text-primary" />
                                    <div>
                                        <div className="text-sm font-semibold">
                                            Engineering Culture
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Our tech stack & development
                                            standards
                                        </div>
                                    </div>
                                </a>
                            </DropdownMenuItem>

                            <DropdownMenuItem
                                asChild
                                className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                            >
                                <a
                                    href="#careers"
                                    className="flex items-center gap-3"
                                >
                                    <Briefcase className="size-4 text-primary" />
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold">
                                                Careers
                                            </span>
                                            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
                                                We're Hiring
                                            </span>
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            Join our high-performing team
                                        </div>
                                    </div>
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button
                        variant="ghost"
                        asChild
                        className="text-sm font-medium"
                    >
                        <a href="#pricing">Pricing</a>
                    </Button>

                    <Button
                        variant="ghost"
                        asChild
                        className="text-sm font-medium"
                    >
                        <a href="#contact">Contact</a>
                    </Button>
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Dark/Light Mode Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleTheme}
                        title={`Switch to ${resolvedAppearance === 'dark' ? 'light' : 'dark'} mode`}
                        className="rounded-full text-muted-foreground hover:text-foreground"
                    >
                        {resolvedAppearance === 'dark' ? (
                            <Sun className="size-4" />
                        ) : (
                            <Moon className="size-4" />
                        )}
                        <span className="sr-only">Toggle theme</span>
                    </Button>

                    {auth.user ? (
                        <Button
                            asChild
                            className="bg-gradient-to-r from-primary to-indigo-600 text-primary-foreground shadow-sm hover:from-primary/90 hover:to-indigo-600/90"
                        >
                            <Link href={dashboard()}>
                                <LayoutGrid className="mr-2 size-4" />
                                Dashboard
                            </Link>
                        </Button>
                    ) : (
                        <>
                            <Button
                                variant="ghost"
                                asChild
                                className="hidden text-sm font-medium sm:inline-flex"
                            >
                                <Link href={login()}>Log in</Link>
                            </Button>
                            <Button
                                asChild
                                className="group relative overflow-hidden bg-gradient-to-r from-primary via-indigo-600 to-blue-600 text-white shadow-md transition-all hover:shadow-indigo-500/25"
                            >
                                <Link href={register()}>
                                    <span>Get Started</span>
                                    <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </>
                    )}

                    {/* Mobile Sheet Trigger */}
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
                        <SheetContent
                            side="right"
                            className="w-[300px] p-0 sm:w-[350px]"
                        >
                            <SheetHeader className="border-b border-border/50 p-4 text-left">
                                <SheetTitle className="flex items-center gap-2">
                                    <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <Code2 className="size-4" />
                                    </div>
                                    <span className="text-lg font-bold">
                                        PixelsFort
                                    </span>
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
                                            className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-accent"
                                        >
                                            <Code2 className="size-4 text-primary" />
                                            Custom Software
                                        </a>
                                        <a
                                            href="#services-mobile"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-accent"
                                        >
                                            <Smartphone className="size-4 text-blue-500" />
                                            Mobile Apps
                                        </a>
                                        <a
                                            href="#services-cloud"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-accent"
                                        >
                                            <Cloud className="size-4 text-indigo-500" />
                                            Cloud & DevOps
                                        </a>
                                        <a
                                            href="#services-ai"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-accent"
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
                                            className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-accent"
                                        >
                                            <Building2 className="size-4 text-primary" />
                                            Enterprise Modernization
                                        </a>
                                        <a
                                            href="#about"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-accent"
                                        >
                                            <Users className="size-4 text-primary" />
                                            About PixelsFort
                                        </a>
                                        <a
                                            href="#case-studies"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-accent"
                                        >
                                            <FileText className="size-4 text-primary" />
                                            Case Studies
                                        </a>
                                        <a
                                            href="#pricing"
                                            onClick={() => setMobileOpen(false)}
                                            className="flex items-center gap-2.5 rounded-lg p-2 hover:bg-accent"
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
                                                href={dashboard()}
                                                onClick={() =>
                                                    setMobileOpen(false)
                                                }
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
                                                    href={login()}
                                                    onClick={() =>
                                                        setMobileOpen(false)
                                                    }
                                                >
                                                    Log in
                                                </Link>
                                            </Button>
                                            <Button
                                                asChild
                                                className="w-full bg-primary"
                                            >
                                                <Link
                                                    href={register()}
                                                    onClick={() =>
                                                        setMobileOpen(false)
                                                    }
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
                </div>
            </div>
        </header>
    );
}
