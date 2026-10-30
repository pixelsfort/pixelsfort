import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { blog } from '@/routes';
import { BlogNewsletter } from './components/blog-newsletter';
import { PostAuthorBio } from './components/post-author-bio';
import { PostComments } from './components/post-comments';
import { PostContent } from './components/post-content';
import { PostCover } from './components/post-cover';
import { PostFeedback } from './components/post-feedback';
import { PostHeader } from './components/post-header';
import { PostNavigation } from './components/post-navigation';
import { PostReadingProgress } from './components/post-reading-progress';
import { PostTOC } from './components/post-toc';
import { RelatedPosts } from './components/related-posts';
import { BLOG_POSTS } from './data/blog-posts';
import type { BlogPost } from './types';

interface BlogPostShowProps {
    slug: string;
    post?: BlogPost;
    allPosts?: BlogPost[];
}

export default function BlogPostShow({
    slug,
    post: propPost,
    allPosts: propAllPosts,
}: BlogPostShowProps) {
    const posts = propAllPosts || BLOG_POSTS;
    const post = propPost || posts.find((p) => p.slug === slug) || posts[0];

    const [isLargeText, setIsLargeText] = useState(false);

    // Calculate previous & next posts
    const currentIndex = posts.findIndex((p) => p.id === post.id);
    const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
    const nextPost =
        currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

    if (!post) {
        return (
            <div className="container mx-auto max-w-4xl py-24 text-center">
                <h1 className="text-2xl font-bold">Post not found</h1>
                <p className="mt-2 text-muted-foreground">
                    The requested engineering article does not exist or has been moved.
                </p>
                <Button asChild className="mt-6">
                    <Link href={blog.url()}>Back to Blog</Link>
                </Button>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{`${post.title} - PixelsFort Engineering`}</title>
                <meta name="description" content={post.summary} />
                <meta name="author" content={post.author.name} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.summary} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={post.title} />
                <meta name="twitter:description" content={post.summary} />
            </Head>

            {/* Reading Progress Indicator */}
            <PostReadingProgress />

            <main className="py-10 sm:py-14 lg:py-18">
                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
                    {/* Top Back Link */}
                    <div className="flex items-center justify-between">
                        <Button
                            variant="ghost"
                            size="sm"
                            asChild
                            className="gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
                        >
                            <Link href={blog.url()}>
                                <ArrowLeft className="size-4" />
                                <span>Back to all articles</span>
                            </Link>
                        </Button>

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <BookOpen className="size-3.5 text-primary" />
                            <span>PixelsFort Tech Blog</span>
                        </div>
                    </div>

                    {/* Article Header (Breadcrumb, Meta, Title, Author & Share) */}
                    <PostHeader
                        post={post}
                        isLargeText={isLargeText}
                        setIsLargeText={setIsLargeText}
                    />

                    {/* Hero Visual Cover */}
                    <PostCover post={post} />

                    {/* Two-Column Layout: Main Content + Sticky TOC Sidebar */}
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                        {/* Main Reading Column */}
                        <div className="space-y-12 lg:col-span-8">
                            {/* Rich Article Body */}
                            <PostContent
                                post={post}
                                isLargeText={isLargeText}
                            />

                            {/* Tags cloud */}
                            <div className="flex flex-wrap items-center gap-2 border-t border-border/50 pt-6">
                                <span className="text-xs font-semibold text-muted-foreground">
                                    Tags:
                                </span>
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Feedback Widget */}
                            <PostFeedback />

                            {/* Author Detailed Bio Card */}
                            <PostAuthorBio author={post.author} />

                            {/* Next / Prev Post Navigation */}
                            <PostNavigation
                                prevPost={prevPost}
                                nextPost={nextPost}
                            />

                            {/* Discussion / Comments Section */}
                            <PostComments
                                initialComments={post.comments || []}
                            />
                        </div>

                        {/* Sticky Desktop Sidebar */}
                        <div className="hidden lg:col-span-4 lg:block">
                            <div className="sticky top-24">
                                <PostTOC
                                    post={post}
                                    sections={post.sections}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Related Articles Grid */}
                    <RelatedPosts
                        currentPostId={post.id}
                        category={post.category}
                        allPosts={posts}
                    />

                    {/* Newsletter Subscription Strip */}
                    <BlogNewsletter />
                </div>
            </main>
        </>
    );
}
