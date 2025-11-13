import { Badge } from "@/components/ui/badge";
import { useEffect, useState, useMemo } from "react";
import { ROOMS_INFO } from "@/assets";
import { useParams } from "react-router-dom";
import { H1, Paragraph } from "@/components/Text";

import {
    Wifi,
    UtensilsCrossed,
    ParkingCircle,
    Phone,
    Sparkles,
} from "lucide-react";

// Icons should be components, not JSX nodes
const AMENITIES_ICON = {
    wifi: Wifi,
    breakfast: UtensilsCrossed,
    parking: ParkingCircle,
    phone: Phone,
    premium: Sparkles,
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
                            alt={room.roomType}
                            loading="lazy"
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
                                    loading="lazy"
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
                    <H1>{room.roomType}</H1>
                    <Paragraph>{room.description}</Paragraph>

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
                    {room.amenities.map((key, i) => {
                        const Icon = AMENITIES_ICON[key];
                        return (
                            <Badge
                                key={i}
                                variant="outline"
                                className="flex items-center gap-2 px-3 py-1 text-sm"
                            >
                                <Icon className="w-4 h-4" /> {capitalize(key)}
                            </Badge>
                        );
                    })}
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

    const room = useMemo(() => {
        return ROOMS_INFO[roomName?.toLowerCase()] || null;
    }, [roomName]);

    const [isPhone, setIsPhone] = useState(() => window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsPhone(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isPhone ? <RoomDetailPhone /> : <RoomDetailPC room={room} />;
}

function RoomDetailPhone() {
    return (
        <div className="text-center py-20 text-xl font-semibold">
            📱 Mobile view is under construction. Please visit on a desktop
            device.
        </div>
    );
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
