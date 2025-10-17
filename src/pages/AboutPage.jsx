import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function AboutPagePC() {
    return (
        <>
            <center className="pt-[50px] pb-[35px] px-[16px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full items-center">
                    {/* Left - Image */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/mb_YJT5X2NR6XLgJ1XeeOvB_MinJgzIyIQkLegnqnHWaZxYTmsJfgK08V3zE3ThRrQSmevlUlLisrRdnVOu6IUzSdl9Yb08HbQ=rw-w6240"
                            alt="Hotel"
                            className="w-full md:w-[300px] h-[400px] object-cover rounded-2xl shadow-lg"
                        />
                    </motion.div>

                    {/* Center - Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="text-center md:text-left px-2"
                    >
                        <h2
                            style={{
                                fontFamily: "Cormorant Upright",
                                fontSize: "35px",
                                color: "rgb(27, 27, 27)",
                                textAlign: "center",
                            }}
                        >
                            <strong>Dai Nam Boutique Hotel</strong>
                        </h2>
                        <p
                            style={{
                                fontFamily: "Cormorant Garamond",
                                fontSize: "18px",
                                color: "rgb(27, 27, 27)",
                            }}
                            className="mt-2 mb-4"
                        >
                            <strong>
                                A touch of elegance in the heart of Saigon
                            </strong>
                        </p>
                        <p
                            style={{
                                fontFamily: "Work Sans",
                                fontSize: "15px",
                                color: "rgb(27, 27, 27)",
                            }}
                            className="leading-relaxed text-justify"
                        >
                            Nestled within the vibrant rhythm of the city, Dai
                            Nam Boutique Hotel is a warm retreat for those in
                            search of peace and comfort. Just steps away from
                            the iconic Ben Thanh Market, the hotel embraces a
                            charming classical style, inspired by timeless
                            values.
                        </p>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <img
                            src="https://lh3.googleusercontent.com/0MT0Cw1cIze2CLv69ao3vwkCw4o2_tYWJNgZLeD8M8IZnoFja5InU7tOciwxSFGV6KSa_KEsDViBY4dtI1g3eDUhfwV9EfU=rw-w6240"
                            alt="Hotel"
                            className="w-full md:w-[300px] h-[400px] object-cover rounded-2xl shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Bottom Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl"
                >
                    <motion.img
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.6 }}
                        src="https://lh3.googleusercontent.com/-SHqjSxOTJN9qDK1zE2nOsFDQEV2n5d0bjmhSBBpJDWI7teBF95r7HyivJzWIAuj32cg_9IwlHIeT_WGoGuW8wIfku6Zga_SgA=rw-w6240"
                        alt="Interior 1"
                        className="w-full h-[300px] object-cover rounded-2xl shadow-md"
                    />
                    <motion.img
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        src="https://lh3.googleusercontent.com/JBU2dSqaEMowDy1nhYVyEVgmHwtS9g8-T42K0e58WjDvuUprmLWMiVozoM2Wa1Vf9Ve4QglfO17FwMaHl13qqf4c2NAV2Q4=rw-w5472"
                        alt="Interior 2"
                        className="w-full h-[300px] object-cover rounded-2xl shadow-md"
                    />
                </motion.div>
            </center>
        </>
    );
}

export function AboutPagePhone() {
    return (
        <div className="pt-[40px] pb-[30px] px-[20px] text-center">
            <motion.img
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                src="https://lh3.googleusercontent.com/mb_YJT5X2NR6XLgJ1XeeOvB_MinJgzIyIQkLegnqnHWaZxYTmsJfgK08V3zE3ThRrQSmevlUlLisrRdnVOu6IUzSdl9Yb08HbQ=rw-w6240"
                alt="Hotel"
                className="w-full h-[250px] object-cover rounded-xl shadow-md mb-6"
            />
            <h2
                style={{
                    fontFamily: "Cormorant Upright",
                    fontSize: "28px",
                    color: "rgb(27, 27, 27)",
                }}
            >
                <strong>Dai Nam Boutique Hotel</strong>
            </h2>
            <p
                style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "18px",
                    color: "rgb(27, 27, 27)",
                }}
                className="mt-2 mb-4"
            >
                <strong>A touch of elegance in the heart of Saigon</strong>
            </p>
            <p
                style={{
                    fontFamily: "Work Sans",
                    fontSize: "15px",
                    color: "rgb(27, 27, 27)",
                }}
                className="leading-relaxed text-justify"
            >
                Nestled within the vibrant rhythm of the city, Dai Nam Boutique
                Hotel is a warm retreat for those in search of peace and
                comfort. Just steps away from the iconic Ben Thanh Market, the
                hotel embraces a charming classical style, inspired by timeless
                values.
            </p>
        </div>
    );
}

export default function AboutPage() {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsPhone(window.innerWidth <= 768);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return isPhone ? <AboutPagePhone /> : <AboutPagePC />;
}
