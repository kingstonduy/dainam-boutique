import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const CarouselContext = React.createContext(null);

function useCarousel() {
    const context = React.useContext(CarouselContext);
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }
    return context;
}

function Carousel({
    orientation = "horizontal",
    opts,
    setApi,
    plugins = [],
    autoplay = true,
    autoplayInterval = 4000,
    className,
    children,
    ...props
}) {
    const autoplayPlugin = React.useRef(
        Autoplay({ delay: autoplayInterval, stopOnInteraction: false })
    );

    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            loop: true, // ✅ Infinite Loop
            axis: orientation === "horizontal" ? "x" : "y",
        },
        autoplay ? [...plugins, autoplayPlugin.current] : plugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [scrollSnapList, setScrollSnapList] = React.useState([]);

    const onSelect = React.useCallback((api) => {
        if (!api) return;
        setSelectedIndex(api.selectedScrollSnap());
        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => api?.scrollPrev(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext(), [api]);
    const scrollTo = React.useCallback((index) => api?.scrollTo(index), [api]);

    const handleKeyDown = React.useCallback(
        (event) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        },
        [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
        if (!api || !setApi) return;
        setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
        if (!api) return;

        setScrollSnapList(api.scrollSnapList());
        onSelect(api);

        api.on("reInit", () => {
            setScrollSnapList(api.scrollSnapList());
            onSelect(api);
        });
        api.on("select", onSelect);

        return () => {
            api?.off("select", onSelect);
        };
    }, [api, onSelect]);

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api,
                opts,
                orientation:
                    orientation ||
                    (opts?.axis === "y" ? "vertical" : "horizontal"),
                scrollPrev,
                scrollNext,
                scrollTo,
                canScrollPrev,
                canScrollNext,
                scrollSnapList,
                selectedIndex,
            }}
        >
            <div
                onKeyDownCapture={handleKeyDown}
                onMouseEnter={() => autoplay && autoplayPlugin.current.stop()}
                onMouseLeave={() => autoplay && autoplayPlugin.current.play()}
                className={cn("relative", className)}
                role="region"
                aria-roledescription="carousel"
                data-slot="carousel"
                {...props}
            >
                {children}
            </div>
        </CarouselContext.Provider>
    );
}

function CarouselContent({ className, ...props }) {
    const { carouselRef, orientation } = useCarousel();
    return (
        <div
            ref={carouselRef}
            className="overflow-hidden"
            data-slot="carousel-content"
        >
            <div
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className
                )}
                {...props}
            />
        </div>
    );
}

function CarouselItem({ className, ...props }) {
    const { orientation } = useCarousel();
    return (
        <div
            role="group"
            aria-roledescription="slide"
            data-slot="carousel-item"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    );
}

/* ⬇️ Updated to use Chevron Icons */
function CarouselPrevious({ className, ...props }) {
    const { orientation, scrollPrev } = useCarousel();

    return (
        <button
            onClick={scrollPrev}
            className={cn(
                "absolute z-10 p-1 text-primary hover:text-primary/80 transition-colors cursor-pointer",
                orientation === "horizontal"
                    ? "top-1/2 -left-15 -translate-y-1/2"
                    : "-top-8 left-1/2 -translate-x-1/2 rotate-90",
                className
            )}
            {...props}
        >
            <ChevronLeft className="h-10 w-10" />
            <span className="sr-only">Previous slide</span>
        </button>
    );
}

function CarouselNext({ className, ...props }) {
    const { orientation, scrollNext } = useCarousel();

    return (
        <button
            onClick={scrollNext}
            className={cn(
                "absolute z-10 p-1 text-primary hover:text-primary/80 transition-colors cursor-pointer",
                orientation === "horizontal"
                    ? "top-1/2 -right-15 -translate-y-1/2"
                    : "-bottom-8 left-1/2 -translate-x-1/2 rotate-90",
                className
            )}
            {...props}
        >
            <ChevronRight className="h-10 w-10" />
            <span className="sr-only">Next slide</span>
        </button>
    );
}

/* ⬇️ Improved Dots UI */
function CarouselDots() {
    const { scrollSnapList, selectedIndex, scrollTo } = useCarousel();
    if (!scrollSnapList?.length) return null;

    return (
        <div className="flex justify-center gap-3 mt-4">
            {scrollSnapList.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`
            h-4 w-4 rounded-full cursor-pointer transition-all duration-300
            ${
                selectedIndex === index
                    ? "w-10 bg-blue-600"
                    : "bg-muted-foreground/30 hover:bg-primary/60 hover:scale-125"
            }
          `}
                />
            ))}
        </div>
    );
}

export {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselDots,
};
