import { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    Sparkles,
    CheckCircle2,
    ShieldCheck,
    Zap,
    Cloud,
    Code2,
    Cpu,
    Activity,
    Copy,
    Check,
    Play,
    Server,
    Lock,
    Globe,
    Layers,
    Terminal,
    TrendingUp,
    Building2,
    Star,
    ChevronRight,
    Users,
} from 'lucide-react';
import { register, login, dashboard } from '@/routes';
import type { Auth } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// ==========================================
// 1. HERO BADGE ANNOUNCEMENT
// ==========================================
export function HeroBadge() {
    return (
        <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary transition-all hover:border-primary/40 hover:bg-primary/15 hover:shadow-md hover:shadow-primary/5 dark:bg-primary/20 dark:text-primary-foreground dark:hover:bg-primary/30"
        >
            <span className="relative flex size-2 items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-1.5 rounded-full bg-primary"></span>
            </span>
            <span className="font-semibold">Pixelsfort 3.0 Platform</span>
            <span className="text-muted-foreground/80">•</span>
            <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                Next-Gen Cloud Architecture & AI Engineering
            </span>
            <ChevronRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
    );
}

// ==========================================
// 2. HERO HEADING & SUBTITLE
// ==========================================
export function HeroHeading() {
    return (
        <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.1]">
                We Engineer{' '}
                <span className="bg-gradient-to-r from-primary via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-primary dark:via-sky-400 dark:to-indigo-400">
                    Next-Gen Digital
                </span>{' '}
                Products & Cloud Platforms
            </h1>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg lg:mx-0 lg:text-xl lg:leading-relaxed">
                Transform your vision with enterprise-grade cloud architecture, custom web & mobile applications, automated DevOps pipelines, and tailor-made AI solutions engineered for scale.
            </p>
        </div>
    );
}

