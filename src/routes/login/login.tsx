import React, { useState } from "react";
import "./login.scss";
import UserProfile from "../../components/user-profile/user-profile";
import UserPassword from "../../components/user-password/user-password";
import { User } from "../../App";

interface Props{
    users: User[];
    onLogin(user: User): void;
}

const Login: React.FC<Props> = (props) => {

  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  const [failedAttempts, setFailedAttempts] = useState<number[]>([]);

  return (
    <div className="App">
      <div className="user-list">
        {props.users.map(user =>
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

export default Login;
