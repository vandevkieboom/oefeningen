import { useState } from 'react';

const TicTacToe = () => {
    const [board, setBoard] = useState<string[]>(Array(9).fill(''));
    const [player, setPlayer] = useState<string>('X');

    const handleClick = (index: number) => {
        if (board[index] === '') {
            const newBoard = [...board];
            newBoard[index] = player;
            setBoard(newBoard);
            setPlayer(player === 'X' ? 'O' : 'X');
        }
    };

    return (
        <>
            <div className="gridcontainer">
                {board.map((cell, index) => (
                    <div className="square" onClick={() => handleClick(index)}>
                        {cell}
                    </div>
                ))}
            </div>
            <button onClick={() => setBoard(Array(9).fill(''))}>reset</button>
        </>
    );
};

export default TicTacToe;
