import React, { useState } from "react";
import "./App.scss";
import Login from "./routes/login/login";
import Desktop from "./routes/desktop/desktop";
import { User, users } from "./data/users/users";

const App: React.FC = () => {

  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  return (
    <div className="App">
      {
        currentUser ?
          <Desktop user={currentUser} logout={() => setCurrentUser(undefined)}></Desktop>
          :
          <Login users={users} onLogin={setCurrentUser}></Login>
      }
    </div>
  );
};

export default App;
