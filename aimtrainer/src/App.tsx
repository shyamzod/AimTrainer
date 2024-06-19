import { useState, useEffect } from "react";
import "./App.css";
import Target from "./components/Target";

function App() {
  const [count, SetCount] = useState(0);
  const [remainingSeconds, SetTime] = useState(60);
  const [timerStarted, SetTimerStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (timerStarted && remainingSeconds > 0) {
      timer = setInterval(() => {
        SetTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingSeconds === 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [timerStarted, remainingSeconds]);

  const startTimer = () => {
    if (!timerStarted) {
      SetTimerStarted(true);
    }
  };

  return (
    <div>
      <div>
        <div>Score : {count}</div>
        <div>Time : {remainingSeconds}</div>
      </div>
      <Target
        IncreaseCount={SetCount}
        CurrentCount={count}
        Start={startTimer}
      />
    </div>
  );
}

export default App;
