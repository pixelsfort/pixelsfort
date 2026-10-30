import { ThumbsUp, ThumbsDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function PostFeedback() {
    const [voted, setVoted] = useState<'yes' | 'no' | null>(null);

    return (
        <section className="border border-border/70 bg-card p-6 shadow-xs sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div className="space-y-1">
                    <h3 className="text-base font-bold text-foreground">
                        Was this article helpful to your engineering work?
                    </h3>
                    <p className="text-xs text-muted-foreground">
                        Your direct feedback guides what technical deep dives our systems architects produce next.
                    </p>
                </div>

                {voted ? (
                    <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-2.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="size-4 shrink-0" />
                        <span>Thanks for the feedback! Glad it was helpful.</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setVoted('yes')}
                            className="gap-2 text-xs hover:border-emerald-500/40 hover:text-emerald-600 dark:hover:text-emerald-400"
                        >
                            <ThumbsUp className="size-3.5" />
                            <span>Yes, insightful</span>
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setVoted('no')}
                            className="gap-2 text-xs hover:border-rose-500/40 hover:text-rose-600 dark:hover:text-rose-400"
                        >
                            <ThumbsDown className="size-3.5" />
                            <span>Could be improved</span>
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
