import { H1, H2, H3, Paragraph, TEXT_SIZES } from "@/components/Text";

/* ============================================================
   CONSTANTS — All wording stored here
============================================================ */
const SERVICE_TERMS = {
    vi: {
        title: "ĐIỀU KHOẢN VÀ CHÍNH SÁCH SỬ DỤNG DỊCH VỤ",

        section1: {
            title: "I. LƯU Ý",
            items: [
                "Phòng Deluxe gồm hai loại phòng có cửa sổ và không có cửa sổ.",
                "Phòng Executive và Suite đều có cửa sổ.",
                "Phòng Signature có cửa sổ và ban công.",
                "Phòng twin được bố trí ở 03 loại phòng: Deluxe, Executive và Signature.",
                "Phòng Triple chỉ có loại Deluxe.",
                "Giường phụ có thể được sắp xếp trong phòng Deluxe, Executive, Signature và Suite.",
                "Khách sạn có 2 cặp phòng connecting: Suite + Executive và Deluxe triple + Deluxe triple.",
                "Tất cả phòng ngủ đều là phòng không hút thuốc. Phí phụ thu nếu vi phạm hút thuốc trong phòng là 2,000,000 VND/lần.",
                "Giá đã bao gồm thuế & phí phục vụ, không áp dụng trích hoa hồng.",
                "Giá bao gồm bữa sáng cho 01-02 khách/phòng/đêm.",
                "Bữa sáng được phục vụ từ 6:30 - 9:30 hằng ngày.",
                "Không hoàn tiền khi khách không dùng bữa sáng.",
                "Miễn phí nước suối (01 chai/khách/ngày).",
                "Miễn phí trà, cà phê trong phòng.",
                "Xuất trình giấy tờ tùy thân hợp lệ khi nhận phòng.",
                "Không mang vật nuôi/thú cưng vào khuôn viên khách sạn.",
            ],
        },

        section2: {
            title: "II. QUY ĐỊNH VỀ CÁC THỜI ĐIỂM TRONG NĂM",
            rows: [
                { label: "Ngày trong tuần", value: "Từ Chủ nhật đến Thứ năm" },
                {
                    label: "Ngày cuối tuần",
                    value: "Đêm Thứ sáu và Đêm Thứ bảy",
                },
            ],
        },

        section3: {
            title: "III. CHÍNH SÁCH GIÁ KHÁC VÀ PHỤ THU",

            /* 3.1 SỨC CHỨA */
            capacityTitle: "3.1. SỨC CHỨA MỖI PHÒNG",
            capacity: [
                {
                    room: "DELUXE",
                    rule: "02 người lớn, 01 trẻ em dưới 06 tuổi",
                },
                {
                    room: "DELUXE TRIPLE",
                    rule: "03 người lớn, 01 trẻ em dưới 06 tuổi",
                },
                {
                    room: "EXECUTIVE",
                    rule: "02 người lớn, 01 trẻ em dưới 06 tuổi",
                },
                {
                    room: "SIGNATURE",
                    rule: "02 người lớn, 01 trẻ em dưới 06 tuổi",
                },
                {
                    room: "DAI NAM SUITE",
                    rule: "02 người lớn, 01 trẻ em dưới 06 tuổi",
                },
            ],

            /* 3.2 CHILD POLICY */
            childPolicyTitle: "3.2. CHÍNH SÁCH TRẺ EM",
            children: [
                {
                    subject: "Trẻ em dưới 06 tuổi",
                    price: "Miễn phí",
                    policy: "Miễn phí tối đa 01 trẻ em dưới 06 tuổi ở chung giường với bố mẹ. Phụ thu bé thứ 02. Áp dụng với tất cả các loại phòng.",
                },
                {
                    subject: "Trẻ em từ 06 - dưới 12 tuổi",
                    price: "200,000 VND",
                    policy: "Tối đa 02 trẻ từ 06 - dưới 12 tuổi ở chung giường với bố mẹ. Phụ thu ăn sáng.",
                },
                {
                    subject: "Trẻ em từ 12 tuổi trở lên",
                    price: "Phụ thu extra bed: 600,000 VND",
                    policy: "Tính như người lớn. Áp dụng cho tất cả các hạng phòng.",
                },
            ],

            /* 3.3 CHECKIN / CHECKOUT */
            earlyCheckin: [
                "Trước 06h00 sáng — 100% tiền phòng theo giá walk-in (bao gồm ăn sáng)",
                "Từ 06h00 đến trước 09h00 sáng — 50% tiền phòng theo giá walk-in (không bao gồm ăn sáng)",
                "Từ 09h00 đến trước 14h00 — 30% tiền phòng theo giá walk-in (không bao gồm ăn sáng)",
            ],

            lateCheckout: [
                "Từ 12h00 đến trước 13h00 — 300,000 VND/phòng",
                "Từ 13h00 đến trước 15h00 — 30% tiền phòng theo giá walk-in",
                "Từ 15h00 đến trước 18h00 — 50% tiền phòng theo giá walk-in",
                "Sau 18h00 — 100% tiền phòng theo giá walk-in",
            ],

            /* 3.4 Payment */
            payment: [
                "Tất cả khoản thanh toán đều quy đổi sang VND.",
                "Yêu cầu cung cấp thông tin thẻ tín dụng để đảm bảo giữ phòng.",
                "Phương thức thanh toán: Thẻ tín dụng, chuyển khoản, hoặc tiền mặt khi nhận phòng.",
            ],

            cancellation: [
                "Chính sách hoàn/hủy tuỳ thuộc chương trình khuyến mãi và thời gian lưu trú.",
            ],

            noShow: [
                "Khách không đến nhận phòng sẽ bị tính toàn bộ tiền phòng.",
            ],

            bookingRules: [
                "Yêu cầu đặt phòng phải gửi bằng văn bản qua email.",
                "Xác nhận đặt phòng có hiệu lực khi khách nhận được email xác nhận chính thức.",
                "Kiểm tra tình trạng phòng qua điện thoại không được xem là xác nhận đặt phòng.",
            ],

            contact: {
                email: "info@dainamhotels.com.vn",
                zalo: "+84 944698974",
            },
        },
    },
    en: {
        title: "TERMS AND CONDITIONS OF SERVICE",

        section1: {
            title: "I. NOTICES",
            items: [
                "Deluxe Rooms include two types: with window and without window.",
                "Executive Rooms and Suites all have windows.",
                "Signature Rooms have both windows and balconies.",
                "Twin Beds are available in Deluxe, Executive, and Signature rooms.",
                "Triple Rooms are available only in the Deluxe category.",
                "Extra beds can be arranged in Deluxe, Executive, Signature, and Suite rooms.",
                "The hotel has two sets of connecting rooms: Suite + Executive and Deluxe Triple + Deluxe Triple.",
                "All rooms at Dai Nam Boutique Hotel are NON-SMOKING. A penalty cleaning fee of 2,000,000 VND per incident applies if smoking evidence is found.",
                "Room rates include VAT and service charge; non-commissionable.",
                "Room rates include breakfast for 01-02 guests per room per night.",
                "Breakfast is served daily from 06:30 to 09:30.",
                "Breakfast is non-refundable if unused.",
                "Complimentary bottled water (01 bottle per guest per day).",
                "Complimentary tea and coffee in the room.",
                "Guests must present valid identification upon check-in (ID card, passport, or valid visa).",
                "All staying guests must provide full identification details.",
                "Pets are not allowed within the hotel premises.",
            ],
        },

        section2: {
            title: "II. DATE & SEASON POLICY",
            rows: [
                { label: "Weekdays", value: "From Sunday to Thursday" },
                { label: "Weekends", value: "Friday night and Saturday night" },
            ],
        },

        section3: {
            title: "III. ADDITIONAL ROOM CHARGE POLICY",

            /* 3.1 OCCUPANCY */
            capacityTitle: "3.1. ROOM OCCUPANCY",
            capacity: [
                {
                    room: "DELUXE",
                    rule: "02 adults, 01 child under 06 years old",
                },
                {
                    room: "DELUXE TRIPLE",
                    rule: "03 adults, 01 child under 06 years old",
                },
                {
                    room: "EXECUTIVE",
                    rule: "02 adults, 01 child under 06 years old",
                },
                {
                    room: "SIGNATURE",
                    rule: "02 adults, 01 child under 06 years old",
                },
                {
                    room: "DAI NAM SUITE",
                    rule: "02 adults, 01 child under 06 years old",
                },
            ],

            /* 3.2 CHILD POLICY */
            childPolicyTitle: "3.2. CHILD POLICY",
            children: [
                {
                    subject: "Children under 06 years old",
                    price: "Free of charge",
                    policy: "Maximum 01 child under 06 years old sharing existing bed with parents. Second child will incur surcharge. Applicable to all room types.",
                },
                {
                    subject: "Children from 06 to under 12 years old",
                    price: "200,000 VND",
                    policy: "Maximum 02 children (06-under 12) sharing existing bed with parents. Breakfast surcharge applies.",
                },
                {
                    subject: "Children 12 years old and above",
                    price: "Extra bed surcharge: 600,000 VND",
                    policy: "Children 12 and above are charged as adults. Applicable to all room types.",
                },
            ],

            /* 3.3 CHECK-IN / CHECK-OUT */
            earlyCheckin: [
                "Before 06:00 — 100% of room rate (walk-in rate), breakfast included",
                "From 06:00 to before 09:00 — 50% of room rate (walk-in rate), breakfast not included",
                "From 09:00 to before 14:00 — 30% of room rate (walk-in rate), breakfast not included",
            ],

            lateCheckout: [
                "From 12:00 to before 13:00 — 300,000 VND per room",
                "From 13:00 to before 15:00 — 30% of room rate (walk-in rate)",
                "From 15:00 to before 18:00 — 50% of room rate (walk-in rate)",
                "After 18:00 — 100% of room rate (walk-in rate)",
            ],

            /* 3.4 PAYMENT POLICY */
            payment: [
                "All payments are converted to Vietnamese Dong (VND).",
                "Guests must provide valid credit card details to guarantee the reservation.",
                "Accepted payment methods: Credit card, bank transfer, or cash upon check-in.",
            ],

            /* 3.5 CANCELLATION */
            cancellation: [
                "Cancellation and refund policies vary depending on promotional programs and period of stay.",
            ],

            /* 3.6 NO-SHOW */
            noShow: [
                "In case of no-show, the guest will be charged the full amount of the reservation.",
            ],

            /* 3.7 BOOKING RULES */
            bookingRules: [
                "All booking requests must be submitted in writing via email.",
                "A reservation is confirmed only when the guest receives the hotel’s official written confirmation with full payment details.",
                "Telephone inquiries about room availability are not considered booking confirmation.",
            ],

            /* 3.8 CONTACT */
            contact: {
                email: "info@dainamhotels.com.vn",
                zalo: "+84 944698974",
            },
        },
    },
};

