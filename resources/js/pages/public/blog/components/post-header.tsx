import { Link } from '@inertiajs/react';
import {
    ChevronRight,
    Calendar,
    Clock,
    Eye,
    Share2,
    Check,
    Bookmark,
    Twitter,
    Linkedin,
    Sparkles,
    Type,
} from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { blog, home } from '@/routes';
import type { BlogPost } from '../types';

interface PostHeaderProps {
    post: BlogPost;
    isLargeText: boolean;
    setIsLargeText: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export function PostHeader({ post, isLargeText, setIsLargeText }: PostHeaderProps) {
    const [copied, setCopied] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [following, setFollowing] = useState(false);

    const handleCopy = () => {
        if (typeof window !== 'undefined') {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            toast.success('Article link copied to clipboard!');
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleShareTwitter = () => {
        if (typeof window !== 'undefined') {
            const url = encodeURIComponent(window.location.href);
            const text = encodeURIComponent(`Reading "${post.title}" by ${post.author.name} on PixelsFort Engineering`);
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        }
    };

    const handleShareLinkedIn = () => {
        if (typeof window !== 'undefined') {
            const url = encodeURIComponent(window.location.href);
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        }
    };

    const handleBookmark = () => {
        const nextState = !bookmarked;
        setBookmarked(nextState);

        if (nextState) {
            toast.success('Article saved to your reading list!');
        } else {
            toast.info('Article removed from your reading list.');
        }
    };

    const handleFollow = () => {
        const next = !following;
        setFollowing(next);

        if (next) {
            toast.success(`Following ${post.author.name}!`);
        } else {
            toast.info(`Unfollowed ${post.author.name}.`);
        }
    };

    return (
        <header className="space-y-6 border-b border-border/50 pb-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
                <Link
                    href={home.url()}
                    className="transition-colors hover:text-foreground"
                >
                    Home
                </Link>
                <ChevronRight className="size-3 text-muted-foreground/50" />
                <Link
                    href={blog.url()}
                    className="transition-colors hover:text-foreground"
                >
                    Blog
                </Link>
                <ChevronRight className="size-3 text-muted-foreground/50" />
                <span className="text-primary font-medium">{post.category}</span>
                <ChevronRight className="size-3 text-muted-foreground/50 hidden sm:inline" />
                <span className="line-clamp-1 max-w-[260px] text-foreground font-medium hidden sm:inline">
                    {post.title}
                </span>
            </nav>

            {/* Badges & Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 font-semibold px-3 py-1"
                >
                    {post.category}
                </Badge>

                {post.featured && (
                    <span className="inline-flex items-center gap-1 bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                        <Sparkles className="size-3" />
                        Featured Deep Dive
                    </span>
                )}

                <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5" />
                    Published {post.publishedAt}
                </span>

                {post.updatedAt && (
                    <span className="hidden sm:inline-flex text-muted-foreground/80">
                        (Updated {post.updatedAt})
                    </span>
                )}

                <span>•</span>

                <span className="flex items-center gap-1.5">
                    <Clock className="size-3.5" />
                    {post.readingTime}
                </span>

                <span>•</span>

                <span className="flex items-center gap-1.5">
                    <Eye className="size-3.5" />
                    {post.stats.views} reads
                </span>
            </div>

            {/* Headline Title */}
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-5xl lg:leading-[1.18]">
                {post.title}
            </h1>

            {/* Lead Abstract / Subtitle */}
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                {post.lead}
            </p>

            {/* Author Byline & Social Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-6">
                {/* Author Info */}
                <div className="flex items-center gap-3">
                    <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="size-11 object-cover ring-2 ring-primary/20"
                    />
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-foreground">
                                {post.author.name}
                            </span>
                            <button
                                onClick={handleFollow}
                                className={`text-[11px] font-semibold px-2 py-0.5 transition-colors ${
                                    following
                                        ? 'bg-muted text-muted-foreground'
                                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                                }`}
                            >
                                {following ? 'Following' : '+ Follow'}
                            </button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {post.author.role} at PixelsFort
                        </p>
                    </div>
                </div>

                {/* Social Sharing & Controls */}
                <div className="flex items-center gap-2">
                    {/* Reading Mode / Font Size Toggle */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsLargeText((prev) => !prev)}
                        className={`h-9 gap-1.5 text-xs ${
                            isLargeText ? 'border-primary text-primary bg-primary/5' : ''
                        }`}
                        title="Toggle comfortable large reading font"
                    >
                        <Type className="size-3.5" />
                        <span className="hidden sm:inline">
                            {isLargeText ? 'Standard Size' : 'Large Text'}
                        </span>
                    </Button>

                    {/* Bookmark */}
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={handleBookmark}
                        className={`size-9 transition-colors ${
                            bookmarked ? 'text-primary border-primary bg-primary/10' : ''
                        }`}
                        title={bookmarked ? 'Saved to bookmarks' : 'Bookmark this article'}
                        aria-label="Bookmark article"
                    >
                        <Bookmark className={`size-4 ${bookmarked ? 'fill-primary' : ''}`} />
                    </Button>

                    {/* Copy Link */}
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                        className="h-9 gap-1.5 text-xs"
                        title="Copy article link"
                    >
                        {copied ? (
                            <>
                                <Check className="size-3.5 text-emerald-500" />
                                <span className="text-emerald-500 font-semibold">Copied</span>
                            </>
                        ) : (
                            <>
                                <Share2 className="size-3.5" />
                                <span className="hidden sm:inline">Copy Link</span>
                            </>
                        )}
                    </Button>

                    {/* Twitter Share */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleShareTwitter}
                        className="size-9 text-muted-foreground hover:text-foreground"
                        title="Share on X"
                        aria-label="Share on X"
                    >
                        <Twitter className="size-4" />
                    </Button>

                    {/* LinkedIn Share */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleShareLinkedIn}
                        className="size-9 text-muted-foreground hover:text-foreground"
                        title="Share on LinkedIn"
                        aria-label="Share on LinkedIn"
                    >
                        <Linkedin className="size-4" />
                    </Button>
                </div>
            </div>
        </header>
    );
}
