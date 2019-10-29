import React from "react";
import "./user-profile.scss";

interface Props {
  image: string;
  name: string;
}

const UserProfile: React.FC<Props> = props => {
  return (
    <div className="user-profile">
      <img src={props.image} alt="logo" className="user-image" />
      <div className="user-name">{props.name}</div>
    </div>
  );
};

export default UserProfile;
