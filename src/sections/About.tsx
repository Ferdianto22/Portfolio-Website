"use client";

import Tag from "@/components/Tag";
import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";

const text = `The craft of web development is not just about making a site look good. It's about making connections.`;
const words = text.split(" ");

export default function About() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(
        () =>
            wordIndex.on("change", (latest) => {
                setCurrentWord(latest);
            }),
        [wordIndex]
    );

    return (
        <section id="about" className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Introducing</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>The website does not just connect machines, it connects people.</span>{" "}
                        <span className="text-white/15">
                            {words.map((word, wordIndex) => (
                                <span key={wordIndex} className={twMerge("transition duration-500 text-white/15", wordIndex < currentWord && "text-white")}>{`${word} `}</span>
                            ))}
                        </span>
                        <span className="text-yellow-400 block">
                            That's why we built websites.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
