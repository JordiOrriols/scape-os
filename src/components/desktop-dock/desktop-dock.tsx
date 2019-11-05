import React from "react";
import "./desktop-dock.scss";

import { applications, App } from "../../apps/apps";

interface Props {
    openedApps: App[];
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
                            {props.openedApps.indexOf(app) !== -1 ? <div className="dot"></div> : null}
                        </a>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

export default DesktopDock;
