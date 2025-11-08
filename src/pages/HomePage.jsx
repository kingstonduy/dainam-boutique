import Navbar from "@/components/Navbar";
import AboutPage from "./AboutSection";
import DiscoverPage from "./DiscoverSection";
import Footer from "./FooterSection";
import LandingPage from "./LandingSection";
import RoomDetailPage from "./RoomDetailPage";
import ServicePage from "./ServiceSection";
import TestimonialsSection from "./TestimonialsSection";

export default function HomePage() {
    return (
        <>
            <LandingPage />
            <AboutPage />
            <DiscoverPage />
            <ServicePage />
            <TestimonialsSection />
        </>
    );
}
