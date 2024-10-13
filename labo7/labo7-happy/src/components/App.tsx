import { useEffect, useState } from 'react';
import Square from './Square';
import './App.css';

const App = () => {
    const [work, setWork] = useState<number>(0);
    const [seconds, setSeconds] = useState(0);

    const handleClick = (productivity: number) => {
        setWork((prevWork) => prevWork + productivity);
        console.log(productivity);
    };

    const handleReset = () => {
        setWork(0);
        setSeconds(0);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (work < 100) {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (work >= 100) {
            setSeconds(0);
        }
        console.log('uitgevoert');
    }, [work]);

    return (
        <div>
            {work < 100 ? <h2>Timer: {seconds}</h2> : <h2>completed</h2>}
            <progress id="progress" max="100" value={work}></progress>
            <div style={{ display: 'flex' }}>
                <Square color="red" size={100} work={work} handleClick={handleClick} />
                <Square color="green" size={100} work={work} handleClick={handleClick} />
                <Square color="pink" size={100} work={work} handleClick={handleClick} />
            </div>
            <button onClick={handleReset}>reset</button>
        </div>
    );
};

export default App;
