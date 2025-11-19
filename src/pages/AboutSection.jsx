import { Paragraph, TEXT_SIZES } from "@/components/Text";
import { IMAGE_LINKS } from "@/assets";

/* =========================
   LANGUAGE CONTENT
========================= */
const content = {
    description_en:
        "Nestled within the vibrant rhythm of the city, Dai Nam Boutique Hotel is a warm retreat for those in search of peace and comfort. Just steps away from the iconic Ben Thanh Market, the hotel embraces a charming classical style, inspired by timeless values.",
    description_vi:
        "Nằm giữa nhịp sống sôi động của thành phố, Khách sạn Dai Nam Boutique là nơi nghỉ dưỡng ấm cúng cho những ai tìm kiếm sự yên bình và thoải mái. Chỉ cách Chợ Bến Thành biểu tượng vài bước chân, khách sạn mang phong cách cổ điển quyến rũ, lấy cảm hứng từ những giá trị vượt thời gian.",
};

/* =====================================================
   PC VERSION
===================================================== */
function AboutPagePC({ language }) {
    return (
        <div className="w-full flex flex-col items-center pt-20 pb-20 px-4 md:px-10 lg:px-16">
            {/* ========= Top Section ========= */}
            <div
                className="grid gap-10 lg:gap-16 justify-items-center max-w-[1600px] w-full items-center"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                }}
            >
                {/* ===== Left Image ===== */}
                <div className="flex justify-center w-full">
                    <div
                        className="relative w-full overflow-hidden rounded-[20px] shadow-lg"
                        style={{ aspectRatio: "16/10", minHeight: "280px" }}
                    >
                        <img
                            src={IMAGE_LINKS.areas.lobby.thumbnail}
                            alt="Lobby View"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>

                {/* ===== Text Section ===== */}
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

                    <Paragraph
                        className="mt-2 mb-4 justify-center flex font-bold"
                        size={TEXT_SIZES.LG}
                    >
                        A touch of elegance in the heart of Saigon
                    </Paragraph>

                    {/* 🟢 FIXED LANGUAGE SWITCH */}
                    <Paragraph className="flex text-left">
                        {language === "en"
                            ? content.description_en
                            : content.description_vi}
                    </Paragraph>
                </div>

                {/* ===== Right Image ===== */}
                <div className="flex justify-center w-full">
                    <div
                        className="relative w-full overflow-hidden rounded-[20px] shadow-lg"
                        style={{ aspectRatio: "16/10", minHeight: "280px" }}
                    >
                        <img
                            src={IMAGE_LINKS.areas.public.thumbnail}
                            alt="Room Interior"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* ========= Bottom Gallery ========= */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center w-full max-w-[1200px] px-6">
                {/* Left Image */}
                <div
                    className="relative w-full overflow-hidden rounded-[20px] shadow-lg"
                    style={{ aspectRatio: "16/10", minHeight: "280px" }}
                >
                    <img
                        src={IMAGE_LINKS.areas.guestLounge.thumbnail}
                        alt="Elegant interiors"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Right Image */}
                <div
                    className="relative w-full overflow-hidden rounded-[20px] shadow-lg"
                    style={{ aspectRatio: "16/10", minHeight: "280px" }}
                >
                    <img
                        src={IMAGE_LINKS.areas.restaurant.thumbnail}
                        alt="Luxury atmosphere"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}

/* =====================================================
   PHONE VERSION
===================================================== */
function AboutPagePhone({ language }) {
    return (
        <div className="pt-[40px] pb-[60px] text-center flex flex-col items-center">
            <div className="max-w-[360px] mb-8 px-[20px]">
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
                    {language === "en"
                        ? content.description_en
                        : content.description_vi}
                </p>
            </div>

            {/* ===== 2×2 Image Grid ===== */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-[600px]">
                <img
                    src={IMAGE_LINKS.areas.lobby.thumbnail}
                    className="w-full h-[160px] object-cover rounded-lg shadow-md"
                />
                <img
                    src={IMAGE_LINKS.areas.public.thumbnail}
                    className="w-full h-[160px] object-cover rounded-lg shadow-md"
                />
                <img
                    src={IMAGE_LINKS.areas.guestLounge.thumbnail}
                    className="w-full h-[160px] object-cover rounded-lg shadow-md"
                />
                <img
                    src={IMAGE_LINKS.areas.restaurant.thumbnail}
                    className="w-full h-[160px] object-cover rounded-lg shadow-md"
                />
            </div>
        </div>
    );
}

/* =====================================================
   EXPORT MAIN COMPONENT
===================================================== */
export default function AboutPage({ isPhone, language }) {
    return isPhone ? (
        <AboutPagePhone language={language} />
    ) : (
        <AboutPagePC language={language} />
    );
}
