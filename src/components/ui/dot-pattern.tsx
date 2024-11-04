import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    cx?: number;
    cy?: number;
    cr?: number;
    className?: string;
}

export default function DotPattern({
    width = 8,
    height = 8,
    x = 0,
    y = 0,
    cx = 4,
    cy = 4,
    cr = 0.3,
    className,
    ...props
}: DotPatternProps) {
    const id = useId();

    return (
        <svg
            aria-hidden="true"
            className={cn(
                "pointer-events-none absolute inset-0 h-full w-full dark:fill-black fill-black",
                className,
            )}
            {...props}
        >
            <defs>
                <pattern
                    id={id}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${id})`}
            />
        </svg>
    );
}
