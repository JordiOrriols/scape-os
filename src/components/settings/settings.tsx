import React, { useState } from "react";
import AppWindow from "../window/window";
import "./settings.scss";
import UIfx from 'uifx';
const mp3File = require('./siren.mp3');

const alarm = new UIfx(
  mp3File,
  {
    volume: 0.4, // number between 0.0 ~ 1.0
    throttleMs: 100
  }
)

interface Props {
  title: string;
  text: string;
  onClose(): void;
}

const SettingsWindow: React.FC<Props> = props => {

  const [disableAttempts, setDisableAttempts] = useState<number[]>([]);

  return <AppWindow height="500px" width="300px" padding="10px" title={props.title} onClose={props.onClose}>

    <div className="settings-container">

      <h3>Disable security system</h3>

      {[1, 2, 3, 4].map((num) =>
        (<div key={num}>
          <h5>Disable Zone {num}</h5>
          <label className="switch" onClick={() => {

            if (disableAttempts.length === 0 || disableAttempts.filter((attempt => attempt > Date.now() - 6000)).length === 0) {
              alarm.play();

              const newDisabled = [...disableAttempts, Date.now()];
              setDisableAttempts(newDisabled);
            }
          }
          }
          >
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>)
      )}
    </div>


  </AppWindow>;
};

export default SettingsWindow;
