import PageHeader from "@/components/PageHeader";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [isPhone, setIsPhone] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            setIsPhone(window.innerWidth <= 768);
        };
        checkDevice();
        window.addEventListener("resize", checkDevice);
        return () => window.removeEventListener("resize", checkDevice);
    }, []);

    return isPhone ? <ContactPagePhone /> : <ContactPagePC />;
}

function ContactPagePC() {
    return (
        <div className="bg-[#f4efeeff] flex flex-col items-center justify-center px-20 py-16">
            <PageHeader
                section="CONTACT"
                title="Get in Touch & Book Your Stay"
            />
            <section className="flex justify-center">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">
                    {/* LEFT TEXT CONTENT */}
                    <div className="flex flex-col">
                        <h2 className="text-4xl md:text-4xl font-serif text-primary mb-6 leading-tight">
                            Ready to Experience a Charming Stay in the Heart of
                            Saigon?
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            Whether you're traveling for business, leisure, or a
                            romantic getaway, we’re here to ensure your stay is
                            comfortable and memorable. Share your travel dates,
                            and we'll assist you with room availability, rates,
                            and any special requests.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-primary text-primary">
                                    📧
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">
                                        Email Us
                                    </p>
                                    <p className="text-primary font-semibold">
                                        info@dainamhotels.com.vn
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full border border-primary text-primary">
                                    📞
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700">
                                        Call Us
                                    </p>
                                    <p className="text-primary font-semibold">
                                        (+84) 944 698 974
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="bg-white shadow-lg rounded-2xl p-8">
                        <h3 className="text-2xl font-serif text-primary mb-6">
                            Booking Inquiry
                        </h3>

                        <form className="space-y-5">
                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Smith"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Check-In
                                    </label>
                                    <input
                                        type="date"
                                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700">
                                        Check-Out
                                    </label>
                                    <input
                                        type="date"
                                        className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    placeholder="Any special requests? e.g. Airport pick-up, late check-in..."
                                    rows={4}
                                    className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-primary focus:ring-primary"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition"
                            >
                                Send Booking Request ✈️
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ContactPagePhone() {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-10">
            <h1>Contact Page - Phone Version</h1>
        </div>
    );
}
