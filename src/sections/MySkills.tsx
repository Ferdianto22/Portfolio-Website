import Tag from "@/components/Tag";
import htmlIcon from "@/assets/images/html.svg";
import cssIcon from "@/assets/images/css.svg";
import jsIcon from "@/assets/images/javascript.svg";
import tailwindIcon from "@/assets/images/tailwind.svg";
import reactIcon from "@/assets/images/react.svg";
import figmaIcon from "@/assets/images/figma.svg";
import githubIcon from "@/assets/images/github.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
    {
        name: "HTML",
        icon: htmlIcon,
        description: "HTML is the foundation of web page structure.",
    },
    {
        name: "CSS",
        icon: cssIcon,
        description: "CSS styles and designs web pages effectively.",
    },
    {
        name: "Javascript",
        icon: jsIcon,
        description: "JavaScript makes web pages interactive and dynamic.",
    },
    {
        name: "React",
        icon: reactIcon,
        description: "React is a library for building user interfaces.",
    },
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Figma is a collaborative tool for interface design.",
    },
    {
        name: "GitHub",
        icon: githubIcon,
        description: "GitHub is the leading platform for code collaboration.",
    },
    {
        name: "Tailwind",
        icon: tailwindIcon,
        description: "Tailwind CSS is a framework for creating modern designs.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section id="mySkills" className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>My Skills</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            Now about this{" "}
                            <span className="text-yellow-400">technology</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            I usually use these technologies in web programming.
                        </p>
                    </div>

                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                integrations={integrations.slice().reverse()}
                                reverse
                                className="hiddden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
