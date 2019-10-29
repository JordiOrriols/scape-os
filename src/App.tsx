import React, { useState } from "react";
import "./App.scss";
import doctorOne from "./doctor-one.jpg";
import doctorTwo from "./doctor-two.jpg";
import doctorThree from "./doctor-three.jpg";
import UserProfile from "./components/user-profile/user-profile";

import Arrow from "material-design-icons/navigation/svg/production/ic_arrow_back_36px.svg";

interface User {
  name: string;
  image: string;
  password: string;
}

const users: User[] = [
  { name: "Doctor Mike", image: doctorOne, password: "1234" },
  { name: "Evil Gerard", image: doctorTwo, password: "4321" },
  { name: "Pamplinas", image: doctorThree, password: "1221" }
];

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  return (
    <div className="App">
      <div className="user-list">
        {users.map(user =>
          currentUser === user || !currentUser ? (
            <div key={user.name} onClick={() => setCurrentUser(user)}>
              <UserProfile image={user.image} name={user.name}></UserProfile>
            </div>
          ) : null
        )}
      </div>
      {currentUser ? (
        <div className="user-password">
          <div className="user-back" onClick={() => setCurrentUser(undefined)}>
            <Arrow></Arrow>
          </div>
          <input type="password" placeholder="Enter Password"></input>
          <div className="user-space"></div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
