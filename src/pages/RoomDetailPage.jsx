import { Badge } from "@/components/ui/badge";
import {
    Wifi,
    UtensilsCrossed,
    ParkingCircle,
    Phone,
    Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import { IMAGE_LINKS } from "@/assets";
import { useParams } from "react-router-dom";
import { H1, Paragraph } from "@/components/Text";

const amenitiesIcons = {
    wifi: <Wifi className="w-4 h-4" />,
    breakfast: <UtensilsCrossed className="w-4 h-4" />,
    parking: <ParkingCircle className="w-4 h-4" />,
    phone: <Phone className="w-4 h-4" />,
    premium: <Sparkles className="w-4 h-4" />,
};

const time = {
    checkIn: "14:00",
    checkOut: "12:00",
};

const policies = {
    noSmoking: "No smoking inside the room",
    noPets: "Pets are not allowed",
    idRequired: "ID/Passport required at check-in",
};

const roomData = {
    deluxe: {
        title: "Deluxe Room",
        description:
            "Thoughtfully designed for both leisure and business travelers, the Deluxe Room offers a warm and inviting ambiance with elegant boutique touches. The room features curated furnishings, soothing color palettes, and soft lighting to create an atmosphere of comfort and relaxation. Ideal for couples or solo guests seeking a peaceful retreat in the heart of Saigon, this room strikes the perfect balance between style, convenience, and tranquility.",
        size: "22-24 sqm",
        bed: "Double / Twin Bed",
        occupancy: 2,
        price: "1,300,000 VND / night",
        checkIn: time.checkIn,
        checkOut: time.checkOut,
        policies: [policies.noSmoking, policies.noPets, policies.idRequired],
        amenities: ["wifi", "breakfast", "parking", "phone"],
        images: [
            IMAGE_LINKS.rooms.deluxe.thumbnail,
            ...IMAGE_LINKS.rooms.deluxe.images,
        ],
    },
    executive: {
        title: "Executive Room",
        description:
            "The Executive Room provides an elevated stay experience for guests who value space, comfort, and sophistication. With modern interior décor, a refined work corner, and carefully selected amenities, the room ensures productivity during the day and restful comfort at night. Perfect for business travelers or long-stay guests, it delivers a serene sanctuary away from the city’s energy—without ever being far from it.",
        size: "26-30 sqm",
        bed: "Double / Twin Bed",
        occupancy: 2,
        price: "1,800,000 VND / night",
        checkIn: time.checkIn,
        checkOut: time.checkOut,
        policies: [policies.noSmoking, policies.noPets, policies.idRequired],
        amenities: ["wifi", "breakfast", "parking", "phone"],
        images: [
            IMAGE_LINKS.rooms.executive.thumbnail,
            ...IMAGE_LINKS.rooms.executive.images,
        ],
    },
    signature: {
        title: "Signature Room",
        description:
            "Beautifully styled with premium décor and distinctive boutique character, the Signature Room brings an enhanced level of comfort and charm. Each detail—from the luxurious bedding to the curated artwork—has been chosen to elevate the guest experience and evoke a sense of refined living. Ideal for those seeking a more indulgent stay, the Signature Room blends contemporary elegance with a warm, personal touch that leaves a lasting impression.",
        size: "28-32 sqm",
        bed: "King Bed",
        occupancy: 2,
        price: "2,400,000 VND / night",
        checkIn: time.checkIn,
        checkOut: time.checkOut,
        policies: [policies.noSmoking, policies.noPets, policies.idRequired],
        amenities: ["wifi", "breakfast", "parking", "phone", "premium"],
        images: [
            IMAGE_LINKS.rooms.signature.thumbnail,
            ...IMAGE_LINKS.rooms.signature.images,
        ],
    },
    suite: {
        title: "Suite Room",
        description:
            "The Suite Room offers the finest expression of luxury at Dai Nam Boutique, combining generous space with tasteful design and upscale amenities. Featuring a stylish lounge area, premium furnishings, and carefully crafted décor, the suite is perfect for special occasions, romantic getaways, or extended stays. With its elevated comfort and refined ambiance, this room provides an intimate and memorable retreat in the heart of Saigon.",
        size: "35+ sqm",
        bed: "King Bed",
        occupancy: 2,
        price: "3,500,000 VND / night",
        checkIn: time.checkIn,
        checkOut: time.checkOut,
        policies: [policies.noSmoking, policies.noPets, policies.idRequired],
        amenities: ["wifi", "breakfast", "parking", "phone", "premium"],
        images: [
            IMAGE_LINKS.rooms.suite.thumbnail,
            ...IMAGE_LINKS.rooms.suite.images,
        ],
    },
};

function RoomDetailPC({ room }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!room) {
        return (
            <div className="text-center py-20 text-xl font-semibold">
                ❌ Room not found
            </div>
        );
    }

    return (
        <section className="bg-white flex flex-col items-center px-6 md:px-12 lg:px-20 py-16 md:py-20">
            {/* === TOP SECTION: IMAGES + SUMMARY === */}
            <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl">
                {/* LEFT: IMAGES */}
                <div className="flex flex-col gap-4 lg:w-2/3">
                    {/* Big Image */}
                    <div className="w-full h-[380px]">
                        <img
                            src={room.images[selectedIndex]}
                            alt={room.title}
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex gap-3 overflow-x-auto pb-5 pl-3">
                        {room.images.map((img, i) => {
                            const isSelected = i === selectedIndex;
                            return (
                                <img
                                    key={i}
                                    src={img}
                                    onClick={() => setSelectedIndex(i)}
                                    alt={`thumbnail-${i}`}
                                    className={`w-28 h-20 object-cover mt-3 rounded-lg cursor-pointer transition
                                        ${
                                            isSelected
                                                ? "ring-4 ring-black scale-110"
                                                : "hover:opacity-80"
                                        }
                                    `}
                                />
                            );
                        })}
                    </div>
                </div>

                {/* RIGHT: ROOM DETAILS */}
                <div className="flex flex-col gap-4 lg:w-1/3">
                    <H1>{room.title}</H1>
                    <Paragraph> {room.description} </Paragraph>

                    <InfoBox label="Size" value={room.size} />
                    <InfoBox
                        label="Occupancy"
                        value={`${room.occupancy} Guests`}
                    />
                    <InfoBox label="Bed" value={room.bed} />
                    <InfoBox label="Price" value={room.price} />
                </div>
            </div>

            {/* === AMENITIES === */}
            <section className="w-full max-w-6xl mt-12">
                <h2 className="text-2xl font-serif mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-3">
                    {room.amenities.map((key, i) => (
                        <Badge
                            key={i}
                            variant="outline"
                            className="flex items-center gap-2 px-3 py-1 text-sm"
                        >
                            {amenitiesIcons[key]} {capitalize(key)}
                        </Badge>
                    ))}
                </div>
            </section>

            {/* === POLICIES === */}
            <section className="w-full max-w-6xl mt-12">
                <h2 className="text-2xl font-serif mb-4">Policies</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                        <strong>Check-in:</strong> {room.checkIn}
                    </li>
                    <li>
                        <strong>Check-out:</strong> {room.checkOut}
                    </li>
                    {room.policies.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

function InfoBox({ label, value }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-600">{label}</p>
            <p className="font-semibold text-gray-900">{value}</p>
        </div>
    );
}

export default function RoomDetailPage() {
    const { roomName } = useParams();
    const [isPhone, setIsPhone] = useState(false);
    const room = roomData[roomName?.toLowerCase()] || null;

    useEffect(() => {
        const check = () => setIsPhone(window.innerWidth <= 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return isPhone ? <RoomDetailPhone /> : <RoomDetailPC room={room} />;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function RoomDetailPhone() {
    return (
        <div className="text-center py-20 text-xl font-semibold">
            📱 Mobile view is under construction. Please visit on a desktop
            device.
        </div>
    );
}
