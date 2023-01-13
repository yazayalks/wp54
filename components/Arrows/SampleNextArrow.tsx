import React from "react";

export default function SampleNextArrow(props : any) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: 'none',
                position: 'absolute',
                zIndex: 100,
                marginRight: '50px'
            }}
            onClick={onClick}
        />
    );
}