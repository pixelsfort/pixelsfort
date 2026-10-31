import type { LucideIcon } from 'lucide-react';
import {
    ArrowRight,
    Award,
    BarChart,
    BookOpen,
    Briefcase,
    Building2,
    Check,
    CheckCircle2,
    ChevronDown,
    Circle,
    Cloud,
    Code2,
    Compass,
    Cpu,
    Database,
    ExternalLink,
    FileText,
    Folder,
    Globe,
    Headphones,
    Heart,
    HeartHandshake,
    HelpCircle,
    Layers,
    LayoutGrid,
    Lock,
    Mail,
    MessageSquare,
    Palette,
    Phone,
    PhoneCall,
    RefreshCw,
    Rocket,
    Search,
    Send,
    Shield,
    ShieldCheck,
    ShoppingCart,
    Smartphone,
    Sparkles,
    Star,
    Tag,
    Terminal,
    TrendingUp,
    Users,
    Workflow,
    Zap,
} from 'lucide-react';

const baseIconMap: Record<string, LucideIcon> = {
    ArrowRight,
    Award,
    BarChart,
    BookOpen,
    Briefcase,
    Building2,
    Check,
    CheckCircle2,
    ChevronDown,
    Circle,
    Cloud,
    Code2,
    Compass,
    Cpu,
    Database,
    ExternalLink,
    FileText,
    Folder,
    Globe,
    Headphones,
    Heart,
    HeartHandshake,
    HelpCircle,
    Layers,
    LayoutGrid,
    Lock,
    Mail,
    MessageSquare,
    Palette,
    Phone,
    PhoneCall,
    RefreshCw,
    Rocket,
    Search,
    Send,
    Shield,
    ShieldCheck,
    ShoppingCart,
    Smartphone,
    Sparkles,
    Star,
    Tag,
    Terminal,
    TrendingUp,
    Users,
    Workflow,
    Zap,
};

// Create a normalized lookup map to support PascalCase, camelCase, kebab-case, lowercase
const normalizedIconMap = new Map<string, LucideIcon>();

for (const [key, icon] of Object.entries(baseIconMap)) {
    normalizedIconMap.set(key, icon);
    normalizedIconMap.set(key.toLowerCase(), icon);
    normalizedIconMap.set(key.toLowerCase().replace(/[-_]/g, ''), icon);
}

export function getNavIcon(name?: string | null): LucideIcon | null {
    if (!name) return null;
    const directMatch = normalizedIconMap.get(name);
    if (directMatch) return directMatch;

    const normalized = name.toLowerCase().replace(/[-_]/g, '');
    return normalizedIconMap.get(normalized) || Circle;
}

interface NavIconProps {
    name?: string | null;
    className?: string;
    fallback?: LucideIcon;
}

export function NavIcon({ name, className, fallback = Circle }: NavIconProps) {
    if (!name) return null;
    const IconComponent = getNavIcon(name) || fallback;
    return <IconComponent className={className} />;
}

