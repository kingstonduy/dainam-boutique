import React, { useState, useMemo, useEffect } from "react";
import { IMAGE_LINKS } from "@/assets";
import { X } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "@/components/ui/carousel";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Paragraph } from "@/components/Text";
import PopUpImage from "@/components/PopUpImage";

/* ---------------------------
   UTIL HELPERS
--------------------------- */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const formatName = (key) =>
    key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const INTRO_TEXT = {
    en: "At Dai Nam Boutique Hotel, every space is meticulously designed to elevate your experience. Combining modern amenities with timeless elegance, the hotel offers perfect harmony. Whether relaxing, dining, attending events, or exploring interiors, every detail ensures comfort, luxury, and sophistication.",
    vi: "Tại Dai Nam Boutique Hotel, mỗi không gian được chăm chút tỉ mỉ để nâng tầm trải nghiệm của bạn. Kết hợp tiện nghi hiện đại và phong cách cổ điển tinh tế, khách sạn mang đến sự hài hòa hoàn hảo. Dù bạn thư giãn, thưởng thức ẩm thực, tham gia sự kiện hay khám phá nội thất, mọi chi tiết đều được thiết kế để bạn cảm thấy thoải mái, sang trọng và đẳng cấp.",
};

const AREA_DESCRIPTIONS = {
    en: {
        lobby: "The lobby is the heart of Dai Nam Boutique Hotel, welcoming guests with elegance and warmth. Spacious, bright, and thoughtfully designed, it features curated art, cozy seating, and soft lighting. Perfect for first impressions, casual meetings, or capturing memorable photos, the lobby balances comfort and boutique charm.",
        public: "A modern-classic boutique hotel set amid Saigon’s vibrant core. Just minutes from Ben Thanh Market and Bui Vien Walking Street, the property blends graceful architecture with easy access to the city’s cultural and entertainment hubs.",
        guestLounge:
            "A peaceful and thoughtfully arranged waiting space where guests can unwind before check-in or take a quiet break during their stay. The lounge features comfortable seating, soft lighting, and a refined sense of calm, making it an ideal spot to read, enjoy a drink, or simply relax. Natural light and tasteful interior touches add warmth to the environment, creating a tranquil pause from the bustle of the city. It’s a cozy sanctuary that sets the tone for a comfortable and well-cared-for experience inside the hotel.",
        restaurant:
            "Our restaurant offers culinary delights in a refined setting. Modern design meets classic elegance, with natural light and comfortable seating enhancing every dining experience. Guests can enjoy breakfast in a space designed for taste, comfort, and social moments.",
        banquet:
            "A versatile, elegantly designed venue ideal for birthdays, gatherings, and intimate celebrations. The space features warm lighting, refined décor, and flexible layouts that adapt effortlessly to your event style — from joyful family moments to meaningful milestone parties.",
        wedding:
            "Create unforgettable wedding memories at Dai Nam Boutique Hotel. The wedding space combines elegant décor, ambient lighting, and flexible arrangements to suit ceremonies and receptions. Every detail is designed to ensure a romantic, joyful, and seamless celebration.",
    },
    vi: {
        lobby: "Sảnh đón là trái tim của Khách sạn Đại Nam Boutique, chào đón khách với sự thanh lịch và ấm áp. Rộng rãi, sáng sủa và thiết kế tinh tế, nơi đây có nghệ thuật chọn lọc, chỗ ngồi ấm cúng và ánh sáng dịu nhẹ. Lý tưởng để gây ấn tượng đầu tiên, gặp gỡ, hoặc lưu giữ khoảnh khắc đẹp, sảnh kết hợp tiện nghi và phong cách boutique.",
        public: "Khách sạn boutique mang phong cách hiện đại - cổ điển, toạ lạc ngay trung tâm Sài Gòn. Chỉ cách Chợ Bến Thành và phố Bùi Viện vài phút, khách sạn kết hợp hài hòa giữa nét kiến trúc tinh tế và vị trí thuận tiện gần các điểm văn hoá - giải trí của thành phố.",
        guestLounge:
            "Không gian café cổ điển và sang trọng, nổi bật với tông gỗ trầm, ánh sáng ấm và vẻ đẹp đầy quyền lực nhẹ nhàng — lý tưởng cho một ly espresso buổi sáng, một buổi gặp gỡ riêng tư hoặc khoảnh khắc yên bình giữa nhịp sống sôi động của Sài Gòn.",
        restaurant:
            "Nhà hàng của khách sạn mang đến ẩm thực tinh tế trong không gian sang trọng. Thiết kế hiện đại kết hợp phong cách cổ điển, ánh sáng tự nhiên và chỗ ngồi thoải mái nâng tầm trải nghiệm ẩm thực. Khách có thể thưởng thức bữa sáng trong không gian đề cao hương vị, sự tiện nghi và khoảnh khắc kết nối.",
        banquet:
            "Không gian sự kiện linh hoạt với thiết kế tinh tế, phù hợp cho tiệc sinh nhật, họp mặt và các buổi mừng đặc biệt. Ánh sáng ấm, trang trí sang nhã và bố trí đa dạng giúp sảnh dễ dàng tùy chỉnh theo phong cách sự kiện — từ khoảnh khắc gia đình sum vầy đến những dịp kỷ niệm đáng nhớ.",
        wedding:
            "Tạo nên những kỷ niệm cưới khó quên tại Dai Nam Boutique Hotel. Không gian tiệc cưới kết hợp trang trí tinh tế, ánh sáng ấm áp và bố trí linh hoạt để phù hợp với lễ cưới và tiệc tiếp khách. Mỗi chi tiết đều được thiết kế để mang đến một lễ cưới lãng mạn, vui vẻ và trọn vẹn.",
    },
};

