import { Link } from '@inertiajs/react';
import { home } from '@/routes';

export function BrandLogo() {
    return (
        <Link href={home.url()} className="group flex items-center gap-3">
            <div className="relative flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-indigo-600 to-blue-500 shadow-md transition-transform duration-300 group-hover:scale-105">
                <div className="grid grid-cols-2 gap-1 p-1">
                    <span className="size-2 rounded-xs bg-white" />
                    <span className="size-2 rounded-xs bg-white/70" />
                    <span className="size-2 rounded-xs bg-white/70" />
                    <span className="size-2 rounded-xs bg-white" />
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 ring-inset" />
            </div>
            <div className="flex flex-col">
                <span className="text-xl leading-tight font-bold tracking-tight text-foreground">
                    Pixels
                    <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                        Fort
                    </span>
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">
                    IT Solutions & Services
                </span>
            </div>
        </Link>
    );
}
