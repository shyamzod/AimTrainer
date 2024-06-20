import { useState } from "react";

export default function Target({ IncreaseCount, CurrentCount, Start }) {
  const [xPos, SetXPos] = useState(400);
  const [YPos, SetYPos] = useState(700);
  const [timerStarted, SetTimerStarted] = useState(false);

  function RefreshTarget() {
    SetXPos(Math.floor(Math.random() * 650 + 50));
    SetYPos(Math.floor(Math.random() * 1300 + 50));
    if (!timerStarted) {
      Start();
      SetTimerStarted(true);
    }
    IncreaseCount(CurrentCount + 1);
  }
  return (
    <div
      className="w-10 h-10 rounded-full"
      style={{
        position: "absolute",
        top: `${xPos}px`,
        left: `${YPos}px`,
        background:
          "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(139,0,0,1) 100%)",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.5), 0 5px 15px rgba(0,0,0,0.5)",
      }}
      onClick={RefreshTarget}
    ></div>
  );
}
