import { Building2, Compass, Target, MapPin, CheckCircle2 } from 'lucide-react';

export function AboutStory() {
    const highlights = [
        'Rooted in Kathmandu, Nepal with an agile global delivery footprint',
        'End-to-end delivery: from technical discovery to production deployment',
        'Direct collaboration with senior engineers, zero intermediary friction',
        'Strict adherence to modern security, clean code, and automated testing',
    ];

    return (
        <section
            id="mission"
            className="relative border-b border-border/40 py-20 lg:py-28"
        >
            <div className="container mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
                {/* 2-Column Story Grid */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                    {/* Left Narrative */}
                    <div className="space-y-6 lg:col-span-7">
                        <div className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            <Compass className="size-3.5" />
                            <span>Our Story & Roots</span>
                        </div>

                        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                            Built by Engineers for Businesses That Demand
                            Reliability
                        </h2>

                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                            PixelsFort Tech Pvt. Ltd. was founded with a
                            straightforward conviction: the digital solutions
                            powering today’s enterprises must be as solid,
                            resilient, and carefully engineered as physical
                            infrastructure.
                        </p>

                        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Operating from our engineering hub in Tokha,
                            Kathmandu, we bring together high-caliber engineers
                            and product architects. We reject brittle shortcuts
                            and bloated deliverables, focusing on clean
                            architecture, lightning-fast edge performance, and
                            battle-tested code that stands the test of time.
                        </p>

                        <div className="space-y-3 pt-2">
                            {highlights.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-emerald-500" />
                                    <span className="text-sm font-medium text-foreground/90">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Company Entity Card */}
                    <div className="lg:col-span-5">
                        <div className="relative overflow-hidden border border-border/80 bg-card p-7 shadow-xl">
                            <div className="pointer-events-none absolute -top-20 -right-20 size-48 bg-primary/10 blur-2xl" />

                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-11 items-center justify-center bg-primary text-primary-foreground shadow-sm">
                                        <Building2 className="size-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-foreground">
                                            PixelsFort Tech Pvt. Ltd.
                                        </h3>
                                        <span className="text-xs text-muted-foreground">
                                            Registered Tech Enterprise
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-4 border-t border-border/50 pt-5 text-sm">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                                        <div>
                                            <span className="block text-xs font-semibold tracking-wider text-foreground uppercase">
                                                Headquarters
                                            </span>
                                            <span className="text-xs leading-relaxed text-muted-foreground">
                                                Ward No. 11, Tokha Municipality,
                                                Kathmandu District, Bagmati
                                                Province, Nepal
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <Target className="mt-0.5 size-4 shrink-0 text-indigo-500" />
                                        <div>
                                            <span className="block text-xs font-semibold tracking-wider text-foreground uppercase">
                                                Core Disciplines
                                            </span>
                                            <span className="text-xs leading-relaxed text-muted-foreground">
                                                Custom Software Architecture,
                                                Cloud & DevOps, Enterprise
                                                Web/Mobile Systems, AI Pipelines
                                            </span>
                                        </div>
                                    </div>

                                    <div className="space-y-1 border border-primary/20 bg-primary/5 p-4 text-xs text-muted-foreground">
                                        <span className="block font-semibold text-foreground">
                                            Our Global Service Standard
                                        </span>
                                        <p>
                                            We maintain round-the-clock incident
                                            monitoring, automated CI/CD
                                            releases, and dedicated engineering
                                            sprints for international and
                                            domestic partners.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mission & Vision Split Cards */}
                <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
                    <div className="space-y-4 border border-border/70 bg-card p-8 shadow-xs transition-all duration-300 hover:border-primary/40">
                        <div className="inline-flex size-10 items-center justify-center bg-primary/10 text-primary">
                            <Target className="size-5" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground">
                            Our Mission
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                            To empower forward-thinking organizations with
                            resilient, high-speed digital software and scalable
                            cloud infrastructure. We transform technical
                            complexity into streamlined, dependable business
                            velocity without incurring technical debt.
                        </p>
                    </div>

                    <div className="space-y-4 border border-border/70 bg-card p-8 shadow-xs transition-all duration-300 hover:border-indigo-500/40">
                        <div className="inline-flex size-10 items-center justify-center bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                            <Compass className="size-5" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground">
                            Our Vision
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                            To position Nepal as an internationally recognized
                            hub for world-class engineering talent, proving that
                            world-leading software architecture and digital
                            innovation thrive through craftsmanship, rigor, and
                            continuous learning.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
