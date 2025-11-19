// src/sections/TestimonialsSection.jsx
import React, { useEffect, useState } from "react";
import SectionHeader from "@/components/PageHeader";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { H3, Paragraph } from "@/components/Text";

const testimonials = [
    {
        name: "Cian L",
        avatar: "https://lh3.googleusercontent.com/a/ACg8ocK3BogLUTvtNPufBL0SS9AljLo8btyV9DevrOYxWqN5aGn2vw=s40-c-rp-mo-br100",
        rating: 5,
        quote: `I had a wonderful stay at Dai Nam Hotel, and I would like to especially commend the excellent service provided by the concierge, Steven. He was consistently professional, warm, and welcoming, always greeting us with a smile. His recommendations for shopping venues and local dining were spot on and greatly enriched our experience in the city.
The hotel's location is also very convenient, making it easy to explore the surroundings. Overall, the combination of a great location and Steven's outstanding hospitality made my stay truly enjoyable. Highly recommended.`,
    },
    {
        name: "TaaTaa",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUc1s5rxM4NsqFunCOMtEmM_UxHiCUNc9maWAWjb14-4qwPzYQ=s40-c-rp-mo-br100",
        rating: 5,
        quote: `I've stayed at this hotel in District 1, Saigon twice now, and it's legit one of my favorites. The location is awesome, right in the middle of everything but still feels safe and chill. You can walk everywhere: street food, cafes, and markets.
        The room was clean, modern, and had all the little extras that made it comfy. Staff were super friendly and helpful too. For the price, it's totally worth it. Already planning my third stay!`,
    },
    {
        name: "Linh Diệu",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUF2c0AADlyu0S6k31NzjOKUOyjX5pD8Ld2q2Th4LyyUzSEQUrV=s40-c-rp-mo-br100",
        rating: 5,
        quote: `Great location and excellent support from Mr. Steven and his team. I fell seriously ill during my trip, and Mr. Steven kindly helped me with free medicine and provided an extra blanket upon request.
        My room was spacious and clean. However, since it faced the main street, it was quite noisy, especially on weekends, as Saigon never sleeps and there's a club nearby. I recommend requesting a room that's not in the front row. If you're not a light sleeper, this place is a great choice overall.`,
    },
    {
        name: "Marielle Buban",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUadCxdwuBMVMVPMz42RctR6WQf97MV5k038l_22JDW8Zfry5c=s40-c-rp-mo-br100",
        rating: 5,
        quote: `A cozy, warm, and aesthetic gem in the city
        Dai Nam Boutique is such a great place to stay. The building may be older, but it has a unique charm — very aesthetic and comfortable. The bed was cozy, and the pillows were that perfect balance of firm yet soft. Heaters worked well (huge plus!), and the complimentary toiletries were complete: even included a sewing kit, slippers, and cotton buds. Housekeeping kept everything spotless.
        Special thanks to To, Steven and Hung, they were always kind and helpful, and truly made my stay feel cared for. They even recommended me nice places to eat and even let me borrowed money on my first night which was so awesome. The free breakfast was lovely, especially the pho — definitely my favorite part of the morning.
        I'll be back in two months and will absolutely be booking here again. Highly recommend this hotel to anyone visiting!`,
    },
    {
        name: "Kimmy Kay",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVtMjvXMWR2gbdG-Au8_85lwCTCYfMdjtCLyRyAxB9NBbKd2yzr=s40-c-rp-mo-br100",
        rating: 5,
        quote: `Had a lovely stay at Dai Nam Hotel with all amenities at the highest standards. Conveniently located to all the main spots within walking distance. All staff were extremely attentive, polite and wonderful! Special shoutout to front of house Mr. Steven who is always bubbly and welcoming. Definitely will be coming back next trip.`,
    },
    {
        name: "nataraja shantharamakrishna",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW9nsKpXLvBfDUaEc8r2n2FJC1XO10OXMG5D7jHoe6eDtWNbL6e=s40-c-rp-mo-br100",
        rating: 5,
        quote: `We had an absolutely amazing time at Dai Nam Hotel. The rooms were spacious and spotless, with great décor and crisp bed sheets. The breakfast buffet was super delicious 😋 , with a huge variety of options..!! The staff were attentive and went out of their way to ensure that we were comfortable..!!. Nothing was too much trouble.. I just love the place and will definitely visit again and again... 😍`,
    },
    {
        name: "Thiaga Raj",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW9nsKpXLvBfDUaEc8r2n2FJC1XO10OXMG5D7jHoe6eDtWNbL6e=s40-c-rp-mo-br100",
        rating: 5,
        quote: `The service was good while i'm staying here. The man who treated me was very friendly (Tong). Very easy to excess to clubbing, massage, shopping mall not very far. Transportation also easy to get from here. The service which hotel provided is excellent. overall i can give 4 out of 5. Worthwhile to stay here.`,
    },
    {
        name: "Wan Lin Tian",
        avatar: "https://lh3.googleusercontent.com/a/ACg8ocLurJrPpVNQDYU6X39F_H_OXaOwoZyF9yKj0yuK1H3Y6Er0TA=s40-c-rp-mo-br100",
        rating: 5,
        quote: `Had a great stay here! The hotel is clean, affordable, and in a good location. What really made the experience better was the receptionist, Steven — super friendly and helpful from the moment we arrived. Would definitely come back!`,
    },
    {
        name: "pawan tummuri",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXtS2oIO6hmfagwsE7cS3CKEGjrERAEbgpDklFvwktZF_R19srT=s40-c-rp-mo-ba2-br100",
        rating: 5,
        quote: `We really enjoyed our stay here. The staff is very friendly and (Mr. Steven) went out of his way to make us feel at home. The breakfast and overall ambience and cleanliness of the room is top notch. Will surely stay here again if I am back to HCMC and would 100% recommend to friends and family.`,
    },
    {
        name: "Mary Sison",
        avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUY29-4Te3y3nTt_6tjxuzdPshp5LElKquOpp2QLru_lmpvG7P2Jg=s40-c-rp-mo-br100",
        rating: 5,
        quote: `We had a wonderful stay at Dai Nam Botique Hotel From the moment we arrived, the staff Mr. Vien And To was incredibly welcoming and attentive. Check-in was smooth and efficient, and they even offered me a welcome drink. The room was clean, well-maintained, and had all the amenities we needed.
        What really stood out was the level of service — every staff member I interacted with was friendly, professional, and eager to help. Whether it was room service, housekeeping, or the front desk, everyone made me feel valued and comfortable.
        We also appreciated the prompt responses to any requests and the helpful local recommendations. Overall, I highly recommend Dai Nam Botique Hotel to anyone looking for a comfortable stay with top-notch service.`,
    },
];

