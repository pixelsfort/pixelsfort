import { Sparkles, Terminal } from 'lucide-react';
import type { BlogPost } from '../types';

interface PostCoverProps {
    post: BlogPost;
}

export function PostCover({ post }: PostCoverProps) {
    return (
        <div className="relative overflow-hidden border border-border/70 shadow-lg">
            {/* Visual Canvas */}
            <div className="relative aspect-21/9 min-h-[220px] w-full overflow-hidden sm:min-h-[300px]">
                <div
                    className={`absolute inset-0 bg-gradient-to-tr ${post.coverGradient} opacity-95`}
                />
                {/* Circuit / Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18)_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

                {/* Subtle glass badges */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 bg-black/40 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md">
                        <Terminal className="size-3.5 text-sky-400" />
                        <span>PixelsFort Architecture Series</span>
                    </span>
                </div>

                <div className="absolute bottom-5 right-5 hidden sm:flex items-center gap-2 bg-black/40 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md">
                    <Sparkles className="size-3.5 text-amber-300" />
                    <span>Verified Production Benchmark</span>
                </div>
            </div>

            {/* Caption Bar */}
            <div className="flex items-center justify-between border-t border-border/50 bg-card/80 px-5 py-2.5 text-[11px] text-muted-foreground backdrop-blur-sm">
                <span>Illustration: System Architecture & Data Flow Topology</span>
                <span>Category: {post.category}</span>
            </div>
        </div>
    );
}

