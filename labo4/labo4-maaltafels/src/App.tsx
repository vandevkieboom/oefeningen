import './App.css';
import { useState } from 'react';
import MultiplicationTable from './MultiplicationTable';

const App = () => {
    const [max, setMax] = useState<number>(5);
    return (
        <>
            <input
                type="number"
                value={max}
                min="2"
                max="10"
                onChange={(event) => setMax(parseInt(event.target.value))}
            ></input>
            <MultiplicationTable max={max} />
        </>
    );
};

export default App;
