import { motion } from "framer-motion";
import TiltedCard from "../components/TiltedCard";

export default function AboutPagePC() {
    return (
        <div className="w-full flex flex-col items-center pt-20 pb-20 px-4 md:px-10 lg:px-16">
            {/* ========= Top Section ========= */}
            <div
                className="grid gap-10 lg:gap-16 justify-items-center max-w-[1600px] w-full items-center"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                }}
            >
                {/* ===== Left TiltedCard ===== */}
                <motion.div className="flex justify-center w-full">
                    <div
                        className="relative w-full overflow-hidden rounded-[20px] shadow-lg"
                        style={{ aspectRatio: "16/10", minHeight: "280px" }}
                    >
                        <TiltedCard
                            imageSrc="https://lh3.googleusercontent.com/mb_YJT5X2NR6XLgJ1XeeOvB_MinJgzIyIQkLegnqnHWaZxYTmsJfgK08V3zE3ThRrQSmevlUlLisrRdnVOu6IUzSdl9Yb08HbQ=rw-w6240"
                            captionText="Lobby View"
                            containerHeight="100%"
                            containerWidth="100%"
                            imageWidth="100%"
                            imageHeight="100%"
                            scaleOnHover={1.08}
                            rotateAmplitude={10}
                            showMobileWarning={false}
                        />
                    </div>
                </motion.div>

                {/* ===== Text Section (Vertically Centered) ===== */}
                <div className="flex flex-col justify-center text-center md:text-left lg:text-center px-2 max-w-[600px] w-full mx-auto">
                    <h2
                        style={{
                            fontFamily: "Cormorant Upright",
                            fontSize: "clamp(26px, 4vw, 40px)",
                            color: "rgb(27, 27, 27)",
                        }}
                    >
                        <strong>Dai Nam Boutique Hotel</strong>
                    </h2>

                    <p
                        style={{
                            fontFamily: "Cormorant Garamond",
                            fontSize: "clamp(16px, 2vw, 20px)",
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
                            lineHeight: "1.7",
                        }}
                        className="text-justify leading-relaxed"
                    >
                        Nestled within the vibrant rhythm of the city, Dai Nam
                        Boutique Hotel is a warm retreat for those in search of
                        peace and comfort. Just steps away from the iconic Ben
                        Thanh Market, the hotel embraces a charming classical
                        style, inspired by timeless values.
                    </p>
                </div>

                {/* ===== Right TiltedCard ===== */}
                <motion.div className="flex justify-center w-full">
                    <div
                        className="relative w-full overflow-hidden rounded-[20px] shadow-lg"
                        style={{ aspectRatio: "16/10", minHeight: "280px" }}
                    >
                        <TiltedCard
                            imageSrc="https://lh3.googleusercontent.com/0MT0Cw1cIze2CLv69ao3vwkCw4o2_tYWJNgZLeD8M8IZnoFja5InU7tOciwxSFGV6KSa_KEsDViBY4dtI1g3eDUhfwV9EfU=rw-w6240"
                            captionText="Room Interior"
                            containerHeight="100%"
                            containerWidth="100%"
                            imageWidth="100%"
                            imageHeight="100%"
                            scaleOnHover={1.08}
                            rotateAmplitude={10}
                            showMobileWarning={false}
                        />
                    </div>
                </motion.div>
            </div>

            {/* ========= Bottom Gallery ========= */}
            <motion.div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center w-full max-w-[1400px] px-6">
                {/* Left Card */}
                <div
                    className="relative w-full overflow-hidden rounded-[20px] shadow-lg"
                    style={{ aspectRatio: "4/3", minHeight: "280px" }}
                >
                    <TiltedCard
                        imageSrc="https://lh3.googleusercontent.com/-SHqjSxOTJN9qDK1zE2nOsFDQEV2n5d0bjmhSBBpJDWI7teBF95r7HyivJzWIAuj32cg_9IwlHIeT_WGoGuW8wIfku6Zga_SgA=rw-w6240"
                        altText="Elegant interiors"
                        containerWidth="100%"
                        containerHeight="100%"
                        imageWidth="100%"
                        imageHeight="100%"
                        captionText="Elegant Interiors"
                        scaleOnHover={1.08}
                        rotateAmplitude={10}
                        showMobileWarning={false}
                    />
                </div>

                {/* Right Card */}
                <div
                    className="relative w-full overflow-hidden rounded-[20px] shadow-lg"
                    style={{ aspectRatio: "4/3", minHeight: "280px" }}
                >
                    <TiltedCard
                        imageSrc="https://lh3.googleusercontent.com/JBU2dSqaEMowDy1nhYVyEVgmHwtS9g8-T42K0e58WjDvuUprmLWMiVozoM2Wa1Vf9Ve4QglfO17FwMaHl13qqf4c2NAV2Q4=rw-w5472"
                        altText="Luxury atmosphere"
                        containerWidth="100%"
                        containerHeight="100%"
                        imageWidth="100%"
                        imageHeight="100%"
                        captionText="Luxury Atmosphere"
                        scaleOnHover={1.08}
                        rotateAmplitude={10}
                        showMobileWarning={false}
                    />
                </div>
            </motion.div>
        </div>
    );
}
