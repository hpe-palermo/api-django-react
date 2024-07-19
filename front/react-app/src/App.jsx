import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');

  function getColor() {
    const URL = 'http://127.0.0.1:8000/get-color/';

    fetch(URL)
      .then(response => response.json())
      .then(data => setColor(data.color))
      .catch(error => console.log("Error fetching color:", error));
  }

  return (
    <div className="App">
      <input
        type="text"
        placeholder='This color is:'
        readOnly
        value={color}
      />
      <button onClick={getColor}>GET</button>
    </div>
  );
}

export default App;
