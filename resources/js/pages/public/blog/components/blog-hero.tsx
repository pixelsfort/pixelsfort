import { Search, X, Sparkles, BookOpen, Layers, Flame, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { BLOG_CATEGORIES } from '../data/blog-posts';
import type { BlogCategory } from '../types';

interface BlogHeroProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedCategory: BlogCategory;
    setSelectedCategory: (category: BlogCategory) => void;
    categoryCounts: Record<BlogCategory, number>;
    selectedTag: string | null;
    setSelectedTag: (tag: string | null) => void;
    popularTags: string[];
    sortBy: 'latest' | 'popular' | 'reading-time';
    setSortBy: (sort: 'latest' | 'popular' | 'reading-time') => void;
    viewMode: 'grid' | 'list';
    setViewMode: (mode: 'grid' | 'list') => void;
}

export function BlogHero({
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    categoryCounts,
    selectedTag,
    setSelectedTag,
    popularTags,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode,
}: BlogHeroProps) {
    return (
        <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-background via-background/95 to-muted/20 pt-14 pb-12 sm:pt-16 sm:pb-16 lg:pt-20 lg:pb-18">
            {/* Ambient Background Glows */}
            <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[500px] -translate-x-1/2 bg-gradient-to-tr from-primary/15 via-indigo-500/10 to-sky-500/10 opacity-70 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Top Info */}
                <div className="mx-auto max-w-3xl space-y-4 text-center">
                    <div className="inline-flex items-center gap-2 border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary dark:bg-primary/20 dark:text-primary-foreground">
                        <Sparkles className="size-3.5 text-primary" />
                        <span>PixelsFort Engineering & Architecture</span>
                        <span className="text-muted-foreground/60">•</span>
                        <span className="text-muted-foreground font-normal">Technical Insights</span>
                    </div>

                    <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.15]">
                        Insights on{' '}
                        <span className="bg-gradient-to-r from-primary via-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-primary dark:via-sky-400 dark:to-indigo-400">
                            Modern Architecture
                        </span>
                        , Cloud & Systems
                    </h1>

                    <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
                        In-depth deep dives, real-world benchmarks, and production lessons learned from our engineering team in Kathmandu building scalable systems.
                    </p>

                    {/* Search Bar */}
                    <div className="mx-auto mt-6 max-w-xl">
                        <div className="relative flex items-center">
                            <Search className="pointer-events-none absolute left-4 size-4.5 text-muted-foreground" />
                            <Input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search articles by title, tech stack, or topic..."
                                className="h-12 w-full border-border/80 bg-card/90 pr-10 pl-11 text-sm shadow-xs backdrop-blur-xs transition-all focus-visible:border-primary focus-visible:ring-primary/20"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-3.5 p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                                    aria-label="Clear search"
                                >
                                    <X className="size-4" />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Categories & Filter Bar */}
                <div className="mt-10 space-y-5">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {BLOG_CATEGORIES.map((cat) => {
                            const isSelected = selectedCategory === cat;
                            const count = categoryCounts[cat] || 0;

                            return (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setSelectedTag(null);
                                    }}
                                    className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium transition-all sm:text-sm ${
                                        isSelected
                                            ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/25'
                                            : 'border border-border/70 bg-card/60 text-muted-foreground hover:border-primary/40 hover:bg-card hover:text-foreground'
                                    }`}
                                >
                                    <span>{cat}</span>
                                    <span
                                        className={`px-1.5 py-0.5 text-[10px] font-semibold ${
                                            isSelected
                                                ? 'bg-primary-foreground/20 text-primary-foreground'
                                                : 'bg-muted text-muted-foreground'
                                        }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Popular Topic Badges & Sort/View Controls */}
                    <div className="flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-4 md:flex-row">
                        {/* Tags Strip */}
                        <div className="flex flex-wrap items-center gap-1.5 text-xs">
                            <span className="font-medium text-muted-foreground">Topics:</span>
                            {popularTags.map((tag) => {
                                const isTagActive = selectedTag === tag;

                                return (
                                    <button
                                        key={tag}
                                        onClick={() =>
                                            setSelectedTag(isTagActive ? null : tag)
                                        }
                                        className={`px-2.5 py-1 transition-all ${
                                            isTagActive
                                                ? 'bg-primary/20 text-primary font-semibold ring-1 ring-primary/40'
                                                : 'bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground'
                                        }`}
                                    >
                                        #{tag}
                                    </button>
                                );
                            })}
                            {selectedTag && (
                                <button
                                    onClick={() => setSelectedTag(null)}
                                    className="flex items-center gap-1 text-[11px] font-medium text-muted-foreground hover:text-foreground underline underline-offset-2 ml-1"
                                >
                                    Reset topic
                                </button>
                            )}
                        </div>

                        {/* Sort & View Options */}
                        <div className="flex items-center gap-3 self-end md:self-auto">
                            {/* Sort Selector */}
                            <div className="flex items-center border border-border/70 bg-card/60 p-1 text-xs">
                                <button
                                    onClick={() => setSortBy('latest')}
                                    className={`flex items-center gap-1 px-2.5 py-1 font-medium transition-colors ${
                                        sortBy === 'latest'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                    title="Sort by latest publication date"
                                >
                                    <Clock className="size-3.5" />
                                    <span>Latest</span>
                                </button>
                                <button
                                    onClick={() => setSortBy('popular')}
                                    className={`flex items-center gap-1 px-2.5 py-1 font-medium transition-colors ${
                                        sortBy === 'popular'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                    title="Sort by most viewed"
                                >
                                    <Flame className="size-3.5" />
                                    <span>Popular</span>
                                </button>
                                <button
                                    onClick={() => setSortBy('reading-time')}
                                    className={`flex items-center gap-1 px-2.5 py-1 font-medium transition-colors ${
                                        sortBy === 'reading-time'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                    title="Sort by reading time"
                                >
                                    <BookOpen className="size-3.5" />
                                    <span>Read Time</span>
                                </button>
                            </div>

                            {/* View Switcher */}
                            <div className="flex items-center border border-border/70 bg-card/60 p-1 text-xs">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-1.5 transition-colors ${
                                        viewMode === 'grid'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                    title="Grid view"
                                    aria-label="Grid view"
                                >
                                    <Layers className="size-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-1.5 transition-colors ${
                                        viewMode === 'list'
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:text-foreground'
                                    }`}
                                    title="List view"
                                    aria-label="List view"
                                >
                                    <BookOpen className="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
