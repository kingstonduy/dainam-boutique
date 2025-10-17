// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "HOME", href: "#" },
        { label: "ROOM", href: "#" },
        { label: "CONTACT", href: "#" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm"
                    : "bg-white border-b border-gray-200"
            }`}
        >
            <div className="relative flex justify-center items-center h-20 px-6">
                <Logo />

                {/* Desktop Menu */}
                <div className="absolute right-6 hidden md:flex items-center space-x-6 font-medium">
                    <NavLinks navLinks={navLinks} />
                    <LanguageSelector />
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="absolute right-6 md:hidden p-2 text-gray-700 hover:text-[var(--tempi-global-color1)]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && <MobileMenu navLinks={navLinks} />}
        </nav>
    );
}

/* ---------- Subcomponents (inside same file) ---------- */

function Logo() {
    return (
        <a href="#">
            <img
                src="https://lh3.googleusercontent.com/sjLc3P5XiMtVnHT7vbI8Hz6RA-QTxhOxQekW2GM-2uvq1Z37PZjit4iEybM09t710LtaXna498UzbyHUoQpUf3nYCghFaCk=w9000"
                alt="Logo"
                className="w-[120px] h-[120px] object-contain"
            />
        </a>
    );
}

function NavLinks({ navLinks }) {
    const [isRoomOpen, setIsRoomOpen] = useState(false);
    return (
        <>
            {navLinks.map((link) =>
                link.label === "ROOM" ? (
                    <div
                        key={link.label}
                        className="relative"
                        onMouseEnter={() => setIsRoomOpen(true)}
                        onMouseLeave={() => setIsRoomOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1 transition-colors cursor-pointer hover:underline underline-offset-4 ${
                                isRoomOpen
                                    ? "text-[var(--tempi-global-color3)]"
                                    : "text-[var(--tempi-global-color2)]"
                            }`}
                        >
                            ROOM
                            <ChevronDown
                                size={16}
                                className={`transition-transform duration-300 ${
                                    isRoomOpen
                                        ? "rotate-180 text-[var(--tempi-global-color3)]"
                                        : "rotate-0 text-[var(--tempi-global-color2)]"
                                }`}
                            />
                        </button>

                        {/* Dropdown */}
                        <div
                            className={`absolute left-0 top-full mt-3 w-48 bg-white rounded-lg shadow-lg transition-all duration-300 ease-out z-50 ${
                                isRoomOpen
                                    ? "opacity-100 visible translate-y-0"
                                    : "opacity-0 invisible -translate-y-2"
                            }`}
                        >
                            <ul className="py-3 text-sm text-[var(--tempi-global-color2)] space-y-1">
                                {[
                                    { label: "Deluxe Room", id: "deluxe" },
                                    {
                                        label: "Executive Room",
                                        id: "executive",
                                    },
                                    {
                                        label: "Signature Room",
                                        id: "signature",
                                    },
                                    {
                                        label: "Dai Nam Suite",
                                        id: "dainam-suite",
                                    },
                                ].map((room) => (
                                    <li key={room.id}>
                                        <a
                                            href={`#${room.id}`}
                                            className="block px-4 py-2 hover:text-[var(--tempi-global-color3)] transition-colors"
                                        >
                                            {room.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <a
                        key={link.label}
                        href={link.href}
                        className={`transition-colors hover:text-[var(--tempi-global-color3)] hover:underline hover:underline-offset-4 ${
                            link.label === "HOME"
                                ? "text-[var(--tempi-global-color3)]"
                                : "text-[var(--tempi-global-color2)]"
                        }`}
                    >
                        {link.label}
                    </a>
                )
            )}
        </>
    );
}

function LanguageSelector() {
    const [isFlagOpen, setIsFlagOpen] = useState(false);
    return (
        <div
            className="relative"
            onMouseEnter={() => setIsFlagOpen(true)}
            onMouseLeave={() => setIsFlagOpen(false)}
        >
            <button className="flex items-center space-x-2 focus:outline-none">
                <img
                    src="https://flagcdn.com/w20/vn.png"
                    alt="VN"
                    className="h-4 w-6 object-cover rounded-sm"
                />
                <div className="flex items-center space-x-1 text-[var(--tempi-global-color2)]">
                    <span>VI</span>
                    <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                            isFlagOpen
                                ? "rotate-180 text-[var(--tempi-global-color3)]"
                                : "rotate-0 text-[var(--tempi-global-color2)]"
                        }`}
                    />
                </div>
            </button>

            {/* Dropdown */}
            <div
                className={`absolute right-0 top-full mt-2 w-28 bg-white rounded-lg shadow-lg transition-all duration-200 ease-out z-50 ${
                    isFlagOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                }`}
            >
                <ul className="py-2 text-sm text-[var(--tempi-global-color2)]">
                    <li>
                        <button className="flex items-center w-full px-3 py-1.5 hover:bg-gray-50 hover:text-[var(--tempi-global-color3)] transition-colors cursor-pointer">
                            <img
                                src="https://flagcdn.com/w20/vn.png"
                                alt="VN"
                                className="h-4 w-6 object-cover rounded-sm mr-2"
                            />
                            VI
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center w-full px-3 py-1.5 hover:bg-gray-50 hover:text-[var(--tempi-global-color3)] transition-colors cursor-pointer">
                            <img
                                src="https://flagcdn.com/w20/gb.png"
                                alt="EN"
                                className="h-4 w-6 object-cover rounded-sm mr-2"
                            />
                            EN
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function MobileMenu({ navLinks }) {
    return (
        <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col items-center space-y-4 py-4">
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-gray-700 hover:text-[var(--tempi-global-color1)] transition-colors"
                    >
                        {link.label}
                    </a>
                ))}

                <div className="flex items-center space-x-2 border-t pt-4 border-gray-100">
                    <img
                        src="https://flagcdn.com/w20/vn.png"
                        alt="VN"
                        className="h-4 w-6 object-cover rounded-sm"
                    />
                    <div className="flex items-center space-x-1">
                        <span>VI</span>
                        <ChevronDown size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
}
