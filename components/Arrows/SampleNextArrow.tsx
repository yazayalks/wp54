import React, {FC} from "react";
import {CustomArrowProps} from "react-slick";

const SampleNextArrow: FC<CustomArrowProps> = (props ) => {
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

export default SampleNextArrow;