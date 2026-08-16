import { Link } from '@inertiajs/react';
import { useState } from 'react';
import {
    ArrowUp,
    ArrowUpRight,
    Building2,
    CheckCircle2,
    Code2,
    Cpu,
    ExternalLink,
    Facebook,
    Github,
    Globe,
    Instagram,
    Linkedin,
    Lock,
    Mail,
    MapPin,
    Phone,
    Rocket,
    Search,
    Send,
    Share2,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Twitter,
} from 'lucide-react';
import { home, login } from '@/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function SiteFooter() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.trim()) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 5000);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full overflow-hidden border-t border-border/60 bg-gradient-to-b from-background via-muted/30 to-muted/60 pt-16 pb-12 transition-colors duration-300">
            {/* Background Decorator Gradients */}
            <div className="pointer-events-none absolute top-0 left-1/4 size-96 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute right-1/4 bottom-0 size-96 translate-y-1/3 rounded-full bg-indigo-500/10 blur-3xl" />

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* 1. Top Tech Consultation & Newsletter Dispatch Card */}
                <div className="relative mb-16 overflow-hidden rounded-2xl border border-primary/20 bg-card/80 p-6 shadow-xl backdrop-blur-xl sm:p-10">
                    <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-gradient-to-br from-primary/20 to-indigo-500/20 blur-2xl" />

                    <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
                        <div className="space-y-2 lg:col-span-7">
                            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                <Sparkles className="size-3.5" />
                                <span>PixelsFort Tech Dispatch</span>
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                Stay Ahead in Custom Software & Enterprise
                                Engineering
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Subscribe to our tech newsletter for
                                architecture insights, SEO indexing workflows,
                                and localized engineering case studies.
                            </p>
                        </div>

                        <div className="lg:col-span-5">
                            {subscribed ? (
                                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-600 dark:text-emerald-400">
                                    <CheckCircle2 className="size-5 shrink-0" />
                                    <p className="text-sm font-medium">
                                        Thank you for subscribing! Check your
                                        inbox for our latest tech dispatch.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubscribe}
                                    className="flex flex-col gap-3 sm:flex-row"
                                >
                                    <div className="relative flex-1">
                                        <Mail className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
                                        <Input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            placeholder="Enter your corporate email"
                                            className="h-11 border-border/70 bg-background/80 pl-9 transition-all focus-visible:border-primary"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="h-11 gap-2 bg-gradient-to-r from-primary to-indigo-600 font-semibold text-white shadow-md transition-all hover:opacity-95"
                                    >
                                        <span>Subscribe</span>
                                        <Send className="size-4" />
                                    </Button>
                                </form>
                            )}
                            <p className="mt-2 text-xs text-muted-foreground">
                                Strictly zero spam. Unsubscribe with 1-click
                                anytime.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Main Footer Link Columns */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
                    {/* Brand Profile Column (Spans 4 cols on lg) */}
                    <div className="space-y-5 sm:col-span-2 lg:col-span-4">
                        <Link
                            href={home.url()}
                            className="group inline-flex items-center gap-3"
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
                                <span className="text-xl font-extrabold tracking-tight text-foreground">
                                    Pixels
                                    <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                                        Fort
                                    </span>
                                </span>
                                <span className="text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                                    Tech Pvt. Ltd.
                                </span>
                            </div>
                        </Link>

                        <p className="text-sm leading-relaxed text-muted-foreground">
                            PixelsFort Tech Pvt. Ltd. delivers custom digital
                            software products, high-availability backend
                            architectures, cross-device web & mobile apps, SEO
                            indexing systems, and conversion-focused digital
                            marketing engines.
                        </p>

                        {/* Live Availability Status */}
                        <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                            <span className="relative flex size-2">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                            </span>
                            <span>
                                All Systems Operational • Taking New Client
                                Projects
                            </span>
                        </div>

                        {/* Contact Information Footprint */}
                        <div className="space-y-2 pt-2 text-xs text-muted-foreground">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                                <span>
                                    Ward No. 11, Tokha Municipality, Kathmandu
                                    District, Bagmati Province, Nepal
                                </span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="size-4 shrink-0 text-primary" />
                                <a
                                    href="tel:+9779767484172"
                                    className="transition-colors hover:text-foreground"
                                >
                                    +977 976-7484172
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail className="size-4 shrink-0 text-primary" />
                                <a
                                    href="mailto:contact@pixelsfort.com"
                                    className="transition-colors hover:text-foreground"
                                >
                                    contact@pixelsfort.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Column 1: Services */}
                    <div className="space-y-4 lg:col-span-2">
                        <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase">
                            Services
                        </h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#services"
                                    className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                                >
                                    <Code2 className="size-3.5 transition-transform group-hover:scale-110" />
                                    <span>Custom Software</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                                >
                                    <Smartphone className="size-3.5 transition-transform group-hover:scale-110" />
                                    <span>Web & Mobile Apps</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                                >
                                    <Search className="size-3.5 transition-transform group-hover:scale-110" />
                                    <span>SEO Optimization</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                                >
                                    <Share2 className="size-3.5 transition-transform group-hover:scale-110" />
                                    <span>Social Media Marketing</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                                >
                                    <Cpu className="size-3.5 transition-transform group-hover:scale-110" />
                                    <span>Cloud & DevOps</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Column 2: Client Infrastructure */}
                    <div className="space-y-4 lg:col-span-3">
                        <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase">
                            Client Footprint
                        </h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#portfolio"
                                    className="group flex items-center justify-between transition-colors hover:text-primary"
                                >
                                    <span>Nepal Natyashala (Theatre)</span>
                                    <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="group flex items-center justify-between transition-colors hover:text-primary"
                                >
                                    <span>ACCEL Migration & Education</span>
                                    <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#methodology"
                                    className="group flex items-center justify-between transition-colors hover:text-primary"
                                >
                                    <span>Technical Qualification Map</span>
                                    <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#methodology"
                                    className="group flex items-center justify-between transition-colors hover:text-primary"
                                >
                                    <span>Discovery & Solutions Mapping</span>
                                    <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#insights"
                                    className="group flex items-center justify-between transition-colors hover:text-primary"
                                >
                                    <span>UX Case Studies</span>
                                    <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Navigation Column 3: Corporate & Portals */}
                    <div className="space-y-4 lg:col-span-3">
                        <h4 className="text-sm font-semibold tracking-wider text-foreground uppercase">
                            Company & Portals
                        </h4>
                        <ul className="space-y-2.5 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href={home.url()}
                                    className="transition-colors hover:text-primary"
                                >
                                    Corporate Intelligence Profile
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="transition-colors hover:text-primary"
                                >
                                    Engineering Careers
                                </a>
                            </li>
                            <li>
                                <Link
                                    href={login.url()}
                                    className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                                >
                                    <Lock className="size-3.5 text-primary" />
                                    <span>Client Portal Sign In</span>
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#status"
                                    className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                                >
                                    <ShieldCheck className="size-3.5 text-emerald-500" />
                                    <span>Security & Compliance</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="group flex items-center gap-1.5 transition-colors hover:text-primary"
                                >
                                    <Building2 className="size-3.5" />
                                    <span>Request Consultation</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 3. Mid Divider with Social Networks & Trust Badges */}
                <div className="my-10 border-t border-border/50 pt-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        {/* Social Network Profiles */}
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="text-xs font-semibold tracking-wider text-foreground uppercase">
                                Connect:
                            </span>
                            <a
                                href="https://instagram.com/pixelsfort"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="PixelsFort Instagram"
                                className="flex size-9 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-muted-foreground shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-500"
                            >
                                <Instagram className="size-4" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="PixelsFort Facebook"
                                className="flex size-9 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-muted-foreground shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600/50 hover:bg-blue-600/10 hover:text-blue-600"
                            >
                                <Facebook className="size-4" />
                            </a>
                            <a
                                href="https://x.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="PixelsFort X (Twitter)"
                                className="flex size-9 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-muted-foreground shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/50 hover:bg-foreground/10 hover:text-foreground"
                            >
                                <Twitter className="size-4" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="PixelsFort LinkedIn"
                                className="flex size-9 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-muted-foreground shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-500"
                            >
                                <Linkedin className="size-4" />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="PixelsFort GitHub"
                                className="flex size-9 items-center justify-center rounded-xl border border-border/60 bg-background/80 text-muted-foreground shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/50 hover:bg-foreground/10 hover:text-foreground"
                            >
                                <Github className="size-4" />
                            </a>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1.5 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5">
                                <ShieldCheck className="size-3.5 text-primary" />
                                <span>256-Bit SSL Encrypted</span>
                            </div>
                            <div className="flex items-center gap-1.5 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5">
                                <Globe className="size-3.5 text-indigo-500" />
                                <span>Global Infrastructure</span>
                            </div>
                            <div className="flex items-center gap-1.5 rounded-lg border border-border/40 bg-background/60 px-3 py-1.5">
                                <Rocket className="size-3.5 text-emerald-500" />
                                <span>99.9% Service SLA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Bottom Legal Bar & Back To Top */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
                    <div className="flex flex-col items-center gap-1 text-center text-xs text-muted-foreground sm:items-start sm:text-left">
                        <p>
                            &copy; {currentYear} PixelsFort Tech Pvt. Ltd. All
                            rights reserved.
                        </p>
                        <p className="text-[11px] opacity-80">
                            Headquartered in Ward No. 11, Tokha Municipality,
                            Kathmandu, Nepal 🇳🇵
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
                        <a
                            href="#privacy"
                            className="transition-colors hover:text-foreground hover:underline"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#terms"
                            className="transition-colors hover:text-foreground hover:underline"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#security"
                            className="transition-colors hover:text-foreground hover:underline"
                        >
                            Security Policy
                        </a>
                        <a
                            href="#sitemap"
                            className="transition-colors hover:text-foreground hover:underline"
                        >
                            Sitemap
                        </a>

                        {/* Back to top button */}
                        <button
                            onClick={scrollToTop}
                            aria-label="Scroll to top"
                            className="flex items-center gap-1.5 rounded-full border border-border/60 bg-background px-3 py-1.5 text-xs font-medium shadow-xs transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:text-primary"
                        >
                            <span>Top</span>
                            <ArrowUp className="size-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default SiteFooter;
