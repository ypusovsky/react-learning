import React, {useState} from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [text, setText] = useState('Init text');

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div>
      <h2>{likes}</h2>
      <h2>{text}</h2>
      <input text={text} onChange={event => setText(event.target.value)}/>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