/* ============================================================
   PAGE COMPONENT
============================================================ */
export default function TermsPage({ isPhone, language }) {
    const T = language === "en" ? SERVICE_TERMS.en : SERVICE_TERMS.vi;

    return (
        <section
            className={`bg-white px-6 md:px-12 lg:px-20 py-20 ${
                isPhone ? "mx-5" : ""
            }`}
        >
            <div className="max-w-5xl mx-auto space-y-14">
                {/* TITLE */}
                <H1 size={TEXT_SIZES.X5L}>{T.title}</H1>

                {/* =========== I. LƯU Ý ============ */}
                <div>
                    <H2 size={TEXT_SIZES.XXL}>{T.section1.title}</H2>
                    <ul className="list-disc ml-8 mt-4 space-y-2">
                        {T.section1.items.map((t, i) => (
                            <li key={i}>
                                <Paragraph>{t}</Paragraph>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* =========== II. THỜI ĐIỂM ============ */}
                <div>
                    <H2 size={TEXT_SIZES.XXL}>{T.section2.title}</H2>
                    <table className="policy-table mt-4">
                        <tbody>
                            {T.section2.rows.map((r, i) => (
                                <tr key={i}>
                                    <td className="w-1/3 font-semibold">
                                        <Paragraph> {r.label}</Paragraph>
                                    </td>
                                    <td>
                                        <Paragraph> {r.value}</Paragraph>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* =========== III. CHÍNH SÁCH GIÁ & PHỤ THU ============ */}
                <div>
                    <H2 size={TEXT_SIZES.XXL}>{T.section3.title}</H2>

                    {/* ----- 3.1 Capacity table ----- */}
                    <H3 size={TEXT_SIZES.XL} className="mt-6">
                        {T.section3.capacityTitle}
                    </H3>
                    <table className="policy-table">
                        <tbody>
                            {T.section3.capacity.map((row, i) => (
                                <tr key={i}>
                                    <td className="font-semibold w-1/3">
                                        <Paragraph>{row.room}</Paragraph>
                                    </td>

                                    <td>
                                        <Paragraph>{row.rule}</Paragraph>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* ----- 3.2 Children policy ----- */}
                    <H3 size={TEXT_SIZES.XL} className="mt-10">
                        {T.section3.childPolicyTitle}
                    </H3>
                    <table className="policy-table">
                        <thead>
                            <tr>
                                <th>ĐỐI TƯỢNG</th>
                                <th>GIÁ TIỀN</th>
                                <th>CHÍNH SÁCH</th>
                            </tr>
                        </thead>
                        <tbody>
                            {T.section3.children.map((row, i) => (
                                <tr key={i}>
                                    <td className="font-semibold">
                                        <Paragraph>{row.subject}</Paragraph>
                                    </td>
                                    <td>
                                        <Paragraph>{row.price}</Paragraph>
                                    </td>
                                    <td>
                                        <Paragraph>{row.policy}</Paragraph>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* ----- 3.3.1 Early checkin ----- */}
                    <H3 size={TEXT_SIZES.XL} className="mt-10">
                        Phụ thu nhận phòng sớm
                    </H3>
                    <table className="policy-table">
                        <tbody>
                            {T.section3.earlyCheckin.map((line, i) => {
                                const [time, fee] = line
                                    .split("—")
                                    .map((x) => x.trim());
                                return (
                                    <tr key={i}>
                                        <td className="w-1/3">
                                            <Paragraph>{time}</Paragraph>
                                        </td>
                                        <td>
                                            <Paragraph>{fee}</Paragraph>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    {/* ----- 3.3.2 Late checkout ----- */}
                    <H3 size={TEXT_SIZES.XL} className="mt-10">
                        Phụ thu trả phòng trễ
                    </H3>
                    <table className="policy-table">
                        <tbody>
                            {T.section3.lateCheckout.map((line, i) => {
                                const [time, fee] = line
                                    .split("—")
                                    .map((x) => x.trim());
                                return (
                                    <tr key={i}>
                                        <td className="w-1/3">
                                            <Paragraph>{time}</Paragraph>
                                        </td>
                                        <td>
                                            <Paragraph>{fee}</Paragraph>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    {/* ----- 3.4 Payment ----- */}
                    <H3 size={TEXT_SIZES.XL} className="mt-10">
                        3.4. CHÍNH SÁCH & ĐIỀU KHOẢN THANH TOÁN
                    </H3>
                    <ul className="list-disc ml-8 mt-3 space-y-2">
                        {T.section3.payment.map((t, i) => (
                            <li key={i}>
                                <Paragraph>{t}</Paragraph>
                            </li>
                        ))}
                    </ul>

                    {/* ----- 3.5 Cancellation ----- */}
                    <H3 size={TEXT_SIZES.XL} className="mt-10">
                        3.5. CHÍNH SÁCH HOÀN, HỦY ĐẶT PHÒNG
                    </H3>
                    <ul className="list-disc ml-8 mt-3 space-y-2">
                        {T.section3.cancellation.map((t, i) => (
                            <li key={i}>
                                <Paragraph>{t}</Paragraph>
                            </li>
                        ))}
                    </ul>

                    {/* ----- 3.6 No-show ----- */}
                    <H3 size={TEXT_SIZES.XL} className="mt-10">
                        3.6. KHÁCH KHÔNG ĐẾN NHẬN PHÒNG
                    </H3>
                    <ul className="list-disc ml-8 mt-3 space-y-2">
                        {T.section3.noShow.map((t, i) => (
                            <li key={i}>
                                <Paragraph>{t}</Paragraph>
                            </li>
                        ))}
                    </ul>

                    {/* ----- 3.7 Booking rules ----- */}
                    <H3 size={TEXT_SIZES.XL} className="mt-10">
                        3.7. ĐẶT PHÒNG & DỊCH VỤ
                    </H3>
                    <ul className="list-disc ml-8 mt-3 space-y-2">
                        {T.section3.bookingRules.map((t, i) => (
                            <li key={i}>
                                <Paragraph>{t}</Paragraph>
                            </li>
                        ))}
                    </ul>

                    {/* ----- 3.9 Contact ----- */}
                    <H3 size={TEXT_SIZES.XL} className="mt-10">
                        3.9. THÔNG TIN ĐẶT PHÒNG
                    </H3>
                    <ul className="list-disc ml-8 mt-3 space-y-2">
                        <li>
                            <Paragraph>
                                Email: {T.section3.contact.email}
                            </Paragraph>
                        </li>
                        <li>
                            <Paragraph>
                                Zalo: {T.section3.contact.zalo}
                            </Paragraph>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
