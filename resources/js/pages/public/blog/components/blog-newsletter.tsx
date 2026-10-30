import { Mail, CheckCircle2, Sparkles, Shield, BellRing, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function BlogNewsletter() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            toast.error('Please enter a valid email address.');

            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsSubscribed(true);
            toast.success('Thank you for subscribing to PixelsFort Engineering Dispatch!');
        }, 600);
    };

    return (
        <section className="relative overflow-hidden border border-primary/25 bg-gradient-to-br from-card via-card/95 to-primary/5 p-8 shadow-xl backdrop-blur-xl sm:p-12">
            {/* Ambient Background Accents */}
            <div className="pointer-events-none absolute -right-20 -top-20 size-80 bg-gradient-to-bl from-primary/20 via-indigo-500/15 to-transparent blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 size-80 bg-gradient-to-tr from-sky-500/15 to-transparent blur-3xl" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Left Text */}
                <div className="space-y-3.5 lg:col-span-7">
                    <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />
                        <span>PixelsFort Engineering Dispatch</span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                        Architectural Insights Delivered Straight to Your Inbox
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Join 10,000+ senior engineers, CTOs, and systems architects. Every two weeks, we unpack high-concurrency systems, cloud infrastructure blueprints, and real-world production post-mortems.
                    </p>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                            <Shield className="size-3.5 text-emerald-500" />
                            <span>Zero spam guarantee</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <BellRing className="size-3.5 text-primary" />
                            <span>Bi-weekly deep dives</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="size-3.5 text-sky-500" />
                            <span>1-click unsubscribe anytime</span>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="lg:col-span-5">
                    {isSubscribed ? (
                        <div className="flex flex-col items-center justify-center space-y-3 border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-600 dark:text-emerald-400">
                            <CheckCircle2 className="size-10" />
                            <div className="space-y-1">
                                <h4 className="font-semibold text-base">You're Subscribed!</h4>
                                <p className="text-xs text-muted-foreground">
                                    Check your inbox for a confirmation email and our latest architecture whitepaper.
                                </p>
                            </div>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-3 border border-border/80 bg-background/80 p-4 shadow-sm backdrop-blur-sm sm:p-5"
                        >
                            <label className="text-xs font-medium text-foreground">
                                Join the engineering newsletter
                            </label>

                            <div className="relative">
                                <Mail className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="work-email@company.com"
                                    required
                                    className="h-11 border-border/80 pl-10 text-sm focus-visible:border-primary"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="group h-11 w-full gap-2 font-semibold shadow-md shadow-primary/20 transition-all hover:shadow-primary/30"
                            >
                                <span>{loading ? 'Subscribing...' : 'Subscribe to Dispatch'}</span>
                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                            </Button>

                            <p className="text-center text-[11px] text-muted-foreground">
                                By subscribing, you agree to receive technical updates from PixelsFort.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
