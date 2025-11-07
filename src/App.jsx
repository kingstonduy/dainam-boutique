import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutSection";
import DiscoverPage from "./pages/DiscoverSection";
import Footer from "./pages/FooterSection";
import LandingPage from "./pages/LandingSection";
import ServicePage from "./pages/ServiceSection";
import TestimonialsSection from "./pages/TestimonialsSection";

function App() {
    return (
        <>
            <Navbar />
            <LandingPage />
            <AboutPage />
            <DiscoverPage />
            <ServicePage />
            <TestimonialsSection />
            <Footer />
        </>
    );
}

export default App;
