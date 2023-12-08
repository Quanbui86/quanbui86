import React, { useState } from "react";
import style from './Game.module.css';
import GameChoice from "./GameChoice";
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
    let index = CHOICES.findIndex((e)=>e.name === choice.name)
    const codeyChoice = CHOICES[(index-1)];
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
      <GameChoice onPlayerChoice={handlePlayerChoice}/>
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
