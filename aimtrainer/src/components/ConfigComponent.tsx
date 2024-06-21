import { useState } from "react";
import { timeLimit } from "../store/atoms/mainState";
import { useSetRecoilState } from "recoil";

export default function ConfigComponent() {
  const [istimerdynamic, TimerNatureToggle] = useState(false);
  const SetTimerLimit = useSetRecoilState(timeLimit);
  return (
    <div className="flex justify-center items-center">
      <div className="text-white">
        <div className=" flex flex-row space-x-5 items-center">
          <label>Timer in Seconds</label>
          {!istimerdynamic ? (
            <div className="flex flex-row space-x-5">
              <div>
                <input
                  type="radio"
                  value="30"
                  name="timerradio"
                  onChange={(e) => {
                    if (e.target.checked) {
                      SetTimerLimit(30);
                    }
                  }}
                ></input>
                <label>30</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="60"
                  name="timerradio"
                  onChange={(e) => {
                    if (e.target.checked) {
                      SetTimerLimit(60);
                    }
                  }}
                ></input>
                <label>60</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="120"
                  name="timerradio"
                  onChange={(e) => {
                    if (e.target.checked) {
                      SetTimerLimit(120);
                    }
                  }}
                ></input>
                <label>120</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="dynamic"
                  name="timerradio"
                  onClick={() => {
                    TimerNatureToggle(!istimerdynamic);
                  }}
                ></input>
                <label>Custom</label>
              </div>
            </div>
          ) : (
            <div className="flex flex-row space-x-5 items-center">
              <input
                className="border border-black rounded-md px-1 py-1 text-black"
                type="number"
                placeholder="Enter time in seconds"
              ></input>
              <div>
                <input
                  type="radio"
                  value="dynamic"
                  name="timerradio"
                  onClick={() => {
                    TimerNatureToggle(!istimerdynamic);
                  }}
                ></input>
                <label>Static</label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
