import SlotMachine from './SlotMachine';

const App = () => {
    return (
        <>
            <SlotMachine slots={4} />
            <SlotMachine slots={5} />
            <SlotMachine slots={6} />
        </>
    );
};

export default App;
