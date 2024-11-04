/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Component() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        const cardsContainer = cardsContainerRef.current;

        if (!container || !cardsContainer) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("card-visible");
                    } else {
                        entry.target.classList.remove("card-visible");
                    }
                });
            },
            { threshold: 0.1 },
        );

        const cards = cardsContainer.querySelectorAll(".card");
        cards.forEach((card) => observer.observe(card));

        const handleScroll = () => {
            const scrollPosition = container.scrollTop;
            const scrollHeight =
                container.scrollHeight - container.clientHeight;
            const percentage = (scrollPosition / scrollHeight) * 100;
            setScrollPercentage(percentage);
        };

        container.addEventListener("scroll", handleScroll);

        return () => {
            cards.forEach((card) => observer.unobserve(card));
            container.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const cardData = [
        {
            image: "offline",
            title: "OFFLINE",
            description:
                "Final cut pro Studios & Premiere Pro offer is one of the top video editing software which can help edit content quickly and effectively with high quality.",
        },
        {
            image: "online",
            title: "ONLINE",
            description:
                "Our online team provides high VFX and detailed job as per films and reaching to client vision with use of effective tools and creativity.",
        },
        {
            image: "grading",
            title: "GRADING",
            description:
                "DaVinci Resolve 16 is the world's most powerful color correction solution. 4k Suite will enhance further finishing.",
        },
        {
            image: "vfx",
            title: "VFX",
            description:
                "As a professional responsible, we achieved the dreams of film makers and execute visualizations of clients.",
        },
        {
            image: "motion-graphics",
            title: "MOTION GRAPHICS",
            description:
                "Motion graphics are pieces of animation or digital footage which create the illusion of motion and are usually combined with audio for use in multimedia projects.",
        },
        {
            image: "dit",
            title: "DIGITAL MASTERING & DIT",
            description:
                "The purpose of mastering is to balance sonic elements of a stereo mix and optimize playback across all systems and media formats.",
        },
    ];

    return (
        <div
            ref={containerRef}
            className="h-[300px] overflow-y-scroll scrollbar-hide overflow-x-hidden font-poppins"
        >
            <div className="h-[300vh] relative">
                <motion.div
                    ref={cardsContainerRef}
                    className="sticky top-0 h-screen flex items-center first"
                    style={{
                        transform: `translateX(${-scrollPercentage}%)`,
                    }}
                >
                    <div className="flex space-x-8">
                        {cardData.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="flex-shrink-0 opacity-0 w-1/3"
                            >
                                <Card className="rounded-lg shadow-lg flex justify-center text-2xl font-bold transition-opacity duration-500 gap-2">
                                    <img src={`/services/${card.image}.webp`} alt={card.title} />

                                    <div className="flex flex-col gap-4">
                                        <h3 className="text-2xl font-bold">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-wrap">
                                            {card.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

// const cardData = [
//     {
//         image: "offline",
//         title: "OFFLINE",
//         description:
//             "Final cut pro Studios & Premiere Pro offer is one of the top video editing software which can help edit content quickly and effectively with high quality.",
//     },
//     {
//         image: "online",
//         title: "ONLINE",
//         description:
//             "Our online team provides high VFX and detailed job as per films and reaching to client vision with use of effective tools and creativity.",
//     },
//     {
//         image: "grading",
//         title: "GRADING",
//         description:
//             "DaVinci Resolve 16 is the world's most powerful color correction solution. 4k Suite will enhance further finishing.",
//     },
//     {
//         image: "vfx",
//         title: "VFX",
//         description:
//             "As a professional responsible, we achieved the dreams of film makers and execute visualizations of clients.",
//     },
//     {
//         image: "motion-graphics",
//         title: "MOTION GRAPHICS",
//         description:
//             "Motion graphics are pieces of animation or digital footage which create the illusion of motion and are usually combined with audio for use in multimedia projects.",
//     },
//     {
//         image: "dit",
//         title: "DIGITAL MASTERING & DIT",
//         description:
//             "The purpose of mastering is to balance sonic elements of a stereo mix and optimize playback across all systems and media formats.",
//     },
// ];

// export default function Services() {
//     const target = useRef<HTMLDivElement>(null);

//     const { scrollYProgress } = useScroll({
//         target: target,
//     });

//     const x = useTransform(scrollYProgress, [0, 1], ["0%", "-55%"]);

//     return (
//         <div className="h-[500vh] font-poppins" ref={target}>
//             <div className="h-[100vh] sticky top-0 flex justify-start items-center overflow-hidden">
//                 <motion.div
//                     className="grid grid-cols-5 grid-rows-1 gap-[3vw] px-[3rem]"
//                     style={{
//                         x,
//                     }}
//                 >
//                     {cardData.map((card, index) => (
//                         <div className="flex gap-5 w-1/2" key={index}>
//                             <img
//                                 src={`/services/${card.image}.webp`}
//                                 alt={card.title}
//                             />
//                             <div className="flex flex-col gap-5">
//                                 <h3>{card.title}</h3>
//                                 <p>{card.description}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </motion.div>
//             </div>
//         </div>
//     );
// }
