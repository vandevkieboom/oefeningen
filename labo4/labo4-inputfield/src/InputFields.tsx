import { useState } from 'react';

const InputFields = () => {
    const [inputValue, setInputValue] = useState('');
    const totalInputFields = Array.from({ length: 5 }, (_, i) => i);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            {totalInputFields.map((_, index) => (
                <input
                    key={index}
                    value={inputValue}
                    onChange={handleChange}
                ></input>
            ))}
        </>
    );
};

export default InputFields;
