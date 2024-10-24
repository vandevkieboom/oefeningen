import { useEffect, useState } from 'react';
import { MoonLoader, HashLoader, ClipLoader } from 'react-spinners';
import styles from '../LeagueOfLegends.module.css';

interface IChampions {
  id: number;
  name: string;
  title: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    loading: string;
  };
  tags: string[];
}

const LeagueOfLegends = () => {
  const [champions, setChampions] = useState<IChampions[]>([]);
  const [searchChampion, setSearchChampion] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const filteredChampions = champions.filter((champion) => champion.name.toUpperCase().startsWith(searchChampion));

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const fetchData = async () => {
        let url = 'https://sampleapis.assimilate.be/lol/champions';
        let response = await fetch(url);

        if (!response.ok) {
          console.log('error fetching data');
        }

        let data: IChampions[] = await response.json();
        const shuffledChampions = data.sort(() => 0.5 - Math.random());
        setChampions(shuffledChampions);
        setLoading(false);
      };
      fetchData();
    }, 1000);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <h1>League Of Legends</h1>
        <input id="search" type="text" onChange={(e) => setSearchChampion(e.target.value.toUpperCase())}></input>
      </div>

      {loading ? (
        <div className={styles.loading}>
          <ClipLoader color="#FFF" size={100} />
        </div>
      ) : (
        <div className={styles.championgrid}>
          {filteredChampions.map((champion) => (
            <img
              key={champion.id}
              src={champion.image.loading}
              alt={champion.name}
              onClick={() =>
                alert(`name: ${champion.name}\nrole: ${champion.tags}\ndifficulty: ${champion.info.difficulty}`)
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default LeagueOfLegends;
