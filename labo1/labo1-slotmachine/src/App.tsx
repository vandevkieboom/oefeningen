import cherry from './assets/cherry.png';
import lemon from './assets/lemon.png';
import melon from './assets/melon.png';
import prune from './assets/prune.png';
import seven from './assets/seven.png';

const App = () => {
    const slot1: number = Math.floor(Math.random() * 5);
    const slot2: number = Math.floor(Math.random() * 5);
    const slot3: number = Math.floor(Math.random() * 5);

    const winCondition: boolean = slot1 === slot2 && slot2 === slot3;

    const slotImages: string[] = [cherry, lemon, melon, prune, seven];

    return (
        <>
            <img src={cherry} alt="cherry" width="100px" />
            <img src={lemon} alt="lemon" width="100px" />
            <img src={melon} alt="melon" width="100px" />
            <img src={prune} alt="prune" width="100px" />
            <img src={seven} alt="seven" width="100px" />

            <br />

            {winCondition ? 'Je hebt gewonnen' : 'Je hebt verloren'}

            <br />

            <img src={slotImages[slot1]} width="100px" />
            <img src={slotImages[slot2]} width="100px" />
            <img src={slotImages[slot3]} width="100px" />
        </>
    );
};

export default App;
