import { LOGOS } from "@/assets";
import {
    H1,
    H2,
    H3,
    Paragraph,
    TEXT_COLORS,
    TEXT_SIZES,
} from "@/components/Text";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({ language }) => {
    return (
        <div className="flex flex-col bg-[#014b3fff] text-white items-center justify-center px-3">
            {/* HOTEL IMAGE */}
            <img
                src="https://lh3.googleusercontent.com/f0wZtOV2SufVWCruCeZe2FellQ4xF8lY0TgzGmOpgitjcczcL0qj1OLeAgNKwhKJd9dOZlrdGmrhoidos_1wMkl4GAWhsFqVmw=rw-v1-w9001"
                alt="Hotel Front"
                className="w-[240px] h-[240px] object-cover rounded-xl mb-8"
                loading="lazy"
                decoding="async"
            />

            <div className="container mx-auto flex flex-col md:flex-row items-start justify-around gap-15 px-4">
                {/* LEFT SIDE */}
                <div className="w-full flex flex-col md:flex-row md:justify-center gap-15">
                    {/* FOLLOW US */}
                    <div className="max-w-[150px]">
                        <H2 color={TEXT_COLORS.WHITE} size={TEXT_SIZES.XXXL}>
                            {language === "en"
                                ? "Follow Us"
                                : "Theo Dõi Chúng Tôi"}
                        </H2>

                        <div className="flex flex-col gap-3 mt-3">
                            <a
                                href="https://www.facebook.com/dainamboutique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                            >
                                <img
                                    src={LOGOS.facebook}
                                    alt="Facebook"
                                    className="h-10 w-10"
                                />
                                <Paragraph color={TEXT_COLORS.WHITE}>
                                    Facebook
                                </Paragraph>
                            </a>

                            <a
                                href="https://zalo.me/0944698974"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                            >
                                <img
                                    src={LOGOS.zalo}
                                    alt="Zalo"
                                    className="h-10 w-10"
                                />
                                <Paragraph color={TEXT_COLORS.WHITE}>
                                    Zalo
                                </Paragraph>
                            </a>
                        </div>
                    </div>

                    {/* GET IN TOUCH */}
                    <div className="md:flex-1">
                        <H2 color={TEXT_COLORS.WHITE} size={TEXT_SIZES.XXXL}>
                            {language === "en" ? "Get in Touch" : "Liên Hệ"}
                        </H2>

                        <div className="space-y-3 mt-3 text-white">
                            <a
                                href="https://maps.app.goo.gl/pXg7NpY5zs2Pc3uP8"
                                target="_blank"
                                className="flex items-start gap-3 hover:text-gray-300 transition-colors"
                            >
                                <MapPin className="h-8 w-8 mt-0.5 flex-shrink-0" />
                                <Paragraph color={TEXT_COLORS.WHITE}>
                                    79 Tran Hung Dao, Ben Thanh Ward, Ho Chi
                                    Minh City
                                </Paragraph>
                            </a>

                            <a
                                href="tel:+84812398974"
                                className="flex items-start gap-3 hover:text-gray-300 transition-colors"
                            >
                                <Phone className="h-8 w-8 mt-0.5 flex-shrink-0" />
                                <Paragraph color={TEXT_COLORS.WHITE}>
                                    (+84) 812 398 974
                                </Paragraph>
                            </a>

                            <a
                                href="mailto:info@dainamhotels.com.vn"
                                className="flex items-start gap-3 hover:text-gray-300 transition-colors"
                            >
                                <Mail className="h-8 w-8 mt-0.5 flex-shrink-0" />
                                <Paragraph color={TEXT_COLORS.WHITE}>
                                    info@dainamhotels.com.vn
                                </Paragraph>
                            </a>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="md:flex-1">
                        <H2 color={TEXT_COLORS.WHITE} size={TEXT_SIZES.XXXL}>
                            {language === "en" ? "Links" : "Liên Kết"}
                        </H2>

                        <div className="flex flex-col gap-3 mt-3 text-white">
                            <Link
                                to="/terms"
                                className="hover:text-gray-300 transition-colors underline"
                            >
                                <Paragraph color={TEXT_COLORS.WHITE}>
                                    {language === "en"
                                        ? "TERMS OF SERVICE"
                                        : "ĐIỀU KHOẢN DỊCH VỤ"}{" "}
                                </Paragraph>
                            </Link>

                            <Link
                                to="/policies"
                                className="hover:text-gray-300 transition-colors underline"
                            >
                                <Paragraph color={TEXT_COLORS.WHITE}>
                                    {language === "en"
                                        ? "POLICIES"
                                        : "CHÍNH SÁCH"}{" "}
                                </Paragraph>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* GOOGLE MAP */}
                <div className="w-full md:w-[900px] h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3412.173439279659!2d106.69680726504907!3d10.768521387917772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3ff397686b%3A0x9778a5477670ba9f!2sDai%20Nam%20Boutique%20Hotel!5e0!3m2!1sen!2sus!4v1760728051439!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Hotel Location Map"
                    ></iframe>
                </div>
            </div>

            <div className="mt-10 pt-5 pb-3 border-t border-white/20 text-center text-sm w-full">
                <p>
                    &copy; {new Date().getFullYear()} Dai Nam Hotel. All rights
                    reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
