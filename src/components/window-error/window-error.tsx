
import { Window, TitleBar, Text } from 'react-desktop/macOs';

import React from "react";

interface Props {
  title: string;
  text: string;
  onClose(): void;
}

const ErrorWindow: React.FC<Props> = props => {
  return (
    <Window
        chrome
        width="300px"
        height="100px"
        padding="10px"
      >
        <TitleBar title={props.title} controls onCloseClick={props.onClose}/>
        <Text>{props.text}</Text>
      </Window>
  );
};

export default ErrorWindow;