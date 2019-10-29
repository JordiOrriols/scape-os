import React, { useState } from "react";
import "./App.scss";
import doctorOne from "./doctor-one.jpg";
import doctorTwo from "./doctor-two.jpg";
import doctorThree from "./doctor-three.jpg";
import UserProfile from "./components/user-profile/user-profile";

import UserPassword from "./components/user-password/user-password";

export interface User {
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

  const [failedAttempts, setFailedAttempts] = useState<number[]>([]);

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
      <UserPassword
        user={currentUser}
        goBack={() => setCurrentUser(undefined)}
        failed={() => setFailedAttempts([...failedAttempts, Date.now()])}
        blocked={
          failedAttempts.filter(date => Date.now() - date < 5 * 60 * 1000)
            .length > 4
        }
      ></UserPassword>
    </div>
  );
};

export default App;
