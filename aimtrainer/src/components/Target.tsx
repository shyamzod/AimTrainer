import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { TargetNature, TargetSize } from "../store/atoms/mainState";

interface TargetProps {
  IncreaseCount: (count: number) => void;
  CurrentCount: number;
  Start: () => void;
}

export default function Target({
  IncreaseCount,
  CurrentCount,
  Start,
}: TargetProps) {
  const [xPos, SetXPos] = useState(400);
  const [yPos, SetYPos] = useState(700);
  const [timerStarted, SetTimerStarted] = useState(false);
  const targetnature = useRecoilValue(TargetNature);
  const [targetsize, SetTargetSize] = useRecoilState(TargetSize);
  function RefreshTarget() {
    SetXPos(Math.floor(Math.random() * 600 + 50));
    SetYPos(Math.floor(Math.random() * 1200 + 50));
    if (!timerStarted) {
      Start();
      SetTimerStarted(true);
    }
    if (targetnature == "dynamic") {
      SetTargetSize(Math.floor(Math.random() * 100) + 50);
    }
    IncreaseCount(CurrentCount + 1);
  }

  return (
    <div
      className="w-20 h-20 rounded-full"
      style={{
        position: "absolute",
        top: `${xPos}px`,
        left: `${yPos}px`,
        background:
          "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(139,0,0,1) 100%)",
        boxShadow: "inset 0 0 10px rgba(0,0,0,0.5), 0 5px 15px rgba(0,0,0,0.5)",
        width: `${targetsize}px`,
        height: `${targetsize}px`,
      }}
      onClick={RefreshTarget}
    ></div>
  );
}
