import { useEffect, useState } from 'react';
import './App.css';

interface Item {
    id: number;
    name: string;
    description: string;
    icon: string;
    current: {
        price: number;
    };
}

const PlayerData = () => {
    const [letter, setLetter] = useState<string>('');
    const [playerData, setPlayerData] = useState<Item[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    useEffect(() => {
        const fetchItems = async () => {
            if (!letter) return;

            try {
                const response = await fetch(
                    `https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=1&alpha=${letter}&page=${page}`
                );

                if (response.ok) {
                    const data = await response.json();
                    setPlayerData(data.items);
                    setTotalPages(Math.ceil(data.total / 12));

                    console.log('Fetched items:', data.items);

                    const searchItemByName = data.items.find(
                        (item: Item) => item.name.toLowerCase() === 'dragon'
                    );

                    if (searchItemByName) {
                        console.log('Found item:', searchItemByName);
                    } else {
                        console.log('Item "Chaos rune" not found in fetched data.');
                    }
                } else {
                    console.error('Failed fetching data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchItems();
    }, [letter, page]);

    return (
        <>
            <h1>old school runescape item search</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="enter a letter"
                    value={letter}
                    onChange={(e) => {
                        setLetter(e.target.value);
                        setPage(1);
                    }}
                    maxLength={1}
                />
                <button onClick={() => setPage(1)}>Search</button>
            </div>

            <div className="player-data">
                {playerData.length > 0 ? (
                    playerData.map((item) => (
                        <div key={item.id} className="item">
                            <img src={item.icon} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>Price: {item.current.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </div>

            <div className="pagination">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    Previous
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
};

const App = () => {
    return (
        <>
            <PlayerData />
        </>
    );
};

export default App;
