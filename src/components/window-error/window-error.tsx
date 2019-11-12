import React from "react";
import AppWindow from "../window/window";

interface Props {
    title: string;
    text: string;
    onClose(): void;
}

const ErrorWindow: React.FC<Props> = props => {
    return <AppWindow height="100px" width="300px" padding="10px" title={props.title} onClose={props.onClose}>{props.text}</AppWindow>;
};

export default ErrorWindow;
