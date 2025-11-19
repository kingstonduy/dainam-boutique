import { LOGOS } from "@/assets";
import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({ language }) => {
    return (
        <div className="flex flex-col bg-[#014b3fff] text-white items-center justify-center px-8">
            {/* HOTEL IMAGE */}
            <img
                src="https://lh3.googleusercontent.com/f0wZtOV2SufVWCruCeZe2FellQ4xF8lY0TgzGmOpgitjcczcL0qj1OLeAgNKwhKJd9dOZlrdGmrhoidos_1wMkl4GAWhsFqVmw=rw-v1-w9001"
                alt="Hotel Front"
                className="w-[240px] h-[240px] object-cover rounded-xl mb-8"
                loading="lazy"
                decoding="async"
            />

            <div className="container mx-auto flex flex-col md:flex-row items-start justify-around gap-12 px-4">
                {/* LEFT SIDE */}
                <div className="w-full flex flex-col md:flex-row md:justify-between gap-12">
                    {/* FOLLOW US */}
                    <div className="md:flex-1">
                        <h3
                            style={{
                                fontFamily: "Cormorant Upright",
                                fontSize: "46px",
                                color: "#FFF6EF",
                            }}
                            className="leading-snug"
                        >
                            {language === "en"
                                ? "Follow Us"
                                : "Theo Dõi Chúng Tôi"}
                        </h3>

                        <div className="flex flex-col gap-3 mt-2">
                            <a
                                href="https://www.facebook.com/dainamboutique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                            >
                                <Facebook className="h-8 w-8" />
                                <span
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "20px",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Facebook
                                </span>
                            </a>

                            <a
                                href="https://zalo.me/0944698974"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                            >
                                <img
                                    src={LOGOS.zalo}
                                    alt="Zalo"
                                    className="h-8 w-8"
                                />
                                <span
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "20px",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    Zalo
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* GET IN TOUCH */}
                    <div className="md:flex-1">
                        <h3
                            style={{
                                fontFamily: "Cormorant Upright",
                                fontSize: "46px",
                                color: "#FFF6EF",
                            }}
                            className="leading-snug"
                        >
                            {language === "en" ? "Get in Touch" : "Liên Hệ"}
                        </h3>

                        <div className="space-y-3 mt-2">
                            <a
                                href="https://maps.app.goo.gl/pXg7NpY5zs2Pc3uP8"
                                target="_blank"
                                className="flex items-start gap-3"
                            >
                                <MapPin className="h-8 w-8 mt-0.5 flex-shrink-0" />
                                <span
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "20px",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    79 Tran Hung Dao, Ben Thanh Ward, Ho Chi
                                    Minh City
                                </span>
                            </a>

                            <a
                                href="tel:+84944698974"
                                className="flex items-start gap-3 hover:text-gray-300 transition-colors"
                            >
                                <Phone className="h-8 w-8 mt-0.5 flex-shrink-0" />
                                <span
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "20px",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    (+84) 944 698 974
                                </span>
                            </a>

                            <a
                                href="mailto:info@dainamhotels.com.vn"
                                className="flex items-start gap-3 hover:text-gray-300 transition-colors"
                            >
                                <Mail className="h-8 w-8 mt-0.5 flex-shrink-0" />
                                <span
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "20px",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    info@dainamhotels.com.vn
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* LINKS */}
                    <div className="md:flex-1">
                        <h3
                            style={{
                                fontFamily: "Cormorant Upright",
                                fontSize: "46px",
                                color: "#FFF6EF",
                            }}
                            className="leading-snug"
                        >
                            {language === "en" ? "Links" : "Liên Kết"}
                        </h3>

                        <div className="flex flex-col gap-3 mt-2">
                            <Link
                                to="/terms"
                                className="hover:text-gray-300 transition-colors"
                            >
                                <span
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "20px",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {language === "en"
                                        ? "TERMS OF SERVICE"
                                        : "ĐIỀU KHOẢN DỊCH VỤ"}
                                </span>
                            </Link>

                            <Link
                                to="/policies"
                                className="hover:text-gray-300 transition-colors"
                            >
                                <span
                                    style={{
                                        fontFamily: "Work Sans",
                                        fontSize: "20px",
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {language === "en"
                                        ? "POLICIES"
                                        : "CHÍNH SÁCH"}
                                </span>
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
