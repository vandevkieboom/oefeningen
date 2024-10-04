import React, { useState } from 'react';

interface Student {
    name: string;
    age: number;
    year: number;
}

const Filtering = () => {
    const [searchText, setSearchText] = useState('');
    const [sortField, setSortField] = useState('name');

    const students: Student[] = [
        { name: 'Jacob', age: 21, year: 2 },
        { name: 'Jan', age: 20, year: 1 },
        { name: 'Joris', age: 22, year: 3 },
        { name: 'Korneel', age: 22, year: 3 },
        { name: 'Mathias', age: 23, year: 3 },
        { name: 'Muhammad', age: 20, year: 1 },
        { name: 'Perneel', age: 22, year: 3 },
        { name: 'Piet', age: 21, year: 2 },
    ];

    const sortedStudents = students.sort((a, b) => {
        switch (sortField) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'age':
                return a.age - b.age;
            case 'year':
                return a.age - b.age;
            default:
                return 0;
        }
    });

    console.log(sortedStudents);

    return (
        <>
            <label htmlFor="search">Search: </label>
            <input
                type="search"
                name="search"
                id="search"
                onChange={(event) => setSearchText(event.target.value)}
            />

            <table>
                <thead>
                    <tr>
                        <th onClick={() => setSortField('name')}>Name</th>
                        <th onClick={() => setSortField('age')}>Age</th>
                        <th onClick={() => setSortField('year')}>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedStudents
                        .filter((student) =>
                            student.name.toLowerCase().startsWith(searchText.toLowerCase())
                        )
                        .map((student, index) => (
                            <tr
                                style={{
                                    backgroundColor: index % 2 === 0 ? '#ffffff01' : '#ffffff12',
                                }}
                            >
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.year}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default Filtering;
