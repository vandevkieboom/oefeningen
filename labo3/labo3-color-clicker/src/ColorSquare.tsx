interface ColorSquareProps {
    color: string;
    size: number;
}

const ColorSquare = ({ color, size }: ColorSquareProps) => {
    const handleClick = () => {
        alert(color);
    };

    return (
        <div
            style={{
                backgroundColor: color,
                width: size,
                height: size,
            }}
            onClick={handleClick}
        ></div>
    );
};

export default ColorSquare;
