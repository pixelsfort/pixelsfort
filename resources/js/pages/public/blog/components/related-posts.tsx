import { Link } from '@inertiajs/react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { blog } from '@/routes';
import type { BlogPost } from '../types';
import { BlogCard } from './blog-card';

interface RelatedPostsProps {
    currentPostId: string;
    category: string;
    allPosts: BlogPost[];
}

export function RelatedPosts({ currentPostId, category, allPosts }: RelatedPostsProps) {
    // Pick posts in same category, or other latest posts excluding current
    const related = allPosts
        .filter((p) => p.id !== currentPostId)
        .sort((a, b) => {
            if (a.category === category && b.category !== category) {
return -1;
}

            if (b.category === category && a.category !== category) {
return 1;
}

            return 0;
        })
        .slice(0, 3);

    if (related.length === 0) {
        return null;
    }

    return (
        <section className="space-y-6 border-t border-border/50 pt-14">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                        <Sparkles className="size-3.5" />
                        <span>Continue Reading</span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        Related Engineering Deep Dives
                    </h3>
                </div>

                <Link
                    href={blog.url()}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline underline-offset-4"
                >
                    <span>View all articles</span>
                    <ArrowRight className="size-3.5" />
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((post) => (
                    <BlogCard key={post.id} post={post} viewMode="grid" />
                ))}
            </div>
        </section>
    );
}
