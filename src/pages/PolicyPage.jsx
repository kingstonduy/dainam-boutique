import { H1, H2, Paragraph, TEXT_SIZES } from "@/components/Text";

const terms = {
    en: {
        title: "PRIVACY POLICY & SITE SECURITY",

        /* =========================
           SECTION 1 — SECURITY
        ========================= */
        section1: {
            title: "I. TRANSACTION SECURITY ASSURANCE",

            commitmentTitle: "Commitment from the Website Management Team:",
            commitmentList: [
                "We are committed to providing complete and accurate information regarding the hotel’s accommodation and dining services before customers proceed with bookings or use our services.",
                "Booking confirmations and service consultations are supported through secure channels such as email, telephone, or authenticated interfaces on the website.",
            ],

            solutionTitle: "2. Transaction Security Measures",
            solutionList: [
                "SSL Certificate (https): All information exchanged between users and the system is encrypted for security.",
                "Account Protection: If the website includes a login feature, passwords are encrypted and the system supports password changes and email verification.",
                "Data Access Control: Only authorized personnel can access the website’s administration system to update and manage data.",
                "Complaint Resolution Policy: All customer complaints and feedback are received through official channels (email, phone, contact form) and will be addressed within a maximum of 48 business hours.",
            ],

            riskTitle: "3. Responsibilities and Risk Management",
            riskList: [
                "Immediately notify all relevant parties upon detecting any data breach.",
                "Work with infrastructure and cybersecurity service providers to isolate the issue, investigate the cause, and resolve the incident.",
                "Provide customers with necessary guidance on protecting their personal information.",
                "Implement corrective actions and provide compensation if the issue originates from internal system errors (where applicable).",
            ],
        },

        /* =========================
           SECTION 2 — PRIVACY
        ========================= */
        section2: {
            title: "II. CUSTOMER PERSONAL DATA PROTECTION POLICY",

            intro: `The website www.dainamhotels.com.vn is committed to respecting and protecting the privacy rights of consumers in accordance with Decree No. 52/2013/NĐ-CP. This policy applies to all personal information provided by customers when accessing, booking, or contacting the hotel through the website.`,

            purposeTitle: "1. Purpose of Collecting Personal Information",
            purposeList: [
                "To contact and confirm room/service bookings.",
                "To support customers during their stay or while using hotel services.",
                "To send promotional or special offer notifications (upon customer consent).",
                "For internal management and service quality enhancement.",
            ],

            scopeTitle: "2. Scope of Information Collected",
            scopeList: [
                "Full name, phone number, email address.",
                "Residential address (if an invoice is required).",
                "Special service requests.",
                "Technical data such as IP address, browser type, and access time (for statistics and security purposes).",
            ],

            usageTitle: "3. Scope of Information Usage",
            usageList: [
                "To contact customers for booking confirmation and service provision.",
                "To send customer care messages and satisfaction surveys.",
                "To comply with lawful requests from government authorities.",
                "We do not share, sell, or transfer customer personal data to any third party under any circumstances, unless with customer consent or as legally required.",
            ],
        },
    },
    vi: {
        title: "CHÍNH SÁCH & ĐIỀU KHOẢN BẢO MẬT TRANG WEB",
        section1: {
            title: "I. ĐẢM BẢO AN TOÀN GIAO DỊCH",
            commitmentTitle: "Cam kết từ Ban Quản lý Website:",
            commitmentList: [
                "Cung cấp đầy đủ, chính xác thông tin về dịch vụ lưu trú, nhà hàng của khách sạn trước khi người tiêu dùng tiến hành đặt phòng hoặc sử dụng dịch vụ.",
                "Hỗ trợ xác nhận đặt phòng, tư vấn đặt dịch vụ qua các kênh bảo mật như email, điện thoại, hoặc giao diện xác thực trên website.",
            ],
            solutionTitle: "2. Giải pháp đảm bảo an toàn giao dịch",
            solutionList: [
                "Chứng chỉ SSL (https): Mọi thông tin trao đổi giữa người dùng và hệ thống đều được mã hóa.",
                "Bảo vệ tài khoản: Nếu website có tính năng đăng nhập, hệ thống sẽ bảo mật mật khẩu bằng thuật toán mã hóa và cung cấp chức năng đổi mật khẩu, xác thực email.",
                "Kiểm soát truy cập dữ liệu: Chỉ nhân sự được ủy quyền mới được truy cập hệ thống quản trị.",
                "Chính sách xử lý khiếu nại: Khiếu nại được tiếp nhận qua email, điện thoại, form liên hệ và xử lý trong tối đa 48 giờ làm việc.",
            ],
            riskTitle: "3. Trách nhiệm và xử lý rủi ro",
            riskList: [
                "Thông báo ngay cho khách hàng khi phát hiện dữ liệu bị rò rỉ.",
                "Phối hợp với nhà cung cấp hạ tầng để điều tra, khoanh vùng và khắc phục sự cố.",
                "Hướng dẫn khách hàng các bước để bảo vệ thông tin cá nhân.",
                "Thực hiện bồi thường thiệt hại nếu lỗi xuất phát từ hệ thống của website (nếu có).",
            ],
        },
        section2: {
            title: "II. CHÍNH SÁCH BẢO VỆ THÔNG TIN CÁ NHÂN NGƯỜI TIÊU DÙNG",
            intro: `Website www.dainamhotels.com.vn cam kết tôn trọng và bảo vệ quyền riêng tư của người tiêu dùng theo Nghị định 52/2013/NĐ-CP. Chính sách này áp dụng cho mọi thông tin cá nhân được cung cấp khi truy cập, đặt phòng hoặc liên hệ qua website.`,
            purposeTitle: "1. Mục đích thu thập thông tin cá nhân",
            purposeList: [
                "Liên hệ xác nhận đơn đặt phòng/dịch vụ",
                "Hỗ trợ khách hàng trong quá trình lưu trú hoặc sử dụng dịch vụ",
                "Gửi thông tin khuyến mãi (nếu khách hàng đồng ý)",
                "Phục vụ quản trị nội bộ và nâng cao chất lượng dịch vụ",
            ],
            scopeTitle: "2. Phạm vi thu thập thông tin",
            scopeList: [
                "Họ tên, số điện thoại, email",
                "Địa chỉ cư trú (nếu cần xuất hóa đơn)",
                "Yêu cầu đặc biệt về dịch vụ",
                "Dữ liệu kỹ thuật như IP, trình duyệt, thời gian truy cập",
            ],
            usageTitle: "3. Phạm vi sử dụng thông tin",
            usageList: [
                "Liên hệ xác nhận và cung cấp dịch vụ cho khách hàng",
                "Gửi email chăm sóc khách hàng, khảo sát",
                "Tuân thủ yêu cầu của cơ quan chức năng khi có yêu cầu hợp pháp",
                "Không chia sẻ, bán hoặc chuyển nhượng thông tin cho bên thứ ba, trừ khi có sự đồng ý của khách hàng hoặc theo yêu cầu pháp luật",
            ],
        },
    },
};
export default function PolicyPage({ isPhone, language }) {
    const t = language === "en" ? terms.en : terms.vi;

    return (
        <section
            className={`bg-white px-6 md:px-12 lg:px-20 py-20 ${
                isPhone ? "mx-5" : ""
            }`}
        >
            <div className="max-w-5xl mx-auto space-y-12">
                {/* TITLE */}
                <H1 size={TEXT_SIZES.X5L} className="mb-10">
                    {t.title}
                </H1>

                {/* ======================================
                    SECTION 1 — SAFETY
                ====================================== */}
                <div>
                    <H2 size={TEXT_SIZES.XXL}>{t.section1.title}</H2>

                    <div className="mt-4 space-y-4">
                        {/* Commitment */}
                        <Paragraph className="font-semibold">
                            {t.section1.commitmentTitle}
                        </Paragraph>
                        <Paragraph className="space-y-2 ml-10">
                            {t.section1.commitmentList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </Paragraph>

                        {/* Solutions */}
                        <Paragraph className="font-semibold">
                            {t.section1.solutionTitle}
                        </Paragraph>
                        <Paragraph className="space-y-2 ml-10">
                            {t.section1.solutionList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </Paragraph>

                        {/* Risks */}
                        <Paragraph className="font-semibold">
                            {t.section1.riskTitle}
                        </Paragraph>
                        <Paragraph className="space-y-2 ml-10">
                            {t.section1.riskList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </Paragraph>
                    </div>
                </div>

                {/* ======================================
                    SECTION 2 — PRIVACY
                ====================================== */}
                <div>
                    <H2 size={TEXT_SIZES.XXL}>{t.section2.title}</H2>

                    <div className="mt-4 space-y-4">
                        <Paragraph>{t.section2.intro}</Paragraph>

                        {/* Purpose */}
                        <Paragraph className="font-semibold">
                            {t.section2.purposeTitle}
                        </Paragraph>
                        <Paragraph className="space-y-2 ml-10">
                            {t.section2.purposeList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </Paragraph>

                        {/* Scope */}
                        <Paragraph className="font-semibold">
                            {t.section2.scopeTitle}
                        </Paragraph>
                        <Paragraph className="space-y-2 ml-10">
                            {t.section2.scopeList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </Paragraph>

                        {/* Usage */}
                        <Paragraph className="font-semibold">
                            {t.section2.usageTitle}
                        </Paragraph>
                        <Paragraph className="space-y-2 ml-10">
                            {t.section2.usageList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </Paragraph>
                    </div>
                </div>
            </div>
        </section>
    );
}
