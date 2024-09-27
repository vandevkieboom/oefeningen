import React from 'react';

interface CheckBoxProps {
    size: number;
}

const CheckBox = ({ size }: CheckBoxProps) => {
    const checkBoxes: boolean[][] = Array.from({ length: size }, () =>
        Array(size).fill(false)
    );

    const alertIfChecked = (
        rowIndex: number,
        colIndex: number,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const isChecked = event.target.checked;
        alert(
            `${rowIndex}, ${colIndex} is ${isChecked ? 'checked' : 'unchecked'}`
        );
    };

    return (
        <>
            <h1>Hello</h1>
            {checkBoxes.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((_, colIndex) => (
                        <input
                            key={colIndex}
                            type="checkbox"
                            onChange={(event) =>
                                alertIfChecked(rowIndex, colIndex, event)
                            }
                        ></input>
                    ))}
                </div>
            ))}
        </>
    );
};

export default CheckBox;
