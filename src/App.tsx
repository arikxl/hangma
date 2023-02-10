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
  );

  const isLose = incorrectLetters.length >= 6;
  const isWin = wordToGuess.split("").every(letter => guessedLetters.includes(letter));
  const refresh = () => window.location.reload()

  const addGuessedLetters = useCallback((letter: string) => {

    if (guessedLetters.includes(letter) || isLose || isWin) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter]);
  }, [guessedLetters, isWin, isLose])

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
      <h3 className="msg">
      {isWin && "You Won!"}
      {isLose && "Try Again!"}
      </h3>
      <Drawing numberOfGuesses={incorrectLetters.length} />
      <Word guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={ isLose} />
      <div style={{ alignSelf: 'stretch', marginBottom: '20px' }}>
        <Keyboard activeLetters={guessedLetters.filter(letter =>
          wordToGuess.includes(letter))} inactiveLetters={incorrectLetters}
          addGuessedLetters={addGuessedLetters}
        isEndGame = {isWin || isLose}/>
      </div>
      <button onClick={refresh} className="playBtn">Play again</button>
    </main>
  )
}

export default App
