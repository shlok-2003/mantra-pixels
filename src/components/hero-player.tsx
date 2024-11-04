"use client";

import { useEffect } from "react";
import DotPattern from "./ui/dot-pattern";

export default function HeroPlayer() {
    useEffect(() => {
        const videoElement = document.getElementById("hero-video");
        if (videoElement) {
            setTimeout(() => {
                videoElement.style.display = "block"; // Show the video after 3000 seconds
            }, 3000);
        }
    }, []);

    return (
        <div className="relative w-full h-[calc(100vh-6rem)]">
            <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                id="hero-video"
                style={{ display: "none" }}
            >
                <source src="/hero.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>

            {/* <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 0.5px 0.5px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0.5px)
                    `,
                    backgroundSize: "4px 4px",
                }}
                aria-hidden="true"
            /> */}
            <DotPattern />
        </div>
    );
}
