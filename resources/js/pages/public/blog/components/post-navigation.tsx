import { Link } from '@inertiajs/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { show as blogShow } from '@/routes/blog';
import type { BlogPost } from '../types';

interface PostNavigationProps {
    prevPost?: BlogPost | null;
    nextPost?: BlogPost | null;
}

export function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
    if (!prevPost && !nextPost) {
        return null;
    }

    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-6">
            {/* Previous Post */}
            {prevPost ? (
                <Link
                    href={blogShow.url({ slug: prevPost.slug })}
                    className="group relative flex flex-col justify-between border border-border/70 bg-card p-5 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                >
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                        <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-1" />
                        <span>Previous Article</span>
                    </div>

                    <div className="mt-3 space-y-1">
                        <div className="text-[11px] font-medium text-primary">
                            {prevPost.category}
                        </div>
                        <h4 className="text-sm font-bold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                            {prevPost.title}
                        </h4>
                    </div>

                    <div className="mt-3 text-[11px] text-muted-foreground">
                        {prevPost.readingTime}
                    </div>
                </Link>
            ) : (
                <div className="hidden sm:block" />
            )}

            {/* Next Post */}
            {nextPost ? (
                <Link
                    href={blogShow.url({ slug: nextPost.slug })}
                    className="group relative flex flex-col justify-between text-right border border-border/70 bg-card p-5 shadow-xs transition-all duration-300 hover:border-primary/40 hover:shadow-md"
                >
                    <div className="flex items-center justify-end gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">
                        <span>Next Article</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>

                    <div className="mt-3 space-y-1">
                        <div className="text-[11px] font-medium text-primary">
                            {nextPost.category}
                        </div>
                        <h4 className="text-sm font-bold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                            {nextPost.title}
                        </h4>
                    </div>

                    <div className="mt-3 text-[11px] text-muted-foreground">
                        {nextPost.readingTime}
                    </div>
                </Link>
            ) : (
                <div className="hidden sm:block" />
            )}
        </section>
    );
}
