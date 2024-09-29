interface MultiplicationTableProps {
    max: number;
}

interface MultiplicationRowProps {
    factor: number;
    max: number;
}

interface HeaderProps {
    max: number;
}

const Header = ({ max }: HeaderProps) => {
    const numbers: number[] = Array.from({ length: max }, (_, i) => i + 1);

    return (
        <thead>
            <tr>
                {numbers.map((number) => (
                    <th key={number}>{number}</th>
                ))}
            </tr>
        </thead>
    );
};

const MultiplicationRow = ({ factor, max }: MultiplicationRowProps) => {
    const numbers: number[] = Array.from({ length: max }, (_, i) => i + 1);

    return (
        <>
            <tr
                style={{
                    backgroundColor: factor % 2 === 0 ? '#505050' : '#323232',
                }}
            >
                {numbers.map((number) => (
                    <td key={number}>{factor * number}</td>
                ))}
            </tr>
        </>
    );
};

const MultiplicationTable = ({ max }: MultiplicationTableProps) => {
    const numbers: number[] = Array.from({ length: max }, (_, i) => i + 1);

    return (
        <table cellPadding="5">
            <Header max={max} />
            <tbody>
                {numbers.map((factor) => (
                    <MultiplicationRow key={factor} factor={factor} max={max} />
                ))}
            </tbody>
        </table>
    );
};

export default MultiplicationTable;
