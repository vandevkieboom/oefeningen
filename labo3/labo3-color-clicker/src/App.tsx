import './App.css';
import ColorSquare from './ColorSquare';

const App = () => {
    return (
        <>
            <div className="ColorSquareContainer">
                <ColorSquare color="yellow" size={100} />
                <ColorSquare color="brown" size={100} />
                <ColorSquare color="orange" size={100} />
                <ColorSquare color="orange" size={100} />
                <ColorSquare color="pink" size={100} />
                <ColorSquare color="brown" size={100} />
                <ColorSquare color="green" size={100} />
                <ColorSquare color="yellow" size={100} />
                <ColorSquare color="purple" size={100} />
                <ColorSquare color="blue" size={100} />
            </div>
        </>
    );
};

export default App;
