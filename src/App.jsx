import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/FooterPage";
import LandingPage from "./pages/LandingPage";
import ServicePage from "./pages/ServicePage";

function App() {
    return (
        <>
            <Navbar />
            <LandingPage />
            <AboutPage />
            <ServicePage />
            <Footer />
        </>
    );
}

export default App;
