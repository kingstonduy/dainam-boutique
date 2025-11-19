import { LOGOS } from "@/assets";
import SectionHeader from "@/components/PageHeader";
import { H3, H4, Paragraph } from "@/components/Text";
import React, { useState, useEffect } from "react";

const contents = {
    en: [
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
    ],
    vi: [
        {
            logo: LOGOS.wifi,
            header: "Internet",
            content:
                "Luôn kết nối mọi lúc với hệ thống internet tốc độ cao, phủ khắp toàn khách sạn.",
        },
        {
            logo: LOGOS.breakfast,
            header: "Bữa sáng",
            content:
                "Bắt đầu buổi sáng với bữa sáng tươi ngon và giàu dinh dưỡng, được chuẩn bị chu đáo mỗi ngày.",
        },
        {
            logo: LOGOS.parking,
            header: "Bãi đỗ xe",
            content:
                "Tận hưởng sự tiện lợi với bãi đỗ xe an toàn ngay trong khuôn viên khách sạn, giúp kỳ nghỉ của bạn trọn vẹn và không lo lắng.",
        },
        {
            logo: LOGOS.transport,
            header: "Đưa đón sân bay",
            content:
                "Dịch vụ đưa đón sân bay thuận tiện, giúp hành trình của bạn trở nên liền mạch và thoải mái từ lúc đến cho đến khi rời đi.",
        },
        {
            logo: LOGOS.laundry,
            header: "Dịch vụ giặt ủi",
            content:
                "Giữ trang phục của bạn luôn sạch sẽ và chỉn chu với dịch vụ giặt ủi chuyên nghiệp trong ngày của chúng tôi.",
        },
        {
            logo: LOGOS.wedding,
            header: "Dịch vụ tiệc cưới",
            content:
                "Hãy để chúng tôi đồng hành trong khoảnh khắc đặc biệt của bạn — với không gian trang nhã và đội ngũ tận tâm, mang đến một ngày đẹp trọn vẹn và đáng nhớ.",
        },
    ],
};

export default function ServicePage({ isPhone, language }) {
    return isPhone ? (
        <ServicePagePhone language={language} />
    ) : (
        <ServicePagePC language={language} />
    );
}

/* ------------------------------ PHONE VERSION ------------------------------ */
function ServicePagePhone({ language }) {
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
                {(language === "en" ? contents.en : contents.vi).map(
                    (item, index) => (
                        <AmenityCardComponentPhone
                            key={index}
                            logo={item.logo}
                            header={item.header}
                            content={item.content}
                        />
                    )
                )}
            </div>
        </div>
    );
}

/* ------------------------------ PC VERSION ------------------------------ */
function ServicePagePC({ isPhone, language }) {
    return (
        <div className="flex flex-col items-center justify-center px-20 py-20">
            {/* Section Header */}
            <SectionHeader
                section={language === "en" ? "OUR SERVICES" : "DỊCH VỤ"}
                title={
                    language === "en"
                        ? "Hotel Amenities & Services"
                        : "Dịch vụ & Tiện nghi khách sạn"
                }
                isPhone={isPhone}
            />

            {/* ✅ 3×2 Fixed Grid — Scales with width */}
            <div className="w-full flex justify-center">
                <div
                    className="grid gap-8 justify-items-center w-full max-w-[1200px]"
                    style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
                >
                    {(language === "en" ? contents.en : contents.vi).map(
                        (item, index) => (
                            <AmenityCardComponentPC
                                key={index}
                                logo={item.logo}
                                header={item.header}
                                content={item.content}
                            />
                        )
                    )}
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
            <H3>{header}</H3>
            <div className="w-[40%] h-[2px] bg-[#1b1b1b]/60 mb-3"></div>
            <Paragraph> {content}</Paragraph>
        </div>
    );
}

function AmenityCardComponentPhone({ logo, header, content }) {
    return (
        <div className="flex flex-col items-center text-center p-6 rounded-[16px] shadow-[0_0_15px_rgba(0,0,0,0.15)] bg-white">
            <div className="w-20 h-20 mb-3 flex items-center justify-center">
                <img
                    src={logo}
                    alt={header}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <H3>{header}</H3>
            <div className="w-[40%] h-[2px] bg-[#1b1b1b]/60 mb-3"></div>
            <Paragraph> {content}</Paragraph>
        </div>
    );
}
