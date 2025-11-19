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

const INTRO_TEXT =
    "At Dai Nam Boutique Hotel, we take pride in offering thoughtfully crafted spaces that elevate every moment of your stay. Each area within our hotel has been designed with a unique purpose in mind—whether you are relaxing before check-in, enjoying a quiet meal, celebrating a special occasion, or simply exploring the charm of our interiors. From inviting lounges and elegantly styled public zones to warm dining spaces and picturesque event corners, every environment reflects our dedication to comfort, aesthetics, and hospitality. These curated areas allow guests to unwind, connect, and create meaningful memories in a setting that blends modern boutique character with timeless elegance. No matter the reason for your visit, our hotel provides a harmonious experience where atmosphere, design, and service come together beautifully.";

const AREA_DESCRIPTIONS = {
    lobby: "The heart of the hotel — open, spacious, and designed with a welcoming sense of elegance. This is where the boutique personality of the hotel shines through, with stylish décor, curated artwork, and warm lighting that creates an unforgettable first impression. Guests can meet friends, enjoy a quiet moment, or capture beautiful photos thanks to the thoughtfully composed layout. The lobby blends comfort with character, offering both functionality and charm in equal measure.",
    public: "A thoughtfully crafted communal area dedicated to relaxation, conversation, and enjoying the atmosphere of the hotel. The space blends subtle design elements with soft tones and open seating arrangements to encourage comfort and social interaction. Whether guests are unwinding after a day of exploration, spending time with family, or simply taking in the hotel’s ambiance, this area provides the perfect backdrop. Designed with harmony and balance in mind, it invites everyone to pause, breathe, and enjoy the simplicity of a warm, welcoming environment.",
    guestLounge:
        "A peaceful and thoughtfully arranged waiting space where guests can unwind before check-in or take a quiet break during their stay. The lounge features comfortable seating, soft lighting, and a refined sense of calm, making it an ideal spot to read, enjoy a drink, or simply relax. Natural light and tasteful interior touches add warmth to the environment, creating a tranquil pause from the bustle of the city. It’s a cozy sanctuary that sets the tone for a comfortable and well-cared-for experience inside the hotel.",
    restaurant:
        "Our signature dining space, created to deliver a memorable and comfortable culinary experience from breakfast through dinner. The restaurant features warm lighting, elegant table arrangements, and a harmonious interior design that enriches every meal. Guests can enjoy a relaxed breakfast, a peaceful afternoon coffee, or a refined evening dinner in an environment that balances charm and sophistication. With its inviting ambiance and attention to detail, the restaurant serves as both a social hub and a serene escape where flavor, comfort, and atmosphere come together beautifully.",
    birthday:
        "A warm and delightful space designed specifically for celebrations and memorable gatherings. Soft, ambient lighting complements elegant décor, creating a charming and festive atmosphere suitable for birthdays, anniversaries, and intimate parties. The area features curated decorative accents and a cozy, welcoming layout that invites guests to relax, enjoy, and capture heartfelt moments with loved ones. Whether hosting a small celebration or simply taking beautiful photos, this space offers an inviting environment that blends comfort with a joyful boutique feel.",
    wedding:
        "A romantic and gracefully designed venue perfect for engagement shoots, pre-wedding photos, and intimate celebration moments. Soft tones, elegant décor, and flattering natural light make this space ideal for capturing precious memories. The atmosphere evokes a sense of warmth, intimacy, and timeless beauty, allowing couples to express their story in an environment tailored for meaningful photography. Whether used for portraits or small romantic events, the area offers a stunning, emotionally resonant setting that highlights love and elegance in every detail.",
};

/* CREATE STATIC AREA LIST ONLY ONCE */
const useAreas = () =>
    useMemo(
        () =>
            Object.entries(IMAGE_LINKS.areas).map(([key, value]) => ({
                key,
                name: formatName(key),
                description:
                    AREA_DESCRIPTIONS[key] ||
                    "A beautifully designed space inside Dai Nam Boutique Hotel.",
                images: value.images,
            })),
        []
    );

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

export default function AreasPage({ isPhone }) {
    const AREAS = useAreas();
    const [selected, setSelected] = useState(AREAS[0]);
    const [lightbox, setLightbox] = useState({ open: false, img: null });

    /* ⭐ PRELOAD + PRE-DECODE IMAGES (major performance boost) */
    useEffect(() => {
        preloadAndDecodeImages(selected.images);
    }, [selected]);

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#faf6f5] to-[#f4efee] py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* INTRO */}
                <Paragraph>{INTRO_TEXT}</Paragraph>

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
                    <div className="order-1 lg:order-2">
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
