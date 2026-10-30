import { Link } from '@inertiajs/react';
import { ArrowUpRight, Clock, Calendar, Eye, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { show as blogShow } from '@/routes/blog';
import type { BlogPost } from '../types';

interface BlogCardProps {
    post: BlogPost;
    viewMode?: 'grid' | 'list';
}

export function BlogCard({ post, viewMode = 'grid' }: BlogCardProps) {
    const postUrl = blogShow.url({ slug: post.slug });

    if (viewMode === 'list') {
        return (
            <article className="group relative flex flex-col sm:flex-row items-stretch gap-6 border border-border/70 bg-card p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                {/* Visual Banner */}
                <div className="relative aspect-16/9 sm:aspect-4/3 w-full sm:w-64 shrink-0 overflow-hidden">
                    <div
                        className={`absolute inset-0 bg-gradient-to-tr ${post.coverGradient} opacity-90 transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:12px_12px]" />
                    <div className="absolute top-3 left-3">
                        <Badge
                            variant="secondary"
                            className="bg-black/50 text-white backdrop-blur-md text-[10px] font-semibold border-none"
                        >
                            {post.category}
                        </Badge>
                    </div>
                    <div className="absolute bottom-2.5 right-3 flex items-center gap-1 bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-md">
                        <Clock className="size-3" />
                        <span>{post.readingTime}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between space-y-3">
                    <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <Calendar className="size-3" />
                                {post.publishedAt}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                                <Eye className="size-3" />
                                {post.stats.views} reads
                            </span>
                        </div>

                        <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-xl">
                            <Link href={postUrl} className="flex items-start justify-between gap-2">
                                <span>{post.title}</span>
                                <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
                            </Link>
                        </h3>

                        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                            {post.summary}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/40 pt-3">
                        <div className="flex items-center gap-2">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="size-7 object-cover ring-1 ring-primary/20"
                            />
                            <div className="text-xs">
                                <span className="font-semibold text-foreground">
                                    {post.author.name}
                                </span>
                                <span className="text-muted-foreground text-[11px] ml-1.5 hidden md:inline">
                                    • {post.author.role}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                            {post.tags.slice(0, 2).map((t) => (
                                <span
                                    key={t}
                                    className="bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                                >
                                    #{t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    return (
        <article className="group relative flex flex-col justify-between overflow-hidden border border-border/70 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
            {/* Visual Cover Banner */}
            <div className="relative aspect-16/10 w-full overflow-hidden bg-gradient-to-tr">
                <div
                    className={`absolute inset-0 bg-gradient-to-tr ${post.coverGradient} opacity-90 transition-transform duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:14px_14px]" />

                {/* Category & Read Time Chips */}
                <div className="absolute top-3 left-3">
                    <Badge
                        variant="secondary"
                        className="bg-black/50 text-white backdrop-blur-md text-[11px] font-semibold border-none"
                    >
                        {post.category}
                    </Badge>
                </div>

                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/40 px-2 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-md">
                    <Clock className="size-3" />
                    <span>{post.readingTime}</span>
                </div>
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="size-3" />
                        <span>{post.publishedAt}</span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                        <Link href={postUrl} className="flex items-start justify-between gap-1">
                            <span className="line-clamp-2">{post.title}</span>
                            <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
                        </Link>
                    </h3>

                    <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {post.summary}
                    </p>
                </div>

                {/* Footer with Author and Tags */}
                <div className="space-y-3 border-t border-border/40 pt-4">
                    <div className="flex flex-wrap items-center gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                            <span
                                key={tag}
                                className="bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2.5">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="size-7 object-cover ring-1 ring-primary/20"
                            />
                            <div className="text-xs">
                                <div className="font-semibold text-foreground line-clamp-1">
                                    {post.author.name}
                                </div>
                                <div className="text-[10px] text-muted-foreground line-clamp-1">
                                    {post.author.role}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                            <span className="flex items-center gap-0.5" title="Views">
                                <Eye className="size-3" />
                                {post.stats.views}
                            </span>
                            <span className="flex items-center gap-0.5" title="Likes">
                                <Heart className="size-3 text-rose-500/70" />
                                {post.stats.likes}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
