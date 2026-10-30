import { Link, usePage } from '@inertiajs/react';
import {
    ArrowRight,
    Sparkles,
    BrainCircuit,
    Cpu,
    Bot,
    Workflow,
    ShieldCheck,
    Zap,
    Activity,
    TrendingUp,
    Layers,
    CheckCircle2,
    Lock,
    Globe,
    Terminal,
    Database,
    Play,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { register, dashboard } from '@/routes';
import type { Auth } from '@/types';

// ==========================================
// 1. HERO TRANSFORMATION BADGE
// ==========================================
export function HeroBadge() {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary shadow-xs backdrop-blur-md transition-all hover:border-primary/40 hover:bg-primary/15 dark:bg-primary/20 dark:text-primary-foreground">
            <span className="relative flex size-2 items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex size-1.5 rounded-full bg-primary"></span>
            </span>
            <span className="flex items-center gap-1.5 font-semibold">
                <BrainCircuit className="size-3.5" />
                Enterprise AI Engineering Hub
            </span>
            <span className="text-muted-foreground/60">•</span>
            <span className="hidden text-muted-foreground sm:inline">
                Next-Gen Autonomous Architecture
            </span>
        </div>
    );
}

// ==========================================
// 2. HERO HEADING & VALUE PROPOSITION
// ==========================================
interface HeroHeadingProps {
    companyName?: string;
}

export function HeroHeading({ companyName = 'PixelsFort' }: HeroHeadingProps) {
    return (
        <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.08] xl:text-8xl">
                Enterprise Transformation,{' '}
                <span className="bg-gradient-to-r from-primary via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-primary dark:via-sky-400 dark:to-teal-300">
                    Engineered with AI
                </span>
            </h1>

            <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl lg:leading-relaxed">
                Leading the future with AI-first engineering, {companyName}{' '}
                partners with forward-thinking enterprises to architect, build,
                and scale intelligent platforms, automation systems, and
                next-generation digital products that deliver measurable
                business transformation.
            </p>
        </div>
    );
}

