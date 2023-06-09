import { useState } from 'react';
import './App.css'

export default function MyName () {
    const [text, setText] = useState("");
  function handleClick() {
    setText("Tarisya ❤️");
  }
  return (
    <>
      <h1>{text}</h1>
      <button className="button" onClick={handleClick}>Click me!</button>
    </>
  );
}