import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
    damping: 30,
    stiffness: 100,
    mass: 2,
};

export default function TiltedCard({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "100%",
    imageWidth = "100%",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = false,
    showTooltip = false,
    overlayContent = null,
    displayOverlayContent = false,
}) {
    const ref = useRef(null);

    // ✅ motion values (base)
    const rotateXVal = useMotionValue(0);
    const rotateYVal = useMotionValue(0);
    const scaleVal = useMotionValue(1);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // ✅ springs for smooth animation
    const rotateX = useSpring(rotateXVal, springValues);
    const rotateY = useSpring(rotateYVal, springValues);
    const scale = useSpring(scaleVal, springValues);
    const opacity = useSpring(0, springValues);
    const rotateFigcaption = useSpring(0, {
        stiffness: 350,
        damping: 30,
        mass: 1,
    });

    const [lastY, setLastY] = useState(0);

    function handleMouse(e) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;

        const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
        const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

        rotateXVal.set(rotationX);
        rotateYVal.set(rotationY);

        x.set(e.clientX - rect.left);
        y.set(e.clientY - rect.top);

        const velocityY = offsetY - lastY;
        rotateFigcaption.set(-velocityY * 0.6);
        setLastY(offsetY);
    }

    function handleMouseEnter() {
        scaleVal.set(scaleOnHover);
        opacity.set(1);
    }

    function handleMouseLeave() {
        opacity.set(0);
        scaleVal.set(1);
        rotateXVal.set(0);
        rotateYVal.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <figure
            ref={ref}
            className="relative [perspective:800px] flex items-center justify-center w-full h-full"
            style={{
                width: containerWidth,
                height: containerHeight,
            }}
            onMouseMove={handleMouse}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* 3D Tilt Wrapper */}
            <motion.div
                className="relative w-full h-full [transform-style:preserve-3d] overflow-hidden rounded-[15px]"
                style={{
                    rotateX,
                    rotateY,
                    scale,
                }}
            >
                {/* ✅ Image stays visible */}
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="absolute inset-0 w-full h-full object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
                />

                {/* Optional Overlay Content */}
                {displayOverlayContent && overlayContent && (
                    <motion.div className="absolute inset-0 z-[2] flex items-center justify-center will-change-transform [transform:translateZ(30px)]">
                        {overlayContent}
                    </motion.div>
                )}
            </motion.div>

            {/* Optional Tooltip */}
            {showTooltip && (
                <motion.figcaption
                    className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white/90 px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
                    style={{
                        x,
                        y,
                        opacity,
                        rotate: rotateFigcaption,
                    }}
                >
                    {captionText}
                </motion.figcaption>
            )}
        </figure>
    );
}
