import React, { useState } from "react";
import style from './Game.module.css';
const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];
const choiceStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 40
};
const emojiStyles = {
  fontSize: 64,
  marginRight: 20
};
const nameStyle = {
  margin: 0,
  fontSize: 24,
  color: '#ffff'
};
const resultStyle = {
  marginTop: 40,
  fontSize: 48,
  color: '#ffff'
};
function Game() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);

  function handlePlayerChoice(choice) {
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
    } else {
      setResult("You lose!");
    }
  }

  function resetGame() {
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  return (
    <div className={style.container}>
      <h1 style={{fontSize: 48, marginTop: 10}}>Rock Paper Scissors</h1>
      <div className={style.choices}>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
            className={style.button}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div className={style.results}>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{playerChoice.emoji}</span>
            <p style={nameStyle}>You chose {playerChoice.name}</p>
          </div>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{codeyChoice.emoji}</span>
            <p style={nameStyle}>The computer chose {codeyChoice.name}</p>
          </div>
          <h2 style={resultStyle} >{result}</h2>
          <button onClick={resetGame} className={style.button}>Play again</button>
        </div>
      )}
    </div>
  );
}

export default Game;
