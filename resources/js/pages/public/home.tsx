import { Head } from '@inertiajs/react';
import { HeroSection } from './components/hero-section';
import {
    Code2,
    Cloud,
    ShieldCheck,
    Cpu,
    CheckCircle2,
    Sparkles,
} from 'lucide-react';

export default function Home() {
    const services = [
        {
            icon: Code2,
            title: 'Custom Software Engineering',
            description:
                'Full-stack enterprise applications built with modern frameworks, high-throughput microservices, and robust APIs tailored to your industry.',
            features: ['Scalable Web & SaaS Apps', 'REST & GraphQL APIs', 'Legacy Code Modernization'],
        },
        {
            icon: Cloud,
            title: 'Cloud & DevOps Architecture',
            description:
                'Multi-cloud deployment pipelines, Kubernetes orchestration, serverless setups, and 24/7 automated monitoring with sub-12ms global edge routing.',
            features: ['AWS / GCP / Azure Infrastructure', 'CI/CD Automation', 'Zero-Downtime Migration'],
        },
        {
            icon: Cpu,
            title: 'AI & Data Engineering',
            description:
                'Custom Machine Learning pipelines, LLM fine-tuning, vector search databases, and predictive analytics that supercharge business workflows.',
            features: ['Enterprise AI & Vector DBs', 'Automated ML Pipelines', 'Real-Time Data Analytics'],
        },
        {
            icon: ShieldCheck,
            title: 'Cybersecurity & Compliance',
            description:
                'Bank-grade security audits, SOC2 Type II compliance readiness, end-to-end data encryption, and real-time threat prevention protocols.',
            features: ['SOC2 / GDPR Compliance', 'Penetration Testing', 'Zero-Trust Architecture'],
        },
    ];

    return (
        <>
            <Head>
                <title>Pixelsfort - Next-Gen Digital Products & Enterprise Cloud Solutions</title>
                <meta
                    name="description"
                    content="Pixelsfort engineers enterprise custom software, cloud architecture, AI pipelines, and digital transformation for high-growth tech leaders."
                />
            </Head>

            {/* Hero Section Component */}
            <HeroSection />

            {/* Services & Core Competencies Preview Section */}
            <section id="services" className="relative py-20 lg:py-28 bg-muted/10 border-b border-border/40">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            <Sparkles className="size-3.5" />
                            Core Capabilities
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Engineering Excellence across Every Layer
                        </h2>
                        <p className="text-muted-foreground text-base sm:text-lg">
                            We combine battle-tested architecture with bleeding-edge technology to build high-performance digital products.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
                                >
                                    <div className="space-y-4">
                                        <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                            <Icon className="size-6" />
                                        </div>
                                        <h3 className="text-xl font-bold tracking-tight text-foreground">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-border/50 space-y-2">
                                        {service.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                                                <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
