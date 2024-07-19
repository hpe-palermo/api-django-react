import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [inputColor, setInputColor] = useState('');

  function getColor() {
    const URL = 'http://127.0.0.1:8000/get-color/';

    fetch(URL)
      .then(response => response.json())
      .then(data => setColor(data.color))
      .catch(error => console.log("Error fetching color:", error));
  }

  function postColor() {
    const URL = 'http://127.0.0.1:8000/post-color/';
    const data = { color: inputColor || 'yellow' };

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => setColor(data.color))
      .catch(error => console.log("Error fetching color:", error));
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder='Enter color'
        value={inputColor}
        onChange={(e) => setInputColor(e.target.value)}
      />
      <button onClick={getColor}>GET</button>
      <button onClick={postColor}>POST</button>
      <input
        type="text"
        placeholder='This color is:'
        readOnly
        value={color || ''}
      />
    </div>
  );
}

export default App;
