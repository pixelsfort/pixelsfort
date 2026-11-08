import { Head } from '@inertiajs/react';
import {
    Code2,
    Cloud,
    ShieldCheck,
    Cpu,
    CheckCircle2,
    Sparkles,
} from 'lucide-react';
import { HeroSection } from './components/hero-section';

export default function Home() {
    const services = [
        {
            icon: Code2,
            title: 'Custom Software Engineering',
            description:
                'Full-stack enterprise applications built with modern frameworks, high-throughput microservices, and robust APIs tailored to your industry.',
            features: [
                'Scalable Web & SaaS Apps',
                'REST & GraphQL APIs',
                'Legacy Code Modernization',
            ],
        },
        {
            icon: Cloud,
            title: 'Cloud & DevOps Architecture',
            description:
                'Multi-cloud deployment pipelines, Kubernetes orchestration, serverless setups, and 24/7 automated monitoring with sub-12ms global edge routing.',
            features: [
                'AWS / GCP / Azure Infrastructure',
                'CI/CD Automation',
                'Zero-Downtime Migration',
            ],
        },
        {
            icon: Cpu,
            title: 'AI & Data Engineering',
            description:
                'Custom Machine Learning pipelines, LLM fine-tuning, vector search databases, and predictive analytics that supercharge business workflows.',
            features: [
                'Enterprise AI & Vector DBs',
                'Automated ML Pipelines',
                'Real-Time Data Analytics',
            ],
        },
        {
            icon: ShieldCheck,
            title: 'Cybersecurity & Compliance',
            description:
                'Bank-grade security audits, SOC2 Type II compliance readiness, end-to-end data encryption, and real-time threat prevention protocols.',
            features: [
                'SOC2 / GDPR Compliance',
                'Penetration Testing',
                'Zero-Trust Architecture',
            ],
        },
    ];

    return (
        <>
            <Head>
                <title>
                    Pixelsfort - Next-Gen Digital Products & Enterprise Cloud
                    Solutions
                </title>
                <meta
                    name="description"
                    content="Pixelsfort engineers enterprise custom software, cloud architecture, AI pipelines, and digital transformation for high-growth tech leaders."
                />
            </Head>

            {/* Hero Section Component */}
            <HeroSection />
        </>
    );
}
