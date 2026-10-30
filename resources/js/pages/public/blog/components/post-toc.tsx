import { AlignLeft, Share2, Twitter, Linkedin, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import type { BlogPost, PostSection } from '../types';

interface PostTOCProps {
    post: BlogPost;
    sections: PostSection[];
}

export function PostTOC({ post, sections }: PostTOCProps) {
    const [activeId, setActiveId] = useState<string>(sections[0]?.id || '');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i].id);

                if (element && element.offsetTop <= scrollPosition) {
                    setActiveId(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (id: string) => {
        const elem = document.getElementById(id);

        if (elem) {
            const yOffset = -90;
            const y = elem.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleCopy = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            toast.success('Link copied to clipboard!');
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <aside className="space-y-6">
            {/* Table of Contents Card */}
            <div className="border border-border/70 bg-card p-5 shadow-xs">
                <div className="flex items-center gap-2 border-b border-border/40 pb-3 text-xs font-bold tracking-wider text-foreground uppercase">
                    <AlignLeft className="size-4 text-primary" />
                    <span>Table of Contents</span>
                </div>

                <nav className="mt-4 space-y-1">
                    {sections.map((section) => {
                        const isActive = activeId === section.id;

                        return (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`group flex w-full items-start gap-2.5 py-2 px-2.5 text-left text-xs transition-all ${
                                    isActive
                                        ? 'bg-primary/10 font-bold text-primary dark:bg-primary/20'
                                        : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground'
                                }`}
                            >
                                <span
                                    className={`mt-0.5 size-1.5 shrink-0 transition-transform ${
                                        isActive
                                            ? 'scale-125 bg-primary'
                                            : 'bg-muted-foreground/40 group-hover:bg-primary/60'
                                    }`}
                                />
                                <span className="line-clamp-2 leading-relaxed">
                                    {section.heading}
                                </span>
                            </button>
                        );
                    })}
                </nav>
            </div>

            {/* Author Sidebar Mini Card */}
            <div className="border border-border/70 bg-card p-5 shadow-xs space-y-3">
                <div className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                    Written by
                </div>

                <div className="flex items-center gap-3">
                    <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="size-11 object-cover ring-2 ring-primary/20"
                    />
                    <div>
                        <div className="text-sm font-bold text-foreground">
                            {post.author.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                            {post.author.role}
                        </div>
                    </div>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                    {post.author.bio}
                </p>

                {/* Social links */}
                <div className="flex items-center gap-2 border-t border-border/40 pt-3">
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        {copied ? (
                            <Check className="size-3.5 text-emerald-500" />
                        ) : (
                            <Share2 className="size-3.5" />
                        )}
                        <span>{copied ? 'Copied' : 'Share'}</span>
                    </button>

                    <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                            typeof window !== 'undefined' ? window.location.href : ''
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                        title="Share on X"
                    >
                        <Twitter className="size-3.5" />
                    </a>

                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                            typeof window !== 'undefined' ? window.location.href : ''
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                        title="Share on LinkedIn"
                    >
                        <Linkedin className="size-3.5" />
                    </a>
                </div>
            </div>
        </aside>
    );
}
