import { useEffect, useState } from 'react';

export function PostReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight > 0) {
                const percent = Math.min(
                    100,
                    Math.max(0, (currentScroll / scrollHeight) * 100)
                );
                setProgress(percent);
            }
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 z-50 h-1 w-full bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-primary via-indigo-500 to-sky-400 transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
