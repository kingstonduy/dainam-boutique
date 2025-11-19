import { ROOMS_INFO } from "@/assets";
import SectionHeader from "@/components/PageHeader";
import PopUpImage from "@/components/PopUpImage";
import { H2, H3, Paragraph } from "@/components/Text";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "@/components/ui/carousel";
import { useEffect, useMemo, useState } from "react";

// Memoize the rooms list (avoid recreating array on every render)
const useRooms = () =>
    useMemo(
        () => [
            ROOMS_INFO.deluxe,
            ROOMS_INFO.executive,
            ROOMS_INFO.signature,
            ROOMS_INFO.suite,
        ],
        []
    );

export default function DiscoverPage({ isPhone, language }) {
    const rooms = useRooms();

    return isPhone ? (
        <DiscoverPagePhone
            rooms={rooms}
            isPhone={isPhone}
            language={language}
        />
    ) : (
        <DiscoverPagePC rooms={rooms} isPhone={isPhone} language={language} />
    );
}

/* ------------------------- DESKTOP VERSION ------------------------- */
function DiscoverPagePC({ rooms, isPhone, language }) {
    return (
        <section className="bg-[#f4efeeff] flex flex-col items-center px-6 md:px-12 lg:px-20 py-16 md:py-20">
            <SectionHeader
                section={language === "en" ? "DISCOVER" : "KHÁM PHÁ"}
                title={language === "en" ? "Rooms & Suites" : "Các loại phòng"}
                isPhone={isPhone}
            />

            <Carousel
                className="w-full max-w-6xl"
                autoplay
                autoplayInterval={3500}
                opts={{ loop: true }}
            >
                <CarouselContent>
                    {rooms.map((room, index) => (
                        <CarouselItem key={index}>
                            <RoomCardPC room={room} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
                <CarouselDots />
            </Carousel>
        </section>
    );
}

function RoomCardPC({ room, language }) {
    return (
        <div className="flex gap-8 pb-6 pt-6 items-center">
            <PopUpImage
                img={room.thumbnail || room.image}
                className=" h-[380px] object-cover rounded-4xl transition-transform duration-[5000ms] ease-in-out hover:scale-110 cursor-zoom-in"
            ></PopUpImage>

            <div className="w-1/2 pr-6">
                <H2>{room.roomType}</H2>
                <Paragraph>
                    <span className="font-medium">
                        {language === "en" ? "Room Size" : "Kích thước phòng"}:
                    </span>{" "}
                    {room.size}
                </Paragraph>
                <Paragraph>
                    <span className="font-medium">
                        {language === "en" ? "Bed" : "Loại giường"}:
                    </span>{" "}
                    {room.bed}
                </Paragraph>

                <Paragraph>
                    <span className="font-medium">
                        {language === "en" ? "Max Occupancy" : "Sức chứa"}:
                    </span>{" "}
                    {room.maxOccupancy}{" "}
                    {language === "en" ? "Guests" : "Người lớn"}
                </Paragraph>

                <Paragraph>
                    {language === "en" ? "From" : "Chỉ từ"}{" "}
                    <span className="text-2xl font-semibold">
                        {room.price.toLocaleString()}
                    </span>{" "}
                    {language === "en" ? "VND / night" : "VND / đêm"}
                </Paragraph>
            </div>
        </div>
    );
}

/* ------------------------- PHONE VERSION ------------------------- */
function DiscoverPagePhone({ rooms, isPhone, language }) {
    return (
        <section className="bg-[#f4efeeff] flex flex-col items-center px-4 py-14">
            <SectionHeader
                section={language === "en" ? "DISCOVER" : "KHÁM PHÁ"}
                title={language === "en" ? "Rooms & Suites" : "Các loại phòng"}
                isPhone={isPhone}
            />

            <Carousel
                className="w-full max-w-lg"
                autoplay
                autoplayInterval={3200}
                opts={{ loop: true }}
            >
                <CarouselContent>
                    {rooms.map((room, index) => (
                        <CarouselItem key={index}>
                            <RoomCardPhone room={room} language={language} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
                <CarouselDots />
            </Carousel>
        </section>
    );
}

function RoomCardPhone({ room, language }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mx-2">
            <img
                src={room.thumbnail || room.image}
                alt={room.roomType}
                loading="lazy"
                className="w-full h-56 object-cover"
            />

            <div className="p-5">
                <H2 className="text-center">{room.roomType}</H2>
                <Paragraph>
                    <span className="font-medium">
                        {language === "en" ? "Room Size" : "Kích thước phòng"}:
                    </span>{" "}
                    {room.size}
                </Paragraph>
                <Paragraph>
                    <span className="font-medium">
                        {language === "en" ? "Bed" : "Loại giường"}:
                    </span>{" "}
                    {room.bed}
                </Paragraph>

                <Paragraph>
                    <span className="font-medium">
                        {language === "en" ? "Max Occupancy" : "Sức chứa"}:
                    </span>{" "}
                    {room.maxOccupancy}{" "}
                    {language === "en" ? "Guests" : "Người lớn"}
                </Paragraph>

                <Paragraph>
                    {language === "en" ? "From" : "Chỉ từ"}{" "}
                    <span className="text-2xl font-semibold">
                        {room.price.toLocaleString()}
                    </span>{" "}
                    {language === "en" ? "VND / night" : "VND / đêm"}
                </Paragraph>
            </div>
        </div>
    );
}