// ==========================================
// 3. HERO CALL TO ACTIONS & TRUST GUARANTEES
// ==========================================
export function HeroActions() {
    const { auth } = usePage<{ auth: Auth }>().props;

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                <Button
                    size="lg"
                    className="group h-12 w-full px-8 text-base font-semibold shadow-xl shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/40 sm:w-auto"
                    asChild
                >
                    <Link
                        href={auth?.user ? dashboard.url() : register.url()}
                        id="hero-consult-ai-btn"
                    >
                        <Sparkles className="mr-2 size-4 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
                        <span>Consult Our AI Experts</span>
                        <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    className="h-12 w-full border-border/80 px-7 text-base font-medium backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-accent/60 sm:w-auto"
                    asChild
                >
                    <a
                        href="#services"
                        id="hero-explore-solutions-btn"
                        className="flex items-center gap-2"
                    >
                        <Cpu className="size-4 text-primary" />
                        <span>Explore AI Capabilities</span>
                    </a>
                </Button>
            </div>

            {/* Enterprise Assurance Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1 text-xs font-medium text-muted-foreground">
                <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-emerald-500" />
                    Zero Data-Retention Guarantee
                </span>
                <span className="hidden text-border sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                    <Zap className="size-3.5 text-amber-500" />
                    48-Hour AI Feasibility Blueprint
                </span>
                <span className="hidden text-border sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                    <Lock className="size-3.5 text-primary" />
                    SOC2 Type II & HIPAA Aligned
                </span>
            </div>
        </div>
    );
}

// ==========================================
// 4. INTERACTIVE ENTERPRISE AI TRANSFORMATION ENGINE
// ==========================================
export function HeroTransformationEngine() {
    const [activePillar, setActivePillar] = useState<
        'platforms' | 'automation' | 'products'
    >('platforms');
    const [simulatedInference, setSimulatedInference] = useState(14);
    const [isSimulating, setIsSimulating] = useState(false);
    const [simulationLogIndex, setSimulationLogIndex] = useState(0);

    const simulationLogs = [
        'Ingesting enterprise multi-source telemetry data stream...',
        'Synthesizing domain knowledge vectors with zero data leakage...',
        'Deploying autonomous agentic reasoning pipeline with SOC2 guardrails...',
        'Execution complete: 3.8x efficiency acceleration verified.',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSimulatedInference(Math.floor(12 + Math.random() * 5));
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const handleRunSimulation = () => {
        setIsSimulating(true);
        setSimulationLogIndex(0);
        const logTimer1 = setTimeout(() => setSimulationLogIndex(1), 700);
        const logTimer2 = setTimeout(() => setSimulationLogIndex(2), 1400);
        const logTimer3 = setTimeout(() => {
            setSimulationLogIndex(3);
            setIsSimulating(false);
        }, 2200);

        return () => {
            clearTimeout(logTimer1);
            clearTimeout(logTimer2);
            clearTimeout(logTimer3);
        };
    };

    return (
        <div className="relative mx-auto w-full max-w-6xl">
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-primary/20 via-indigo-500/15 to-cyan-500/20 opacity-70 blur-3xl dark:from-primary/30 dark:via-indigo-600/25 dark:to-cyan-400/25" />

            {/* Master Console Container */}
            <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-2xl backdrop-blur-xl transition-all duration-300 dark:bg-card/75">
                {/* Console System Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 bg-muted/40 px-5 py-3">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                            <span className="inline-block size-3 rounded-full bg-rose-500/80" />
                            <span className="inline-block size-3 rounded-full bg-amber-500/80" />
                            <span className="inline-block size-3 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                            <Terminal className="size-3.5 text-primary" />
                            enterprise-ai-mesh // cluster-production-v4
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                            Active Inference: {simulatedInference}ms
                        </span>
                        <Badge
                            variant="outline"
                            className="hidden border-primary/30 bg-primary/10 text-[11px] text-primary sm:inline-flex"
                        >
                            99.98% Model Grounding
                        </Badge>
                    </div>
                </div>

                {/* 3 Pillar Strategic Selector Tabs */}
                <div className="grid grid-cols-1 border-b border-border/60 bg-muted/20 sm:grid-cols-3">
                    <button
                        id="hero-tab-intelligent-platforms"
                        onClick={() => setActivePillar('platforms')}
                        className={`flex items-center justify-center gap-2 border-b-2 border-border/40 px-5 py-3.5 text-xs font-semibold transition-all duration-200 sm:border-r sm:border-b-0 ${
                            activePillar === 'platforms'
                                ? 'border-b-primary bg-background text-primary shadow-xs sm:border-b-transparent'
                                : 'text-muted-foreground hover:bg-background/40 hover:text-foreground'
                        }`}
                    >
                        <BrainCircuit className="size-4 shrink-0 text-primary" />
                        <div className="text-left">
                            <div className="font-bold">
                                Intelligent Platforms
                            </div>
                            <div className="hidden text-[10px] font-normal text-muted-foreground md:block">
                                LLM Mesh & Vector RAG Architecture
                            </div>
                        </div>
                    </button>

                    <button
                        id="hero-tab-automation-systems"
                        onClick={() => setActivePillar('automation')}
                        className={`flex items-center justify-center gap-2 border-b-2 border-border/40 px-5 py-3.5 text-xs font-semibold transition-all duration-200 sm:border-r sm:border-b-0 ${
                            activePillar === 'automation'
                                ? 'border-b-primary bg-background text-primary shadow-xs sm:border-b-transparent'
                                : 'text-muted-foreground hover:bg-background/40 hover:text-foreground'
                        }`}
                    >
                        <Bot className="size-4 shrink-0 text-indigo-500" />
                        <div className="text-left">
                            <div className="font-bold">Automation Systems</div>
                            <div className="hidden text-[10px] font-normal text-muted-foreground md:block">
                                Autonomous Agents & Cognitive Workflows
                            </div>
                        </div>
                    </button>

                    <button
                        id="hero-tab-digital-products"
                        onClick={() => setActivePillar('products')}
                        className={`flex items-center justify-center gap-2 border-b-2 border-border/40 px-5 py-3.5 text-xs font-semibold transition-all duration-200 sm:border-b-0 ${
                            activePillar === 'products'
                                ? 'border-b-primary bg-background text-primary shadow-xs sm:border-b-transparent'
                                : 'text-muted-foreground hover:bg-background/40 hover:text-foreground'
                        }`}
                    >
                        <Cpu className="size-4 shrink-0 text-cyan-500" />
                        <div className="text-left">
                            <div className="font-bold">Next-Gen Products</div>
                            <div className="hidden text-[10px] font-normal text-muted-foreground md:block">
                                Cloud-Native Scale & Edge Inference
                            </div>
                        </div>
                    </button>
                </div>

                {/* Pillar Showcase Content Grid */}
                <div className="p-6 sm:p-8">
                    {/* 1. INTELLIGENT PLATFORMS */}
                    {activePillar === 'platforms' && (
                        <div className="grid animate-in grid-cols-1 items-center gap-8 duration-300 fade-in lg:grid-cols-12">
                            <div className="space-y-4 lg:col-span-5">
                                <div className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                                    <Database className="size-3.5" />
                                    Private Enterprise Vector RAG
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                                    Architected for Enterprise LLMs & Zero Data
                                    Leakage
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    We architect secure, scalable neural
                                    platforms that connect corporate data lakes,
                                    custom domain LLMs, and high-precision
                                    vector databases with strict air-gapped
                                    governance.
                                </p>

                                <div className="space-y-2.5 pt-2">
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                        <span>
                                            Sub-second semantic search across
                                            50M+ enterprise documents
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                        <span>
                                            Multi-model orchestration (Llama 3,
                                            Claude, GPT-4, DeepSeek)
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                        <span>
                                            Air-gapped on-premise or sovereign
                                            private cloud deployment
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="space-y-4 rounded-xl border border-border/70 bg-muted/30 p-5">
                                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                                        <span className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
                                            <BrainCircuit className="size-4 text-primary" />
                                            Intelligent Knowledge Pipeline
                                        </span>
                                        <span className="font-mono text-xs font-medium text-emerald-500">
                                            Telemetry: Healthy
                                        </span>
                                    </div>

                                    {/* Architectural Flow Nodes */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                        <div className="rounded-lg border border-border/60 bg-background/80 p-3">
                                            <div className="font-mono text-[11px] text-muted-foreground">
                                                01 // Ingestion
                                            </div>
                                            <div className="mt-1 text-sm font-bold text-foreground">
                                                Data Lakehouse
                                            </div>
                                            <div className="mt-0.5 text-[11px] font-medium text-primary">
                                                Real-time ETL
                                            </div>
                                        </div>
                                        <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
                                            <div className="font-mono text-[11px] font-semibold text-primary">
                                                02 // Vector Index
                                            </div>
                                            <div className="mt-1 text-sm font-bold text-foreground">
                                                Neural Mesh
                                            </div>
                                            <div className="mt-0.5 text-[11px] font-medium text-emerald-500">
                                                &lt; 14ms Latency
                                            </div>
                                        </div>
                                        <div className="rounded-lg border border-border/60 bg-background/80 p-3">
                                            <div className="font-mono text-[11px] text-muted-foreground">
                                                03 // Guardrails
                                            </div>
                                            <div className="mt-1 text-sm font-bold text-foreground">
                                                SOC2 Governance
                                            </div>
                                            <div className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                                                Zero Leakage
                                            </div>
                                        </div>
                                    </div>

                                    {/* Live Simulation Stream */}
                                    <div className="space-y-2 rounded-lg border border-border/60 bg-slate-950 p-4 font-mono text-xs dark:bg-slate-950/80">
                                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                                            <span>
                                                PROMPT REASONING WORKFLOW
                                            </span>
                                            <span className="text-emerald-400">
                                                LIVE FEED
                                            </span>
                                        </div>
                                        <p className="text-slate-200">
                                            <span className="font-bold text-primary">
                                                &gt; Enterprise Query:
                                            </span>{' '}
                                            Synthesize supply chain telemetry
                                            and generate optimization delta.
                                        </p>
                                        <p className="text-[11px] text-emerald-400">
                                            ✓{' '}
                                            {simulationLogs[simulationLogIndex]}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-1">
                                        <span className="text-xs text-muted-foreground">
                                            Target SLA: 99.99% availability
                                        </span>
                                        <button
                                            id="hero-run-simulation-btn"
                                            onClick={handleRunSimulation}
                                            disabled={isSimulating}
                                            className="inline-flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary/20 disabled:opacity-50"
                                        >
                                            <Play className="size-3" />
                                            {isSimulating
                                                ? 'Evaluating Pipeline...'
                                                : 'Test Architecture Pipeline'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 2. AUTOMATION SYSTEMS */}
                    {activePillar === 'automation' && (
                        <div className="grid animate-in grid-cols-1 items-center gap-8 duration-300 fade-in lg:grid-cols-12">
                            <div className="space-y-4 lg:col-span-5">
                                <div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                                    <Workflow className="size-3.5" />
                                    Autonomous Process Automation
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                                    Autonomous Systems that Reclaim Thousands of
                                    Hours
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Deploy autonomous multi-agent swarms capable
                                    of reasoning, orchestrating cross-department
                                    workflows, syncing legacy ERP/CRM systems,
                                    and auto-resolving operational anomalies.
                                </p>

                                <div className="space-y-2.5 pt-2">
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                        <span>
                                            85% reduction in repetitive
                                            operational task cycles
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                        <span>
                                            Autonomous exception routing with
                                            human-in-the-loop oversight
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                        <span>
                                            Seamless legacy SAP, Salesforce, and
                                            enterprise SQL integration
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="space-y-4 rounded-xl border border-border/70 bg-muted/30 p-5">
                                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                                        <span className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
                                            <Bot className="size-4 text-indigo-500" />
                                            Active Multi-Agent Swarm
                                        </span>
                                        <Badge
                                            variant="outline"
                                            className="border-emerald-500/30 bg-emerald-500/10 text-[11px] text-emerald-600"
                                        >
                                            3 Swarms Orchestrating
                                        </Badge>
                                    </div>

                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                        <div className="rounded-lg border border-border/60 bg-background/80 p-3">
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono text-[10px] text-muted-foreground">
                                                    AGENT-01
                                                </span>
                                                <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                                            </div>
                                            <div className="mt-1 text-xs font-bold text-foreground">
                                                Predictive Ingestion
                                            </div>
                                            <div className="mt-0.5 text-[11px] text-muted-foreground">
                                                14,200 events/m
                                            </div>
                                        </div>

                                        <div className="rounded-lg border border-indigo-500/30 bg-indigo-500/5 p-3">
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono text-[10px] font-semibold text-indigo-500">
                                                    AGENT-02
                                                </span>
                                                <span className="size-1.5 animate-pulse rounded-full bg-indigo-500" />
                                            </div>
                                            <div className="mt-1 text-xs font-bold text-foreground">
                                                Cognitive Dispatch
                                            </div>
                                            <div className="mt-0.5 text-[11px] text-indigo-600 dark:text-indigo-400">
                                                Auto-Resolving
                                            </div>
                                        </div>

                                        <div className="rounded-lg border border-border/60 bg-background/80 p-3">
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono text-[10px] text-muted-foreground">
                                                    AGENT-03
                                                </span>
                                                <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
                                            </div>
                                            <div className="mt-1 text-xs font-bold text-foreground">
                                                Compliance Auditor
                                            </div>
                                            <div className="mt-0.5 text-[11px] text-emerald-500">
                                                100% Policy Match
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 rounded-lg border border-border/60 bg-muted/50 p-4">
                                        <div className="flex items-center justify-between text-xs font-semibold text-foreground">
                                            <span>
                                                Monthly Automated Enterprise
                                                Workflows
                                            </span>
                                            <span className="font-bold text-primary">
                                                1,248,500
                                            </span>
                                        </div>
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-border">
                                            <div className="h-2 w-[94%] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                                        </div>
                                        <div className="flex items-center justify-between pt-1 text-[11px] text-muted-foreground">
                                            <span>
                                                Zero Manual Intervention
                                            </span>
                                            <span className="font-medium text-emerald-500">
                                                94.8% Success Rate
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* 3. NEXT-GEN DIGITAL PRODUCTS */}
                    {activePillar === 'products' && (
                        <div className="grid animate-in grid-cols-1 items-center gap-8 duration-300 fade-in lg:grid-cols-12">
                            <div className="space-y-4 lg:col-span-5">
                                <div className="inline-flex items-center gap-1.5 rounded-md bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                                    <Layers className="size-3.5" />
                                    Cloud-Native AI Architecture
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                                    Built for Hyperscale, High Concurrency &
                                    Edge Speed
                                </h3>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    Transform customer experiences with custom
                                    cloud platforms and mobile apps engineered
                                    with embedded AI, real-time edge processing,
                                    and resilient microservice architectures.
                                </p>

                                <div className="space-y-2.5 pt-2">
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                        <span>
                                            Sub-15ms edge routing across 34
                                            global cloud regions
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                        <span>
                                            Elastic auto-scaling Kubernetes
                                            clusters with zero downtime
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                                        <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                                        <span>
                                            Engineered for 500,000+ simultaneous
                                            concurrent sessions
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-7">
                                <div className="space-y-4 rounded-xl border border-border/70 bg-muted/30 p-5">
                                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                                        <span className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground">
                                            <Globe className="size-4 text-cyan-500" />
                                            Distributed Infrastructure Mesh
                                        </span>
                                        <span className="font-mono text-xs font-medium text-cyan-500">
                                            Global Edge Active
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                        <div className="rounded-lg border border-border/60 bg-background/80 p-3">
                                            <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                                                <Zap className="size-3 text-amber-500" />{' '}
                                                Edge Latency
                                            </div>
                                            <div className="mt-1 text-xl font-bold text-foreground">
                                                &lt; 14ms
                                            </div>
                                            <div className="text-[11px] font-medium text-emerald-500">
                                                Global CDN
                                            </div>
                                        </div>

                                        <div className="rounded-lg border border-border/60 bg-background/80 p-3">
                                            <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                                                <Activity className="size-3 text-primary" />{' '}
                                                Throughput
                                            </div>
                                            <div className="mt-1 text-xl font-bold text-foreground">
                                                45k rps
                                            </div>
                                            <div className="text-[11px] font-medium text-primary">
                                                Peak Capacity
                                            </div>
                                        </div>

                                        <div className="col-span-2 rounded-lg border border-border/60 bg-background/80 p-3 sm:col-span-1">
                                            <div className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                                                <ShieldCheck className="size-3 text-emerald-500" />{' '}
                                                SLA Uptime
                                            </div>
                                            <div className="mt-1 text-xl font-bold text-foreground">
                                                99.99%
                                            </div>
                                            <div className="text-[11px] font-medium text-emerald-500">
                                                Zero Failover
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-lg border border-primary/20 bg-primary/5 p-3.5 text-xs">
                                        <div className="mb-1.5 flex items-center justify-between font-medium text-foreground">
                                            <span>
                                                Full-Stack Architecture
                                                Resilience
                                            </span>
                                            <span className="font-bold text-primary">
                                                Grade A+ (Certified)
                                            </span>
                                        </div>
                                        <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                                            <div className="h-2 w-[99%] rounded-full bg-gradient-to-r from-primary via-cyan-500 to-emerald-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Console Footer Telemetry Strip */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 bg-muted/40 px-6 py-3.5 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
                        <span className="font-medium text-foreground">
                            Enterprise AI Acceleration Framework Active
                        </span>
                    </div>

                    <a
                        href="#services"
                        className="group flex items-center gap-1 font-semibold text-primary hover:underline"
                    >
                        <span>Schedule Technical Architecture Discovery</span>
                        <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </a>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 5. MEASURABLE TRANSFORMATION METRICS
// ==========================================
export function HeroMetricsStrip() {
    const stats = [
        {
            value: '85%',
            label: 'Automation Efficiency',
            description: 'Reduction in repetitive operational overhead',
            icon: Bot,
            accent: 'text-primary',
        },
        {
            value: '< 14ms',
            label: 'AI Inference Latency',
            description: 'Global real-time neural edge response',
            icon: Zap,
            accent: 'text-amber-500',
        },
        {
            value: '4.8x',
            label: 'Velocity Acceleration',
            description: 'Faster digital product rollout to market',
            icon: TrendingUp,
            accent: 'text-emerald-500',
        },
        {
            value: '99.99%',
            label: 'Mission-Critical SLA',
            description: 'Zero-downtime enterprise reliability',
            icon: ShieldCheck,
            accent: 'text-indigo-500',
        },
    ];

    return (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((stat, idx) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 shadow-xs backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                                {stat.value}
                            </span>
                            <div
                                className={`rounded-xl bg-muted/60 p-2.5 transition-colors group-hover:bg-primary/10 ${stat.accent}`}
                            >
                                <Icon className="size-5" />
                            </div>
                        </div>
                        <h4 className="mt-2 text-sm font-bold text-foreground">
                            {stat.label}
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {stat.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

// ==========================================
// 6. ENTERPRISE CLIENT TRANSFORMATION ECOSYSTEM
// ==========================================
export function HeroClientLogos() {
    const industries = [
        { name: 'Financial Services', detail: 'Autonomous Fraud & Risk' },
        { name: 'Healthcare & Biotech', detail: 'Clinical Intelligence' },
        { name: 'Global Supply Chain', detail: 'Predictive Routing' },
        { name: 'Enterprise Cloud & SaaS', detail: 'Agentic Workflows' },
        { name: 'Retail & Commerce', detail: 'Hyper-Personalization' },
        { name: 'Aerospace & Telecom', detail: 'Edge Neural Ops' },
    ];

    return (
        <div className="space-y-6 pt-2">
            <div className="text-center">
                <p className="text-xs font-bold tracking-widest text-muted-foreground/80 uppercase">
                    Engineered for Leaders Scaling Mission-Critical Operations
                </p>
            </div>
            <div className="grid grid-cols-2 items-center justify-center gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {industries.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-muted/20 px-4 py-3 text-center transition-all duration-300 hover:border-primary/40 hover:bg-card hover:shadow-xs"
                    >
                        <span className="text-xs font-bold tracking-tight text-foreground/90 sm:text-sm">
                            {item.name}
                        </span>
                        <span className="mt-0.5 text-[10px] font-medium text-muted-foreground">
                            {item.detail}
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
export interface HeroSectionProps {
    companyName?: string;
}

export function HeroSection({ companyName = 'PixelsFort' }: HeroSectionProps) {
    return (
        <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-background/95 to-muted/20 pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32">
            {/* Luminous Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-cyan-500/10 opacity-75 blur-3xl dark:opacity-60" />
            <div className="pointer-events-none absolute top-1/4 left-5 -z-10 size-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="pointer-events-none absolute right-5 bottom-1/4 -z-10 size-96 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* High-Tech Grid Pattern Overlay */}
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:28px_28px] opacity-35 dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)]" />

            <div className="container mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:space-y-20 lg:px-8">
                {/* 1. Top Section: Badge, Massive Heading, Narrative & CTAs */}
                <div className="flex flex-col items-center space-y-8 text-center">
                    <HeroBadge />
                    <HeroHeading companyName={companyName} />
                    <HeroActions />
                </div>

                {/* 2. Centerpiece: Dynamic Enterprise AI Transformation Engine */}
                <HeroTransformationEngine />

                {/* 3. Measurable Transformation Metrics Strip */}
                <HeroMetricsStrip />

                {/* 4. Enterprise Client Ecosystem */}
                <HeroClientLogos />
            </div>
        </section>
    );
}

export default HeroSection;
