import { AnimatePresence, motion } from 'framer-motion';
import {
    ArrowRight,
    ChevronRight,
    Code2,
    Cpu,
    Database,
    Layers,
    Smartphone,
    Terminal,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TechItem {
    name: string;
    description: string;
    badge?: string;
    icon: React.ReactNode;
}

interface TechCategory {
    id: string;
    number: string;
    title: string;
    shortTitle: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    technologies: TechItem[];
}

// =========================================================================
// SVG TECH BRAND LOGOS (Clean, lightweight, authentic inline vector graphics)
// =========================================================================
function PythonIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Python"
        >
            <path
                fill="#387EB8"
                d="M63.5 12.3c-27.7 0-26 12-26 12l.1 12.5h26.4v3.8H26.3S12.6 39 12.6 66.8c0 27.7 12 26.6 12 26.6h7.2v-10.1s-.4-12 11.9-12h20.4s11.5.2 11.5-11.2V23.7s1.6-11.4-22.1-11.4zm-13.6 7.4c2.4 0 4.3 1.9 4.3 4.3s-1.9 4.3-4.3 4.3-4.3-1.9-4.3-4.3 1.9-4.3 4.3-4.3z"
            />
            <path
                fill="#FFE052"
                d="M64.5 115.7c27.7 0 26-12 26-12l-.1-12.5H64v-3.8h37.7s13.7 1.6 13.7-26.2c0-27.7-12-26.6-12-26.6h-7.2v10.1s.4 12-11.9 12H63.9s-11.5-.2-11.5 11.2V104s-1.6 11.7 22.1 11.7zm13.6-7.4c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3z"
            />
        </svg>
    );
}

function TypeScriptIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="TypeScript"
        >
            <rect width="128" height="128" rx="16" fill="#3178C6" />
            <path
                fill="#FFF"
                d="M38.8 68.3v7.3H26.5V108H17V75.6H4.7v-7.3h34.1zm22.4 20.3c6.1 0 10.3 2.7 12.4 6.9l-6.9 4.3c-1.3-2.6-3.1-4.2-5.7-4.2-3.8 0-6.1 2.3-6.1 5.3 0 3.3 2.1 4.7 7.2 6.9 8.6 3.7 12.8 7.6 12.8 14.8 0 8.4-6.8 14.7-16.8 14.7-8.3 0-14.2-4.1-16.7-9.7l7.1-4.3c1.7 3.6 4.3 6.1 8.8 6.1 5.1 0 7.7-2.9 7.7-6.2 0-3.6-2.5-5.2-8.3-7.7-8.3-3.6-11.7-7.6-11.7-14 0-7.8 6.2-13.6 16.2-13.6z"
            />
        </svg>
    );
}

function JavaScriptIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="JavaScript"
        >
            <rect width="128" height="128" rx="16" fill="#F7DF1E" />
            <path
                fill="#000"
                d="M67.3 100.8c2.4 4 5.9 6.8 11.2 6.8 5 0 8.3-2.5 8.3-8.8V64.6h15.4v34.4c0 14.9-8.7 21.6-21.5 21.6-11.4 0-18.1-6.1-21.5-13.5l8.1-6.3zm-39.7-2.1c2.8 4.7 7.8 8.1 14.4 8.1 6.1 0 10-3.1 10-7.4 0-5.1-4.1-7-11-10-10-4.3-16.4-9.8-16.4-21 0-11.7 9.1-20.4 23.3-20.4 10.2 0 17.6 3.6 22.8 12.8l-11.7 7.5c-2.5-4.5-5.3-6.5-11.1-6.5-4.5 0-7.7 2.8-7.7 6.4 0 4.4 3.6 6.3 10.2 9.2 11.6 5 17.5 10.3 17.5 21.9 0 12.6-9.9 21.1-25.1 21.1-14.2 0-23.2-6.8-27.4-16.4l12.2-5.3z"
            />
        </svg>
    );
}

function JavaIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Java"
        >
            <path
                fill="#EA2D2E"
                d="M48.2 94.6s-5.6 3.2 4 4.5c11.7 1.5 17.8 1.4 30.8-1.5 0 0 3.7 2.4 8.7 4.5-35.3 14.8-63.5-3.4-43.5-7.5zM44.7 82.2s-6.1 4.5 3.3 5.8c12.3 1.8 21.5 1.9 37.9-2.2 0 0 2.5 1.7 6.1 3.2-40.8 14-67.3-2.9-47.3-6.8z"
            />
            <path
                fill="#5382A1"
                d="M68.5 59.8c5.4 6.2-1.4 11.9-1.4 11.9s13.8-7.1 7.4-16.2c-6.1-8.7-10.8-13-3.2-24.8-17.5 6.4-12.7 19.3-2.8 29.1zM89.7 92.4c17.5-9.1 9.4-25.2 3.7-23.7 1.4.3 2.1 1.7 1.7 3.3-1.6 5.9-10.4 11.2-14.6 13.5 0 0 13.8 2.3 9.2 6.9zM53.8 35.8c-7.6 15.6 5.6 23.3 13.7 29.7 2.4 1.9 4.8 3.8 6.9 6 8.3-9.9-3.9-18.7-11.4-24.3-4-3-6.8-6.7-9.2-11.4z"
            />
        </svg>
    );
}

function DotNetIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label=".NET"
        >
            <rect width="128" height="128" rx="16" fill="#512BD4" />
            <path
                fill="#FFF"
                d="M26 84.7c-3.1 0-5.7-1.1-7.7-3.3-2-2.2-3-5.3-3-9.3V56.6h9.7v15.2c0 1.9.4 3.3 1.3 4.2.9.9 2.1 1.3 3.6 1.3 1.6 0 2.9-.5 3.8-1.4.9-.9 1.4-2.3 1.4-4.2V56.6h9.7v15.5c0 4-1 7.1-3.1 9.3s-5 3.3-8.7 3.3zM56.8 84h-9.7V56.6h9.4l14.8 18.2V56.6H81V84h-9.3L56.8 65.6V84zm38.1 0V56.6h20.7v7.5h-11v3.9h9.8v7h-9.8v9h-9.7z"
            />
        </svg>
    );
}

function PHPIcon() {
    return (
        <svg viewBox="0 0 128 128" className="size-6 shrink-0" aria-label="PHP">
            <path
                fill="#777BB4"
                d="M64 16C28.7 16 0 37.5 0 64s28.7 48 64 48 64-21.5 64-48-28.7-48-64-48z"
            />
            <path
                fill="#FFF"
                d="M40.3 44.5H23.5L16 83.5h9.8l2.5-12.7h6.8c8.9 0 15.3-4.9 16.9-13.3 1.4-7.4-2.8-13-11.7-13zm-3.6 15.6c-.7 3.9-3.7 5.7-7.8 5.7h-3.6l2.3-11.8h4.1c4.2 0 5.8 2.1 5 6.1zm39.1-15.6h-9.8l-7.5 39h9.8l2.5-12.7h7.2l-2.5 12.7h9.8l7.5-39H83.6l-2.5 12.8h-7.2l1.9-12.8zm33.4 0H92.4l-7.5 39h9.8l2.5-12.7h6.8c8.9 0 15.3-4.9 16.9-13.3 1.4-7.4-2.8-13-11.7-13zm-3.6 15.6c-.7 3.9-3.7 5.7-7.8 5.7h-3.6l2.3-11.8h4.1c4.2 0 5.8 2.1 5 6.1z"
            />
        </svg>
    );
}

function GoIcon() {
    return (
        <svg viewBox="0 0 128 128" className="size-6 shrink-0" aria-label="Go">
            <path
                fill="#00ADD8"
                d="M20.5 45.4c1.7 0 3.2-.2 4.6-.7 1.4-.5 2.6-1.2 3.6-2.1l-2.4-3.4c-1.6 1.4-3.5 2.1-5.7 2.1-2.9 0-5.3-1-7.1-3s-2.8-4.7-2.8-8.1c0-3.4.9-6.1 2.8-8.1s4.3-3 7.1-3c2.4 0 4.4.7 6 2.1l2.4-3.5c-1.1-.9-2.4-1.7-3.9-2.2s-3.2-.7-5-.7c-4.4 0-7.9 1.4-10.7 4.3s-4.1 6.5-4.1 11.1c0 4.5 1.4 8.2 4.1 11.1s6.3 4.3 11.1 4.3zm29.8 0c4.3 0 7.8-1.4 10.6-4.3s4.2-6.5 4.2-11c0-4.5-1.4-8.2-4.2-11.1s-6.3-4.3-10.6-4.3-7.8 1.4-10.6 4.3-4.2 6.5-4.2 11.1c0 4.5 1.4 8.2 4.2 11s6.3 4.3 10.6 4.3zm0-4.1c-3 0-5.3-1-7.1-3s-2.7-4.7-2.7-8c0-3.3.9-6 2.7-8s4.1-3 7.1-3 5.4 1 7.2 3 2.7 4.7 2.7 8c0 3.3-.9 6-2.7 8s-4.2 3-7.2 3zm43 2.9l19.5-31.5H97.7l-10.9 18.2-5.4-9.2 17.5-.1 2.9-4.8H76.7l10.8 18.3-14.8 9.1h6.2l12.4-7.7 7.7 13.1 4.5-5.4z"
            />
            <path
                fill="#00ADD8"
                d="M74.3 95.8c-2.4 0-4.4-.7-6-2.1l-2.4 3.5c1.1.9 2.4 1.7 3.9 2.2s3.2.7 5 .7c4.4 0 7.9-1.4 10.7-4.3s4.1-6.5 4.1-11.1c0-4.5-1.4-8.2-4.1-11.1s-6.3-4.3-11.1-4.3c-1.7 0-3.2.2-4.6.7-1.4.5-2.6 1.2-3.6 2.1l2.4 3.4c1.6-1.4 3.5-2.1 5.7-2.1 2.9 0 5.3 1 7.1 3s2.8 4.7 2.8 8.1c0 3.4-.9 6.1-2.8 8.1s-4.2 3.3-7.1 3.3z"
            />
        </svg>
    );
}

function RustIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Rust"
        >
            <circle cx="64" cy="64" r="54" fill="#000" />
            <path
                fill="#FFF"
                d="M64 16c2.8 0 5 2.2 5 5v5.3c3.7.5 7.3 1.4 10.7 2.8l3.7-3.7c2-2 5.1-2 7.1 0l4.2 4.2c2 2 2 5.1 0 7.1l-3.7 3.7c1.4 3.4 2.3 7 2.8 10.7H99c2.8 0 5 2.2 5 5v6c0 2.8-2.2 5-5 5h-5.3c-.5 3.7-1.4 7.3-2.8 10.7l3.7 3.7c2 2 2 5.1 0 7.1l-4.2 4.2c-2 2-5.1 2-7.1 0l-3.7-3.7c-3.4 1.4-7 2.3-10.7 2.8V99c0 2.8-2.2 5-5 5h-6c-2.8 0-5-2.2-5-5v-5.3c-3.7-.5-7.3-1.4-10.7-2.8l-3.7 3.7c-2 2-5.1 2-7.1 0l-4.2-4.2c-2-2-2-5.1 0-7.1l3.7-3.7c-1.4-3.4-2.3-7-2.8-10.7H29c-2.8 0-5-2.2-5-5v-6c0-2.8 2.2-5 5-5h5.3c.5-3.7 1.4-7.3 2.8-10.7l-3.7-3.7c-2-2-2-5.1 0-7.1l4.2-4.2c2-2 5.1-2 7.1 0l3.7 3.7c3.4-1.4 7-2.3 10.7-2.8V21c0-2.8 2.2-5 5-5h6zm-9.3 29.3c-7.9 0-14.3 6.4-14.3 14.3 0 6.2 3.9 11.5 9.4 13.5l-4.5 14.9h8.2l3-10.1h15l3 10.1h8.2l-4.5-14.9c5.5-2 9.4-7.3 9.4-13.5 0-7.9-6.4-14.3-14.3-14.3h-19.6zm7.3 18.2v-7.9h12.3c3.4 0 6.1 2.2 6.1 4s-2.7 3.9-6.1 3.9H62z"
            />
        </svg>
    );
}

function ReactIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="React"
        >
            <ellipse
                cx="64"
                cy="64"
                rx="14"
                ry="34"
                fill="none"
                stroke="#61DAFB"
                strokeWidth="6"
                transform="rotate(30 64 64)"
            />
            <ellipse
                cx="64"
                cy="64"
                rx="14"
                ry="34"
                fill="none"
                stroke="#61DAFB"
                strokeWidth="6"
                transform="rotate(90 64 64)"
            />
            <ellipse
                cx="64"
                cy="64"
                rx="14"
                ry="34"
                fill="none"
                stroke="#61DAFB"
                strokeWidth="6"
                transform="rotate(150 64 64)"
            />
            <circle cx="64" cy="64" r="8" fill="#61DAFB" />
        </svg>
    );
}

function NextJSIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Next.js"
        >
            <circle cx="64" cy="64" r="64" fill="#000" />
            <path
                fill="#FFF"
                d="M87.5 94.6L47.7 44.3H39v39.4h7.5V56.4l35.8 45.4c1.8-2.2 3.6-4.6 5.2-7.2zM80.5 44.3h7.5v28.2l-7.5-9.6V44.3z"
            />
        </svg>
    );
}

function VueIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Vue.js"
        >
            <path
                fill="#41B883"
                d="M78.8 11.5L64 37.2 49.2 11.5H0l64 110.8 64-110.8z"
            />
            <path
                fill="#35495E"
                d="M78.8 11.5L64 37.2 49.2 11.5H25.6l38.4 66.5 38.4-66.5z"
            />
        </svg>
    );
}

function TailwindIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Tailwind CSS"
        >
            <path
                fill="#38BDF8"
                d="M32 48c5.3-21.3 21.3-26.7 37.3-16 10.7 7.1 16 16 26.7 16 10.7 0 16-8.9 16-16-5.3 21.3-21.3 26.7-37.3 16-10.7-7.1-16-16-26.7-16-10.7 0-16 8.9-16 16zm-16 32c5.3-21.3 21.3-26.7 37.3-16 10.7 7.1 16 16 26.7 16 10.7 0 16-8.9 16-16-5.3 21.3-21.3 26.7-37.3 16-10.7-7.1-16-16-26.7-16-10.7 0-16 8.9-16 16z"
            />
        </svg>
    );
}

function LaravelIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Laravel"
        >
            <path
                fill="#FF2D20"
                d="M106.6 28.2L84.8 15.6c-2.4-1.4-5.3-1.4-7.7 0L55.3 28.2c-2.4 1.4-3.8 3.9-3.8 6.7v25.2c0 2.8 1.5 5.3 3.8 6.7l21.8 12.6c2.4 1.4 5.3 1.4 7.7 0l21.8-12.6c2.4-1.4 3.8-3.9 3.8-6.7V34.9c0-2.8-1.4-5.3-3.8-6.7zM48.8 62.1L27 49.5c-2.4-1.4-5.3-1.4-7.7 0L7.5 56.4c-2.4 1.4-3.8 3.9-3.8 6.7v35.8c0 2.8 1.5 5.3 3.8 6.7l21.8 12.6c2.4 1.4 5.3 1.4 7.7 0l21.8-12.6c2.4-1.4 3.8-3.9 3.8-6.7V75.6c0-2.8-1.4-5.3-3.8-6.7L48.8 62.1z"
            />
        </svg>
    );
}

function NodeJSIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Node.js"
        >
            <path
                fill="#5FA04E"
                d="M64 12.3L16.2 39.9v55.2L64 122.7l47.8-27.6V39.9L64 12.3zm25.3 64.9c-1.3 5.3-5.2 8.4-11.4 9.2-8.8 1.1-13.6-2.5-16.1-7.1l6.6-4.2c1.7 3.3 4.4 5.2 9.5 4.5 3.5-.5 5.2-2.1 5.8-4.7.7-3.1-.7-4.6-5.8-5.9l-4.7-1.2c-7.3-1.8-11.1-5.1-9.9-12.1 1.3-7.5 8.1-11.6 17.5-10.4 6.7.9 11.2 4.6 12.9 8.6l-6.5 3.9c-1.2-2.7-3.6-4.7-7.7-5.2-3.8-.5-6.3.8-6.8 3.3-.6 2.8.9 4.3 5.4 5.4l4.6 1.1c8.7 2.1 11.8 6.8 10.6 14.8z"
            />
        </svg>
    );
}

function FlutterIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Flutter"
        >
            <path fill="#45D1FD" d="M74.9 11.5L25.8 60.6l15.1 15.1L90 26.6z" />
            <path fill="#02569B" d="M40.9 75.7L65.5 100l24.5-24.3-15.1-15.1z" />
            <path fill="#0175C2" d="M65.5 100l15.1 15.1 24.5-24.3-15.1-15.1z" />
        </svg>
    );
}

function AWSIcon() {
    return (
        <svg viewBox="0 0 128 128" className="size-6 shrink-0" aria-label="AWS">
            <path
                fill="#FF9900"
                d="M40.6 63.8c0 3.7-1.1 6.5-3.3 8.3-2.2 1.8-5.2 2.7-8.9 2.7-4 0-7.3-.9-9.8-2.6-2.5-1.7-4.1-4.2-4.8-7.5l6.5-1.1c.4 2 1.4 3.5 2.9 4.6 1.5 1.1 3.3 1.6 5.4 1.6 2.1 0 3.8-.5 5-1.4 1.2-.9 1.8-2.2 1.8-3.9 0-1.4-.6-2.6-1.7-3.5-1.1-.9-3.2-1.9-6.3-2.9-4.2-1.4-7.2-2.9-9-4.7-1.8-1.8-2.7-4.2-2.7-7.2 0-3.3 1.2-5.9 3.5-7.8s5.5-2.8 9.5-2.8c3.5 0 6.5.8 8.8 2.3 2.4 1.5 3.9 3.7 4.5 6.6l-6.3 1.2c-.4-1.7-1.3-3-2.7-3.9-1.3-.9-3-1.3-5-1.3-1.8 0-3.3.4-4.4 1.2-1.1.8-1.7 1.9-1.7 3.3 0 1.2.6 2.2 1.7 3 1.1.8 3.1 1.7 6 2.6 4.3 1.4 7.4 3 9.2 4.8 1.8 1.7 2.7 4.1 2.7 7zm69.9 20.3c-14.8 8.4-32.9 12.9-52.4 12.9-18.7 0-36.2-4.1-51.2-11.8l-1.9 4.5C20.6 97.7 39.2 102 59.1 102c21 0 40.5-4.8 56.4-13.8l-5-4.1z"
            />
            <path
                fill="#232F3E"
                d="M62.6 44.4h6.8l11.4 30.1h-7.1l-2.6-7.3H58.4l-2.7 7.3h-7.1l14-30.1zm6.6 17.5l-3.3-9.5-3.4 9.5h6.7zm28.8-17.5h6.8l6.1 22.4 6-22.4h6.3l6 22.4 6.1-22.4h6.7L128 74.5h-6.7l-6-22.1-5.9 22.1h-6.5l-6-22.1-5.9 22.1H84l14-30.1z"
            />
        </svg>
    );
}

function DockerIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Docker"
        >
            <path
                fill="#2496ED"
                d="M117.8 55.4c-1.8-1.3-4.5-1.9-8.4-1.2-.8-5.3-4.4-9.9-9.9-12.7l-4.4-2.2-2.8 4.1c-3.6 5.4-4.4 12.2-2.3 18.2-1.9 1.1-4.2 1.6-6.7 1.6H5.4c-2.4 0-4.5 1.5-5.2 3.8-1.7 5.8-1.5 19 4.8 28.5 7.6 11.5 20.7 17.7 39 18.3 26.2.8 48.9-11 59.7-31.5 11.7.9 21.6-6.4 24.1-17.5.3-1.6.4-3.2.4-4.8-.1-2.1-1.3-3.6-4.4-4.6zM28.4 43.1h11.9v11.9H28.4V43.1zm0-14.7h11.9v11.9H28.4V28.4zm14.7 14.7H55v11.9H43.1V43.1zm0-14.7H55v11.9H43.1V28.4zm14.7 14.7h11.9v11.9H57.8V43.1zm0-14.7h11.9v11.9H57.8V28.4zm14.7 14.7h11.9v11.9H72.5V43.1zM13.7 43.1h11.9v11.9H13.7V43.1z"
            />
        </svg>
    );
}

function KubernetesIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="Kubernetes"
        >
            <path
                fill="#326CE5"
                d="M64 8.7L16.2 36.3v55.4L64 119.3l47.8-27.6V36.3L64 8.7zm0 13.9l35.8 20.7v41.4L64 105.4 28.2 84.7V43.3L64 22.6zm-4.3 19.1v6.9c-4.4.9-8.3 3.1-11.4 6.2l-5.6-4.1-4.3 7.5 5.6 4.1c-1.3 3.9-1.5 8.2-.5 12.3l-6.5 2.4 2.8 8.1 6.5-2.4c2.5 3.3 5.9 5.8 9.9 7.2l-2.4 6.5 8.1 2.8 2.4-6.5c2.3.3 4.6.1 6.8-.5v6.9h8.6v-6.9c4.4-.9 8.3-3.1 11.4-6.2l5.6 4.1 4.3-7.5-5.6-4.1c1.3-3.9 1.5-8.2.5-12.3l6.5-2.4-2.8-8.1-6.5 2.4c-2.5-3.3-5.9-5.8-9.9-7.2l2.4-6.5-8.1-2.8-2.4 6.5c-2.3-.3-4.6-.1-6.8.5v-6.9h-8.6z"
            />
        </svg>
    );
}

function PostgreSQLIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="PostgreSQL"
        >
            <path
                fill="#336791"
                d="M64.7 13.5c-23.8 0-38.3 16.4-38.3 37.9 0 14.1 6.5 26.6 17 33.6v23.2l12.4-7.2c2.8.7 5.7 1.1 8.9 1.1 23.8 0 38.3-16.4 38.3-37.9.1-21.5-14.5-30.7-38.3-30.7zm-9.3 54.4c-3.7 0-6.7-3-6.7-6.7s3-6.7 6.7-6.7 6.7 3 6.7 6.7-3 6.7-6.7 6.7zm24.6 0c-3.7 0-6.7-3-6.7-6.7s3-6.7 6.7-6.7 6.7 3 6.7 6.7-3 6.7-6.7 6.7z"
            />
        </svg>
    );
}

function OpenAIIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="OpenAI"
        >
            <path
                fill="currentColor"
                d="M115.8 53.6c-1.3-11.4-9.2-20.9-20.1-24.1-2.2-6.6-6.8-12-12.9-15.4-9.9-5.6-22-4.9-31.2 1.6-4.6-2.9-10-4.4-15.5-4.4-14 0-26.1 9.4-29.5 23-8.8 4.2-14.5 12.8-14.9 22.6-.5 12.5 7.1 23.6 18.7 27.6 2.2 6.6 6.8 12 12.9 15.4 9.9 5.6 22 4.9 31.2-1.6 4.6 2.9 10 4.4 15.5 4.4 14 0 26.1-9.4 29.5-23 8.8-4.2 14.5-12.8 14.9-22.6.4-12.6-7.2-23.7-18.6-27.9zm-38.9 58.7c-4.4 2.5-9.6 3.2-14.5 1.9l12.4-7.2c2.4-1.4 3.9-4 3.9-6.8V74.8l10.3 6v19.7c0 4.8-5.3 8.6-12.1 11.8zm-47.5-18.7c-3.6-3.6-5.4-8.7-5-13.8l12.4 7.2c2.4 1.4 5.4 1.4 7.8 0l22-12.7v12l-17.1 9.9c-7.3 4.2-15.1 1.7-20.1-2.6zM22.9 45.4c.8-5 3.8-9.5 8.3-12.1l12.4 7.2c2.4 1.4 3.9 4 3.9 6.8v25.4l-10.3-6V47c0-4.8-7.3-8.6-14.3-1.6zm72 13.9l-22 12.7v-12l17.1-9.9c7.3-4.2 15.1-1.7 20.1 2.6 3.6 3.6 5.4 8.7 5 13.8l-12.4-7.2c-2.4-1.4-5.4-1.4-7.8 0zm10.2-10.7c-.8 5-3.8 9.5-8.3 12.1l-12.4-7.2c-2.4-1.4-3.9-4-3.9-6.8V21.3l10.3 6V47c0 4.8 7.3 8.6 14.3 1.6zM56.4 57.6l10-5.8 10 5.8v11.5l-10 5.8-10-5.8V57.6z"
            />
        </svg>
    );
}

function PyTorchIcon() {
    return (
        <svg
            viewBox="0 0 128 128"
            className="size-6 shrink-0"
            aria-label="PyTorch"
        >
            <path
                fill="#EE4C2C"
                d="M66.4 13.2a5.4 5.4 0 00-6.1 1.5l-7.7 8.7a5.4 5.4 0 001.3 8l3.4 2.3c-15.3 5.4-26.2 19.8-26.2 36.8 0 21.3 17.3 38.6 38.6 38.6s38.6-17.3 38.6-38.6c0-17.8-12-32.9-28.5-37.4l3.7-2.5a5.4 5.4 0 001.3-8l-7.7-8.7a5.4 5.4 0 00-7.7-.7z"
            />
            <circle cx="89.6" cy="38.4" r="5.4" fill="#EE4C2C" />
        </svg>
    );
}

