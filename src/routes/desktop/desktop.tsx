import React from "react";
import "./login.scss";
import { User } from "../../App";

interface Props{
    user: User;
}

const Desktop: React.FC<Props> = (props) => {

  return (
    <div className="App">
        Welcome {props.user.name}
    </div>
  );
};

export default Desktop;
