import { useState, useMemo } from "react";
import { ROOMS_INFO } from "@/assets";
import { useParams } from "react-router-dom";
import { H3, Paragraph, TEXT_SIZES } from "@/components/Text";

/* Pop-up image component */
import PopUpImage from "@/components/PopUpImage";

export default function RoomDetailPage({ isPhone, language }) {
    const { roomName } = useParams();
    const [selectedIndex, setSelectedIndex] = useState(0);
    console.log("roomName:", roomName);

    const room = useMemo(() => {
        console.log("roomName:", ROOMS_INFO.vi["deluxeTriple"]);

        return language === "en"
            ? ROOMS_INFO.en[roomName?.toLowerCase()]
            : ROOMS_INFO.vi[roomName?.toLowerCase()];
    }, [roomName, language]);

    if (!room) return <div>Room not found</div>;

    return (
        <section
            className={`bg-white flex flex-col items-center px-6 md:px-12 lg:px-20 py-20 ${
                isPhone ? "mx-5" : ""
            }`}
        >
            {/* ===========================
                IMAGES
            ============================ */}
            <div className="w-full max-w-6xl mt-10 mb-10">
                <PopUpImage
                    img={room.images[selectedIndex]}
                    className="w-full cursor-zoom-in h-[500px] object-cover rounded-xl mb-4"
                ></PopUpImage>

                <div className="flex gap-4 overflow-x-auto pl-5 pt-2 pb-2">
                    {room.images.map((img, i) => {
                        const active = i === selectedIndex;
                        return (
                            <img
                                key={i}
                                src={img}
                                onClick={() => setSelectedIndex(i)}
                                className={`w-28 h-20 rounded-lg object-cover cursor-pointer transition
                                    ${
                                        active
                                            ? "ring-4 ring-green-900 scale-110"
                                            : "opacity-80 hover:opacity-100"
                                    }
                                `}
                            />
                        );
                    })}
                </div>
            </div>

            {/* ===========================
                TOP: TITLE + PRICE
            ============================ */}
            <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-between gap-10">
                <div className="flex-1 max-w-3xl">
                    <h1 className="text-4xl font-serif mb-4">
                        {room.roomType}
                    </h1>

                    <Paragraph className="leading-relaxed text-gray-700">
                        {room.description}
                    </Paragraph>
                </div>

                <div className="w-full lg:w-80 flex flex-col gap-6">
                    <div className="text-right">
                        <p className="text-sm text-gray-500">Price from</p>
                        <p className="text-3xl font-semibold text-green-900">
                            {room.price.toLocaleString()} VND
                        </p>
                    </div>
                </div>
            </div>

            {/* ===========================
                CHECK-IN + AMENITIES + POLICIES
            ============================ */}
            <div className="w-full max-w-6xl mt-14 space-y-10">
                {/* CHECK-IN / CHECK-OUT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    <div>
                        <H3 size={TEXT_SIZES.XXL}>Check-in</H3>
                        <Paragraph>{room.checkIn}</Paragraph>
                    </div>

                    <div>
                        <H3 size={TEXT_SIZES.XXL}>Check-out</H3>
                        <Paragraph>{room.checkOut}</Paragraph>
                    </div>
                </div>

                {/* ===========================
                    AMENITIES
                ============================ */}
                <div>
                    <H3 size={TEXT_SIZES.XXL}>Amenities</H3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {room.amenities.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 text-gray-800 text-sm"
                            >
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="w-10 h-10 object-contain"
                                />
                                <Paragraph>
                                    {item.name.charAt(0).toUpperCase() +
                                        item.name.slice(1)}
                                </Paragraph>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ===========================
                    FIXED POLICIES
                ============================ */}

                {/* Damage Policy */}
                <div>
                    <H3 size={TEXT_SIZES.XXL}>
                        {language === "en"
                            ? "Damage Policy"
                            : "Chính sách đặt cọc thiệt hại"}
                    </H3>

                    <Paragraph className="ml-5">
                        <li>
                            {language === "en"
                                ? "A damage deposit of 500,000 VND per room per night is required."
                                : "Tiền đặt cọc: 500.000 VND/phòng/đêm."}
                        </li>
                        <li>
                            {language === "en"
                                ? "This charge will be collected upon check-in."
                                : "Khoản phí này sẽ được thu khi nhận phòng."}
                        </li>
                        <li>
                            {language === "en"
                                ? "The deposit will be returned upon check-out."
                                : "Khoản phí sẽ được hoàn lại khi trả phòng."}
                        </li>
                    </Paragraph>
                </div>

                {/* Breakfast Policy */}
                <div>
                    <H3 size={TEXT_SIZES.XXL}>
                        {language === "en"
                            ? "Breakfast Policy"
                            : "Chính sách bữa sáng"}
                    </H3>

                    <Paragraph className="ml-5">
                        <li>
                            {language === "en" ? (
                                <>
                                    For bookings{" "}
                                    <strong>including breakfast</strong> —
                                    breakfast is served on the 1st floor from{" "}
                                    <strong>6:30 AM to 9:30 AM</strong>.
                                </>
                            ) : (
                                <>
                                    Đối với các đặt phòng{" "}
                                    <strong>bao gồm bữa sáng</strong> — bữa sáng
                                    được phục vụ tại nhà hàng tầng 1 từ{" "}
                                    <strong>6:30 – 9:30 sáng</strong>.
                                </>
                            )}
                        </li>

                        <li>
                            {language === "en" ? (
                                <>
                                    For bookings{" "}
                                    <strong>without breakfast</strong>, guests
                                    may purchase breakfast at the front desk for{" "}
                                    <strong>
                                        200,000 VND per person per day
                                    </strong>
                                    .
                                </>
                            ) : (
                                <>
                                    Đối với các đặt phòng{" "}
                                    <strong>không bao gồm bữa sáng</strong>— quý
                                    khách có thể mua bữa sáng tại quầy lễ tân
                                    với giá{" "}
                                    <strong>200.000 VND/người/ngày</strong>.
                                </>
                            )}
                        </li>
                    </Paragraph>
                </div>

                {/* Children + Extra Bed */}
                <div>
                    <H3 size={TEXT_SIZES.XXL}>
                        {language === "en"
                            ? "Children and Extra Bed Policy"
                            : "Chính sách trẻ em và giường phụ"}
                    </H3>

                    <Paragraph className="ml-5">
                        <li>
                            {language === "en"
                                ? "Children of all ages are welcome."
                                : "Trẻ em ở mọi độ tuổi đều được chào đón."}
                        </li>

                        <li>
                            {language === "en" ? (
                                <>
                                    1 extra guest (regardless of age) costs{" "}
                                    <strong>
                                        600,000 VND per person per night
                                    </strong>{" "}
                                    when using an extra bed. (Breakfast included
                                    for the extra guest.)
                                </>
                            ) : (
                                <>
                                    1 khách (không phân biệt độ tuổi) sẽ tính
                                    phí <strong>600.000 VND/đêm</strong> khi sử
                                    dụng giường phụ. (Giá đã bao gồm bữa sáng
                                    cho khách thêm.)
                                </>
                            )}
                        </li>

                        <li>
                            {language === "en"
                                ? "The maximum number of extra beds per room is 1."
                                : "Số lượng giường phụ tối đa: 01."}
                        </li>

                        <li>
                            {language === "en"
                                ? "All extra beds are subject to availability."
                                : "Tất cả giường phụ phụ thuộc vào tình trạng có sẵn."}
                        </li>
                    </Paragraph>
                </div>

                {/* Pets */}
                <div>
                    <H3 size={TEXT_SIZES.XXL}>
                        {language === "en" ? "Pets Policy" : "Vật nuôi"}
                    </H3>

                    <Paragraph className="ml-5">
                        <li>
                            {language === "en"
                                ? "Pets are not allowed."
                                : "Khách sạn không cho phép mang theo vật nuôi."}
                        </li>
                    </Paragraph>
                </div>
            </div>
        </section>
    );
}
