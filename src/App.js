import React, {useState} from 'react';
import './App.css';

function padTime(time)  {
  return time.toString().padStart(2, '0');
}

let interval = null;

// clearInterval(interval);//This is the code help to stop the interval

export default function App() {
  //Seting a title to display in the text
  const[title] = useState('Let the Pomodoro begin!!');
  const [timeLeft, setTimeLeft] = useState(10); 
  //This display 25 minutes and 60 sec

  function startTimer() {
    //help for decrement the time
    interval = setInterval(() =>{
      setTimeLeft(timeLeft => {
        if(timeLeft >= 1)
        return timeLeft - 1;
        //  reset the timer
        return 0;
      });
    }, 1000);
  }

  function stopTimer()  {
    console.log(interval);
    clearInterval(interval);
  }

  const minutes = padTime(Math.floor(timeLeft / 60)); 
  //Here math.floor is to roundoff the divided element
  const seconds = padTime(timeLeft - minutes * 60);
  //padStart work only for string


  return (
    <div className="app">
      <h2>{title}</h2><br/>
        
        <div className='timer'>
          <span>{minutes}</span>
          <span>:</span>
          <span>{seconds}</span>
        </div>
        <div className='buttons'>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button>Reset</button>
        </div>
    </div>
  );
}