import { MessageSquare, Send, ShieldCheck, Heart } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { CommentItem } from '../types';

interface PostCommentsProps {
    initialComments?: CommentItem[];
}

export function PostComments({ initialComments = [] }: PostCommentsProps) {
    const [comments, setComments] = useState<CommentItem[]>(initialComments);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

    const handleCommentSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !content.trim()) {
            toast.error('Please fill in your name and comment.');

            return;
        }

        const newComment: CommentItem = {
            id: `user-c-${Date.now()}`,
            author: name.trim(),
            avatar: `https://api.dicebear.com/7.x/identicon/svg?seed=${encodeURIComponent(name)}`,
            role: 'Software Engineer',
            date: 'Just now',
            content: content.trim(),
            likes: 0,
        };

        setComments([newComment, ...comments]);
        setName('');
        setEmail('');
        setContent('');
        toast.success('Your comment has been posted!');
    };

    const handleLikeComment = (id: string) => {
        const currentlyLiked = !!likedMap[id];
        setLikedMap((prev) => ({ ...prev, [id]: !currentlyLiked }));

        setComments((prev) =>
            prev.map((c) => {
                if (c.id === id) {
                    return {
                        ...c,
                        likes: currentlyLiked ? c.likes - 1 : c.likes + 1,
                    };
                }

                return c;
            })
        );
    };

    return (
        <section id="discussion" className="space-y-8 border border-border/70 bg-card p-6 shadow-sm sm:p-10">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/50 pb-5">
                <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center bg-primary/10 text-primary">
                        <MessageSquare className="size-5" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-foreground">
                            Engineering Discussion
                        </h3>
                        <p className="text-xs text-muted-foreground">
                            {comments.length} {comments.length === 1 ? 'thought' : 'thoughts'} shared by the community
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="size-4 text-emerald-500" />
                    <span>Constructive & technical comments only</span>
                </div>
            </div>

            {/* Comment Form */}
            <form onSubmit={handleCommentSubmit} className="space-y-4 border border-border/60 bg-muted/20 p-5">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div>
                        <label className="text-xs font-medium text-foreground">Your Name *</label>
                        <Input
                            type="text"
                            placeholder="e.g. Alex Chen"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 h-9 text-xs bg-background"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-foreground">Work Email (private)</label>
                        <Input
                            type="email"
                            placeholder="alex@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 h-9 text-xs bg-background"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-xs font-medium text-foreground">Join the Discussion *</label>
                    <textarea
                        rows={3}
                        placeholder="Share your architectural perspective, benchmark experience, or questions..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="mt-1 w-full border border-input bg-background p-3 text-xs leading-relaxed focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>

                <div className="flex justify-end">
                    <Button type="submit" size="sm" className="gap-2 text-xs font-semibold">
                        <Send className="size-3.5" />
                        <span>Post Comment</span>
                    </Button>
                </div>
            </form>

            {/* Comments List */}
            <div className="space-y-4">
                {comments.map((comment) => {
                    const isLiked = !!likedMap[comment.id];

                    return (
                        <div
                            key={comment.id}
                            className="flex items-start gap-4 border border-border/50 bg-background/50 p-5 transition-colors hover:border-primary/30"
                        >
                            <img
                                src={comment.avatar}
                                alt={comment.author}
                                className="size-10 shrink-0 object-cover ring-1 ring-border"
                            />

                            <div className="flex-1 space-y-2">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                        <div className="text-sm font-bold text-foreground">
                                            {comment.author}
                                        </div>
                                        <div className="text-[11px] text-muted-foreground">
                                            {comment.role} • {comment.date}
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleLikeComment(comment.id)}
                                        className={`flex items-center gap-1.5 border px-2.5 py-1 text-xs transition-colors ${
                                            isLiked
                                                ? 'border-rose-500/40 bg-rose-500/10 text-rose-600 dark:text-rose-400 font-semibold'
                                                : 'border-border/60 text-muted-foreground hover:bg-muted hover:text-foreground'
                                        }`}
                                    >
                                        <Heart className={`size-3.5 ${isLiked ? 'fill-rose-500' : ''}`} />
                                        <span>{comment.likes}</span>
                                    </button>
                                </div>

                                <p className="text-xs leading-relaxed text-foreground/90 sm:text-sm">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
