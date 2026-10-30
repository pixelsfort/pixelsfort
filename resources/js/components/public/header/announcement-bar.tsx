import { Sparkles, PhoneCall } from 'lucide-react';

export function AnnouncementBar() {
    return (
        <div className="hidden border-b border-border/40 bg-gradient-to-r from-primary/10 via-accent/20 to-primary/10 py-1.5 text-xs text-muted-foreground sm:block">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 bg-primary/15 px-2 py-0.5 font-medium text-primary dark:text-primary">
                        <Sparkles className="size-3" />
                        Next-Gen IT
                    </span>
                    <span>
                        Enterprise Cloud Solutions & Custom Software
                        Architecture
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="#contact"
                        className="flex items-center gap-1 font-medium transition-colors hover:text-foreground"
                    >
                        <PhoneCall className="size-3" />
                        +1 (800) 555-PIXEL
                    </a>
                    <span className="text-border">|</span>
                    <a
                        href="#quote"
                        className="font-medium text-primary hover:underline"
                    >
                        Request Tech Consultation &rarr;
                    </a>
                </div>
            </div>
        </div>
    );
}
