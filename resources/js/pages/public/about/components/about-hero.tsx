import { Link } from '@inertiajs/react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { register } from '@/routes';

export function AboutHero() {
    return (
        <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-background/95 to-muted/20 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 size-[500px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-sky-500/10 opacity-70 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />

            <div className="container mx-auto max-w-5xl space-y-8 px-4 text-center sm:px-6 lg:px-8">
                {/* Minimal Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary dark:bg-primary/20 dark:text-primary-foreground">
                    <Sparkles className="size-3.5" />
                    <span className="font-semibold">About PixelsFort Tech</span>
                    <span className="text-muted-foreground/60">•</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="size-3 text-primary" />
                        Kathmandu, Nepal
                    </span>
                </div>

                {/* Primary Heading */}
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1]">
                    We Engineer{' '}
                    <span className="bg-gradient-to-r from-primary via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-primary dark:via-sky-400 dark:to-indigo-400">
                        Resilient Digital Software
                    </span>{' '}
                    Built to Scale
                </h1>

                {/* Subtitle */}
                <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg lg:text-xl lg:leading-relaxed">
                    PixelsFort Tech Pvt. Ltd. is an engineering-first technology
                    company. We blend architectural discipline, clean modern
                    code, and intuitive user experiences to solve complex
                    business problems for ambitious teams globally.
                </p>

                {/* Quick Action CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                    <Button
                        size="lg"
                        className="group h-11 px-6 text-sm font-semibold shadow-md shadow-primary/20 transition-all hover:shadow-primary/30"
                        asChild
                    >
                        <Link
                            href={register.url()}
                            id="about-hero-get-started-btn"
                        >
                            <span>Work With Us</span>
                            <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        className="h-11 border-border/80 px-6 text-sm font-medium transition-all hover:border-primary/40 hover:bg-accent/60"
                        asChild
                    >
                        <a href="#mission" id="about-hero-explore-story-btn">
                            <span>Our Mission & Vision</span>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
