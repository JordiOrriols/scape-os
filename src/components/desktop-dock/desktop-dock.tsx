import React from "react";
import "./desktop-dock.scss";

import { applications, App } from "../../apps/apps";

interface Props {
    openApp(app: App): void;
}

const DesktopDock: React.FC<Props> = (props) => {

    return (
        <div className={"dock"} >
            <ul>
                {
                    applications.map(app => <li id={app.id} key={app.id}>
                        <a href="#" onClick={() => props.openApp(app)}>
                            <em><span>{app.name}</span></em>
                            <img src={app.src} alt={app.name} />
                        </a>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

export default DesktopDock;
