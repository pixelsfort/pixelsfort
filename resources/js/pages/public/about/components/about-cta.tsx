import { Link } from '@inertiajs/react';
import { ArrowRight, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { register } from '@/routes';

export function AboutCTA() {
    return (
        <section className="relative overflow-hidden py-20 lg:py-28">
            {/* Background Glow */}
            <div className="pointer-events-none absolute -bottom-24 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-sky-500/10 opacity-80 blur-3xl" />

            <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="relative space-y-8 overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-b from-card via-card/90 to-background p-8 text-center shadow-2xl sm:p-12 lg:p-16">
                    {/* Ambient Accent Ribbon */}
                    <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-primary/20 blur-3xl" />

                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />
                        <span>Let's Build Together</span>
                    </div>

                    <div className="mx-auto max-w-2xl space-y-4">
                        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Ready to Turn Your Vision into Resilient Software?
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Connect directly with our engineering team to
                            explore technical scoping, architecture roadmaps, or
                            bespoke digital product development.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        <Button
                            size="lg"
                            className="group h-12 px-8 text-base font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-primary/35"
                            asChild
                        >
                            <Link
                                href={register.url()}
                                id="about-cta-get-started-btn"
                            >
                                <span>Start Your Project</span>
                                <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="h-12 border-border/80 px-8 text-base font-medium transition-all hover:border-primary/50 hover:bg-accent/60"
                            asChild
                        >
                            <a
                                href="mailto:contact@pixelsfort.com"
                                id="about-cta-email-btn"
                            >
                                <Mail className="mr-2 size-4 text-primary" />
                                <span>contact@pixelsfort.com</span>
                            </a>
                        </Button>
                    </div>

                    {/* Quick Direct Footprint */}
                    <div className="flex flex-wrap items-center justify-center gap-6 border-t border-border/50 pt-8 text-xs text-muted-foreground sm:gap-10">
                        <div className="flex items-center gap-2">
                            <MapPin className="size-3.5 shrink-0 text-primary" />
                            <span>Tokha-11, Kathmandu, Nepal</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone className="size-3.5 shrink-0 text-primary" />
                            <a
                                href="tel:+9779767484172"
                                className="transition-colors hover:text-foreground"
                            >
                                +977 976-7484172
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
                            <span>Accepting New Q2/Q3 Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
