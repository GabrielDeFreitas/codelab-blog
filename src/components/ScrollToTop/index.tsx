import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`p-4 fixed bottom-8 right-8 p-3 rounded-full bg-brand-color text-white shadow-lg transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUp />
        </button>
    );
}