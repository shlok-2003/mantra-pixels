"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loading() {
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    // useEffect(() => {
    //     if (show) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }

    //     return () => {
    //         document.body.style.overflow = "auto";
    //     };
    // }, [show]);

    return (
        <AnimatePresence>
            {show && (
                <motion.section
                    className="fixed inset-0 z-50 flex items-center justify-center dark:bg-black bg-white pointer-events-auto"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="grid grid-cols-4 grid-rows-4 animate-[spin_1.5s_linear_infinite] gap-2">
                        {Array.from({ length: 16 }).map((_, index) => (
                            <span
                                key={index}
                                className="bg-[var(--custom-red)] h-2 w-2"
                            ></span>
                        ))}
                    </div>
                </motion.section>
            )}
        </AnimatePresence>
    );
}
