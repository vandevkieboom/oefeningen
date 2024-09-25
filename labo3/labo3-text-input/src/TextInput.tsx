import React from 'react';

interface TextInputProps {
    size: number;
}

const AlertWhenChanged = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
) => {
    alert(`Textbox ${index} changed to ${event.target.value}`);
};

const GenerateInputFields = (size: number): number[] => {
    return Array.from({ length: size }, (_, i) => i);
};

const TextInput = ({ size }: TextInputProps) => {
    const InputFields: number[] = GenerateInputFields(size);

    return (
        <>
            {InputFields.map((index) => (
                <input
                    key={index}
                    onChange={(event) => AlertWhenChanged(index, event)}
                ></input>
            ))}
            <br />
        </>
    );
};

export default TextInput;
