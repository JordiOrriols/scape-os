
import { Window, TitleBar, Text } from 'react-desktop/macOs';

import React from "react";

interface Props {
  title: string;
  text: string;
}

const AppWindow: React.FC<Props> = props => {
  return (
    <Window
        chrome
        width="300px"
        height="100px"
        padding="10px"
      >
        <TitleBar title={props.title} controls onCloseClick={() => alert('close')}/>
        <Text>{props.text}</Text>
      </Window>
  );
};

export default AppWindow;