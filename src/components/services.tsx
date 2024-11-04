/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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

export default function Services() {
    const targetRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        // offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1.5%", "-70%"]);

    return (
        <section className="h-[550vh] font-poppins space-y-10" ref={targetRef}>
            <div className="text-4xl font-bold text-left sticky top-[10vh] px-12">
                What We Offer
            </div>
            <div className="sticky top-[20vh] flex items-center overflow-hidden">
                <motion.div className="flex gap-8 items-stretch" style={{ x }}>
                    {cardData.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            exit={{ opacity: 0 }}
                            viewport={{ amount: 0.3 }}
                        >
                            <Card className="flex-shrink-0 w-[30vw] flex flex-col bg-white p-4 shadow-lg rounded-none">
                                <CardTitle className="sr-only">
                                    <CardHeader>{card.title}</CardHeader>
                                    <CardDescription>
                                        {card.description}
                                    </CardDescription>
                                </CardTitle>
                                <CardContent className="p-0">
                                    <img
                                        src={`/services/${card.image}.webp`}
                                        alt={card.title}
                                        className="w-full object-cover"
                                    />
                                    <div className="mt-4">
                                        <h3 className="text-2xl font-bold">
                                            {card.title}
                                        </h3>
                                        <p className="mt-2 text-sm">
                                            {card.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
