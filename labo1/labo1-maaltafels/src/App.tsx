const MultiplicationTable = () => {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

    return (
        <>
            <table cellPadding="5">
                <tbody>
                    {numbers.map((row) => (
                        <tr key={row}>
                            {numbers.map((col) => (
                                <td key={col}>{row * col}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
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
