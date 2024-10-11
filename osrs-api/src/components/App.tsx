import { useEffect, useState } from 'react';
import './App.css';

interface Skills {
    name: string;
    rank: number;
    level: number;
    xp: number;
}

const PlayerData = () => {
    const [playerName, setPlayerName] = useState<string>('');
    const [searchPlayer, setSearchPlayer] = useState<string>('');
    const [playerData, setPlayerData] = useState<Skills[]>([]);

    useEffect(() => {
        const fetchPlayer = async (name: string) => {
            try {
                const response = await fetch(
                    `https://secure.runescape.com/m=hiscore_oldschool/index_lite.json?player=${name}`
                );

                if (response.ok) {
                    const data = await response.json();
                    setPlayerData(data.skills);
                } else {
                    console.error('Failed fetching data');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        if (playerName) {
            fetchPlayer(playerName);
        }
    }, [playerName]);

    return (
        <>
            <h1>old school runescape API</h1>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Gim Nostalg"
                    value={searchPlayer}
                    onChange={(e) => setSearchPlayer(e.target.value)}
                />
                <button onClick={() => setPlayerName(searchPlayer)}>search</button>
            </div>

            <div>
                <h2>personal scores for {playerName}</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Skills</td>
                            <td>Rank</td>
                            <td>Level</td>
                            <td>XP</td>
                        </tr>
                    </thead>
                    <tbody>
                        {playerData.map((p) => (
                            <tr>
                                <td>{p.name}</td>
                                <td>{p.rank}</td>
                                <td>{p.level}</td>
                                <td>{p.xp}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
