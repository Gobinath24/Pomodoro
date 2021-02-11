import React, {useState, useRef} from 'react';
import './App.css';

function padTime(time)  {
  return time.toString().padStart(2, '0');
}

export default function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [title, setTitle] = useState('Let the  countdown begin!!');
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);
 
  function startTimer() {
    if (intervalRef.current !== null) return;
    setIsRunning(true);
    setTitle('Your doing great!!!');
    intervalRef.current = setInterval(() => {
      setTimeLeft(timeLeft => {
        if(timeLeft >= 1 ) return timeLeft - 1;
        resetTimer();
        return 0;
      });
  }, 1000);
}

  function stopTimer()  {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Keep doing!!!');
    setIsRunning(false);
  }

  function resetTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTitle('Ready Again to finish off');
    setTimeLeft(25 * 60);
    setIsRunning(true);
  }

  const min = padTime(Math.floor(timeLeft / 60));
  const sec = padTime(timeLeft - min * 60);
  return (
    <div className="app">
      <h2>{title}</h2>
        
        <div className='timer'>
          <span>{min}</span>
          <span>:</span>
          <span>{sec}</span>
        </div>
        <div className='buttons'>
          {isRunning && <button onClick={startTimer}>Start</button>}
          {isRunning && <button onClick={stopTimer}>Stop</button>}
          <button onClick={resetTimer}>Reset</button>
        </div>
    </div>
  );
}