import { Link } from '@inertiajs/react';
import { Sun, Moon, LayoutGrid, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dashboard, login, register } from '@/routes';
import type { Auth } from '@/types';

interface HeaderActionsProps {
    auth: Auth;
    resolvedAppearance: string;
    toggleTheme: () => void;
}

export function HeaderActions({
    auth,
    resolvedAppearance,
    toggleTheme,
}: HeaderActionsProps) {
    return (
        <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark/Light Mode Toggle */}
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                title={`Switch to ${resolvedAppearance === 'dark' ? 'light' : 'dark'} mode`}
                className="rounded-full text-muted-foreground hover:text-foreground"
            >
                {resolvedAppearance === 'dark' ? (
                    <Sun className="size-4" />
                ) : (
                    <Moon className="size-4" />
                )}
                <span className="sr-only">Toggle theme</span>
            </Button>

            {auth.user ? (
                <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-indigo-600 text-primary-foreground shadow-sm hover:from-primary/90 hover:to-indigo-600/90"
                >
                    <Link href={dashboard.url()}>
                        <LayoutGrid className="mr-2 size-4" />
                        Dashboard
                    </Link>
                </Button>
            ) : (
                <>
                    <Button
                        variant="ghost"
                        asChild
                        className="hidden text-sm font-medium sm:inline-flex"
                    >
                        <Link href={login.url()}>Log in</Link>
                    </Button>
                    <Button
                        asChild
                        className="group relative overflow-hidden bg-gradient-to-r from-primary via-indigo-600 to-blue-600 text-white shadow-md transition-all hover:shadow-indigo-500/25"
                    >
                        <Link href={register.url()}>
                            <span>Get Started</span>
                            <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </>
            )}
        </div>
    );
}
