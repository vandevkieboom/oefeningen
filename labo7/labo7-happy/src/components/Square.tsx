import { useState } from 'react';

export interface SquareProps {
    color: string;
    size: number;
    work: number;
    handleClick: (a: number) => void;
}

const Square = ({ color, size, work, handleClick }: SquareProps) => {
    const [productivity, setProductivity] = useState<number>(1);
    const [clicked, setClicked] = useState<number>(0);

    const onSquareClick = () => {
        if (clicked >= 10) {
            setProductivity(0);
            setTimeout(() => {
                setProductivity(1);
                setClicked(0);
            }, 5000);
        } else {
            setClicked((prevClicked) => prevClicked + 1);
            handleClick(productivity);
            console.log(`clicked: ${clicked}`);
        }
    };

    return (
        <div
            style={{
                backgroundColor: color,
                width: size,
                height: size,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                marginRight: '1rem',
                marginTop: '1rem',
            }}
            onClick={onSquareClick}
        >
            {productivity === 0 ? (
                <h1 style={{ fontSize: '2.7rem' }}>😵</h1>
            ) : work < 100 ? (
                <h1 style={{ fontSize: '2.7rem' }}>😐</h1>
            ) : (
                <h1 style={{ fontSize: '2.7rem' }}>😃</h1>
            )}
        </div>
    );
};

export default Square;
