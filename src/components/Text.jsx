/* --------------------------------------------------
   FONTS
-------------------------------------------------- */
const headerFont = "font-[Cormorant_Garamond]";
const paragraphFont = "font-[Montserrat]";

/* --------------------------------------------------
   ENUMS (you will use these)
-------------------------------------------------- */
export const TEXT_COLORS = {
    DEFAULT: "default",
    LIGHT: "light",
    WHITE: "white",
    PRIMARY: "primary",
    SECONDARY: "secondary",
    DANGER: "danger",
};

export const TEXT_SIZES = {
    XS: "XS",
    SM: "SM",
    BASE: "BASE",
    LG: "LG",
    XL: "XL",
    XXL: "XXL",
    XXXL: "XXXL",
    X4L: "X4L",
    X5L: "X5L",
    X6L: "X6L",
    X7L: "X7L",
};

/* --------------------------------------------------
   REAL VALUE MAP (internal only)
-------------------------------------------------- */
const TEXT_COLOR_MAP = {
    default: "text-gray-900",
    light: "text-gray-600",
    white: "text-white",
    primary: "text-blue-600",
    secondary: "text-amber-600",
    danger: "text-red-600",
};

const TEXT_SIZE_MAP = {
    XS: "text-xs md:text-sm",
    SM: "text-sm md:text-base",
    BASE: "text-base md:text-lg",
    LG: "text-lg md:text-xl",
    XL: "text-xl md:text-2xl",
    XXL: "text-2xl md:text-3xl",
    XXXL: "text-3xl md:text-4xl",
    X4L: "text-4xl md:text-5xl",
    X5L: "text-5xl md:text-6xl",
    X6L: "text-6xl md:text-7xl",
    X7L: "text-7xl md:text-8xl",
};

/* --------------------------------------------------
   UTILS
-------------------------------------------------- */
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

/* --------------------------------------------------
   COMPONENTS
-------------------------------------------------- */
export function H1({
    children,
    color = TEXT_COLORS.DEFAULT,
    size = TEXT_SIZES.X6L,
    className,
}) {
    return (
        <h1
            className={cn(
                `${headerFont} mb-4`,
                TEXT_SIZE_MAP[size],
                TEXT_COLOR_MAP[color],
                className
            )}
        >
            {children}
        </h1>
    );
}

export function H2({
    children,
    color = TEXT_COLORS.DEFAULT,
    size = TEXT_SIZES.X4L,
    className,
}) {
    return (
        <h2
            className={cn(
                `${headerFont} font-semibold mb-4`,
                TEXT_SIZE_MAP[size],
                TEXT_COLOR_MAP[color],
                className
            )}
        >
            {children}
        </h2>
    );
}

export function H3({
    children,
    color = TEXT_COLORS.DEFAULT,
    size = TEXT_SIZES.XL,
    className,
}) {
    return (
        <h3
            className={cn(
                `${headerFont} font-medium mb-4`,
                TEXT_SIZE_MAP[size],
                TEXT_COLOR_MAP[color],
                className
            )}
        >
            {children}
        </h3>
    );
}

export function H4({
    children,
    color = TEXT_COLORS.DEFAULT,
    size = TEXT_SIZES.LG,
    className,
}) {
    return (
        <h4
            className={cn(
                `${headerFont} font-medium mb-3`,
                TEXT_SIZE_MAP[size],
                TEXT_COLOR_MAP[color],
                className
            )}
        >
            {children}
        </h4>
    );
}

export function Paragraph({
    children,
    color = TEXT_COLORS.DEFAULT,
    size = TEXT_SIZES.BASE,
    className,
}) {
    return (
        <p
            className={cn(
                `${paragraphFont}  leading-relaxed`,
                TEXT_SIZE_MAP[size],
                TEXT_COLOR_MAP[color],
                className
            )}
        >
            {children}
        </p>
    );
}
