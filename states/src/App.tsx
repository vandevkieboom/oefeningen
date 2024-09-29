import { useState } from 'react';
import './App.css';

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    );
};

export default App;
