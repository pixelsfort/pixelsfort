import { Link } from '@inertiajs/react';
import {
    ChevronDown,
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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { about } from '@/routes';

export function ServicesDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-sm font-medium">
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
    );
}

export function SolutionsDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-sm font-medium">
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
                                    Scale legacy architecture to cloud native
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
                                    Rapid MVP to enterprise ready multi-tenant
                                    apps
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
                                    Headless commerce & payment infrastructure
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
    );
}

export function CompanyDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1 text-sm font-medium">
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
                    <Link
                        href={about.url()}
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
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuItem
                    asChild
                    className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                >
                    <a href="#case-studies" className="flex items-center gap-3">
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
                    <a href="#tech-stack" className="flex items-center gap-3">
                        <Layers className="size-4 text-primary" />
                        <div>
                            <div className="text-sm font-semibold">
                                Engineering Culture
                            </div>
                            <div className="text-xs text-muted-foreground">
                                Our tech stack & development standards
                            </div>
                        </div>
                    </a>
                </DropdownMenuItem>

                <DropdownMenuItem
                    asChild
                    className="cursor-pointer rounded-lg p-2 hover:bg-accent"
                >
                    <a href="#careers" className="flex items-center gap-3">
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
    );
}

export function DesktopNav() {
    return (
        <nav className="hidden items-center gap-1 md:flex lg:gap-2">
            <ServicesDropdown />
            <SolutionsDropdown />
            <CompanyDropdown />

            <Button variant="ghost" asChild className="text-sm font-medium">
                <a href="#pricing">Pricing</a>
            </Button>

            <Button variant="ghost" asChild className="text-sm font-medium">
                <a href="#contact">Contact</a>
            </Button>
        </nav>
    );
}
