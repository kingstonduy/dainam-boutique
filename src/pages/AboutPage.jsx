import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TiltedCard from "../components/TiltedCard";

function AboutPagePC() {
    return (
        <>
            <center className="pt-[50px] pb-[50px] px-[16px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center max-w-6xl w-full items-start">
                    {/* Left - Tilted Image */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex justify-center"
                    >
                        <TiltedCard
                            imageSrc="https://lh3.googleusercontent.com/mb_YJT5X2NR6XLgJ1XeeOvB_MinJgzIyIQkLegnqnHWaZxYTmsJfgK08V3zE3ThRrQSmevlUlLisrRdnVOu6IUzSdl9Yb08HbQ=rw-w6240"
                            altText="Hotel"
                            containerHeight="500px"
                            containerWidth="400px"
                            imageHeight="500px"
                            imageWidth="400px"
                            captionText="Lobby view"
                            scaleOnHover={1.1}
                            rotateAmplitude={14}
                            showTooltip={false}
                            showMobileWarning={false}
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

                    {/* Right - Tilted Image */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <TiltedCard
                            imageSrc="https://lh3.googleusercontent.com/0MT0Cw1cIze2CLv69ao3vwkCw4o2_tYWJNgZLeD8M8IZnoFja5InU7tOciwxSFGV6KSa_KEsDViBY4dtI1g3eDUhfwV9EfU=rw-w6240"
                            altText="Hotel Interior"
                            containerHeight="500px"
                            containerWidth="400px"
                            imageHeight="500px"
                            imageWidth="400px"
                            captionText="Room interior"
                            scaleOnHover={1.1}
                            rotateAmplitude={14}
                            showTooltip={false}
                            showMobileWarning={false}
                        />
                    </motion.div>
                </div>

                {/* Bottom Gallery */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-70 justify-items-center max-w-5xl"
                >
                    <TiltedCard
                        imageSrc="https://lh3.googleusercontent.com/-SHqjSxOTJN9qDK1zE2nOsFDQEV2n5d0bjmhSBBpJDWI7teBF95r7HyivJzWIAuj32cg_9IwlHIeT_WGoGuW8wIfku6Zga_SgA=rw-w6240"
                        altText="Interior 1"
                        containerHeight="400px"
                        containerWidth="600px"
                        imageHeight="400px"
                        imageWidth="600px"
                        captionText="Elegant interiors"
                        scaleOnHover={1.08}
                        rotateAmplitude={10}
                        showTooltip={false}
                        showMobileWarning={false}
                    />
                    <TiltedCard
                        imageSrc="https://lh3.googleusercontent.com/JBU2dSqaEMowDy1nhYVyEVgmHwtS9g8-T42K0e58WjDvuUprmLWMiVozoM2Wa1Vf9Ve4QglfO17FwMaHl13qqf4c2NAV2Q4=rw-w5472"
                        altText="Interior 2"
                        containerHeight="400px"
                        containerWidth="600px"
                        imageHeight="400px"
                        imageWidth="600px"
                        captionText="Luxury atmosphere"
                        scaleOnHover={1.08}
                        rotateAmplitude={10}
                        showTooltip={false}
                        showMobileWarning={false}
                    />
                </motion.div>
            </center>
        </>
    );
}

function AboutPagePhone() {
    return (
        <div className="pt-[40px] pb-[40px] px-[20px] text-center flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="w-full max-w-[350px] mb-6"
            >
                <img
                    src="https://lh3.googleusercontent.com/mb_YJT5X2NR6XLgJ1XeeOvB_MinJgzIyIQkLegnqnHWaZxYTmsJfgK08V3zE3ThRrQSmevlUlLisrRdnVOu6IUzSdl9Yb08HbQ=rw-w6240"
                    alt="Hotel"
                    className="w-full h-auto rounded-xl shadow-md object-cover"
                />
            </motion.div>

            <div className="max-w-[360px]">
                <h2
                    style={{
                        fontFamily: "Cormorant Upright",
                        fontSize: "26px",
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
                    Nestled within the vibrant rhythm of the city, Dai Nam
                    Boutique Hotel is a warm retreat for those in search of
                    peace and comfort. Just steps away from the iconic Ben Thanh
                    Market, the hotel embraces a charming classical style,
                    inspired by timeless values.
                </p>
            </div>
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
