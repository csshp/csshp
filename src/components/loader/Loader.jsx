import React, { useEffect, useState } from "react";

export const Loader = (props) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, props.sec * 1000);
        return () => {};
    }, []);
    return (
        <>
            {isVisible && (
                <div className="loader">
                    <div className="line"></div>
                </div>
            )}
        </>
    );
};
