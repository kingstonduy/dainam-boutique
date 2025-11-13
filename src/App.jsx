import Navbar from "./components/Navbar";
import AreasPage from "./pages/AreasPage";
import Footer from "./pages/FooterSection";
import HomePage from "./pages/HomePage";
import RoomDetailPage from "./pages/RoomDetailPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    const BASE_URL = import.meta.env.VITE_BASENAME || "/";
    console.log("BASE_URL:", BASE_URL);
    return (
        <BrowserRouter basename={BASE_URL}>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/room/:roomName" element={<RoomDetailPage />} />
                <Route path="/services" element={<AreasPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
