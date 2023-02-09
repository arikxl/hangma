import { useCallback, useEffect, useState } from 'react'
import { Drawing } from './components/Drawing';
import { Keyboard } from './components/Keyboard';
import { Word } from './components/Word';
import words from './data/words.json'


function App() {

  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[~~(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const addGuessedLetters = useCallback((letter: string) => {

    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetters(key);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters])

  return (
    <main className="App">
      <h3>lose win</h3>
      <Drawing numberOfGuesses={incorrectLetters.length} />
      <Word guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard activeLetters={guessedLetters.filter(letter =>
          wordToGuess.includes(letter))} inactiveLetters={incorrectLetters}
          addGuessedLetters={addGuessedLetters} />
      </div>
    </main>
  )
}

export default App
