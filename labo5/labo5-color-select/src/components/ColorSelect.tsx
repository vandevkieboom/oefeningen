import { useState } from 'react';
import styles from './ColorSelect.module.css';

const ColorSelect = () => {
    const [selectedColor, setSelectedColor] = useState<string[]>([]);
    const [shownColors, setShownColors] = useState<string[]>([]);

    const colorChange: React.ChangeEventHandler<HTMLSelectElement> = (
        event
    ) => {
        setSelectedColor(
            Array.from(event.target.selectedOptions, (option) => option.value)
        );
    };

    return (
        <>
            <select onChange={colorChange} value={selectedColor} multiple>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
                <option value="yellow">yellow</option>
                <option value="orange">orange</option>
                <option value="purple">purple</option>
                <option value="black">black</option>
                <option value="white">white</option>
            </select>

            <button onClick={() => setShownColors(selectedColor)}>
                Show colors
            </button>

            <div className={styles.colorContainer}>
                {shownColors.map((color) => (
                    <div
                        style={{
                            backgroundColor: color,
                            flex: 1,
                            height: '200px',
                        }}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default ColorSelect;
