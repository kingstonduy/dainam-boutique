import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import LandingPage from "./pages/LandingPage";

function App() {
    return (
        <>
            <Navbar />
            <LandingPage />
            <AboutPage />
            <div className="min-h-screen h-[2500px] flex flex-col items-center justify-center bg-gray-100">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">
                    Hello, Vite + React + Tailwind CSS!
                </h1>
                <p className="text-lg text-gray-700">
                    This is a simple setup to get you started.
                </p>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer transition">
                    Click Me
                </button>
            </div>
        </>
    );
}

export default App;
