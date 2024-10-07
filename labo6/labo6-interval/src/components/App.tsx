import { useEffect, useState } from 'react';
import './App.css';

interface RandomValueProps {
    min: number;
    max: number;
}

const Timer = () => {
    const [timer, setTimer] = useState<number>(0);

    useEffect(() => {
        const handle = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);

        return () => {
            clearInterval(handle);
        };
    }, [timer]);

    return (
        <>
            <p>{timer}</p>
        </>
    );
};

const CurrentTime = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const handle = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(handle);
        };
    }, [time]);

    return (
        <>
            <p>{time.toLocaleTimeString()}</p>
        </>
    );
};

const RandomValue = ({ min, max }: RandomValueProps) => {
    const [random, setRandom] = useState<number>(0);

    useEffect(() => {
        const handle = setInterval(() => {
            setRandom(Math.floor(Math.random() * (max - min + 1) + min));
        }, 1000);

        return () => {
            clearInterval(handle);
        };
    }, [min, max]);

    return (
        <>
            <p>
                Random value between {min} and {max}: {random.toFixed(0)}
            </p>
        </>
    );
};

const App = () => {
    return (
        <>
            <Timer />
            <CurrentTime />
            <RandomValue min={1} max={100} />
            <RandomValue min={100} max={200} />
        </>
    );
};

export default App;
