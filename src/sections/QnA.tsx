"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
    {
        question: "Who am I?",
        answer: "I am a passionate front-end developer with a strong focus on creating user-friendly, responsive, and visually appealing websites. I turn creative ideas into functional web applications.",
    },
    {
        question: "What motivates me?",
        answer: "I am driven by the challenge of solving problems and crafting seamless user experiences. I love staying up-to-date with the latest trends in web development and continuously improving my skills.",
    },
    {
        question: "What are my core strengths?",
        answer: "My core strengths include clean and maintainable code, attention to detail, a user-centered design approach, and the ability to adapt quickly to new technologies.",
    },
    {
        question: "What are my career goals?",
        answer: "I aim to grow as a front-end developer by contributing to meaningful projects and collaborating with talented teams to build innovative and impactful web applications.",
    },
    {
        question: "What are my social media that can be contacted?",
        answer: "Linked-In: Ferdianto F., Instagram: @ferdiantoz, GitHub: Ferdianto22",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <section id="faqs" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got{" "}
                    <span className="text-yellow-400">answers</span>
                </h2>

                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            key={faq.question}
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                        >
                            <div
                                className="flex justify-between items-center"
                                onClick={() => setSelectedIndex(faqIndex)}
                            >
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    className={twMerge(
                                        "feather feather-plus text-yellow-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className={twMerge("overflow-hidden")}
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
