import { useState } from 'react'
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

  return (
    <main className="App">
      <h3>lose win</h3>
      <Drawing numberOfGuesses={ incorrectLetters.length }   />
      <Word guessedLetters={guessedLetters} wordToGuess={wordToGuess } />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard />
      </div>
    </main>
  )
}

export default App
