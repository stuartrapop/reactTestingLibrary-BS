import { useState } from 'react';
import './App.css';

function App() {
const [color, setColor] = useState('red');

const [disabled, setDisabled] = useState(false);

const nextColor = (color === 'red') ? 'blue' : 'red';


const toggleColor = () => {
  if (color === 'red') {
    setColor('blue');
  } else {
    setColor('red');
  }
}




  return (
    <div >
      <button 
        className="button"
        style={{backgroundColor : disabled ? 'grey' : color}} 
        onClick={toggleColor}
        disabled={disabled}
      >
        Change to {nextColor}
      </button>
      <input 
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange= {(e) => setDisabled(e.target.checked)}/>
      <label htmlFor="disable-button-checkbox" >Disable button</label>
        
        
    </div>
  );
}

export default App;
