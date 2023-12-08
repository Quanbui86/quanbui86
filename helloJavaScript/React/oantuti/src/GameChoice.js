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

export default function GameChoice({ onPlayerChoice }) {
  return (
    <>
      <h1 style={{ fontSize: 48, marginTop: 10 }}>Rock Paper Scissors</h1>
      <div className={style.choices}>
        {CHOICES.map((choice) => (
          <button
            key={choice.name}
            onClick={() => onPlayerChoice(choice)}
            aria-label={choice.name}
            className={style.button}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
    </>
  )
}