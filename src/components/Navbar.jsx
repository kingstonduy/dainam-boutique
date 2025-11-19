// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { LOGOS } from "@/assets";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ language, setLanguage }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("HOME");

    const location = useLocation();

    // Highlight based on page
    useEffect(() => {
        const path = location.pathname;
        if (path.startsWith("/room")) setActiveLink("ROOMS");
        else if (path.startsWith("/services")) setActiveLink("SERVICES");
        else setActiveLink("HOME");
    }, [location]);

    // Navbar shadow on scroll
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = {
        en: [
            { label: "HOME", href: "/home" },
            { label: "ROOMS", href: "#" },
            { label: "SERVICES", href: "/services" },
        ],
        vi: [
            { label: "TRANG CHỦ", href: "/home" },
            { label: "PHÒNG", href: "#" },
            { label: "DỊCH VỤ", href: "/services" },
        ],
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm"
                    : "bg-white border-b border-gray-200"
            }`}
        >
            <div className="relative flex justify-center items-center h-25 px-6">
                <Logo />

                {/* Desktop Menu */}
                <div className="absolute right-6 hidden md:flex items-center space-x-6 font-medium">
                    <NavLinks
                        navLinks={language === "en" ? navLinks.en : navLinks.vi}
                        activeLink={activeLink}
                        setActiveLink={setActiveLink}
                    />
                    <LanguageSelector
                        language={language}
                        setLanguage={setLanguage}
                    />
                </div>

                {/* Mobile button */}
                <button
                    className="absolute right-6 md:hidden p-2 text-gray-700"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <MobileMenu
                    navLinks={language === "en" ? navLinks.en : navLinks.vi}
                    onClose={() => setIsMobileMenuOpen(false)}
                    setActiveLink={setActiveLink}
                />
            )}
        </nav>
    );
}

/* ----------------- Logo ----------------- */
function Logo() {
    return (
        <Link to="/" aria-label="Home">
            <img
                src={LOGOS.logo}
                alt="Dai Nam Boutique Logo"
                className="w-[150px] h-[150px] object-contain"
            />
        </Link>
    );
}

/* ----------------- Desktop Nav Links ----------------- */
function NavLinks({ navLinks, activeLink, setActiveLink }) {
    const [isRoomOpen, setIsRoomOpen] = useState(false);

    return (
        <>
            {navLinks.map((link) =>
                link.label === "ROOMS" || link.label === "PHÒNG" ? (
                    <div
                        key={link.label}
                        className="relative"
                        onMouseEnter={() => setIsRoomOpen(true)}
                        onMouseLeave={() => setIsRoomOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 transition-colors cursor-pointer 
                                ${
                                    activeLink === "ROOMS"
                                        ? "text-[var(--tempi-global-color3)] underline underline-offset-4"
                                        : "text-[var(--tempi-global-color2)]"
                                }
                            `}
                        >
                            {link.label}
                            <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                    isRoomOpen ? "rotate-180" : "rotate-0"
                                }`}
                            />
                        </button>

                        {/* Dropdown */}
                        <div
                            className={`absolute left-0 top-full mt-3 w-48 bg-white rounded-lg shadow-lg z-50 transition-all 
                                ${
                                    isRoomOpen
                                        ? "opacity-100 visible"
                                        : "opacity-0 invisible -translate-y-2"
                                }
                            `}
                        >
                            <ul className="py-3 text-sm text-gray-700 space-y-1">
                                {[
                                    {
                                        label: "Deluxe Room",
                                        to: "/room/deluxe",
                                    },
                                    {
                                        label: "Executive Room",
                                        to: "/room/executive",
                                    },
                                    {
                                        label: "Signature Room",
                                        to: "/room/signature",
                                    },
                                    {
                                        label: "Dai Nam Suite",
                                        to: "/room/suite",
                                    },
                                ].map((room) => (
                                    <li key={room.to}>
                                        <Link
                                            to={room.to}
                                            className="block px-4 py-2 hover:text-[var(--tempi-global-color3)]"
                                            onClick={() =>
                                                setActiveLink("ROOMS")
                                            }
                                        >
                                            {room.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <Link
                        key={link.label}
                        to={link.href}
                        className={`transition-colors hover:text-[var(--tempi-global-color3)] hover:underline underline-offset-4
                            ${
                                activeLink === link.label
                                    ? "text-[var(--tempi-global-color3)] underline"
                                    : "text-[var(--tempi-global-color2)]"
                            }
                        `}
                        onClick={() => setActiveLink(link.label)}
                    >
                        {link.label}
                    </Link>
                )
            )}
        </>
    );
}

/* ----------------- Language Selector ----------------- */
function LanguageSelector({ language, setLanguage }) {
    const [isFlagOpen, setIsFlagOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsFlagOpen(true)}
            onMouseLeave={() => setIsFlagOpen(false)}
        >
            <button className="flex cursor-pointer items-center space-x-2">
                {language === "en" ? (
                    <img
                        src={LOGOS.en}
                        className="h-[20px] w-[32px] rounded-sm"
                    />
                ) : (
                    <img
                        src={LOGOS.vi}
                        className="h-[20px] w-[32px] rounded-sm"
                    />
                )}
                <span>{language === "en" ? "EN" : "VI"}</span>
                <ChevronDown
                    size={16}
                    className={`${isFlagOpen ? "rotate-180" : "rotate-0"}`}
                />
            </button>

            <div
                className={`absolute right-0 top-full mt-2 w-30 bg-white rounded-lg shadow-lg transition-all z-50
                    ${
                        isFlagOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible -translate-y-2"
                    }
                `}
            >
                <ul className="py-2 text-sm">
                    <li className="my-2">
                        <button
                            className="flex items-center justify-start w-full px-2 py-1.5 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                setIsFlagOpen(false);
                                setLanguage("vi");
                            }}
                        >
                            <img
                                src={LOGOS.vi}
                                className="h-[20px] w-[32px] rounded-sm mr-2"
                            />
                            VI
                        </button>
                    </li>

                    <li className="my-2">
                        <button
                            className="flex items-center justify-start w-full px-2 py-1.5 hover:bg-gray-200 cursor-pointer"
                            onClick={() => {
                                setIsFlagOpen(false);
                                setLanguage("en");
                            }}
                        >
                            <img
                                src={LOGOS.en}
                                className="h-[20px] w-[32px] rounded-sm mr-2"
                            />
                            EN
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

/* ----------------- Mobile Menu ----------------- */
function MobileMenu({ navLinks, onClose, setActiveLink }) {
    return (
        <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="flex flex-col items-center space-y-4 py-4">
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => {
                            setActiveLink(link.label);
                            onClose();
                        }}
                        className="text-gray-700 hover:text-[var(--tempi-global-color1)]"
                    >
                        {link.label}
                    </Link>
                ))}

                {/* Flags */}
                <div className="flex items-center space-x-2 border-t pt-4 border-gray-100">
                    <img src={LOGOS.vi} className="h-18 w-32 rounded-sm" />
                    <span>VI</span>
                </div>
            </div>
        </div>
    );
}
