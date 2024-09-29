// import Navbar from './Navbar';
// import Home from './Home';

import { useState } from 'react';

// function App() {
//     return (
//         <div className="App">
//             <Navbar />
//             <div className="content">
//                 <Home />
//             </div>
//         </div>
//     );
// }

function App() {
    const [name, setName] = useState<string>('');
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event
    ) => {
        setName(event.target.value);
    };
    return (
        <div className="App">
            <input type="text" id="name" onChange={handleChange} />
            <p>The name you typed is {name}</p>
        </div>
    );
}

export default App;
