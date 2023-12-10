import HeroSection from "../Home/HeroSection";
import MySkills from "../Home/MySkills";
import AboutMe from "../Home/AboutMe";
import MyPortfolio from "../Home/MyPortfolio";
import Footer from "../Home/Footer";
import TimelineHistory from "../Home/Testimonials";

export default function Home() {
    return (
        <>
        <HeroSection /> 
        <AboutMe />
        <TimelineHistory />
        <MySkills />
        <MyPortfolio />
        <Footer />
        </>
    )
}