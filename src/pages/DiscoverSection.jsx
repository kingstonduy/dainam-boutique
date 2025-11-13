import { ROOMS_INFO } from "@/assets";
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

const rooms = [
    ROOMS_INFO.deluxe,
    ROOMS_INFO.executive,
    ROOMS_INFO.signature,
    ROOMS_INFO.suite,
];

export default function DiscoverPage() {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const checkDevice = () => setIsPhone(window.innerWidth <= 768);
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return isPhone ? <DiscoverPagePhone /> : <DiscoverPagePC />;
}

/* ------------------------- DESKTOP VERSION ------------------------- */
function DiscoverPagePC() {
    return (
        <section className="bg-[#f4efeeff] flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16 md:py-20">
            <PageHeader section="DISCOVER" title="Rooms & Suites" />

            <Carousel
                className="w-full max-w-6xl"
                autoplay
                autoplayInterval={3500}
                opts={{ loop: true }}
            >
                <CarouselContent>
                    {rooms.map((room, index) => (
                        <CarouselItem key={index}>
                            <div className="flex gap-8 p-6 items-center">
                                <img
                                    src={room.image}
                                    alt={room.roomType}
                                    className="w-1/2 h-[380px] object-cover transition-transform duration-[5000ms] cursor-zoom-in ease-in-out hover:scale-110 active:scale-125 rounded-xl"
                                />
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

                {/* Pagination Dots */}
                <CarouselDots />
            </Carousel>
        </section>
    );
}

/* ------------------------- PHONE VERSION ------------------------- */
function DiscoverPagePhone() {
    return (
        <section className="bg-[#f4efeeff] flex flex-col items-center justify-center px-4 py-14">
            <PageHeader section="DISCOVER" title="Rooms & Suites" />

            <Carousel
                className="w-full max-w-lg"
                autoplay
                autoplayInterval={3200}
                opts={{ loop: true }}
            >
                <CarouselContent>
                    {rooms.map((room, index) => (
                        <CarouselItem key={index}>
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-2">
                                <img
                                    src={room.image}
                                    alt={room.roomType}
                                    className="w-full h-56 object-cover"
                                />

                                <div className="p-5 text-center">
                                    <h2 className="text-2xl font-serif mb-2">
                                        {room.roomType}
                                    </h2>
                                    <p className="text-gray-700 text-sm mb-1">
                                        {room.size}
                                    </p>
                                    <p className="text-gray-700 text-sm mb-1">
                                        {room.bed}
                                    </p>
                                    <p className="text-gray-700 text-sm mb-3">
                                        {room.maxOccupancy} Guests
                                    </p>
                                    <p className="text-lg font-semibold">
                                        {room.price.toLocaleString()} VND /
                                        night
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Navigation */}
                <CarouselPrevious />
                <CarouselNext />

                {/* Pagination Dots */}
                <CarouselDots />
            </Carousel>
        </section>
    );
}
