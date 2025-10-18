import React, { useState, useEffect } from "react";

const contents = [
    {
        logo: "https://lh3.googleusercontent.com/mJh2RVx6vw63oRaT5vcdCd4D-wpTqLJlINILldhyEW8V14dvTfmE14_WaZuyUYjHPNpIGhaF0J6qg4ak8G2PDzv3O8-QvV0=rw-w57",
        header: "Fibre Internet",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
        logo: "https://lh3.googleusercontent.com/koAsFJ7K1YJ9g7WNY7L8T9NFP9ZapxmpwWL4tfbiF4AcRqSilmCq3L6kpCe99sbFCzXDPLyyBySlA9rbSYcHA3cR5o33Vlvm=rw-w56",
        header: "Swimming Pool",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
        logo: "https://lh3.googleusercontent.com/RGpWPkzM4OPM7v25UQIK2XWKIDZclY5roSiO8-1WPFZZea2EAjXLTsRBoE9dxOrSLGF7a7Phihv7fzlLD2Wc5sC_3WxLDx97=rw-w60",
        header: "Fitness Center",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
        logo: "https://lh3.googleusercontent.com/AghUFc_kK_2cuqLpWEPlw-5LNZGIKope2R1mnuwSA_NAGm18jR7W-ktkPKXirJ6T8DwYmoVdI_TxGdHMd557ZqjRxWlfBcnd=rw-w618",
        header: "Room Service",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
        logo: "https://lh3.googleusercontent.com/G0Dkc7ywrxJfsYZwTL4-mUVZ9F6tSDbhQJCTrAQwZa4yQRdqBaQx4s2o4D5dG4AFLcR1EvrDXWutjRLS-UBtG-F4C2i9Qj-Q=rw-w627",
        header: "Parking Space",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
        logo: "https://lh3.googleusercontent.com/QZlhgRk73kJR4y-gkaVCX_Z3hIWdD506ttBr59knJfbrJnExDmHi1Bj2IJHlKkCNk0T1npw4X2F9EQJZHvSh1dTOkimQHK8=rw-w117",
        header: "Conference Room",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
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

    return isPhone ? <AboutPagePhone /> : <AboutPagePC />;
}

/* ------------------------------ PHONE VERSION ------------------------------ */
function AboutPagePhone() {
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
function AboutPagePC() {
    return (
        <div className="flex flex-col items-center justify-center px-20 py-10">
            {/* Section Header */}
            <div className="grid w-full grid-cols-[1fr_2fr] items-center">
                <div>
                    <div
                        style={{
                            fontFamily: "Josefin Sans",
                            fontSize: "14px",
                            color: "rgb(27, 27, 27)",
                        }}
                    >
                        OUR SERVICES
                    </div>
                    <div className="w-40 h-[1px] bg-gray-400 mt-2"></div>
                </div>
                <h4
                    style={{
                        fontFamily: "Cormorant Upright",
                        fontSize: "48px",
                        color: "rgb(27, 27, 27)",
                    }}
                >
                    Hotel Amenities And Services
                </h4>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 w-full">
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
    );
}

/* ------------------------------ CARD COMPONENTS ------------------------------ */
function AmenityCardComponentPC({ logo, header, content }) {
    return (
        <div className="flex flex-col items-start p-10 rounded-[20px] shadow-[0_0_20px_rgba(0,0,0,0.25)] bg-white max-w-sm">
            <div className="w-12 h-12 mb-3 flex items-center justify-center">
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
            <div className="w-12 h-[2px] bg-[#1b1b1b]/60 mb-3"></div>
            <p className="font-[Work_Sans] text-[15px] text-[#1b1b1b]/70 leading-relaxed text-justify">
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
