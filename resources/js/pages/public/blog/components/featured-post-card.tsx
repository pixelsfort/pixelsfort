import { Link } from '@inertiajs/react';
import { ArrowRight, Sparkles, Clock, Calendar, Eye, Heart, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { show as blogShow } from '@/routes/blog';
import type { BlogPost } from '../types';

interface FeaturedPostCardProps {
    post: BlogPost;
}

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
    const postUrl = blogShow.url({ slug: post.slug });

    return (
        <article className="group relative overflow-hidden border border-border/80 bg-card p-6 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5 sm:p-8 lg:p-10">
            {/* Ambient Background Gradient for Featured Card */}
            <div className="pointer-events-none absolute -right-32 -top-32 size-96 bg-gradient-to-br from-primary/10 via-indigo-500/10 to-transparent blur-3xl transition-opacity group-hover:opacity-100" />

            <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
                {/* Visual Preview / Gradient Canvas */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-gradient-to-br lg:col-span-5 lg:aspect-4/3">
                    <div
                        className={`absolute inset-0 bg-gradient-to-tr ${post.coverGradient} opacity-90 transition-transform duration-500 group-hover:scale-105`}
                    />
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 bg-black/40 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                            <Sparkles className="size-3 text-amber-300" />
                            Editor's Choice
                        </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-medium text-white/90 backdrop-blur-md bg-black/30 px-3.5 py-2">
                        <span className="font-semibold">{post.category}</span>
                        <div className="flex items-center gap-1.5">
                            <Clock className="size-3.5 text-white/80" />
                            <span>{post.readingTime}</span>
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="space-y-4 lg:col-span-7">
                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20 font-semibold"
                        >
                            {post.category}
                        </Badge>
                        <span className="flex items-center gap-1">
                            <Calendar className="size-3.5" />
                            {post.publishedAt}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock className="size-3.5" />
                            {post.readingTime}
                        </span>
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                        <Link href={postUrl}>
                            {post.title}
                        </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {post.summary}
                    </p>

                    {/* Tags preview */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {post.tags.slice(0, 4).map((tag) => (
                            <span
                                key={tag}
                                className="bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Author & Action Row */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/50 pt-5">
                        <div className="flex items-center gap-3">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="size-10 object-cover ring-2 ring-primary/20"
                            />
                            <div>
                                <div className="text-sm font-semibold text-foreground">
                                    {post.author.name}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                    {post.author.role}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1" title="Views">
                                    <Eye className="size-3.5" />
                                    {post.stats.views}
                                </span>
                                <span className="flex items-center gap-1" title="Likes">
                                    <Heart className="size-3.5 text-rose-500" />
                                    {post.stats.likes}
                                </span>
                                <span className="flex items-center gap-1" title="Comments">
                                    <MessageSquare className="size-3.5" />
                                    {post.stats.commentsCount}
                                </span>
                            </div>

                            <Button asChild size="sm" className="group/btn gap-2 font-semibold">
                                <Link href={postUrl}>
                                    <span>Read Article</span>
                                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