// =========================================================================
// TECHNOLOGY CATEGORIES DATA
// =========================================================================
const technologyCategories: TechCategory[] = [
    {
        id: 'languages',
        number: '01',
        title: 'Programming Languages',
        shortTitle: 'Languages',
        description:
            'Foundational languages chosen for type-safety, high concurrency, developer velocity, and long-term enterprise maintainability.',
        icon: Terminal,
        technologies: [
            {
                name: 'Python',
                description: 'AI, Machine Learning & Scientific Automation',
                badge: 'Enterprise AI',
                icon: <PythonIcon />,
            },
            {
                name: 'TypeScript',
                description: 'End-to-End Strict Typing & Scalable Web Apps',
                badge: 'Industry Standard',
                icon: <TypeScriptIcon />,
            },
            {
                name: 'JavaScript',
                description: 'Dynamic Client-Side & Event-Driven Runtimes',
                badge: 'Universal',
                icon: <JavaScriptIcon />,
            },
            {
                name: 'Java',
                description:
                    'Mission-Critical Enterprise Systems & Microservices',
                badge: 'High Scale',
                icon: <JavaIcon />,
            },
            {
                name: '.NET / C#',
                description:
                    'Cloud-Native Distributed Services & Enterprise APIs',
                badge: 'Microsoft Cloud',
                icon: <DotNetIcon />,
            },
            {
                name: 'PHP 8.x',
                description:
                    'Modern JIT-Compiled Backends & Rapid Web Frameworks',
                badge: 'Modern Stack',
                icon: <PHPIcon />,
            },
            {
                name: 'Go',
                description:
                    'Sub-Millisecond Concurrency & High-Throughput Microservices',
                badge: 'Ultra Fast',
                icon: <GoIcon />,
            },
            {
                name: 'Rust',
                description:
                    'Memory-Safe Systems Programming & Zero-Cost Abstractions',
                badge: 'Fault Tolerant',
                icon: <RustIcon />,
            },
        ],
    },
    {
        id: 'frontend',
        number: '02',
        title: 'Frontend Engineering',
        shortTitle: 'Frontend',
        description:
            'Delivering reactive, accessible (WCAG 2.1 AA), and sub-second user experiences with state-of-the-art UI architectures.',
        icon: Layers,
        technologies: [
            {
                name: 'React 19',
                description:
                    'Component-Driven Architecture & Server Components',
                badge: 'Core UI',
                icon: <ReactIcon />,
            },
            {
                name: 'Next.js',
                description: 'Hybrid Static & Server-Side Edge Rendering',
                badge: 'SEO & Speed',
                icon: <NextJSIcon />,
            },
            {
                name: 'Vue.js / Nuxt',
                description: 'Progressive Reactivity & Intuitive State Flow',
                badge: 'Progressive',
                icon: <VueIcon />,
            },
            {
                name: 'Tailwind CSS',
                description:
                    'Utility-First Scalable Design Tokens & Responsive Systems',
                badge: 'Styling',
                icon: <TailwindIcon />,
            },
            {
                name: 'TypeScript UI',
                description: 'Strict Interface Contracts & Zero Runtime Typos',
                badge: 'Type-Safe',
                icon: <TypeScriptIcon />,
            },
            {
                name: 'Inertia.js v3',
                description: 'Monolithic Developer Speed with Modern SPA UX',
                badge: 'Client Engine',
                icon: <ReactIcon />,
            },
            {
                name: 'Framer Motion',
                description: 'Declarative Spring Physics & Gesture Animations',
                badge: 'Micro-UX',
                icon: <Layers className="size-6 text-primary" />,
            },
            {
                name: 'Vite',
                description:
                    'Next-Gen Instant HMR & Optimized Tree-Shaken Bundles',
                badge: 'Build Tool',
                icon: <Code2 className="size-6 text-amber-500" />,
            },
        ],
    },
    {
        id: 'backend',
        number: '03',
        title: 'Backend Engineering / Web Framework',
        shortTitle: 'Backend',
        description:
            'Resilient distributed systems, asynchronous event queues, and REST/GraphQL interfaces engineered for continuous uptime.',
        icon: Code2,
        technologies: [
            {
                name: 'Laravel 12',
                description:
                    'Robust Enterprise Architecture, Eloquent ORM & Queues',
                badge: 'Core PHP Stack',
                icon: <LaravelIcon />,
            },
            {
                name: 'Node.js',
                description: 'Non-Blocking Event Loops & High-Concurrency APIs',
                badge: 'Real-Time',
                icon: <NodeJSIcon />,
            },
            {
                name: 'FastAPI / Django',
                description:
                    'High-Performance Python Microservices & Async Endpoints',
                badge: 'Python API',
                icon: <PythonIcon />,
            },
            {
                name: 'ASP.NET Core',
                description:
                    'Enterprise REST Gateways & Windows/Linux Containers',
                badge: 'Cross-Platform',
                icon: <DotNetIcon />,
            },
            {
                name: 'Spring Boot',
                description:
                    'Fault-Tolerant Distributed Microservices Infrastructure',
                badge: 'Enterprise Core',
                icon: <JavaIcon />,
            },
            {
                name: 'Go Web Engines',
                description:
                    'Minimal Footprint, Sub-Millisecond JSON Processing',
                badge: 'High QPS',
                icon: <GoIcon />,
            },
            {
                name: 'GraphQL',
                description:
                    'Strict Client Data Declarations & Zero Over-Fetching',
                badge: 'API Gateway',
                icon: <Code2 className="size-6 text-rose-500" />,
            },
            {
                name: 'RESTful Microservices',
                description:
                    'Stateless Service Isolation & Resilient Circuit Breakers',
                badge: 'Architecture',
                icon: <Layers className="size-6 text-primary" />,
            },
        ],
    },
    {
        id: 'mobile',
        number: '04',
        title: 'Mobile Application Development',
        shortTitle: 'Mobile',
        description:
            'Cross-platform fluidity, native performance, offline-first synchronization, and seamless App Store releases.',
        icon: Smartphone,
        technologies: [
            {
                name: 'Flutter',
                description:
                    'Single-Codebase iOS & Android with Skia / Impeller Rendering',
                badge: 'Multi-Platform',
                icon: <FlutterIcon />,
            },
            {
                name: 'React Native',
                description:
                    'Native Component Bridges with Seamless Web Shared Code',
                badge: 'Universal JS',
                icon: <ReactIcon />,
            },
            {
                name: 'Swift & SwiftUI',
                description:
                    'Native High-Performance iOS, iPadOS & Apple Watch Apps',
                badge: 'Apple Native',
                icon: <Smartphone className="size-6 text-orange-500" />,
            },
            {
                name: 'Kotlin & Android',
                description:
                    'Modern Android Jetpack Compose & Background Workers',
                badge: 'Android Native',
                icon: <Smartphone className="size-6 text-emerald-500" />,
            },
            {
                name: 'Offline-First Sync',
                description:
                    'Local SQLite/WatermelonDB with Automatic Cloud Conflict Resolution',
                badge: 'Resilient',
                icon: <Database className="size-6 text-primary" />,
            },
            {
                name: 'Push Notification Hubs',
                description:
                    'FCM, APNs & Targeted Segmented Real-Time Telemetry',
                badge: 'Engagement',
                icon: <Smartphone className="size-6 text-amber-500" />,
            },
            {
                name: 'In-App Subscriptions',
                description:
                    'StoreKit 2 & Google Play Billing Integration with Receipt Validation',
                badge: 'Monetization',
                icon: <Layers className="size-6 text-primary" />,
            },
            {
                name: 'Fastlane CI/CD',
                description:
                    'Automated Beta Distribution, Screenshots & App Store Submissions',
                badge: 'Automation',
                icon: <Terminal className="size-6 text-indigo-400" />,
            },
        ],
    },
    {
        id: 'cloud',
        number: '05',
        title: 'Cloud, DevOps & Databases',
        shortTitle: 'Cloud & Data',
        description:
            'Zero-trust cloud infrastructure, automated GitOps CI/CD pipelines, and high-availability database replication.',
        icon: Database,
        technologies: [
            {
                name: 'Amazon Web Services (AWS)',
                description:
                    'Elastic ECS, EKS, Lambda, S3, Aurora & CloudFront CDN',
                badge: 'Cloud Leader',
                icon: <AWSIcon />,
            },
            {
                name: 'Docker',
                description:
                    'Standardized Immutable Containerization & Local Dev Parity',
                badge: 'Containers',
                icon: <DockerIcon />,
            },
            {
                name: 'Kubernetes (K8s)',
                description:
                    'Automated Pod Scaling, Self-Healing & Traffic Balancing',
                badge: 'Orchestration',
                icon: <KubernetesIcon />,
            },
            {
                name: 'PostgreSQL',
                description:
                    'ACID Relational Core, JSONB Document Stores & pgvector',
                badge: 'Primary DB',
                icon: <PostgreSQLIcon />,
            },
            {
                name: 'Redis',
                description:
                    'Sub-Millisecond In-Memory Caching, Pub/Sub & Rate Limiting',
                badge: 'Cache & Queue',
                icon: <Database className="size-6 text-rose-500" />,
            },
            {
                name: 'Terraform (IaC)',
                description:
                    'Reproducible Infrastructure as Code across Multi-Cloud Environments',
                badge: 'GitOps',
                icon: <Layers className="size-6 text-purple-500" />,
            },
            {
                name: 'CI/CD Pipelines',
                description:
                    'Automated Unit, Integration, Lint & Security Vulnerability Checks',
                badge: 'Continuous Deploy',
                icon: <Terminal className="size-6 text-primary" />,
            },
            {
                name: 'Observability & SRE',
                description:
                    'Distributed Tracing, Prometheus, Grafana & 24/7 Health Monitoring',
                badge: '99.99% SLA',
                icon: <Cpu className="size-6 text-emerald-500" />,
            },
        ],
    },
    {
        id: 'ai',
        number: '06',
        title: 'AI, Machine Learning & Automation',
        shortTitle: 'AI & ML',
        description:
            'Production-grade generative AI, retrieval-augmented generation (RAG), and proprietary enterprise model fine-tuning.',
        icon: Cpu,
        technologies: [
            {
                name: 'OpenAI API & GPT-4o',
                description:
                    'Intelligent Enterprise Copilots, Function Calling & Vision',
                badge: 'Generative AI',
                icon: <OpenAIIcon />,
            },
            {
                name: 'PyTorch',
                description:
                    'Custom Neural Network Training, Computer Vision & NLP',
                badge: 'Deep Learning',
                icon: <PyTorchIcon />,
            },
            {
                name: 'LangChain & LlamaIndex',
                description:
                    'Multi-Agent Autonomous Orchestration & Contextual RAG',
                badge: 'Agent Squads',
                icon: <Cpu className="size-6 text-emerald-500" />,
            },
            {
                name: 'Vector Databases',
                description:
                    'Pinecone, Qdrant & pgvector for High-Dimensional Embeddings',
                badge: 'Semantic Search',
                icon: <Database className="size-6 text-primary" />,
            },
            {
                name: 'Hugging Face & Ollama',
                description:
                    'Open-Weight LLMs (Llama 3, Mistral) with Local Privacy Inference',
                badge: 'Self-Hosted AI',
                icon: <Cpu className="size-6 text-amber-500" />,
            },
            {
                name: 'Document Intelligence',
                description:
                    'Automated Invoice, Contract & Structured OCR Data Extraction',
                badge: 'Workflow RPA',
                icon: <Layers className="size-6 text-indigo-400" />,
            },
            {
                name: 'MLOps Pipelines',
                description:
                    'Continuous Model Validation, Feature Stores & Drift Monitoring',
                badge: 'Continuous ML',
                icon: <Terminal className="size-6 text-primary" />,
            },
            {
                name: 'Custom Copilots',
                description:
                    'Fine-Tuned Domain Assistants integrated directly into your SaaS',
                badge: 'Product AI',
                icon: <Cpu className="size-6 text-rose-500" />,
            },
        ],
    },
];

