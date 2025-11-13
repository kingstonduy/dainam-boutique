import React, { useState, useMemo, useEffect } from "react";
import { IMAGE_LINKS } from "@/assets";
import PageHeader from "@/components/PageHeader";
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
    birthday:
        "A warm and delightful space designed specifically for celebrations and memorable gatherings...",
    guestLounge:
        "A peaceful and thoughtfully arranged waiting space where guests can unwind before check-in...",
    lobby: "The heart of the hotel — open, spacious, and designed with a welcoming sense of elegance...",
    public: "A thoughtfully crafted communal area dedicated to relaxation, conversation, and enjoying the atmosphere...",
    restaurant:
        "Our signature dining space, created to deliver a memorable and comfortable culinary experience...",
    wedding:
        "A romantic and gracefully designed venue perfect for engagement shoots, pre-wedding photos...",
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
            className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-xl cursor-zoom-in hover:scale-105 transition"
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

export default function AreasPage() {
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
                                        <AreaImage
                                            img={img}
                                            onClick={() =>
                                                setLightbox({
                                                    open: true,
                                                    img,
                                                })
                                            }
                                        />
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

            {/* LIGHTBOX */}
            {lightbox.open && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
                    onClick={() => setLightbox({ open: false, img: null })}
                >
                    <div className="relative max-w-5xl w-full">
                        <img
                            src={lightbox.img}
                            loading="lazy"
                            className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            onClick={() =>
                                setLightbox({ open: false, img: null })
                            }
                            className="absolute hover:cursor-pointer top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-3 rounded-full text-white transition"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
