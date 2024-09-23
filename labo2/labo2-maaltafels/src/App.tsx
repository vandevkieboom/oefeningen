import MultiplicationTable from './MultiplicationTable';

const App = () => {
    return (
        <>
            <MultiplicationTable max={5} />
            <MultiplicationTable max={7} />
            <MultiplicationTable max={10} />
        </>
    );
};

export default App;
