import React, { useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

/* ---------------------------
   Preview Image
--------------------------- */
const AreaImage = React.memo(function AreaImage({ img, onClick, className }) {
    const defaultClass =
        "w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-xl cursor-zoom-in select-none";

    return (
        <img
            src={img}
            alt="preview"
            loading="lazy"
            draggable={false}
            onClick={onClick}
            className={className ? className : defaultClass}
        />
    );
});

/* ---------------------------
   Main Popup Component
--------------------------- */
export default function PopUpImage({ img, className }) {
    const [lightbox, setLightbox] = useState({
        open: false,
        currentImg: null,
    });

    const openLightbox = () => setLightbox({ open: true, currentImg: img });

    const closeLightbox = () => setLightbox({ open: false, currentImg: null });

    return (
        <>
            <AreaImage img={img} onClick={openLightbox} className={className} />

            {lightbox.open &&
                createPortal(
                    <div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-[999999]"
                        onClick={closeLightbox}
                    >
                        <div
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightbox.currentImg}
                                alt="zoomed"
                                loading="lazy"
                                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            />

                            <button
                                onClick={closeLightbox}
                                className="absolute hover:cursor-pointer top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-3 rounded-full text-white transition"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}