export function TechExpertiseSection() {
    const [activeTab, setActiveTab] = useState<string>(
        technologyCategories[0].id,
    );

    const currentCategory =
        technologyCategories.find((cat) => cat.id === activeTab) ||
        technologyCategories[0];

    const currentCategoryIndex = technologyCategories.findIndex(
        (cat) => cat.id === activeTab,
    );

    return (
        <section
            id="technology-expertise"
            className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28"
        >
            {/* Ambient background glow */}
            <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[640px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
            <div className="pointer-events-none absolute right-0 bottom-0 -z-10 size-[420px] rounded-full bg-primary/5 blur-3xl" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* 1. Header with Title, Accent Bar, and Description */}
                <div className="text-center">
                    <h2 className="font-funnel text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        Our range of{' '}
                        <span className="bg-gradient-to-r from-primary via-indigo-500 to-rose-500 bg-clip-text text-transparent">
                            frameworks
                        </span>{' '}
                        and cutting-edge{' '}
                        <span className="text-foreground">
                            technology expertise
                        </span>
                    </h2>

                    {/* Small signature pink/rose accent divider pill */}
                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-rose-500" />

                    {/* Description Paragraph */}
                    <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        Our technology stack brings together modern frameworks,
                        platforms, programming languages, databases, cloud
                        technologies, and development tools. We select
                        technologies based on solution requirements, ensuring
                        the right foundation for scalable, secure,
                        high-performing, and future-ready digital products.
                    </p>
                </div>

                {/* 2. Interactive Main Card */}
                <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-xl ring-1 ring-border/50 sm:mt-16 sm:rounded-3xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        {/* 2a. Left Sidebar: Categories Navigation List */}
                        <div className="flex flex-col justify-between border-b border-border/80 bg-[#071936] p-6 text-white sm:p-8 lg:col-span-5 lg:border-r lg:border-b-0 xl:col-span-4">
                            <div>
                                <div className="mb-4 flex items-center justify-between px-1">
                                    <span className="text-[11px] font-bold tracking-wider text-primary uppercase">
                                        Core Competencies
                                    </span>
                                    <span className="font-mono text-xs font-medium text-slate-400">
                                        {currentCategory.number} / 0
                                        {technologyCategories.length}
                                    </span>
                                </div>

                                <nav
                                    className="space-y-1"
                                    aria-label="Technology Categories"
                                >
                                    {technologyCategories.map((category) => {
                                        const isActive =
                                            activeTab === category.id;
                                        return (
                                            <button
                                                key={category.id}
                                                type="button"
                                                onClick={() =>
                                                    setActiveTab(category.id)
                                                }
                                                className={cn(
                                                    'group relative flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3.5 text-left text-sm transition-all duration-200',
                                                    isActive
                                                        ? 'bg-primary/20 font-semibold text-white shadow-inner ring-1 ring-primary/40'
                                                        : 'text-slate-300 hover:bg-white/5 hover:text-white',
                                                )}
                                            >
                                                <div className="flex min-w-0 items-center gap-3">
                                                    <span
                                                        className={cn(
                                                            'font-mono text-xs font-bold transition-colors',
                                                            isActive
                                                                ? 'text-primary'
                                                                : 'text-slate-400 group-hover:text-slate-200',
                                                        )}
                                                    >
                                                        {category.number}.
                                                    </span>
                                                    <span className="truncate font-medium">
                                                        {category.title}
                                                    </span>
                                                </div>

                                                <ChevronRight
                                                    className={cn(
                                                        'size-4 shrink-0 transition-transform duration-200',
                                                        isActive
                                                            ? 'translate-x-0.5 text-primary opacity-100'
                                                            : 'text-slate-500 opacity-40 group-hover:translate-x-0.5 group-hover:opacity-90',
                                                    )}
                                                />
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>

                            {/* Sidebar callout footer */}
                            <div className="mt-8 border-t border-white/10 pt-5">
                                <p className="text-xs leading-relaxed text-slate-300">
                                    Need specialized architecture consultation
                                    or a custom framework audit?
                                </p>
                                <a
                                    href="#contact"
                                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:underline"
                                >
                                    <span>Discuss Your Stack With Us</span>
                                    <ArrowRight className="size-3.5" />
                                </a>
                            </div>
                        </div>

                        {/* 2b. Right Main Content Area: Technologies Grid */}
                        <div className="flex flex-col justify-between bg-muted/20 p-6 sm:p-8 lg:col-span-7 lg:p-10 xl:col-span-8">
                            <div>
                                {/* Category Header */}
                                <div className="mb-6 flex flex-col gap-1 border-b border-border/60 pb-5 sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs font-bold text-primary">
                                                {currentCategory.number}
                                            </span>
                                            <h3 className="font-funnel text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                                                {currentCategory.title}
                                            </h3>
                                        </div>
                                        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                                            {currentCategory.description}
                                        </p>
                                    </div>

                                    <div className="mt-2 shrink-0 sm:mt-0">
                                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                                            {
                                                currentCategory.technologies
                                                    .length
                                            }{' '}
                                            Technologies
                                        </span>
                                    </div>
                                </div>

                                {/* Animated Technology Cards Grid (2-column layout matching screenshot) */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentCategory.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            duration: 0.22,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4"
                                    >
                                        {currentCategory.technologies.map(
                                            (tech) => (
                                                <div
                                                    key={tech.name}
                                                    className="group flex items-center gap-3.5 rounded-xl border border-border/80 bg-card p-3.5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-4"
                                                >
                                                    {/* Brand Logo Container */}
                                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted/60 p-2 transition-transform duration-200 group-hover:scale-105">
                                                        {tech.icon}
                                                    </div>

                                                    {/* Text details */}
                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center justify-between gap-1.5">
                                                            <h4 className="truncate text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                                                                {tech.name}
                                                            </h4>
                                                            {tech.badge && (
                                                                <span className="shrink-0 rounded-xs bg-primary/10 px-1.5 py-0.5 text-[9px] font-semibold text-primary">
                                                                    {tech.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                                                            {tech.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Right area bottom strip */}
                            <div className="mt-8 flex flex-col gap-3 rounded-xl border border-border/60 bg-card/60 p-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
                                    <span>
                                        Enterprise production-tested with zero
                                        downtime deployment pipelines.
                                    </span>
                                </div>
                                <div className="flex shrink-0 items-center gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        asChild
                                        className="h-8 cursor-pointer text-xs font-semibold"
                                    >
                                        <a href="#contact">
                                            Request Tech Audit
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
