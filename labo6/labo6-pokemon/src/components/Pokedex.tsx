import { useEffect, useState } from 'react';

interface PokedexProps {
    initialLimit: number;
}

interface Pokemon {
    name: string;
    url: string;
}

const Pokedex = ({ initialLimit = 151 }: PokedexProps) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [limit, setLimit] = useState<number>(initialLimit);
    const [newLimit, setNewLimit] = useState<number>(initialLimit);

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
            let data = await response.json();
            setPokemons(data.results);
        };
        fetchData();
    }, [newLimit]);

    const handleClick = () => {
        setNewLimit(limit);
    };

    return (
        <>
            <input type="text" onChange={(e) => setSearchText(e.target.value)}></input>
            {pokemons
                .filter((pokemon) =>
                    pokemon.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
                )
                .map((pokemon) => (
                    <p>{pokemon.name}</p>
                ))}

            <input type="number" onChange={(e) => setLimit(parseInt(e.target.value))}></input>
            <button onClick={handleClick}>Set Limit</button>
        </>
    );
};

export default Pokedex;
