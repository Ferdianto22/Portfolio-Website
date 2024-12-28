import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/About";
import MySkills from "@/sections/MySkills";
import QnA from "@/sections/QnA";
import MovingText from "@/sections/MovingText";
import Footer from "@/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Introduction />
            <MySkills />
            <QnA />
            <MovingText />
            <Footer />
        </>
    );
}