import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import AreasPage from "./pages/Services";
import Footer from "./pages/FooterSection";
import HomePage from "./pages/HomePage";
import RoomDetailPage from "./pages/RoomDetailPage";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/Utils";
import PolicyPage from "./pages/PolicyPage";
import TermsPage from "./pages/TermsPage";

function App() {
    const [isPhone, setIsPhone] = useState(() => window.innerWidth <= 768);

    // Detect screen size
    useEffect(() => {
        const handleResize = () => setIsPhone(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // <<< Detect language only once >>>
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const cached = localStorage.getItem("lang");
        if (cached) {
            setLanguage(cached);
            return; // don't call API
        }

        async function detectLanguage() {
            try {
                const res = await fetch("https://ipapi.co/json/");
                const data = await res.json();
                const lang = data.country === "VN" ? "vi" : "en";

                setLanguage(lang);
                localStorage.setItem("lang", lang);
            } catch (err) {
                setLanguage("en"); // fallback
            }
        }

        detectLanguage();
    }, []);

    return (
        <>
            <ScrollToTop />

            <Navbar language={language} setLanguage={setLanguage} />

            <Routes>
                <Route
                    path="/"
                    element={<HomePage isPhone={isPhone} language={language} />}
                />
                <Route
                    path="/home"
                    element={<HomePage isPhone={isPhone} language={language} />}
                />
                <Route
                    path="/room/:roomName"
                    element={
                        <RoomDetailPage isPhone={isPhone} language={language} />
                    }
                />
                <Route
                    path="/services"
                    element={<AreasPage language={language} />}
                />
                <Route
                    path="/terms"
                    element={
                        <TermsPage isPhone={isPhone} language={language} />
                    }
                />
                <Route
                    path="/policies"
                    element={
                        <PolicyPage isPhone={isPhone} language={language} />
                    }
                />
            </Routes>

            <Footer language={language} />
        </>
    );
}

export default App;
