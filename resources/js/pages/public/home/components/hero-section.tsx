import { Link, usePage } from '@inertiajs/react';
import { motion, animate } from 'framer-motion';
import {
    ArrowRight,
    Sparkles,
    Cpu,
    ShieldCheck,
    Zap,
    CheckCircle2,
    BrainCircuit,
} from 'lucide-react';
import {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
    useImperativeHandle,
    forwardRef,
} from 'react';
import { Button } from '@/components/ui/button';
import { register, dashboard } from '@/routes';
import type { Auth } from '@/types';

// ==========================================
// 1. PIXEL CURSOR TRAILING BACKGROUND
// Powered by Framer Motion animation engine
// ==========================================
export interface PixelTrailBackgroundRef {
    triggerPixel: (col: number, row: number) => void;
    blockSize: number;
}

export const PixelTrailBackground = forwardRef<
    PixelTrailBackgroundRef,
    { className?: string }
>(function PixelTrailBackground({ className = '' }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const pixelRefs = useRef<Map<string, HTMLDivElement>>(new Map());
    const [dimensions, setDimensions] = useState<{
        width: number;
        height: number;
    }>({
        width: 0,
        height: 0,
    });

    // Measure container dimensions on mount & window resize
    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.clientWidth,
                    height: containerRef.current.clientHeight,
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    // Responsive column count based on container width
    const numCols = useMemo(() => {
        if (dimensions.width === 0) {
            return 20;
        }

        if (dimensions.width < 640) {
            return 12;
        } // Mobile

        if (dimensions.width < 1024) {
            return 18;
        } // Tablet

        return 24; // Desktop
    }, [dimensions.width]);

    // Pixel block size (square blocks)
    const blockSize = useMemo(() => {
        if (dimensions.width === 0) {
            return 0;
        }

        return dimensions.width / numCols;
    }, [dimensions.width, numCols]);

    // Number of vertical rows needed to fill container
    const numRows = useMemo(() => {
        if (dimensions.height === 0 || blockSize === 0) {
            return 0;
        }

        return Math.ceil(dimensions.height / blockSize);
    }, [dimensions.height, blockSize]);

    // Animate a single pixel block using Framer Motion
    const triggerPixel = useCallback((col: number, row: number) => {
        const key = `${col}_${row}`;
        const node = pixelRefs.current.get(key);

        if (!node) {
            return;
        }

        animate(
            node,
            {
                opacity: [1, 0],
                scale: [1.06, 1],
            },
            {
                duration: 0.65,
                ease: 'easeOut',
            },
        );
    }, []);

    useImperativeHandle(
        ref,
        () => ({
            triggerPixel,
            blockSize,
        }),
        [triggerPixel, blockSize],
    );

    // Subtle random idle twinkling so background feels alive
    useEffect(() => {
        const interval = setInterval(() => {
            if (pixelRefs.current.size === 0) {
                return;
            }

            const keys = Array.from(pixelRefs.current.keys());

            if (keys.length === 0) {
                return;
            }

            const randomKey = keys[Math.floor(Math.random() * keys.length)];
            const node = pixelRefs.current.get(randomKey);

            if (node) {
                animate(
                    node,
                    {
                        opacity: [0, 0.45, 0],
                        scale: [1, 1.05, 1],
                    },
                    {
                        duration: 1.4,
                        ease: 'easeInOut',
                    },
                );
            }
        }, 2200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            ref={containerRef}
            className={`pointer-events-none absolute inset-0 z-0 flex overflow-hidden select-none ${className}`}
            aria-hidden="true"
        >
            {numCols > 0 &&
                numRows > 0 &&
                Array.from({ length: numCols }).map((_, colIdx) => (
                    <div
                        key={`col-${colIdx}`}
                        className="flex flex-1 flex-col"
                        style={{ width: `${100 / numCols}%` }}
                    >
                        {Array.from({ length: numRows }).map((_, rowIdx) => (
                            <div
                                key={`cell-${colIdx}-${rowIdx}`}
                                className="relative w-full transition-colors"
                                style={{ height: blockSize }}
                            >
                                <div
                                    ref={(el) => {
                                        const key = `${colIdx}_${rowIdx}`;

                                        if (el) {
                                            pixelRefs.current.set(key, el);
                                        } else {
                                            pixelRefs.current.delete(key);
                                        }
                                    }}
                                    className="pointer-events-none absolute inset-0 bg-primary opacity-0"
                                />
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
});

// ==========================================
// 2. HERO TRANSFORMATION BADGE
// ==========================================
export function HeroBadge() {
    return (
        <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-foreground/90 shadow-xs backdrop-blur-md transition-all hover:border-primary/40 hover:bg-primary/10 dark:bg-primary/10 dark:text-primary-foreground">
            <span className="relative flex size-2 items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping bg-primary opacity-75" />
                <span className="relative inline-flex size-1.5 bg-primary" />
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-primary dark:text-primary-foreground">
                PixelsFort Studio
            </span>
            <span className="text-muted-foreground/50">•</span>
            <span className="text-muted-foreground">
                Digital Engineering & AI Architecture
            </span>
        </div>
    );
}

// ==========================================
// 3. HERO HEADING & VALUE PROPOSITION
// ==========================================
export interface HeroHeadingProps {
    companyName?: string;
}

export function HeroHeading({ companyName = 'PixelsFort' }: HeroHeadingProps) {
    return (
        <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="font-funnel text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl lg:leading-[1.06]">
                Engineering Digital Products with{' '}
                <span className="bg-gradient-to-r from-primary via-indigo-500 to-cyan-500 bg-clip-text text-transparent dark:from-primary dark:via-sky-400 dark:to-teal-300">
                    Pixel Perfection
                </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl md:leading-relaxed">
                {companyName} architects and builds resilient enterprise
                software, intelligent AI platforms, and cloud-native systems
                engineered for scale and measurable business impact.
            </p>
        </div>
    );
}

// ==========================================
// 4. HERO CALL TO ACTIONS
// ==========================================
export function HeroActions() {
    const { auth } = usePage<{ auth: Auth }>().props;

    return (
        <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <Button
                size="lg"
                className="group relative h-12 w-full overflow-hidden px-8 text-base font-semibold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 sm:w-auto"
                asChild
            >
                <Link
                    href={auth?.user ? dashboard.url() : register.url()}
                    id="hero-consult-ai-btn"
                >
                    <Sparkles className="mr-2 size-4 text-primary-foreground transition-transform duration-300 group-hover:rotate-12" />
                    <span>Consult Our Experts</span>
                    <ArrowRight className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
            </Button>

            <Button
                variant="outline"
                size="lg"
                className="h-12 w-full border-border/80 bg-background/60 px-7 text-base font-medium backdrop-blur-md transition-all hover:border-primary/50 hover:bg-accent/60 sm:w-auto"
                asChild
            >
                <a
                    href="#services"
                    id="hero-explore-solutions-btn"
                    className="flex items-center gap-2"
                >
                    <Cpu className="size-4 text-primary" />
                    <span>Explore Capabilities</span>
                </a>
            </Button>
        </div>
    );
}

// ==========================================
// 5. MINIMAL TRUST & GUARANTEES STRIP
// ==========================================
export function HeroTrustStrip() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-4 text-xs font-medium text-muted-foreground">
            <span className="flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-emerald-500" />
                SOC2 & Zero Data-Retention
            </span>
            <span className="hidden text-border sm:inline">•</span>
            <span className="flex items-center gap-1.5">
                <Zap className="size-3.5 text-amber-500" />
                Sub-15ms Edge Latency
            </span>
            <span className="hidden text-border sm:inline">•</span>
            <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-primary" />
                99.99% Uptime Guarantee
            </span>
        </div>
    );
}

// Compatibility alias for previous component
export const HeroMetricsStrip = HeroTrustStrip;
export const HeroClientLogos = HeroTrustStrip;
export function HeroTransformationEngine() {
    return null;
}

// ==========================================
// MAIN COMPONENT: MINIMAL HERO SECTION
// ==========================================
export interface HeroSectionProps {
    companyName?: string;
}

export function HeroSection({ companyName = 'PixelsFort' }: HeroSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const pixelTrailRef = useRef<PixelTrailBackgroundRef>(null);
    const lastPos = useRef<{ col: number; row: number } | null>(null);

    // Coordinate-based mouse pointer trail tracking across the entire hero section
    const handlePointerMove = useCallback(
        (e: React.PointerEvent<HTMLElement>) => {
            if (!sectionRef.current || !pixelTrailRef.current) {
                return;
            }

            const blockSize = pixelTrailRef.current.blockSize;

            if (blockSize <= 0) {
                return;
            }

            const rect = sectionRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
                return;
            }

            const col = Math.floor(x / blockSize);
            const row = Math.floor(y / blockSize);

            // Interpolate points between events to prevent trail gaps during fast mouse sweeps
            if (lastPos.current) {
                const dx = col - lastPos.current.col;
                const dy = row - lastPos.current.row;
                const steps = Math.max(Math.abs(dx), Math.abs(dy));

                if (steps > 1 && steps < 12) {
                    for (let i = 1; i <= steps; i++) {
                        const ic = Math.round(
                            lastPos.current.col + (dx * i) / steps,
                        );
                        const ir = Math.round(
                            lastPos.current.row + (dy * i) / steps,
                        );
                        pixelTrailRef.current.triggerPixel(ic, ir);
                    }
                } else {
                    pixelTrailRef.current.triggerPixel(col, row);
                }
            } else {
                pixelTrailRef.current.triggerPixel(col, row);
            }

            lastPos.current = { col, row };
        },
        [],
    );

    const handlePointerLeave = useCallback(() => {
        lastPos.current = null;
    }, []);

    // Framer motion entrance animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1] as const,
            },
        },
    };

    return (
        <section
            ref={sectionRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-background py-20 sm:py-28 lg:min-h-[86vh] lg:py-36"
        >
            {/* 1. Interactive Pixel Cursor Trailing Background */}
            <PixelTrailBackground ref={pixelTrailRef} />

            {/* 2. Soft Ambient Luminous Vignette Glows */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 -z-1 size-[540px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-primary/10 via-indigo-500/5 to-cyan-500/10 opacity-70 blur-3xl dark:opacity-40" />
            <div className="pointer-events-none absolute inset-0 -z-1 bg-gradient-to-b from-background/20 via-transparent to-background/80" />

            {/* 3. Minimal Content Layer (pointer-events-none on parent allows cursor trailing through text, buttons are pointer-events-auto) */}
            <div className="relative z-10 container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center space-y-8 text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="pointer-events-auto"
                    >
                        <HeroBadge />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="pointer-events-none"
                    >
                        <HeroHeading companyName={companyName} />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="pointer-events-auto"
                    >
                        <HeroActions />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="pointer-events-none"
                    >
                        <HeroTrustStrip />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
