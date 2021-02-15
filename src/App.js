import { useState } from 'react';
import './App.css';

function App() {
const [color, setColor] = useState('red');

const [disabled, setDisabled] = useState(false);

const toggleColor = () => {
  if (color === 'red') {
    setColor('blue');
  } else {
    setColor('red');
  }
}


let buttonText;
if (color === 'red') {
  buttonText = 'Change to blue';
} else {
  buttonText = 'Change to red';
}

  return (
    <div >
      <button 
        className="button"
        style={{backgroundColor : color}} 
        onClick={toggleColor}
        disabled={disabled}
      >
        {buttonText}
      </button>
      <input 
        onChange= {(e) => setDisabled(e.target.checked)}
        type="checkbox"
        />
    </div>
  );
}

export default App;
