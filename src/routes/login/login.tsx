import React, { useState } from "react";
import "./login.scss";
import UserProfile from "../../components/user-profile/user-profile";
import UserPassword from "../../components/user-password/user-password";
import { User } from "../../data/users/users";

interface Props {
    users: User[];
    onLogin(user: User): void;
}

const Login: React.FC<Props> = (props) => {

    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

    const [failedAttempts, setFailedAttempts] = useState<number[]>([]);

    const fiveMinutes = 5 * 60 * 1000;

    const cleanFailedAfterFiveMinutes = () => {
        setTimeout(() => {
            setFailedAttempts([]);
        }, fiveMinutes);
    }

    return (
        <div className="login">
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
                failed={() => {
                    const newFailed = [...failedAttempts, Date.now()];
                    setFailedAttempts(newFailed)
                    if (newFailed.length > 4) cleanFailedAfterFiveMinutes();
                }}
                success={() => { if (currentUser) props.onLogin(currentUser) }}
                blocked={
                    failedAttempts.length > 4
                }
            ></UserPassword>
        </div>
    );
};

export default Login;
