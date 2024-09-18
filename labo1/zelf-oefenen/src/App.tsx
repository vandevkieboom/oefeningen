const MultiplicationTable = () => {
    const numbers: number[][] = Array.from({ length: 10 }, (_, rowIndex) =>
        Array.from(
            { length: 10 },
            (_, colIndex) => (rowIndex + 1) * (colIndex + 1)
        )
    );

    return (
        <>
            <table cellPadding="5">
                <tbody>
                    {numbers.map((row) => (
                        <tr>
                            {row.map((cell) => (
                                <td>{cell}</td>
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
