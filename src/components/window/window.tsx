
import { Window, TitleBar, Text } from 'react-desktop/macOs';
import Draggable from 'react-draggable';
import React from "react";

interface Props {
  title: string;
  text: string;
  onClose(): void;
}

const AppWindow: React.FC<Props> = props => {
  return (
    <Draggable
      bounds={'parent'}
      defaultPosition={{ x: 0, y: 0 }}
      scale={1}
    >
      <Window
        chrome
        width="300px"
        height="100px"
        padding="10px"
      >
        <TitleBar title={props.title} controls onCloseClick={props.onClose} />
        <Text>{props.text}</Text>
      </Window>
    </Draggable>

  );
};

export default AppWindow;