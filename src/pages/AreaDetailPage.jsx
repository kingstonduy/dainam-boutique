// src/pages/AreaDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { IMAGE_LINKS } from "@/assets";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

/* -------------------------------------------
   Helper utils (static = avoids re-creation)
------------------------------------------- */

const formatAreaName = (name) =>
    name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const AREA_DESCRIPTIONS = {
    birthday:
        "A warm and delightful space perfect for celebrations, gatherings, and intimate parties. Decorated with soft lighting and elegant details.",
    guest_lounge:
        "A peaceful waiting area with comfortable seating, ideal for guests to relax before check-in or unwind during their stay.",
    lobby: "The heart of the hotel — spacious, stylish, and welcoming. Perfect for photos, meeting friends, or enjoying a relaxing moment.",
    public: "A beautifully designed shared space for guests to relax, socialize, and enjoy the hotel's atmosphere.",
    restaurant:
        "Our signature dining area offering warm ambiance and an unforgettable culinary experience.",
    wedding:
        "A romantic and elegant venue designed for unforgettable wedding photos, pre-wedding events, and celebrations.",
};

const getAreaDescription = (key) =>
    AREA_DESCRIPTIONS[key] ||
    "A beautifully designed space inside Dai Nam Boutique Hotel.";

/* -------------------------------------------
   Subcomponents (Small, reusable, pure)
------------------------------------------- */

// slider thumbnail item
const ThumbImage = ({ src, alt }) => (
    <motion.img
        whileHover={{ scale: 1.04 }}
        loading="lazy"
        src={src}
        alt={alt}
        className="w-60 h-36 md:w-64 md:h-40 object-cover rounded-xl shadow cursor-pointer"
    />
);

// grid gallery item
const GridImage = ({ src, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
        viewport={{ once: true }}
        className="rounded-xl overflow-hidden shadow-lg"
    >
        <img
            src={src}
            loading="lazy"
            alt={index}
            className="w-full h-56 md:h-60 object-cover"
        />
    </motion.div>
);

/* -------------------------------------------
   MAIN PAGE
------------------------------------------- */

export default function AreaDetailPage() {
    const { areaName } = useParams();
    const areaKey = areaName?.toLowerCase();
    const area = IMAGE_LINKS.areas[areaKey];

    if (!area) {
        return (
            <div className="w-full h-screen flex items-center justify-center text-2xl font-semibold">
                ❌ Area not found
            </div>
        );
    }

    const title = formatAreaName(areaName);

    return (
        <section className="bg-[#f4efee] min-h-screen pb-20">
            {/* BACK BUTTON */}
            <div className="px-6 py-6">
                <Link
                    to="/areas"
                    className="flex items-center gap-2 text-lg font-medium hover:opacity-70 transition"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back to Areas
                </Link>
            </div>

            {/* HERO IMAGE */}
            <div className="w-full h-[340px] md:h-[460px] overflow-hidden rounded-3xl mx-auto max-w-6xl shadow-xl">
                <motion.img
                    initial={{ scale: 1.08, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    src={area.thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="eager"
                />
            </div>

            {/* TITLE */}
            <div className="text-center mt-10 mb-6">
                <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
                    {title}
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                    Explore this beautiful space in our hotel
                </p>
            </div>

            {/* GALLERY SECTION */}
            <div className="max-w-6xl mx-auto px-6 mt-12">
                <h2 className="text-2xl font-serif mb-4">Gallery</h2>

                {/* Thumbnail Slider */}
                <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
                    {area.images.map((img, i) => (
                        <ThumbImage key={i} src={img} alt={i} />
                    ))}
                </div>

                {/* Masonry Grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {area.images.map((img, i) => (
                        <GridImage key={i} src={img} index={i} />
                    ))}
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div className="max-w-3xl mx-auto px-6 mt-20 text-center">
                <h2 className="text-3xl font-serif mb-4">About {title}</h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                    {getAreaDescription(areaKey)}
                </p>
            </div>
        </section>
    );
}
