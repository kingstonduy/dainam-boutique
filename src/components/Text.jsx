export function H1({ children }) {
    return (
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            {children}
        </h1>
    );
}

export function H2({ children }) {
    return (
        <h2 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
            {children}
        </h2>
    );
}

export function H3({ children }) {
    return <p className="text-gray-700 leading-relaxed mb-4">{children}</p>;
}

export function Paragraph({ children }) {
    return (
        <p
            className="text-[18px] md:text-[20px] text-[#1b1b1b] text-justify leading-relaxed"
            style={{ fontFamily: "Cormorant Garamond" }}
        >
            {children}
        </p>
    );
}
