import { useState } from 'react';

const ButtonList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const handleIncrement = (index: number) => {
        let countersCpy = [...counters];
        countersCpy[index]++;
        setCounters(countersCpy);
        //setCounters(counters.map((counter, i) => i === index ? counter - 1 : counter));
    };

    const handleDecrement = (index: number) => {
        let countersCpy = [...counters];
        countersCpy[index]--;
        setCounters(countersCpy);
    };

    return (
        <>
            {counters.map((item, index) => (
                <div className="flex-container" key={index}>
                    <button onClick={() => handleDecrement(index)}>Decrement</button>
                    <p style={{ color: item < 0 ? 'red' : item > 0 ? 'green' : 'white' }}>
                        Count: {item}
                    </p>
                    <button onClick={() => handleIncrement(index)}>Increment</button>
                </div>
            ))}

            <p>Som van de tellens: {counters.reduce((a: number, b: number) => a + b, 0)}</p>

            <div>
                <button onClick={() => setCounters([...counters, 0])}>Add counter</button>
            </div>
        </>
    );
};

export default ButtonList;
