function SectionHeaderPC({ section, title }) {
    return (
        <div className="relative w-full flex items-center mb-12 max-w-[1700px]">
            {/* LEFT SECTION */}
            <div className="flex flex-col">
                <div
                    style={{
                        fontFamily: "Josefin Sans",
                        fontSize: "20px",
                        color: "rgb(27, 27, 27)",
                        letterSpacing: "1px",
                    }}
                >
                    {section}
                </div>

                <div className="w-40 h-[1px] bg-gray-400 mt-2"></div>
            </div>

            {/* CENTERED TITLE */}
            <h4
                style={{
                    fontFamily: "Cormorant Upright",
                    fontSize: "46px",
                    color: "rgb(27, 27, 27)",
                }}
                className="absolute left-1/2 -translate-x-1/2 leading-snug whitespace-nowrap"
            >
                {title}
            </h4>
        </div>
    );
}

function SectionHeaderPhone({ section, title }) {
    return (
        <div className="w-full flex flex-col items-center mb-10">
            {/* TOP SECTION */}
            <div className="flex flex-col items-center mb-4">
                <div
                    style={{
                        fontFamily: "Josefin Sans",
                        fontSize: "16px",
                        color: "rgb(27, 27, 27)",
                        letterSpacing: "1px",
                        textAlign: "center",
                    }}
                >
                    {section}
                </div>

                <div className="w-24 h-[1px] bg-gray-400 mt-2"></div>
            </div>

            {/* CENTERED TITLE */}
            <h4
                style={{
                    fontFamily: "Cormorant Upright",
                    fontSize: "32px",
                    color: "rgb(27, 27, 27)",
                }}
                className="leading-snug text-center whitespace-nowrap"
            >
                {title}
            </h4>
        </div>
    );
}

export default function SectionHeader({ section, title, isPhone }) {
    console.log("[SectionHeader] isPhone:", isPhone);
    return isPhone ? (
        <SectionHeaderPhone section={section} title={title} />
    ) : (
        <SectionHeaderPC section={section} title={title} />
    );
}
