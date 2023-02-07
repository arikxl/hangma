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

  return (
    <main className="App">
      <h3>lose win</h3>
      <Drawing />
      {/* <Word /> */}
      {/* <Keyboard /> */}
    </main>
  )
}

export default App
