import {
    CheckCircle2,
    Check,
    Copy,
    Info,
    AlertTriangle,
    Lightbulb,
    Quote,
    Hash,
    Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import type { BlogPost, CodeBlock, Callout, StatHighlight } from '../types';

interface PostContentProps {
    post: BlogPost;
    isLargeText: boolean;
}

function CodeBlockWidget({ block }: { block: CodeBlock }) {
    const [copied, setCopied] = useState(false);

    const handleCopyCode = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(block.code);
            setCopied(true);
            toast.success('Code copied to clipboard!');
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="relative my-6 overflow-hidden border border-border/80 bg-zinc-950 text-zinc-100 shadow-xl">
            {/* Code Block Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-4 py-2.5 text-xs">
                <div className="flex items-center gap-3">
                    {/* Window dots */}
                    <div className="flex items-center gap-1.5">
                        <span className="size-2.5 bg-rose-500/80" />
                        <span className="size-2.5 bg-amber-500/80" />
                        <span className="size-2.5 bg-emerald-500/80" />
                    </div>
                    {block.filename && (
                        <span className="font-mono text-zinc-400 font-medium">
                            {block.filename}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-2">
                    <span className="bg-zinc-800 px-2 py-0.5 font-mono text-[11px] uppercase text-zinc-400">
                        {block.language}
                    </span>

                    <button
                        onClick={handleCopyCode}
                        className="flex items-center gap-1 bg-zinc-800/80 px-2.5 py-1 text-[11px] font-medium text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
                        title="Copy code"
                    >
                        {copied ? (
                            <>
                                <Check className="size-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                            </>
                        ) : (
                            <>
                                <Copy className="size-3" />
                                <span>Copy</span>
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Code content */}
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-zinc-200 sm:text-sm">
                <code>{block.code}</code>
            </pre>
        </div>
    );
}

function CalloutWidget({ callout }: { callout: Callout }) {
    if (callout.type === 'warning') {
        return (
            <div className="my-6 flex items-start gap-3.5 border border-amber-500/30 bg-amber-500/10 p-5 text-amber-900 dark:text-amber-200">
                <AlertTriangle className="mt-0.5 size-5 shrink-0 text-amber-500" />
                <div className="space-y-1 text-xs sm:text-sm">
                    {callout.title && (
                        <div className="font-bold text-amber-900 dark:text-amber-100">
                            {callout.title}
                        </div>
                    )}
                    <p className="leading-relaxed opacity-90">{callout.message}</p>
                </div>
            </div>
        );
    }

    if (callout.type === 'tip') {
        return (
            <div className="my-6 flex items-start gap-3.5 border border-emerald-500/30 bg-emerald-500/10 p-5 text-emerald-900 dark:text-emerald-200">
                <Lightbulb className="mt-0.5 size-5 shrink-0 text-emerald-500" />
                <div className="space-y-1 text-xs sm:text-sm">
                    {callout.title && (
                        <div className="font-bold text-emerald-900 dark:text-emerald-100">
                            {callout.title}
                        </div>
                    )}
                    <p className="leading-relaxed opacity-90">{callout.message}</p>
                </div>
            </div>
        );
    }

    if (callout.type === 'quote') {
        return (
            <blockquote className="my-6 border-l-4 border-primary bg-muted/40 p-5 pl-6 italic">
                <Quote className="size-5 text-primary opacity-60 mb-2" />
                <p className="text-sm leading-relaxed text-foreground sm:text-base font-serif">
                    "{callout.message}"
                </p>
                {callout.author && (
                    <footer className="mt-2 text-xs font-semibold not-italic text-muted-foreground">
                        — {callout.author}
                    </footer>
                )}
            </blockquote>
        );
    }

    // Default Info Callout
    return (
        <div className="my-6 flex items-start gap-3.5 border border-sky-500/30 bg-sky-500/10 p-5 text-sky-900 dark:text-sky-200">
            <Info className="mt-0.5 size-5 shrink-0 text-sky-500" />
            <div className="space-y-1 text-xs sm:text-sm">
                {callout.title && (
                    <div className="font-bold text-sky-900 dark:text-sky-100">
                        {callout.title}
                    </div>
                )}
                <p className="leading-relaxed opacity-90">{callout.message}</p>
            </div>
        </div>
    );
}

function StatHighlightWidget({ stat }: { stat: StatHighlight }) {
    return (
        <div className="my-6 overflow-hidden border border-primary/25 bg-gradient-to-r from-card to-primary/5 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <div className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
                        {stat.metric}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-foreground">
                        {stat.label}
                    </div>
                </div>
                <p className="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {stat.description}
                </p>
            </div>
        </div>
    );
}

export function PostContent({ post, isLargeText }: PostContentProps) {
    const textSizeClass = isLargeText ? 'text-lg sm:text-xl' : 'text-base sm:text-lg';

    return (
        <article className="space-y-10">
            {/* Executive Summary / Key Takeaways Box */}
            <div className="border border-primary/20 bg-primary/5 p-6 sm:p-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-primary uppercase">
                    <Sparkles className="size-4" />
                    <span>Executive Summary & Key Takeaways</span>
                </div>
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {post.keyTakeaways.map((takeaway, idx) => (
                        <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-foreground/90 font-medium"
                        >
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                            <span>{takeaway}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Sections */}
            <div className="space-y-12">
                {post.sections.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className="scroll-mt-28 space-y-4"
                    >
                        {/* Section Heading */}
                        <h2 className="group flex items-center justify-between text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                            <span>{section.heading}</span>
                            <a
                                href={`#${section.id}`}
                                className="opacity-0 transition-opacity group-hover:opacity-100 text-muted-foreground hover:text-primary"
                                aria-label={`Link to ${section.heading}`}
                            >
                                <Hash className="size-5" />
                            </a>
                        </h2>

                        {/* Paragraphs */}
                        <div className={`space-y-4 leading-relaxed text-muted-foreground ${textSizeClass}`}>
                            {section.paragraphs.map((p, pIdx) => (
                                <p key={pIdx}>{p}</p>
                            ))}
                        </div>

                        {/* Stat Highlight Card */}
                        {section.statHighlight && (
                            <StatHighlightWidget stat={section.statHighlight} />
                        )}

                        {/* Code Block */}
                        {section.codeBlock && (
                            <CodeBlockWidget block={section.codeBlock} />
                        )}

                        {/* Callout */}
                        {section.callout && (
                            <CalloutWidget callout={section.callout} />
                        )}

                        {/* Bulleted Points */}
                        {section.bullets && (
                            <ul className="my-4 space-y-2 border border-border/50 bg-card p-4 sm:p-5">
                                {section.bullets.map((b, bIdx) => (
                                    <li
                                        key={bIdx}
                                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed"
                                    >
                                        <span className="mt-1 size-1.5 shrink-0 bg-primary" />
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}
            </div>

            {/* Conclusion */}
            <div className="border border-border/70 bg-muted/30 p-6 sm:p-8 space-y-3">
                <h3 className="text-xl font-bold text-foreground">
                    Architectural Summary
                </h3>
                <p className={`leading-relaxed text-muted-foreground ${textSizeClass}`}>
                    {post.conclusion}
                </p>
            </div>
        </article>
    );
}
