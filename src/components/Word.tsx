type WordProps= { 
    guessedLetters: string[],
    wordToGuess: string,
    reveal? : boolean
}

export function Word({ reveal =false, guessedLetters , wordToGuess}: WordProps) {


    return <section style={{
        display: 'flex', gap: '0.25rem', fontSize: '6rem',
        fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '30px'
    }}
    >
        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom: '.1em solid black' , minWidth: '80px', textAlign: 'center' }} key={index}>
                <span style={{
                    visibility: guessedLetters.includes(letter) || reveal
                        ? 'visible' : 'hidden',
                    color: !guessedLetters.includes(letter) && reveal ? "red" : "inherit"
                }}>
                    {letter}
                </span>

            </span>
        ))}
    </section>
}