"use client";

import leftProfileCard from "@/assets/images/Left Card Profile.png"
import rightProfileCard from "@/assets/images/Right Profile Card.png"
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImages from "@/assets/images/cursor-you.svg" 

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: -50, x: 30 }, { duration: 0.5 }],
        ]);

        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);

        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: -150, y: 30 }, { duration: 0.5 }],
        ]);

        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [rightPointerScope.current, { x: 0, y: [0, 20, 0] }, { duration: 0.5 }],
        ]);
    }, []);

    return (
        <section className="py-24 overflow-x-clip" style={{
            cursor: `url(${cursorYouImages.src}), auto`
        }}>
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 hidden lg:block"
                >
                    <Image
                        src={leftProfileCard} width={300}
                        alt="Left Profile Card Image"
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden lg:block"
                >
                    <Pointer name="Me" />
                </motion.div>

                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: -100, y: 100 }}
                    drag
                    className="absolute -right-64 -top-16 hidden lg:block"
                >
                    <Image
                        src={rightProfileCard} width={300}
                        alt="Right Profile Card Image"
                        draggable="false"
                    />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Others" color="red" />
                </motion.div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-green-400 to-blue-400 font-semibold">
                        Front-End Developer&#10024;
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Portfolio Website, created fascinating
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                I&apos;m a person with strong passion for front-end development and highly motivated to learn and adapt to new challenges. 
                </p>
            </div>
        </section>
    );
}
