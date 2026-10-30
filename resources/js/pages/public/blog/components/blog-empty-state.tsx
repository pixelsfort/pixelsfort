import { SearchX, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BlogEmptyStateProps {
    searchQuery: string;
    onReset: () => void;
}

export function BlogEmptyState({ searchQuery, onReset }: BlogEmptyStateProps) {
    return (
        <div className="mx-auto flex max-w-md flex-col items-center justify-center border border-dashed border-border/80 bg-card/50 p-10 text-center shadow-xs">
            <div className="flex size-14 items-center justify-center bg-muted text-muted-foreground">
                <SearchX className="size-7" />
            </div>

            <h3 className="mt-4 text-lg font-bold text-foreground">
                No matching articles found
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
                {searchQuery
                    ? `We couldn't find any articles matching "${searchQuery}". Try adjusting your keywords or clearing the filter.`
                    : 'No articles found in the selected category or topic.'}
            </p>

            <Button
                variant="outline"
                size="sm"
                onClick={onReset}
                className="mt-6 gap-2"
            >
                <RotateCcw className="size-3.5" />
                <span>Reset All Filters</span>
            </Button>
        </div>
    );
}

