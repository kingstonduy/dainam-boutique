import PageHeader from "@/components/PageHeader";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
    {
        roomType: "DELUXE ROOM",
        size: "22-24 sqm",
        bed: "Double / Twin Bed",
        maxOccupancy: 2,
        price: 1300000,
        image: "https://lh3.googleusercontent.com/-iOl5m_4pmpxSxkhnqu8DBIkBb3KDupX1LrP4hB7jyq7wc3hXxCeO3jx01Qi3e9mxVjLa759-k3WTEoC7Vu1RrqSdVwGK7xz=rw-w768-v1-w5472",
    },
    {
        roomType: "DELUXE TRIPLE ROOM",
        size: "25-27 sqm",
        bed: "3 Single Bed",
        maxOccupancy: 3,
        price: 1900000,
        image: "https://lh3.googleusercontent.com/d80YdEvuOg-hsv8nWqR2P4fZo35CRNd6A9tRD-WTTggqk2yghOrNRbwszYEG2wJvdzileZ9vRFRdnwsdD4oY2c4xAkWvpaU=rw-w748-v1-w6100",
    },
    {
        roomType: "EXECUTIVE ROOM",
        size: "25-27 sqm",
        bed: "Double / Twin Bed",
        maxOccupancy: 2,
        price: 1500000,
        image: "https://lh3.googleusercontent.com/3z3DWDKeWnwwE9_mgytJlfP0_7owQy5L30kxuBw0VD5xnPKQYmm3DB3HqA-kkhtaNWZVHkfrNjCNDGKMa8GKwYjXRWd_QhlT=rw-w1000-v1-w5472",
    },
    {
        roomType: "PREMIUM ROOM",
        size: "28-30 sqm",
        bed: "Double / Twin Bed",
        maxOccupancy: 2,
        price: 1700000,
        image: "https://lh3.googleusercontent.com/ivIqpDRk14ryYCre4ZgfBhJ4V8sUQfoWRaGn5XqXsG8OTcajYaFSKlxnEWYfhHEzVesrOWIWsTEkQbbBp5-qhTzfIl7lT9lKlA=rw-w768-v1-w6212",
    },
    {
        roomType: "DAI NAM SUITE",
        size: "30-35 sqm",
        bed: "Double Bed",
        maxOccupancy: 2,
        price: 1900000,
        image: "https://lh3.googleusercontent.com/-iOl5m_4pmpxSxkhnqu8DBIkBb3KDupX1LrP4hB7jyq7wc3hXxCeO3jx01Qi3e9mxVjLa759-k3WTEoC7Vu1RrqSdVwGK7xz=rw-w768-v1-w5472",
    },
];

export default function DiscoverPage() {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsPhone(window.innerWidth <= 768);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return isPhone ? <DiscoverPagePhone /> : <DiscoverPagePC />;
}

function DiscoverPagePC() {
    return (
        <div className="flex flex-col bg-[#f4efeeff] items-center justify-center px-8 py-20">
            <PageHeader section="DISCOVER" title="Rooms & Suites" />

            <div className="flex justify-center">
                <Carousel
                    className="w-full max-w-6xl"
                    autoplay
                    autoplayInterval={3500} // Adjust speed (ms)
                    opts={{ loop: true }} // Ensure infinite loop
                >
                    <CarouselContent>
                        {rooms.map((room, index) => (
                            <CarouselItem key={index}>
                                <div className="flex gap-8 p-6 items-center">
                                    {/* IMAGE */}
                                    <img
                                        src={room.image}
                                        alt={room.roomType}
                                        className="w-1/2 h-[380px] object-cover transition-transform duration-[5000ms] cursor-zoom-in ease-in-out hover:scale-110 active:scale-125"
                                    />

                                    {/* ROOM DETAILS */}
                                    <div className="w-1/2">
                                        <h2 className="text-3xl font-serif tracking-wide mb-4">
                                            {room.roomType}
                                        </h2>

                                        <p className="text-gray-700 mb-2">
                                            <span className="font-medium">
                                                Room Size:
                                            </span>{" "}
                                            {room.size}
                                        </p>
                                        <p className="text-gray-700 mb-2">
                                            <span className="font-medium">
                                                Bed:
                                            </span>{" "}
                                            {room.bed}
                                        </p>
                                        <p className="text-gray-700 mb-6">
                                            <span className="font-medium">
                                                Max occupancy:
                                            </span>{" "}
                                            {room.maxOccupancy} pax
                                        </p>

                                        <p className="text-xl">
                                            From{" "}
                                            <span className="text-3xl font-semibold">
                                                {room.price.toLocaleString()}
                                            </span>{" "}
                                            VND / room / night
                                        </p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation */}
                    <CarouselPrevious />
                    <CarouselNext />

                    {/* Pagination */}
                    <CarouselDots />
                </Carousel>
            </div>
        </div>
    );
}

function DiscoverPagePhone() {
    return (
        <div>
            <h1>Discover Page - Phone Version</h1>
        </div>
    );
}
