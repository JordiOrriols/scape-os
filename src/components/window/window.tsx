import { Window, TitleBar } from "react-desktop/macOs";
import Draggable from "react-draggable";
import React from "react";

interface Props {
    height: string;
    width: string;
    padding: string;
    title: string;
    onClose(): void;
}

const AppWindow: React.FC<Props> = props => {
    return (
        <Draggable bounds=".window-space" defaultPosition={{ x: 0, y: 0 }} scale={1}>
            <Window chrome width={props.width} height={props.height} padding={props.padding}>
                <TitleBar title={props.title} controls onCloseClick={props.onClose} />
                {props.children}
            </Window>
        </Draggable>
    );
};

export default AppWindow;
