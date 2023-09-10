import { ChevronUp } from "akar-icons";
import React, { useEffect } from "react";
export const MoveTopBtn = () => {
    const handleScroll = () => {
        const moveTopBtn = document.querySelector("#moveTopBtn");
        if (window.scrollY > 830) {
            moveTopBtn.classList.add("isShow");
        } else {
            moveTopBtn.classList.remove("isShow");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll, { passive: true });
        };
    }, []);
    const moveTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <button id="moveTopBtn" onClick={moveTop}>
            <ChevronUp strokeWidth={2} size={25} />
        </button>
    );
};
