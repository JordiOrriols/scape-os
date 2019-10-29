import React from "react";
import "./user-password.scss";

interface Props {
  goBack: () => void;
}

const UserPassword: React.FC<Props> = props => {
  return (
    <div className="user-password">
      <div className="user-back" onClick={props.goBack}>
        <Arrow></Arrow>
      </div>
      <input type="password" placeholder="Enter Password"></input>
      <div className="user-space"></div>
    </div>
  );
};

export default UserPassword;
