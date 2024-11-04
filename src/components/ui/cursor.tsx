"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="absolute size-[40px] pointer-events-none border-[1.5px] border-white bg-white/20 overflow-hidden rounded-full -translate-x-[50%] -translate-y-[50%] z-[60]"
            style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
            }}
        />
    );
}
