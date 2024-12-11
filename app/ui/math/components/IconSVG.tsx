export const IconSVG = ({ id, className = '', size = 24, color = 'currentColor' }: IconSVGProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            fill={color}
            aria-hidden="true"
        >
            <use xlinkHref={`/sprite.svg#${id}`} />
        </svg>
    );
};

interface IconSVGProps {
    id: number,
    className?: string,
    size?: number,
    color?: string
}

