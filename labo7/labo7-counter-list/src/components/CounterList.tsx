import { useState } from 'react';

interface CounterProps {
    value: number;
    index: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

const Counter = ({ value, index, onIncrease, onDecrease }: CounterProps) => {
    return (
        <>
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: value < 0 ? 'red' : value > 0 ? 'green' : 'black',
                }}
            >
                <button onClick={() => onDecrease()}>Decrement</button>
                Count: {value}
                <button onClick={() => onIncrease()}>Increment</button>
            </div>
        </>
    );
};

const CounterList = () => {
    const [counters, setCounters] = useState<number[]>([]);

    const addCounter = () => {
        setCounters([...counters, 0]);
    };

    const increaseCounter = (index: number) => {
        setCounters((counterCpy) =>
            counterCpy.map((counter, i) => (i === index ? counter + 1 : counter))
        );
    };

    const decreaseCounter = (index: number) => {
        setCounters((counterCpy) =>
            counterCpy.map((counter, i) => (i === index ? counter - 1 : counter))
        );
    };

    return (
        <>
            <h1>Steff</h1>
            {counters.map((counter, index) => (
                <Counter
                    value={counter}
                    index={index}
                    onDecrease={() => decreaseCounter(index)}
                    onIncrease={() => increaseCounter(index)}
                />
            ))}
            <p>Som van de tellers: {counters.reduce((prev, curr) => prev + curr, 0)}</p>
            <button onClick={addCounter}>Voeg teller toe</button>
        </>
    );
};

export default CounterList;
