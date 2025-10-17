import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Footer from "./pages/FooterPage";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <>
            <Navbar />
            <LandingPage />
            <AboutPage />
            <Footer />
        </>
    );
}

export default App;
