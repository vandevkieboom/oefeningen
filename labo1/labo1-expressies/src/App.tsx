const som = (a: number, b: number): number => {
    return a + b;
};

const multiply = (a: number, b: number): number => {
    return a * b;
};

const App = () => {
    const random: number = Math.random();
    const number1: number = Math.floor(Math.random() * 11);
    const number2: number = Math.floor(Math.random() * 11);

    return (
        <>
            <p>Random: {random}</p>
            <p>Number 1: {number1}</p>
            <p>Number 2: {number2}</p>
            <p>
                {number1} + {number2} = {som(number1, number2)}
            </p>
            <p>
                {number1} * {number2} = {multiply(number1, number2)}
            </p>
            <p>
                {random > 0.5
                    ? multiply(number1, number2)
                    : som(number1, number2)}
            </p>
        </>
    );
};

export default App;