// ==========================================
// 3. HERO ACTIONS & TRUST BADGE
// ==========================================
export function HeroActions() {
    const { auth } = usePage<{ auth: Auth }>().props;

    return (
        <div className="flex flex-col items-center gap-6 sm:flex-row lg:items-start">
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                {auth?.user ? (
                    <Button
                        size="lg"
                        className="w-full sm:w-auto h-12 px-7 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-300 group"
                        asChild
                    >
                        <Link href={dashboard.url()}>
                            <span>Go to Dashboard</span>
                            <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                ) : (
                    <Button
                        size="lg"
                        className="w-full sm:w-auto h-12 px-7 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-300 group"
                        asChild
                    >
                        <Link href={register.url()}>
                            <span>Start Your Project</span>
                            <ArrowRight className="size-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                )}

                <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto h-12 px-6 text-base font-medium border-border/80 hover:border-primary/50 hover:bg-accent/60 backdrop-blur-sm transition-all"
                    asChild
                >
                    <a href="#quote" className="flex items-center gap-2">
                        <Sparkles className="size-4 text-primary" />
                        <span>Get Instant Quote</span>
                    </a>
                </Button>
            </div>

            {/* Social Trust Stack */}
            <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2 overflow-hidden">
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-background object-cover"
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                        alt="Client Avatar 1"
                    />
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-background object-cover"
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                        alt="Client Avatar 2"
                    />
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-background object-cover"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                        alt="Client Avatar 3"
                    />
                    <img
                        className="inline-block size-8 rounded-full ring-2 ring-background object-cover"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
                        alt="Client Avatar 4"
                    />
                </div>
                <div className="flex flex-col text-xs">
                    <div className="flex items-center gap-1 text-amber-500 font-semibold">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <span className="text-foreground font-bold">4.9/5</span>
                    </div>
                    <span className="text-muted-foreground font-medium">Trusted by 250+ enterprise teams</span>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 4. INTERACTIVE TECH PREVIEW CARD
// ==========================================
export function HeroInteractiveCard() {
    const [activeTab, setActiveTab] = useState<'cloud' | 'ai' | 'security' | 'code'>('cloud');
    const [copied, setCopied] = useState(false);
    const [simulatedLatency, setSimulatedLatency] = useState(8);

    useEffect(() => {
        const interval = setInterval(() => {
            setSimulatedLatency(Math.floor(7 + Math.random() * 4));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const sampleCode = `// Pixelsfort AI & Cloud Microservice Architecture
import { PixelsfortEngine, CloudCluster } from '@pixelsfort/core';

export default async function deployPipeline() {
    const cluster = new CloudCluster({
        region: 'us-east-global',
        autoScale: true,
        maxLatencyMs: 12,
    });

    const aiService = await PixelsfortEngine.connect({
        model: 'pixelsfort-llm-v3',
        vectorDb: 'pinecone-enterprise',
        securityLevel: 'SOC2_STRICT',
    });

    return cluster.deploy(aiService);
}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(sampleCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* Ambient Background Glow behind Card */}
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 via-sky-500/20 to-indigo-500/30 opacity-70 blur-2xl transition duration-500 group-hover:opacity-100 dark:from-primary/40 dark:to-violet-500/40" />

            {/* Glass Container */}
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-2xl backdrop-blur-xl transition-all duration-300 dark:bg-card/70">
                {/* macOS Style Header Bar */}
                <div className="flex items-center justify-between border-b border-border/60 bg-muted/40 px-4 py-3">
                    <div className="flex items-center gap-2">
                        <div className="size-3 rounded-full bg-rose-500/80" />
                        <div className="size-3 rounded-full bg-amber-500/80" />
                        <div className="size-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                            <Terminal className="size-3.5 text-primary" />
                            pixelsfort-console ~ v3.4.0
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs">
                        <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                            <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            System Active ({simulatedLatency}ms)
                        </span>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex items-center gap-1 border-b border-border/40 bg-muted/20 px-3 py-1.5 overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setActiveTab('cloud')}
                        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                            activeTab === 'cloud'
                                ? 'bg-background text-primary shadow-xs font-semibold'
                                : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                        }`}
                    >
                        <Server className="size-3.5" />
                        Cloud Ops
                    </button>
                    <button
                        onClick={() => setActiveTab('ai')}
                        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                            activeTab === 'ai'
                                ? 'bg-background text-primary shadow-xs font-semibold'
                                : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                        }`}
                    >
                        <Cpu className="size-3.5" />
                        AI Pipeline
                    </button>
                    <button
                        onClick={() => setActiveTab('security')}
                        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                            activeTab === 'security'
                                ? 'bg-background text-primary shadow-xs font-semibold'
                                : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                        }`}
                    >
                        <ShieldCheck className="size-3.5" />
                        SOC2 Shield
                    </button>
                    <button
                        onClick={() => setActiveTab('code')}
                        className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                            activeTab === 'code'
                                ? 'bg-background text-primary shadow-xs font-semibold'
                                : 'text-muted-foreground hover:bg-background/50 hover:text-foreground'
                        }`}
                    >
                        <Code2 className="size-3.5" />
                        SDK Code
                    </button>
                </div>

                {/* Card Tab Contents */}
                <div className="p-5 sm:p-6 min-h-[310px] flex flex-col justify-between">
                    {activeTab === 'cloud' && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                        <Cloud className="size-4 text-primary" />
                                        Global Edge Infrastructure
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        Multi-region Kubernetes clusters & automated failover
                                    </p>
                                </div>
                                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400">
                                    99.99% Guaranteed SLA
                                </Badge>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                        <Activity className="size-3.5 text-primary" />
                                        Active Nodes
                                    </div>
                                    <div className="text-xl font-bold text-foreground mt-1">1,420</div>
                                    <div className="text-[11px] text-emerald-500 font-medium flex items-center gap-0.5 mt-0.5">
                                        <TrendingUp className="size-3" /> +14% this month
                                    </div>
                                </div>

                                <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                        <Zap className="size-3.5 text-amber-500" />
                                        Edge Latency
                                    </div>
                                    <div className="text-xl font-bold text-foreground mt-1">{simulatedLatency}ms</div>
                                    <div className="text-[11px] text-muted-foreground font-medium mt-0.5">
                                        Global CDN Mesh
                                    </div>
                                </div>

                                <div className="col-span-2 sm:col-span-1 rounded-xl border border-border/60 bg-muted/30 p-3">
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                        <Globe className="size-3.5 text-sky-500" />
                                        Data Centers
                                    </div>
                                    <div className="text-xl font-bold text-foreground mt-1">34 Regions</div>
                                    <div className="text-[11px] text-emerald-500 font-medium mt-0.5">
                                        100% Zero Downtime
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5 text-xs">
                                <div className="flex items-center justify-between font-medium text-foreground mb-2">
                                    <span>Deployment Health Score</span>
                                    <span className="text-primary font-bold">100/100</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                    <div className="bg-gradient-to-r from-primary to-emerald-500 h-2 rounded-full w-[100%]" />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'ai' && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                        <Cpu className="size-4 text-primary" />
                                        Enterprise AI & LLM Pipelines
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        RAG, vector search, and fine-tuned domain models
                                    </p>
                                </div>
                                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                                    Sub-second Inference
                                </Badge>
                            </div>

                            <div className="space-y-2 font-mono text-xs">
                                <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5 flex items-center justify-between">
                                    <span className="text-muted-foreground">Vector Database Indexing</span>
                                    <span className="text-emerald-500 font-semibold flex items-center gap-1">
                                        <CheckCircle2 className="size-3.5" /> 50M Vectors
                                    </span>
                                </div>
                                <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5 flex items-center justify-between">
                                    <span className="text-muted-foreground">Fine-Tuned LLM Model</span>
                                    <span className="text-primary font-semibold">Pixelsfort-v3-Turbo</span>
                                </div>
                                <div className="rounded-lg border border-border/60 bg-muted/40 p-2.5 flex items-center justify-between">
                                    <span className="text-muted-foreground">Token Throughput</span>
                                    <span className="text-foreground font-semibold">12,500 tps</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-4 animate-in fade-in duration-300">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                                        <Lock className="size-4 text-emerald-500" />
                                        Zero-Trust & Compliance
                                    </h4>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                        End-to-end AES-256 encryption, SOC2 Type II, and GDPR compliance
                                    </p>
                                </div>
                                <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:text-emerald-400">
                                    Audited & Certified
                                </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs">
                                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-3">
                                    <div className="font-semibold text-foreground flex items-center gap-1.5">
                                        <ShieldCheck className="size-4 text-emerald-500" />
                                        SOC2 Type II
                                    </div>
                                    <p className="text-[11px] text-muted-foreground mt-1">Verified Security Protocols</p>
                                </div>

                                <div className="rounded-xl border border-border/60 bg-muted/30 p-3">
                                    <div className="font-semibold text-foreground flex items-center gap-1.5">
                                        <Lock className="size-4 text-primary" />
                                        AES-256 at Rest
                                    </div>
                                    <p className="text-[11px] text-muted-foreground mt-1">Hardware Security Modules</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'code' && (
                        <div className="relative animate-in fade-in duration-300">
                            <button
                                onClick={handleCopy}
                                className="absolute right-2 top-2 z-10 rounded-md border border-border/80 bg-background/80 px-2 py-1 text-[11px] font-medium text-muted-foreground shadow-xs hover:bg-accent hover:text-foreground transition-all flex items-center gap-1"
                            >
                                {copied ? (
                                    <>
                                        <Check className="size-3 text-emerald-500" />
                                        Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="size-3" />
                                        Copy Code
                                    </>
                                )}
                            </button>
                            <pre className="overflow-x-auto rounded-xl border border-border/60 bg-slate-950 p-4 font-mono text-[11px] leading-relaxed text-slate-200 dark:bg-slate-950/80">
                                <code>{sampleCode}</code>
                            </pre>
                        </div>
                    )}

                    {/* Bottom Status Ribbon */}
                    <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="font-medium text-foreground">Pixelsfort Cloud Engine</span>
                        </div>
                        <a
                            href="#quote"
                            className="font-medium text-primary hover:underline flex items-center gap-1"
                        >
                            Request Technical Specs
                            <ArrowRight className="size-3" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating Accent Badges */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 z-20 items-center gap-2 rounded-xl border border-border/80 bg-card p-3 shadow-xl backdrop-blur-md animate-bounce-slow">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Zap className="size-5" />
                </div>
                <div className="text-xs">
                    <p className="font-bold text-foreground">&lt; 12ms Response</p>
                    <p className="text-muted-foreground text-[11px]">Global Edge Acceleration</p>
                </div>
            </div>

            <div className="hidden sm:flex absolute -top-5 -right-6 z-20 items-center gap-2 rounded-xl border border-border/80 bg-card p-3 shadow-xl backdrop-blur-md">
                <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="size-5" />
                </div>
                <div className="text-xs">
                    <p className="font-bold text-foreground">Enterprise Security</p>
                    <p className="text-muted-foreground text-[11px]">SOC2 Type II Certified</p>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 5. HERO METRICS STRIP
// ==========================================
export function HeroMetricsStrip() {
    const stats = [
        { label: 'Digital Products Shipped', value: '500+', icon: Layers, accent: 'text-primary' },
        { label: 'Guaranteed SLA Uptime', value: '99.99%', icon: ShieldCheck, accent: 'text-emerald-500' },
        { label: 'Client Revenue Scaled', value: '$2.5B+', icon: TrendingUp, accent: 'text-indigo-500' },
        { label: 'Global Edge Latency', value: '< 12ms', icon: Zap, accent: 'text-amber-500' },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 sm:gap-6">
            {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                    <div
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-black tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                                {stat.value}
                            </span>
                            <div className={`rounded-xl bg-muted/60 p-2.5 transition-colors group-hover:bg-primary/10 ${stat.accent}`}>
                                <Icon className="size-5" />
                            </div>
                        </div>
                        <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                            {stat.label}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

// ==========================================
// 6. HERO CLIENT TRUST LOGOS
// ==========================================
export function HeroClientLogos() {
    const clients = [
        { name: 'NexaCloud', category: 'Enterprise Cloud' },
        { name: 'CyberShield', category: 'Cybersecurity' },
        { name: 'Apex Dynamics', category: 'FinTech' },
        { name: 'Quantum AI', category: 'Deep Tech' },
        { name: 'Veloce Systems', category: 'SaaS Platform' },
        { name: 'Horizon Digital', category: 'Global Logistics' },
    ];

    return (
        <div className="space-y-6 pt-4">
            <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/80">
                    Trusted by Fortune 500 Leaders & Fast-Growing Tech Innovators
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 items-center justify-center opacity-85 transition-opacity hover:opacity-100">
                {clients.map((client, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center rounded-xl border border-border/40 bg-muted/20 px-4 py-3 text-center transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-xs"
                    >
                        <span className="font-extrabold tracking-tight text-foreground/80 text-sm">
                            {client.name}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-medium">
                            {client.category}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ==========================================
// MAIN COMPONENT: HERO SECTION
// ==========================================
export function HeroSection() {
    return (
        <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-background/95 to-muted/20 pt-10 pb-16 lg:pt-16 lg:pb-24">
            {/* Ambient Background Decorative Elements */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-sky-500/10 blur-3xl opacity-70" />
            <div className="pointer-events-none absolute top-1/3 left-10 -z-10 size-72 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-10 right-10 -z-10 size-80 rounded-full bg-violet-500/10 blur-3xl" />

            {/* Subtle Radial Grid */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
                {/* Upper Hero Grid: Text & Actions (Left) vs Interactive Card (Right) */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
                    {/* Left Column: Heading & Actions */}
                    <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                        <HeroBadge />
                        <HeroHeading />
                        <HeroActions />
                    </div>

                    {/* Right Column: Tech Preview Card */}
                    <div className="lg:col-span-5">
                        <HeroInteractiveCard />
                    </div>
                </div>

                {/* Middle: Metrics Strip */}
                <HeroMetricsStrip />

                {/* Bottom: Client Logos */}
                <HeroClientLogos />
            </div>
        </section>
    );
}

export default HeroSection;
