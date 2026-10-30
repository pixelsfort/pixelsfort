import { Head } from '@inertiajs/react';
import { Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BlogCard } from './components/blog-card';
import { BlogEmptyState } from './components/blog-empty-state';
import { BlogHero } from './components/blog-hero';
import { BlogNewsletter } from './components/blog-newsletter';
import { FeaturedPostCard } from './components/featured-post-card';
import { BLOG_POSTS } from './data/blog-posts';
import type { BlogCategory, BlogPost } from './types';

interface BlogIndexProps {
    initialPosts?: BlogPost[];
}

export default function BlogIndex({ initialPosts }: BlogIndexProps) {
    const posts: BlogPost[] = initialPosts && initialPosts.length > 0 ? initialPosts : BLOG_POSTS;

    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'reading-time'>('latest');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Calculate category counts
    const categoryCounts = useMemo(() => {
        const counts = {
            All: posts.length,
            Engineering: 0,
            'Cloud & DevOps': 0,
            'AI & Data': 0,
            Architecture: 0,
            Cybersecurity: 0,
        } as Record<BlogCategory, number>;

        posts.forEach((p) => {
            if (counts[p.category] !== undefined) {
                counts[p.category]++;
            }
        });

        return counts;
    }, [posts]);

    // Extract popular tags
    const popularTags = useMemo(() => {
        const tagMap = new Map<string, number>();
        posts.forEach((p) => {
            p.tags.forEach((t) => {
                tagMap.set(t, (tagMap.get(t) || 0) + 1);
            });
        });

        return Array.from(tagMap.entries())
            .sort((a, b) => b[1] - a[1])
            .slice(0, 7)
            .map(([tag]) => tag);
    }, [posts]);

    // Filter posts
    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            // Category filter
            if (selectedCategory !== 'All' && post.category !== selectedCategory) {
                return false;
            }

            // Tag filter
            if (selectedTag && !post.tags.includes(selectedTag)) {
                return false;
            }

            // Search query filter (title, summary, tags, author)
            if (searchQuery.trim()) {
                const query = searchQuery.toLowerCase();
                const matchesTitle = post.title.toLowerCase().includes(query);
                const matchesSummary = post.summary.toLowerCase().includes(query);
                const matchesAuthor = post.author.name.toLowerCase().includes(query);
                const matchesTags = post.tags.some((t) => t.toLowerCase().includes(query));

                if (!matchesTitle && !matchesSummary && !matchesAuthor && !matchesTags) {
                    return false;
                }
            }

            return true;
        });
    }, [posts, selectedCategory, selectedTag, searchQuery]);

    // Sort posts
    const sortedPosts = useMemo(() => {
        return [...filteredPosts].sort((a, b) => {
            if (sortBy === 'popular') {
                return b.stats.likes - a.stats.likes;
            }

            if (sortBy === 'reading-time') {
                const aTime = parseInt(a.readingTime) || 0;
                const bTime = parseInt(b.readingTime) || 0;

                return aTime - bTime;
            }

            // default latest
            return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });
    }, [filteredPosts, sortBy]);

    // Distinguish featured post if on first page with no search/tag filter
    const isDefaultView = selectedCategory === 'All' && !selectedTag && !searchQuery.trim();
    const featuredPost = isDefaultView ? sortedPosts.find((p) => p.featured) || sortedPosts[0] : null;
    const regularPosts = featuredPost
        ? sortedPosts.filter((p) => p.id !== featuredPost.id)
        : sortedPosts;

    // Pagination
    const totalPages = Math.ceil(regularPosts.length / postsPerPage) || 1;
    const paginatedPosts = regularPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const handleResetFilters = () => {
        setSearchQuery('');
        setSelectedCategory('All');
        setSelectedTag(null);
        setCurrentPage(1);
    };

    return (
        <>
            <Head>
                <title>Engineering Blog & Architecture Insights - PixelsFort Tech</title>
                <meta
                    name="description"
                    content="Deep dives on high-throughput microservices, Kubernetes cloud architecture, vector databases, and modern frontend systems by PixelsFort Tech engineers."
                />
                <meta
                    name="keywords"
                    content="Software Engineering Blog, Laravel Octane, Microservices, Kubernetes, PostgreSQL pgvector, Distributed Systems, PixelsFort"
                />
            </Head>

            {/* 1. Hero with Search, Filter Tabs & Controls */}
            <BlogHero
                searchQuery={searchQuery}
                setSearchQuery={(q) => {
                    setSearchQuery(q);
                    setCurrentPage(1);
                }}
                selectedCategory={selectedCategory}
                setSelectedCategory={(c) => {
                    setSelectedCategory(c);
                    setCurrentPage(1);
                }}
                categoryCounts={categoryCounts}
                selectedTag={selectedTag}
                setSelectedTag={(t) => {
                    setSelectedTag(t);
                    setCurrentPage(1);
                }}
                popularTags={popularTags}
                sortBy={sortBy}
                setSortBy={setSortBy}
                viewMode={viewMode}
                setViewMode={setViewMode}
            />

            {/* 2. Main Blog Archive Body */}
            <main className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
                    {/* Featured Post Card (Visible on Default View) */}
                    {featuredPost && (
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                                <Sparkles className="size-3.5 text-primary" />
                                <span>Featured Deep Dive</span>
                            </div>
                            <FeaturedPostCard post={featuredPost} />
                        </div>
                    )}

                    {/* Filter result status */}
                    {(selectedCategory !== 'All' || selectedTag || searchQuery) && (
                        <div className="flex flex-wrap items-center justify-between gap-4 border border-border/70 bg-muted/40 px-5 py-3 text-xs sm:text-sm">
                            <div className="text-muted-foreground">
                                Showing{' '}
                                <span className="font-semibold text-foreground">
                                    {sortedPosts.length}
                                </span>{' '}
                                {sortedPosts.length === 1 ? 'article' : 'articles'}
                                {selectedCategory !== 'All' && (
                                    <>
                                        {' '}in{' '}
                                        <span className="font-semibold text-primary">
                                            {selectedCategory}
                                        </span>
                                    </>
                                )}
                                {selectedTag && (
                                    <>
                                        {' '}tagged with{' '}
                                        <span className="font-semibold text-primary">
                                            #{selectedTag}
                                        </span>
                                    </>
                                )}
                                {searchQuery && (
                                    <>
                                        {' '}matching "
                                        <span className="font-semibold text-foreground">
                                            {searchQuery}
                                        </span>
                                        "
                                    </>
                                )}
                            </div>

                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={handleResetFilters}
                                className="h-7 text-xs text-muted-foreground hover:text-foreground"
                            >
                                Clear filters
                            </Button>
                        </div>
                    )}

                    {/* Posts Listing */}
                    {paginatedPosts.length > 0 ? (
                        <div className="space-y-12">
                            {viewMode === 'grid' ? (
                                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                                    {paginatedPosts.map((post) => (
                                        <BlogCard
                                            key={post.id}
                                            post={post}
                                            viewMode="grid"
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {paginatedPosts.map((post) => (
                                        <BlogCard
                                            key={post.id}
                                            post={post}
                                            viewMode="list"
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Pagination Controls */}
                            {totalPages > 1 && (
                                <div className="flex items-center justify-center gap-2 border-t border-border/50 pt-8">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                                        disabled={currentPage === 1}
                                        className="gap-1 text-xs"
                                    >
                                        <ChevronLeft className="size-4" />
                                        <span>Previous</span>
                                    </Button>

                                    <div className="flex items-center gap-1 px-3 text-xs font-medium text-muted-foreground">
                                        Page <span className="font-semibold text-foreground">{currentPage}</span> of{' '}
                                        <span className="font-semibold text-foreground">{totalPages}</span>
                                    </div>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() =>
                                            setCurrentPage((p) => Math.min(totalPages, p + 1))
                                        }
                                        disabled={currentPage === totalPages}
                                        className="gap-1 text-xs"
                                    >
                                        <span>Next</span>
                                        <ChevronRight className="size-4" />
                                    </Button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <BlogEmptyState
                            searchQuery={searchQuery}
                            onReset={handleResetFilters}
                        />
                    )}

                    {/* 3. Newsletter Subscription Strip */}
                    <BlogNewsletter />
                </div>
            </main>
        </>
    );
}
