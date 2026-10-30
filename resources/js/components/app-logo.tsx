import { usePage } from '@inertiajs/react';

import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    const { name } = usePage().props;

    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center bg-[#0034ED] text-white shadow-xs">
                <AppLogoIcon className="size-5 fill-current text-white" />
            </div>
            <div className="ml-1.5 grid flex-1 text-left text-sm">
                <span className="mb-0.5 truncate leading-tight font-semibold tracking-tight text-foreground">
                    {name}
                </span>
            </div>
        </>
    );
}
