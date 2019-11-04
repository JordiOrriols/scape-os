import React from "react";
import "./desktop-dock.scss";

import { applications } from "../../apps/apps";

interface Props {
}

const DesktopDock: React.FC<Props> = () => {

    return (
        <div className={"dock"} >
            <ul>
                {
                    applications.map(app => <li id={app.id} key={app.id}>
                        <a>
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
