import type { SVGAttributes } from 'react';

export default function AppLogoIcon({
    className = 'size-6',
    ...props
}: SVGAttributes<SVGElement>) {
    return (
        <svg
            viewBox="0 0 448 448"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Pixelsfort Logo Icon"
            className={className}
            {...props}
        >
            <path d="M56 308V448H168V364L392 224L280 168L56 308Z" />
            <path d="M56 143.111V257.6L280 114.489L392 171.733V57.2444L280 0L56 143.111Z" />
        </svg>
    );
}

export { AppLogoIcon };
