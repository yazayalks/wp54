

export default function SamplePrevArrow(props: any) {
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