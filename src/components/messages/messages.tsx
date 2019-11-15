
import React from "react";
import AppWindow from "../window/window";
import "./messages.scss";

interface Props {
    title: string;
    onClose(): void;
}

const Messages: React.FC<Props> = props => {
    return <AppWindow height="450px" width="800px" padding="none" title={props.title} onClose={props.onClose}>

        <div className="messages-container">
            <div className="left">
                <div className="top">
                    <input type="text" placeholder="Search" />
                    <a href="javascript:;" className="search"></a>
                </div>
                <ul className="people">
                    <li className="person" data-chat="person1">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
                        <span className="name">Thomas Bangalter</span>
                        <span className="time">2:09 PM</span>
                        <span className="preview">I was wondering...</span>
                    </li>
                    <li className="person" data-chat="person2">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png" alt="" />
                        <span className="name">Vladimir Bets</span>
                        <span className="time">1:44 PM</span>
                        <span className="preview">I've forgotten how it felt before</span>
                    </li>
                    <li className="person" data-chat="person3">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg" alt="" />
                        <span className="name">Nikolai Korotov</span>
                        <span className="time">2:09 PM</span>
                        <span className="preview">But we’re probably gonna need a new carpet.</span>
                    </li>
                    <li className="person" data-chat="person4">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt="" />
                        <span className="name">Aleksandr Luriya</span>
                        <span className="time">2:09 PM</span>
                        <span className="preview">It’s not that bad...</span>
                    </li>
                    <li className="person" data-chat="person5">
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/michael-jordan.jpg" alt="" />
                        <span className="name">Leonid Rogozov</span>
                        <span className="time">2:09 PM</span>
                        <span className="preview">Wasup for the third time like is
you blind bitch</span>
                    </li>
                </ul>
            </div>
            <div className="right">
                <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
                <div className="chat active-chat" data-chat="person1">
                    <div className="conversation-start">
                        <span>Today, 6:48 AM</span>
                    </div>
                    <div className="bubble you">
                        Hello,
                </div>
                    <div className="bubble you">
                        it's me.
                </div>
                    <div className="bubble you">
                        I was wondering...
                </div>
                </div>
                <div className="write">
                    <a href="javascript:;" className="write-link attach"></a>
                    <input type="text" />
                    <a href="javascript:;" className="write-link smiley"></a>
                    <a href="javascript:;" className="write-link send"></a>
                </div>
            </div>
        </div>
    </AppWindow>;
};

export default Messages;
