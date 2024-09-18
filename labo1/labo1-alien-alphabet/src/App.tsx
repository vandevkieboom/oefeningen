const App = () => {
    const alphabet: string[] = Array.from({ length: 26 }, (_, i) =>
        String.fromCharCode(65 + i)
    );

    const alphabetImages: string[] = [];

    for (let i = 0; i < alphabet.length; i++) {
        alphabetImages.push(
            `https://raw.githubusercontent.com/slimmii/alien-alphabet/master/${alphabet[i]}.png`
        );
    }

    return (
        <>
            {alphabetImages.map((alphabetImage) => (
                <button>
                    <img src={alphabetImage} alt="alphabet image" width="100" />
                </button>
            ))}
        </>
    );
};

export default App;
