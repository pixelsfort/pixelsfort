import { ShieldCheck, Zap, Layers, Users } from 'lucide-react';

export function AboutStats() {
    const metrics = [
        {
            value: '99.99%',
            label: 'System Reliability SLA',
            description:
                'Fault-tolerant multi-cloud deployments with zero unbudgeted downtime',
            icon: ShieldCheck,
            color: 'text-emerald-500',
        },
        {
            value: '< 50ms',
            label: 'Global Edge Latency',
            description:
                'Optimized routing, smart edge caching, and high-throughput APIs',
            icon: Zap,
            color: 'text-amber-500',
        },
        {
            value: '250+',
            label: 'Digital Deployments',
            description:
                'Custom SaaS, enterprise IT portals, mobile apps, and data pipelines',
            icon: Layers,
            color: 'text-primary',
        },
        {
            value: '100%',
            label: 'In-House Senior Engineers',
            description:
                'Full ownership of codebase, architecture decisions, and client delivery',
            icon: Users,
            color: 'text-indigo-500',
        },
    ];

    return (
        <section className="relative border-b border-border/40 bg-muted/20 py-14 sm:py-16">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {metrics.map((metric, idx) => {
                        const Icon = metric.icon;

                        return (
                            <div
                                key={idx}
                                className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                                        {metric.value}
                                    </span>
                                    <div
                                        className={`rounded-xl bg-muted/60 p-2.5 transition-colors group-hover:bg-primary/10 ${metric.color}`}
                                    >
                                        <Icon className="size-5" />
                                    </div>
                                </div>
                                <h3 className="mt-3 text-sm font-bold text-foreground">
                                    {metric.label}
                                </h3>
                                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                    {metric.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
