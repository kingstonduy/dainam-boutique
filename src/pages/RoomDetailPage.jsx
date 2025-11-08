import { useParams } from "react-router-dom";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
    Wifi,
    UtensilsCrossed,
    ParkingCircle,
    Phone,
    Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const amenitiesIcons = {
    wifi: <Wifi className="w-4 h-4" />,
    breakfast: <UtensilsCrossed className="w-4 h-4" />,
    parking: <ParkingCircle className="w-4 h-4" />,
    phone: <Phone className="w-4 h-4" />,
    premium: <Sparkles className="w-4 h-4" />,
};

const ROOM_DETAILS = {
    deluxe: {
        title: "Deluxe Room",
        description:
            "A refined retreat ideal for couples or business travelers seeking comfort with a touch of boutique elegance. Designed with warm tones and curated furniture, the Deluxe Room offers a peaceful stay in the heart of Saigon.",
        size: "22-24 sqm",
        bed: "Double / Twin Bed",
        occupancy: 2,
        price: "1,300,000 VND / night",
        checkIn: "14:00",
        checkOut: "12:00",
        policies: [
            "No smoking inside the room",
            "Pets are not allowed",
            "ID/Passport required at check-in",
        ],
        amenities: ["wifi", "breakfast", "parking", "phone"],
        images: [
            "https://github.com/kingstonduy/dainam-boutique/blob/master/images/rooms/deluxe/image1.jpg?raw=1",
            "https://github.com/kingstonduy/dainam-boutique/blob/master/images/rooms/deluxe/image2.jpg?raw=1",
            "https://github.com/kingstonduy/dainam-boutique/blob/master/images/rooms/deluxe/image3.jpg?raw=1",
            "https://github.com/kingstonduy/dainam-boutique/blob/master/images/rooms/deluxe/image4.jpg?raw=1",
        ],
    },
};

export default function RoomDetailPage() {
    const { roomId } = useParams();
    const room = ROOM_DETAILS[roomId];

    if (!room)
        return <p className="text-center py-20 text-xl">Room not found</p>;

    return (
        <>
            <Navbar />

            {/* HERO CAROUSEL */}
            <section className="relative w-full">
                <Carousel className="w-full" opts={{ loop: true }}>
                    <CarouselContent>
                        {room.images.map((img, i) => (
                            <CarouselItem key={i}>
                                <img
                                    src={img}
                                    alt=""
                                    className="w-full h-[420px] md:h-[520px] object-cover"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </section>

            {/* CONTENT SECTION */}
            <section className="px-6 md:px-20 py-10 bg-[#f4efeeff]">
                <h1 className="text-4xl font-serif mb-3">{room.title}</h1>
                <p className="text-gray-700 leading-relaxed max-w-3xl">
                    {room.description}
                </p>

                {/* Quick Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-center">
                    <InfoCard label="Size" value={room.size} />
                    <InfoCard
                        label="Occupancy"
                        value={`${room.occupancy} Guests`}
                    />
                    <InfoCard label="Bed" value={room.bed} />
                    <InfoCard label="Price" value={room.price} />
                </div>

                <Separator className="my-10" />

                {/* Amenities */}
                <h2 className="text-2xl font-serif mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-3">
                    {room.amenities.map((a, i) => (
                        <Badge
                            key={i}
                            variant="outline"
                            className="flex items-center gap-2 px-3 py-1 text-sm"
                        >
                            {amenitiesIcons[a]} {capitalize(a)}
                        </Badge>
                    ))}
                </div>

                <Separator className="my-10" />

                {/* Policies */}
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

            {/* Sticky Book Now Button */}
            <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[300px]">
                <button className="w-full bg-green-800 hover:bg-green-900 text-white py-3 rounded-full shadow-lg transition">
                    Book Now
                </button>
            </div>
        </>
    );
}

function InfoCard({ label, value }) {
    return (
        <div className="bg-white p-4 rounded-xl shadow">
            <p className="text-sm text-gray-600">{label}</p>
            <p className="font-semibold text-gray-900">{value}</p>
        </div>
    );
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
