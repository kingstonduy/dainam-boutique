import { useState } from "react";
import { IMAGE_LINKS } from "@/assets";
import PageHeader from "@/components/PageHeader";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import your UI carousel (shadcn/ui or custom)
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

/* ---------------------------
   UTIL HELPERS
--------------------------- */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const formatName = (key) =>
    key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const AREA_DESCRIPTIONS = {
    birthday:
        "A warm and delightful space designed specifically for celebrations and memorable gatherings. Soft, ambient lighting complements elegant décor, creating a charming and festive atmosphere suitable for birthdays, anniversaries, and intimate parties. The area features curated decorative accents and a cozy, welcoming layout that invites guests to relax, enjoy, and capture heartfelt moments with loved ones. Whether hosting a small celebration or simply taking beautiful photos, this space offers an inviting environment that blends comfort with a joyful boutique feel.",

    // Fixed key: was "guestLounge" → now "guest_lounge"
    guest_lounge:
        "A peaceful and thoughtfully arranged waiting space where guests can unwind before check-in or take a quiet break during their stay. The lounge features comfortable seating, soft lighting, and a refined sense of calm, making it an ideal spot to read, enjoy a drink, or simply relax. Natural light and tasteful interior touches add warmth to the environment, creating a tranquil pause from the bustle of the city. It’s a cozy sanctuary that sets the tone for a comfortable and well-cared-for experience inside the hotel.",

    lobby: "The heart of the hotel — open, spacious, and designed with a welcoming sense of elegance. This is where the boutique personality of the hotel shines through, with stylish décor, curated artwork, and warm lighting that",

    public: "A thoughtfully crafted communal area dedicated to relaxation, conversation, and enjoying the atmosphere of the hotel. The space blends subtle design elements with soft tones and open seating arrangements to encourage comfort and social interaction. Whether guests are unwinding after a day of exploration, spending time with family, or simply taking in the hotel’s ambiance, this area provides the perfect backdrop. Designed with harmony and balance in mind, it invites everyone to pause, breathe, and enjoy the simplicity of a warm, welcoming environment.",

    restaurant:
        "Our signature dining space, created to deliver a memorable and comfortable culinary experience from breakfast through dinner. The restaurant features warm lighting, elegant table arrangements, and a harmonious interior design that enriches every meal. Guests can enjoy a relaxed breakfast, a peaceful afternoon coffee, or a refined evening dinner in an environment that balances charm and sophistication. With its inviting ambiance and attention to detail, the restaurant serves as both a social hub and a serene escape where flavour, comfort, and atmosphere come together beautifully.",

    wedding:
        "A romantic and gracefully designed venue perfect for engagement shoots, pre-wedding photos, and intimate celebration moments. Soft tones, elegant décor, and flattering natural light make this space ideal for capturing precious memories. The atmosphere evokes a sense of warmth, intimacy, and timeless beauty, allowing couples to express their story in an environment tailored for meaningful photography. Whether used for portraits or small romantic events, the area offers a stunning, emotionally resonant setting that highlights love and elegance in every detail.",
};

const getDescription = (key) =>
    AREA_DESCRIPTIONS[key] ||
    "A beautifully designed space inside Dai Nam Boutique Hotel.";

const AREAS = Object.entries(IMAGE_LINKS.areas).map(([key, value]) => ({
    key,
    name: formatName(key),
    description: getDescription(key),
    images: value.images,
}));

/* ---------------------------
   MAIN PAGE
--------------------------- */

export default function AreasPage() {
    const [selected, setSelected] = useState(AREAS[0]);
    const [lightbox, setLightbox] = useState({ open: false, img: null });

    // Prevent image dragging
    const handleDragStart = (e) => e.preventDefault();

    return (
        <section className="min-h-screen bg-gradient-to-b from-[#faf6f5] to-[#f4efee] py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <PageHeader
                    section="DISCOVER"
                    title="Hotel Areas"
                    className="text-center"
                />

                {/* NAVIGATION TABS */}
                <div className="flex flex-wrap justify-center gap-3 mt-12 mb-16">
                    {AREAS.map((area) => (
                        <button
                            key={area.key}
                            onClick={() => setSelected(area)}
                            aria-label={`View ${area.name} area`}
                            className={cn(
                                "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105",
                                "border-2",
                                selected.key === area.key
                                    ? "bg-black text-white border-black shadow-lg"
                                    : "bg-white text-gray-700 border-gray-300 hover:border-gray-400 hover:shadow-md"
                            )}
                        >
                            {area.name}
                        </button>
                    ))}
                </div>

                {/* SELECTED AREA CONTENT */}
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-6">
                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                            {selected.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl">
                            {selected.description}
                        </p>
                    </div>

                    {/* Image Carousel */}
                    <div className="order-1 lg:order-2">
                        <Carousel
                            className="rounded-3xl overflow-hidden shadow-2xl"
                            autoplay
                            autoplayInterval={4000}
                            opts={{ loop: true }}
                        >
                            <CarouselContent>
                                {selected.images.map((img, i) => (
                                    <CarouselItem key={i}>
                                        <img
                                            src={img}
                                            alt={`${selected.name} - Image ${
                                                i + 1
                                            }`}
                                            loading="lazy"
                                            onDragStart={handleDragStart}
                                            className="w-full h-80 md:h-96 lg:h-[500px] object-cover cursor-zoom-in transition-transform duration-500 hover:scale-105"
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

                            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white text-gray-800 shadow-lg">
                                <ChevronLeft className="w-5 h-5" />
                            </CarouselPrevious>
                            <CarouselNext className="right-4 bg-white/80 hover:bg-white text-gray-800 shadow-lg">
                                <ChevronRight className="w-5 h-5" />
                            </CarouselNext>
                            <CarouselDots className="bottom-4" />
                        </Carousel>
                    </div>
                </div>
            </div>

            {/* LIGHTBOX */}
            {lightbox.open && lightbox.img && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4"
                    onClick={() => setLightbox({ open: false, img: null })}
                >
                    <div className="relative max-w-5xl w-full">
                        <img
                            src={lightbox.img}
                            alt="Enlarged view"
                            className="w-full h-auto max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                            onDragStart={handleDragStart}
                        />
                        <button
                            onClick={() =>
                                setLightbox({ open: false, img: null })
                            }
                            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-3 rounded-full text-white transition"
                            aria-label="Close lightbox"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
