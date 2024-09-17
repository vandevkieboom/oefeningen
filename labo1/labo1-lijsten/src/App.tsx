interface Student {
    id: number;
    name: string;
    age: number;
}

const App = () => {
    const numbers: number[] = [1, 2, 3, 4, 1, 1];

    const students: Student[] = [
        { id: 0, name: 'Jef', age: 30 },
        { id: 1, name: 'Jan', age: 34 },
        { id: 2, name: 'Joris', age: 22 },
        { id: 3, name: 'Andie', age: 45 },
        { id: 4, name: 'Senne', age: 35 },
    ];

    return (
        <>
            <h1>Labo1: Lijsten</h1>
            <h3>Getallenlijst</h3>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>

            <h3>Studentenlijst</h3>
            <ol>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ol>

            <h3>Studentenlijst met J</h3>
            <ol>
                {students
                    .filter((student) => student.name.startsWith('J'))
                    .map((student) => (
                        <li key={student.id}>{student.name}</li>
                    ))}
            </ol>

            <h3>Select</h3>
            <select>
                {students.map((student) => (
                    <option>{student.name}</option>
                ))}
            </select>

            <h3>Table</h3>
            <table>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default App;
