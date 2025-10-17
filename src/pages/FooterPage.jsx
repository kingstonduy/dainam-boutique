import { Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-5">
            <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-12 px-4">
                {/* LEFT SIDE (2 boxes next to each other) */}
                <div className="flex flex-col md:flex-row gap-10">
                    {/* FOLLOW US */}
                    <div className="min-w-[180px]">
                        <h3 className="text-xl font-semibold mb-3 text-accent">
                            Follow Us
                        </h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-accent transition-colors"
                            >
                                <Facebook className="h-6 w-6" />
                                <span>Facebook</span>
                            </a>
                            <a
                                href="https://zalo.me"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-accent transition-colors"
                            >
                                <img
                                    src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/2500/zalo-seeklogo.com-512.png"
                                    alt="Zalo Logo"
                                    className="h-6 w-6 object-contain rounded-full bg-white"
                                />
                                <span>Zalo</span>
                            </a>
                        </div>
                    </div>

                    {/* GET IN TOUCH */}
                    <div className="min-w-[240px]">
                        <h3 className="text-xl font-semibold mb-3 text-accent">
                            Get in Touch
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <span>
                                    79 Tran Hung Dao, Ben Thanh Ward, Ho Chi
                                    Minh City
                                </span>
                            </div>
                            <a
                                href="tel:+84944698974"
                                className="flex items-start gap-3 hover:text-accent transition-colors"
                            >
                                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <span>(+84) 944 698 974</span>
                            </a>
                            <a
                                href="mailto:info@dainamhotels.com.vn"
                                className="flex items-start gap-3 hover:text-accent transition-colors"
                            >
                                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                <span>info@dainamhotels.com.vn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (GOOGLE MAP) */}
                <div className="w-full md:w-[900px] h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6346765869376!2d106.69001931533403!3d10.762622392329773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4b8ea0e8f7%3A0x3ba06ec5e0c12b08!2s79%20Tr%E1%BA%A7n%20H%C6%B0ng%20%C4%90%E1%BA%A1o%2C%20Ph%C6%B0%E1%BB%9Dng%20B%E1%BA%BFn%20Th%C3%A0nh%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Hotel Location Map"
                    />
                </div>
            </div>

            <div className="mt-10 pt-5 border-t border-white/20 text-center text-sm">
                <p>
                    &copy; {new Date().getFullYear()} Dai Nam Hotel. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
