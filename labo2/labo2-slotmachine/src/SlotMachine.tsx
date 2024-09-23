import cherry from './assets/cherry.png';
import lemon from './assets/lemon.png';
import melon from './assets/melon.png';
import prune from './assets/prune.png';
import seven from './assets/seven.png';

const slotImages: string[] = [cherry, lemon, melon, prune, seven];

interface SlotMachineProps {
    slots: number;
}

interface SlotProps {
    value: number;
}

const getRandomSlots = (numberOfSlots: number): number[] => {
    const slotsArr: number[] = [];
    for (let i = 0; i < numberOfSlots; i++) {
        slotsArr.push(Math.floor(Math.random() * 5));
    }
    return slotsArr;
};

const SlotMachine = ({ slots }: SlotMachineProps) => {
    const slotsArr: number[] = getRandomSlots(slots);
    const winCondition: boolean = slotsArr.every(
        (slot) => slot === slotsArr[0]
    );

    return (
        <>
            {slotsArr.map((slot) => (
                <Slot value={slot} />
            ))}

            <p>{winCondition ? 'Je hebt gewonnen' : 'Je hebt verloren'}</p>
        </>
    );
};

const Slot = ({ value }: SlotProps) => {
    return <img src={slotImages[value]} alt="slot" width="100" />;
};

export default SlotMachine;
