import { useEffect, useState } from 'react';

interface Joke {
    id: string;
    joke: string;
}

const DadJoke = () => {
    const [joke, setJoke] = useState<string>('');
    const [newJoke, setNewJoke] = useState<string>('');

    const [favoriteJoke, setFavoriteJoke] = useState<string>(
        localStorage.getItem('favoriteJoke') ?? ''
    );

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://icanhazdadjoke.com/`, {
                headers: {
                    Accept: 'application/json',
                },
            });
            const data: Joke = await response.json();
            setJoke(data.joke);
        };
        fetchData();
    }, [newJoke]);

    const handleSetFavorite = () => {
        localStorage.setItem('favoriteJoke', joke);
        setFavoriteJoke(joke);
    };

    console.log(joke);
    return (
        <>
            <div>
                <h2>Random joke:</h2>
                <p>{joke}</p>
                <button onClick={handleSetFavorite}>Set as favorite</button>
                <button onClick={() => setNewJoke(joke)}>New joke</button>
            </div>

            <div>
                <h2>Favorite joke:</h2>
                <p>{favoriteJoke}</p>
            </div>
        </>
    );
};

export default DadJoke;
