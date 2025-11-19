import Navbar from "@/components/Navbar";
import AboutPage from "./AboutSection";
import DiscoverPage from "./DiscoverSection";
import Footer from "./FooterSection";
import LandingPage from "./LandingSection";
import RoomDetailPage from "./RoomDetailPage";
import ServicePage from "./ServiceSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HomePage({ isPhone, language }) {
    return (
        <>
            <LandingPage />
            <AboutPage isPhone={isPhone} language={language} />
            <DiscoverPage isPhone={isPhone} language={language} />
            <ServicePage isPhone={isPhone} language={language} />
            <TestimonialsSection isPhone={isPhone} language={language} />
        </>
    );
}
