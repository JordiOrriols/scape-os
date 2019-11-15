import React from "react";
import AppWindow from "../window/window";
import "./settings.scss";
import UIfx from 'uifx';
const mp3File = require('./siren.mp3') ;

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

  return <AppWindow height="100px" width="300px" padding="10px" title={props.title} onClose={props.onClose}>

    <label className="switch" onClick={() => alarm.play()}>
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>

    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>

    <label className="switch">
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>

  </AppWindow>;
};

export default SettingsWindow;
