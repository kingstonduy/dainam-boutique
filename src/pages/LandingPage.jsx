import { motion } from "framer-motion";

const content = {
    explore: "EXPLORE MORE",
};

export default function LandingPage() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
            style={{
                backgroundImage:
                    "url('https://lh3.googleusercontent.com/F4iDvxeJWKkgFS9vDOcuz0vVoEDx9mODWkxORV9QzRWEwMX46t1D77bkTm7vE6lQIbFFo2Pu438y8CCnSc21qrZ_j4h9-LZjZA=w0')",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative text-center space-y-4"
            >
                <p
                    style={{
                        fontFamily: "Montserrat",
                        fontSize: "32px",
                        color: "rgb(255, 255, 255)",
                        textAlign: "center",
                    }}
                >
                    WELCOME TO
                </p>

                {/* Title */}
                <h1
                    style={{
                        fontFamily: "Cormorant Upright",
                        fontSize: "72px",
                        color: "rgb(255, 255, 255)",
                        textAlign: "center",
                    }}
                >
                    Dai Nam Boutique Hotel
                </h1>

                {/* Description */}
                <p
                    style={{
                        fontFamily: "Petit Formal Script",
                        fontSize: "24px",
                        color: "rgb(255, 255, 255)",
                        textAlign: "center",
                    }}
                >
                    Where timeless elegance meets modern comfort
                </p>

                {/* Button */}
                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-6 px-6 py-3 font-semibold rounded-full shadow-lg transition-colors duration-300"
                    style={{
                        fontFamily: "Montserrat",
                        fontSize: "11px",
                        backgroundColor: "rgba(30, 98, 32, 1)",
                        color: "white",
                        border: "2px solid rgba(30, 98, 32, 1)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "white";
                        e.currentTarget.style.color = "rgba(30, 98, 32, 1)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor =
                            "rgba(30, 98, 32, 1)";
                        e.currentTarget.style.color = "white";
                    }}
                >
                    <strong>{content.explore}</strong>
                </motion.button>
            </motion.div>
        </div>
    );
}
