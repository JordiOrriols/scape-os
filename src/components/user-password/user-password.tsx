import React, { useState } from "react";
import { ReactComponent as ArrowBack } from "./arrowback.svg";
import "./user-password.scss";
import { User } from "../../data/users/users";

interface Props {
    user?: User;
    goBack(): void;
    success(): void;
    failed(): void;
    blocked: boolean;
}

const UserPassword: React.FC<Props> = props => {
    const [input, setInput] = useState("");

    return (
        <div className="user-password-container">
            {props.blocked ? (
                <div className="user-blocked">Account blocked. Try again in 5 minutes...</div>
            ) : props.user ? (
                <React.Fragment>
                    <div className="user-password">
                        <div className="user-back" onClick={props.goBack}>
                            <ArrowBack></ArrowBack>
                        </div>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            autoFocus
                            onChange={() => {}}
                            onKeyDown={event => {
                                if (event.keyCode === 13) {
                                    if (props.user && input === props.user.password) {
                                        props.success();
                                    } else {
                                        setInput("");
                                        props.failed();
                                    }
                                }
                            }}
                            value={input}
                            onInput={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
                        ></input>
                        <div className="user-space"></div>
                    </div>
                    <div className="user-remark">Touch ID or Enter Password</div>
                </React.Fragment>
            ) : null}
        </div>
    );
};

export default UserPassword;
