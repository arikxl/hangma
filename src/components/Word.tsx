type WordProps= { 
    guessedLetters: string[],
    wordToGuess: string
}

export function Word({ guessedLetters , wordToGuess}: WordProps) {


    return <section style={{
        display: 'flex', gap: '0.25rem', fontSize: '6rem',
        fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '30px'
    }}
    >
        {wordToGuess.split("").map((letter, index) => (
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