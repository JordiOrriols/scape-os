import React, { useState } from "react";
import "./App.scss";
import doctorOne from "./doctor-one.jpg";
import doctorTwo from "./doctor-two.jpg";
import doctorThree from "./doctor-three.jpg";
import Login from "./routes/login/login";
import Desktop from "./routes/desktop/desktop";

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

  return (
    currentUser?
    <Desktop user={currentUser}></Desktop>
    :
    <Login users={users} onLogin={setCurrentUser}></Login>
  );
};

export default App;
