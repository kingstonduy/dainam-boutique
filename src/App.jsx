import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import DiscoverPage from "./pages/DiscoverPage";
import Footer from "./pages/FooterPage";
import LandingPage from "./pages/LandingPage";
import ServicePage from "./pages/ServicePage";

function App() {
    return (
        <>
            <Navbar />
            <LandingPage />
            <AboutPage />
            <DiscoverPage />
            <ServicePage />
            <Footer />
        </>
    );
}

export default App;
