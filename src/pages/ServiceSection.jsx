import { LOGOS } from "@/assets";
import PageHeader from "@/components/PageHeader";
import React, { useState, useEffect } from "react";

const contents = [
    {
        logo: LOGOS.wifi,
        header: "Fibre Internet",
        content:
            "Stay connected anytime with our high-speed internet, available throughout the hotel.",
    },
    {
        logo: LOGOS.breakfast,
        header: "Breakfast",
        content:
            "Begin your day with a fresh and flavorful breakfast, served with care each morning.",
    },
    {
        logo: LOGOS.parking,
        header: "Parking Space",
        content:
            "Enjoy the comfort of secure on-site parking, ensuring a smooth and worry-free stay.",
    },
    {
        logo: LOGOS.transport,
        header: "Pick up & drop",
        content:
            "Convenient airport transfer services are available to make your journey seamless from start to finish.",
    },
    {
        logo: LOGOS.laundry,
        header: "Laundry service",
        content:
            "Keep your wardrobe fresh with our professional same-day laundry and pressing service.",
    },
    {
        logo: LOGOS.wedding,
        header: "Wedding banquet service",
        content:
            "Celebrate love in an elegant setting — our team will make your special day beautifully memorable.",
    },
];

export default function ServicePage() {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsPhone(window.innerWidth <= 768);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return isPhone ? <ServicePagePhone /> : <ServicePagePC />;
}

/* ------------------------------ PHONE VERSION ------------------------------ */
function ServicePagePhone() {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-10">
            {/* Section Header */}
            <div className="text-center mb-8">
                <div
                    style={{
                        fontFamily: "Josefin Sans",
                        fontSize: "13px",
                        color: "rgb(27, 27, 27)",
                        letterSpacing: "1px",
                    }}
                >
                    OUR SERVICES
                </div>
                <div className="mx-auto w-24 h-[1px] bg-gray-400 mt-2 mb-3"></div>
                <h4
                    style={{
                        fontFamily: "Cormorant Upright",
                        fontSize: "30px",
                        color: "rgb(27, 27, 27)",
                    }}
                >
                    Hotel Amenities & Services
                </h4>
            </div>

            {/* Cards (1 column stacked) */}
            <div className="grid grid-cols-1 gap-6 w-full">
                {contents.map((item, index) => (
                    <AmenityCardComponentPhone
                        key={index}
                        logo={item.logo}
                        header={item.header}
                        content={item.content}
                    />
                ))}
            </div>
        </div>
    );
}

/* ------------------------------ PC VERSION ------------------------------ */
function ServicePagePC() {
    return (
        <div className="flex flex-col items-center justify-center px-20 py-20">
            {/* Section Header */}
            <PageHeader
                section="OUR SERVICES"
                title="Hotel Amenities & Services"
            />

            {/* ✅ 3×2 Fixed Grid — Scales with width */}
            <div className="w-full flex justify-center">
                <div
                    className="grid gap-8 justify-items-center w-full max-w-[1200px]"
                    style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
                >
                    {contents.map((item, index) => (
                        <AmenityCardComponentPC
                            key={index}
                            logo={item.logo}
                            header={item.header}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ------------------------------ CARD COMPONENTS ------------------------------ */
function AmenityCardComponentPC({ logo, header, content }) {
    return (
        <div className="flex flex-col items-start p-5 rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.25)] bg-white max-w-[400px]">
            <div className="w-20 h-20 mb-3 flex items-center justify-center">
                <img
                    src={logo}
                    alt={header}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <h4 className="font-[Cormorant_Upright] text-[24px] text-[#1b1b1b] mb-2">
                {header}
            </h4>
            <div className="w-[40%] h-[2px] bg-[#1b1b1b]/60 mb-3"></div>
            <p className="font-[Work_Sans] text-[16px] text-[#1b1b1b]/70 leading-relaxed text-justify">
                {content}
            </p>
        </div>
    );
}

function AmenityCardComponentPhone({ logo, header, content }) {
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-[16px] shadow-[0_0_15px_rgba(0,0,0,0.15)] bg-white">
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <img
                    src={logo}
                    alt={header}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <h4 className="font-[Cormorant_Upright] text-[22px] text-[#1b1b1b] mb-2">
                {header}
            </h4>
            <div className="w-10 h-[2px] bg-[#1b1b1b]/60 mb-3"></div>
            <p className="font-[Work_Sans] text-[14px] text-[#1b1b1b]/70 leading-relaxed">
                {content}
            </p>
        </div>
    );
}
