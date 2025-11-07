export default function PageHeader({ section, title }) {
    return (
        <div className="grid w-full grid-cols-[1fr_2fr] items-center mb-12 max-w-[1700px]">
            <div>
                <div
                    style={{
                        fontFamily: "Josefin Sans",
                        fontSize: "14px",
                        color: "rgb(27, 27, 27)",
                        letterSpacing: "1px",
                    }}
                >
                    {section}
                </div>
                <div className="w-40 h-[1px] bg-gray-400 mt-2"></div>
            </div>
            <h4
                style={{
                    fontFamily: "Cormorant Upright",
                    fontSize: "46px",
                    color: "rgb(27, 27, 27)",
                }}
                className="leading-snug"
            >
                {title}
            </h4>
        </div>
    );
}
