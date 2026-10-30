import {
    Code2,
    Zap,
    HeartHandshake,
    Sparkles,
    ShieldCheck,
    Terminal,
} from 'lucide-react';

export function AboutValues() {
    const values = [
        {
            icon: Code2,
            title: 'Engineering Craftsmanship',
            description:
                'We write clean, strictly typed, and thoroughly tested code. We reject sloppy shortcuts and prioritize enduring architectures that scale seamlessly.',
        },
        {
            icon: Zap,
            title: 'Velocity with Rigor',
            description:
                'Speed and stability are not mutually exclusive. With automated CI/CD and immutable infrastructure, we ship rapidly without risking production breaks.',
        },
        {
            icon: HeartHandshake,
            title: 'Radical Transparency',
            description:
                'Zero black-box obscurity. You collaborate directly with senior engineers and receive unvarnished technical advice and real-time sprint visibility.',
        },
        {
            icon: ShieldCheck,
            title: 'Security by Design',
            description:
                'Data protection, zero-trust network boundaries, and role-based access control are baked into our architectures from the very first commit.',
        },
        {
            icon: Sparkles,
            title: 'Refined User Experience',
            description:
                'High-performance backend systems deserve intuitive, breathtaking interfaces. We balance deep backend strength with smooth, accessible UI design.',
        },
        {
            icon: Terminal,
            title: 'Pragmatic Modernism',
            description:
                'We evaluate new tech rigorously. From LLM pipelines to edge computing, we only adopt tooling that delivers clear business leverage.',
        },
    ];

    return (
        <section className="relative border-b border-border/40 bg-muted/10 py-20 lg:py-28">
            <div className="container mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl space-y-4 text-center">
                    <span className="inline-flex items-center gap-1.5 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />
                        Core Operating Principles
                    </span>
                    <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        How We Think & Build
                    </h2>
                    <p className="text-base text-muted-foreground sm:text-lg">
                        The bedrock values guiding every line of code, technical
                        choice, and customer relationship at PixelsFort.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {values.map((val, idx) => {
                        const Icon = val.icon;

                        return (
                            <div
                                key={idx}
                                className="group relative flex flex-col justify-between overflow-hidden border border-border/70 bg-card p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                            >
                                <div className="space-y-4">
                                    <div className="inline-flex bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        <Icon className="size-5" />
                                    </div>
                                    <h3 className="text-lg font-bold tracking-tight text-foreground">
                                        {val.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {val.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