/* CREATE STATIC AREA LIST ONLY ONCE */
const useAreas = ({ language }) =>
    useMemo(() => {
        return Object.entries(IMAGE_LINKS.areas).map(([key, value]) => ({
            key,
            name: formatName(key),
            description:
                language === "en"
                    ? AREA_DESCRIPTIONS.en[key]
                    : AREA_DESCRIPTIONS.vi[key],
            images: value.images,
        }));
    }, [language]);

/* ---------------------------
   MEMOIZED IMAGE COMPONENT
--------------------------- */
const AreaImage = React.memo(function AreaImage({ img, onClick }) {
    return (
        <img
            src={img}
            loading="lazy"
            className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-xl cursor-zoom-in "
            draggable={false}
            onClick={onClick}
        />
    );
});

/* ---------------------------
   PRELOAD + DECODE (BEST SPEED)
--------------------------- */

// Memory cache so decode() runs only once per image
const imageDecodeCache = new Map();

const preloadAndDecodeImages = async (urls) => {
    for (const url of urls) {
        if (imageDecodeCache.has(url)) continue;

        const img = new Image();
        img.src = url;

        try {
            await img.decode(); // 🔥 pre-decode for instant display
            imageDecodeCache.set(url, true);
        } catch (_) {}
    }
};

/* ---------------------------
   MAIN PAGE
--------------------------- */

export default function AreasPage({ language }) {
    const AREAS = useAreas({ language });
    const [selected, setSelected] = useState(AREAS[0]);

    useEffect(() => {
        setSelected(AREAS[0]);
    }, [language]);

    /* ⭐ PRELOAD + PRE-DECODE IMAGES (major performance boost) */
    useEffect(() => {
        preloadAndDecodeImages(selected.images);
    }, [selected]);

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#faf6f5] to-[#f4efee] py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* INTRO */}
                <Paragraph>
                    {language === "en" ? INTRO_TEXT.en : INTRO_TEXT.vi}
                </Paragraph>

                {/* NAV TABS */}
                <div className="flex flex-wrap justify-center gap-3 mt-4 mb-16">
                    {AREAS.map((area) => (
                        <button
                            key={area.key}
                            onClick={() => setSelected(area)}
                            className={cn(
                                "px-6 py-3 hover:cursor-pointer rounded-full text-sm font-medium border-2 transition-all duration-300 hover:scale-105",
                                selected.key === area.key
                                    ? "bg-black text-white border-black shadow-lg"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow"
                            )}
                        >
                            {area.name}
                        </button>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* DESCRIPTION */}
                    <div className="order-2 lg:order-1 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                            {selected.name}
                        </h2>
                        <Paragraph>{selected.description}</Paragraph>
                    </div>

                    {/* CAROUSEL */}
                    <div className="order-1 lg:order-2 mr-5">
                        <Carousel
                            key={selected.key}
                            className="w-full max-w-6xl"
                            autoplay
                            autoplayInterval={3500}
                            opts={{ loop: true }}
                        >
                            <CarouselContent>
                                {selected.images.map((img, i) => (
                                    <CarouselItem key={i}>
                                        <PopUpImage img={img}></PopUpImage>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious />
                            <CarouselNext />
                            <CarouselDots />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
