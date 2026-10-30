import { Link } from '@inertiajs/react';
import { Twitter, Github, Linkedin, ArrowRight } from 'lucide-react';
import { blog } from '@/routes';
import type { Author } from '../types';

interface PostAuthorBioProps {
    author: Author;
}

export function PostAuthorBio({ author }: PostAuthorBioProps) {
    return (
        <section className="relative overflow-hidden border border-border/80 bg-gradient-to-br from-card via-card/90 to-muted/30 p-6 shadow-sm sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <img
                    src={author.avatar}
                    alt={author.name}
                    className="size-20 shrink-0 object-cover ring-2 ring-primary/20 shadow-md"
                />

                <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                            <div className="text-xs font-semibold tracking-wider text-primary uppercase">
                                Written by
                            </div>
                            <h3 className="text-xl font-bold text-foreground">
                                {author.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                                {author.role} at PixelsFort Tech
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-2">
                            {author.socials?.twitter && (
                                <a
                                    href={author.socials.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                    title="Twitter / X"
                                >
                                    <Twitter className="size-4" />
                                </a>
                            )}
                            {author.socials?.github && (
                                <a
                                    href={author.socials.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                    title="GitHub"
                                >
                                    <Github className="size-4" />
                                </a>
                            )}
                            {author.socials?.linkedin && (
                                <a
                                    href={author.socials.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                                    title="LinkedIn"
                                >
                                    <Linkedin className="size-4" />
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {author.bio}
                    </p>

                    <div className="pt-2">
                        <Link
                            href={blog.url()}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline underline-offset-4"
                        >
                            <span>Browse all engineering articles</span>
                            <ArrowRight className="size-3.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
