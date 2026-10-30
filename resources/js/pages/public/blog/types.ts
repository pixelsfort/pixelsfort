export interface Author {
    name: string;
    role: string;
    avatar: string;
    bio: string;
    socials?: {
        twitter?: string;
        github?: string;
        linkedin?: string;
    };
}

export interface CodeBlock {
    language: string;
    filename?: string;
    code: string;
}

export interface Callout {
    type: 'tip' | 'info' | 'warning' | 'quote';
    title?: string;
    message: string;
    author?: string;
}

export interface StatHighlight {
    metric: string;
    label: string;
    description: string;
}

export interface PostSection {
    id: string;
    heading: string;
    subheading?: string;
    paragraphs: string[];
    codeBlock?: CodeBlock;
    callout?: Callout;
    statHighlight?: StatHighlight;
    bullets?: string[];
}

export interface CommentItem {
    id: string;
    author: string;
    avatar: string;
    role: string;
    date: string;
    content: string;
    likes: number;
}

export type BlogCategory =
    | 'All'
    | 'Engineering'
    | 'Cloud & DevOps'
    | 'AI & Data'
    | 'Architecture'
    | 'Cybersecurity';

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    summary: string;
    lead: string;
    keyTakeaways: string[];
    sections: PostSection[];
    conclusion: string;
    category: Exclude<BlogCategory, 'All'>;
    tags: string[];
    publishedAt: string;
    updatedAt?: string;
    readingTime: string;
    featured?: boolean;
    coverGradient: string;
    coverPattern?: 'dots' | 'grid' | 'circuit' | 'mesh';
    author: Author;
    stats: {
        views: string;
        likes: number;
        commentsCount: number;
    };
    comments?: CommentItem[];
}

