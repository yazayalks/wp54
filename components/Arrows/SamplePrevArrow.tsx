import {CustomArrowProps} from "react-slick";
import {FC} from "react";


const SamplePrevArrow: FC<CustomArrowProps> = (props) => {
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
                marginLeft: '50px'
            }}
            onClick={onClick}
        />
    );
}

export default SamplePrevArrow;