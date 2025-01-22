import React, { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const updateScrollWidth = () => {
            const scrollTop = document?.documentElement.scrollTop;
            const scrollHeight = document?.documentElement.scrollHeight - document?.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            setScrollWidth(progress);
        };

        window.addEventListener("scroll", updateScrollWidth);
        return () => window.removeEventListener("scroll", updateScrollWidth);
    }, []);

    return (
        <div className="fixed top-100 right-0 left-0  mt-3.5 w-full h-2 bg-gray-200">
            <div
                className="h-2 w-full bg-blue-500"
                style={{ width: `${scrollWidth}%`, transition: "width 0.2s ease" }}
            />
        </div>
    );
}
