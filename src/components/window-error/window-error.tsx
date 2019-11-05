
import { Window, TitleBar, Text } from 'react-desktop/macOs';

import React from "react";
import AppWindow from '../window/window';

interface Props {
  title: string;
  text: string;
  onClose(): void;
}

const ErrorWindow: React.FC<Props> = props => {
  return (
    <AppWindow title={props.title} text={props.text} onClose={props.onClose}    >
    </AppWindow>
  );
};

export default ErrorWindow;