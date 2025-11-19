import { useRef } from "react";
import AboutPage from "./AboutSection";
import DiscoverPage from "./DiscoverSection";
import LandingPage from "./LandingSection";
import ServicePage from "./ServiceSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HomePage({ isPhone, language }) {
    const discoverRef = useRef(null);

    const scrollToDiscover = () => {
        if (!discoverRef.current) return;

        const navbarHeight = 180; // adjust based on your navbar height

        const y =
            discoverRef.current.getBoundingClientRect().top +
            window.scrollY -
            navbarHeight;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    };

    return (
        <>
            <LandingPage onExploreClick={scrollToDiscover} />

            <AboutPage isPhone={isPhone} language={language} />

            {/* 🔥 Attach the ref HERE */}
            <div ref={discoverRef}>
                <DiscoverPage isPhone={isPhone} language={language} />
            </div>

            <ServicePage isPhone={isPhone} language={language} />
            <TestimonialsSection isPhone={isPhone} language={language} />
        </>
    );
}
