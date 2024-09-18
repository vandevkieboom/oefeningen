const MultiplicationTable = () => {
    const numbers = Array.from({ length: 25 }, (_, i) => i * 2 + 1);

    return (
        <>
            {numbers.map((number) => (
                <h1>{number}</h1>
            ))}
        </>
    );
};

const App = () => {
    return (
        <>
            <MultiplicationTable />
        </>
    );
};

export default App;
