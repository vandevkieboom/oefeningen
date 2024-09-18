const App = () => {
    const colors = Array.from(
        { length: 100 },
        (_, i) => `hsl(${(i * 360) / 100}, 100%, 50%)`
    );

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
            }}
        >
            {colors.map((color) => (
                <div
                    style={{
                        width: '100%',
                        height: '4px',
                        backgroundColor: color,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default App;