function Stars({ rating = 5 }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    className={
                        i < rating
                            ? "h-4 w-4 text-yellow-500 fill-yellow-500"
                            : "h-4 w-4 text-gray-300"
                    }
                />
            ))}
        </div>
    );
}

function TestimonialCard({ t }) {
    return (
        <div className="mx-auto w-full max-w-3xl">
            <div className="rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src={t.avatar}
                        alt={t.name}
                        className="h-14 w-14 rounded-full object-cover shadow-sm ring-2 ring-white"
                        loading="lazy"
                        decoding="async"
                    />
                    <div>
                        <div
                            className="text-[18px] leading-tight"
                            style={{ fontFamily: "Cormorant Upright" }}
                        >
                            <strong>{t.name}</strong>
                        </div>
                    </div>
                    <div className="ml-auto">
                        <Stars rating={t.rating} />
                    </div>
                </div>

                <Paragraph>“{t.quote}” </Paragraph>
            </div>
        </div>
    );
}

export default function TestimonialsSection({ isPhone, language }) {
    return (
        <section className="bg-[#f4efeeff] flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16 md:py-20">
            <SectionHeader
                section={language === "en" ? "REVIEWS" : "REVIEWS"}
                title={
                    language === "en"
                        ? "Our Guests Say It Best"
                        : "Để khác hàng nói lên tất cả"
                }
                isPhone={isPhone}
            />
            <H3>
                {" "}
                {language === "en"
                    ? "Stories from those who stayed with us."
                    : "Lời chia sẻ từ những khách hàng của chúng tôi"}
            </H3>
            <p
                className="mt-2 mb-10 text-center text-gray-700 max-w-2xl"
                style={{ fontFamily: "Work Sans" }}
            ></p>

            <div className="w-full flex justify-center">
                <Carousel
                    className="w-full max-w-5xl"
                    autoplay
                    autoplayInterval={4500}
                    opts={{ loop: true }}
                >
                    <CarouselContent>
                        {testimonials.map((t, idx) => (
                            <CarouselItem key={idx}>
                                <div className="px-2 sm:px-4">
                                    {/* 1 per slide (luxury pacing) */}
                                    <TestimonialCard t={t} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Minimal chevrons only (no circle) */}
                    <CarouselPrevious className="-left-6 md:-left-10 bg-transparent hover:bg-transparent p-0">
                        {/* The button wrapper from your component is handled internally; 
                we keep class tweaks minimal */}
                    </CarouselPrevious>
                    <CarouselNext className="-right-6 md:-right-10 bg-transparent hover:bg-transparent p-6" />
                    <CarouselDots />
                </Carousel>
            </div>
        </section>
    );
}
