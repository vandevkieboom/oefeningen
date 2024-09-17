import cherry from './assets/cherry.png';
import lemon from './assets/lemon.png';
import melon from './assets/melon.png';
import prune from './assets/prune.png';
import seven from './assets/seven.png';

const getRandomSlots = (numberOfSlots: number): number[] => {
    const slots: number[] = [];
    for (let i = 0; i < numberOfSlots; i++) {
        slots.push(Math.floor(Math.random() * 5));
    }
    return slots;
};

// const winCondition = (slots: number[]): boolean | undefined => {
//     for (let i = 0; i < slots.length; i++) {
//         if (slots[i] !== slots[0]) {
//             return false;
//         }
//     }
//     return true;
// };

const App = () => {
    const slots: number[] = getRandomSlots(3);

    const slotImages: string[] = [cherry, lemon, melon, prune, seven];

    const winCondition: boolean = slots.every((slot) => slot === slots[0]);

    console.log(winCondition);

    return (
        <>
            {slotImages.map((slot) => (
                <img src={slot} alt="slot image" width="100px" />
            ))}

            <br />

            <p>{winCondition ? 'Je hebt gewonnen' : 'Je hebt verloren'}</p>

            <br />

            {slots.map((slot) => (
                <img src={slotImages[slot]} alt="slot image" width="100px" />
            ))}
        </>
    );
};

export default App;
