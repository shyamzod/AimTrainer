import { useState, useEffect } from "react";
import "./App.css";
import Target from "./components/Target";
import NameComponent from "./components/NameComponent";
import { useRecoilValue } from "recoil";
import { timeLimit } from "./store/atoms/mainState";
function App() {
  const time = useRecoilValue(timeLimit);
  const [count, SetCount] = useState(0);
  const [remainingSeconds, SetTime] = useState(time);
  const [timerStarted, SetTimerStarted] = useState(false);
  const [NameInput, SetNameInput] = useState("");

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (timerStarted && remainingSeconds > 0) {
      timer = setInterval(() => {
        SetTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingSeconds === 0) {
      if (timer) clearInterval(timer);
    }

    return () => {
      if (timer) clearInterval(timer); // Cleanup interval on component unmount
    };
  }, [timerStarted, remainingSeconds]);

  const startTimer = () => {
    if (!timerStarted) {
      SetTimerStarted(true);
    }
  };

  return (
    <div>
      {NameInput === "" ? (
        <div>
          <NameComponent SetName={SetNameInput} />
        </div>
      ) : (
        <div>
          <div className="flex flex-row justify-between px-48 bg-black text-white py-4 text-lg">
            <div>Score: {count}</div>
            <div>Name: {NameInput}</div>
            <div>Time: {remainingSeconds}</div>
          </div>
          {remainingSeconds > 0 ? (
            !timerStarted ? (
              <div className="flex justify-center items-center mt-48">
                <button
                  className="flex items-center justify-center bg-green-800 px-10 text-white py-2 rounded-md"
                  onClick={startTimer}
                >
                  Start
                </button>
              </div>
            ) : (
              <Target
                IncreaseCount={SetCount}
                CurrentCount={count}
                Start={startTimer}
              />
            )
          ) : (
            <div className="flex flex-col justify-center items-center space-y-2 mt-48">
              <label className="text-white text-2xl">
                Your Score is {count}
              </label>
              <button
                className="bg-red-800 px-2 text-white py-1 rounded-md"
                onClick={() => {
                  SetTime(time);
                  SetCount(0);
                  SetTimerStarted(false); // Ensure timer starts fresh
                }}
              >
                Restart
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
