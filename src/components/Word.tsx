export function Word() {

    const word = 'arik';
    const guessedLetters = ["i",];

    return <section style={{
        display: 'flex', gap: '0.25rem', fontSize: '6rem',
        fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '30px'
    }}
    >
        {word.split("").map((letter, index) => (
            <span style={{ borderBottom: '.1em solid black' , minWidth: '60px', textAlign: 'center' }} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) ? 'visible' : 'hidden'
                }}>
                    {letter}
                </span>

            </span>
        ))}
    </section>
}