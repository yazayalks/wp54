import React from "react";

const Dots = ({ activeIndex, onclick, heroImage }: any) => {
    return (
        <div className="all-dots">
            {heroImage.map((slide : any, index : any) => (
                <span
                    key={index}
                    className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
                    onClick={() => onclick(index)}
                ></span>
            ))}
        </div>
    );
}

export default Dots;