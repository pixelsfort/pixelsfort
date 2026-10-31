import { Link } from '@inertiajs/react';
import { LayoutGrid, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dashboard } from '@/routes';
import type { Auth } from '@/types';

interface HeaderActionsProps {
    auth: Auth;
}

export function HeaderActions({ auth }: HeaderActionsProps) {
    return (
        <div className="flex items-center gap-2 sm:gap-3">
            {auth.user && (
                <Button
                    variant="outline"
                    asChild
                    className="hidden text-sm font-medium sm:inline-flex"
                >
                    <Link href={dashboard.url()}>
                        <LayoutGrid className="mr-2 size-4" />
                        Dashboard
                    </Link>
                </Button>
            )}

            <Button
                asChild
                className="hidden group relative overflow-hidden bg-gradient-to-r from-primary via-indigo-600 to-blue-600 text-white shadow-md transition-all hover:shadow-indigo-500/25 sm:inline-flex"
            >
                <a href="#contact">
                    <span>Contact Us</span>
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                </a>
            </Button>
        </div>
    );
}
