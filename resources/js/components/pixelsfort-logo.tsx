import type { SVGAttributes } from 'react';

export interface PixelsfortLogoProps extends SVGAttributes<SVGElement> {
    /**
     * Color for the icon mark. Defaults to Pixelsfort Royal Blue (#0034ED).
     */
    iconColor?: string;
    /**
     * Color for the text. Defaults to 'currentColor' (inherits text color).
     */
    textColor?: string;
    /**
     * Custom class for the mark group/paths.
     */
    iconClassName?: string;
    /**
     * Custom class for the wordmark path.
     */
    textClassName?: string;
}

/**
 * Pixelsfort Full Logo Component (Icon Mark + Wordmark).
 * Aspect ratio is ~278:49.
 */
export function PixelsfortLogo({
    iconColor = '#0034ED',
    textColor = 'currentColor',
    iconClassName = '',
    textClassName = '',
    className = 'h-8 w-auto',
    ...props
}: PixelsfortLogoProps) {
    return (
        <svg
            viewBox="0 0 278 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Pixelsfort"
            className={className}
            {...props}
        >
            {/* Pixelsfort Icon Mark */}
            <g fill={iconColor} className={iconClassName}>
                <path d="M0 33V48H12V39L36 24L24 18L0 33Z" />
                <path d="M0 15.333V27.6L24 12.267L36 18.4V6.133L24 0L0 15.333Z" />
            </g>
            {/* Pixelsfort Logotype Text */}
            <path
                fill={textColor}
                fillRule="evenodd"
                className={textClassName}
                d="M0 33V48H12V39L36 24L24 18L0 33Z"
            />
        </svg>
    );
}

export default PixelsfortLogo;
