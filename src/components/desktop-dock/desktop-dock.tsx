import React from "react";
import "./desktop-dock.scss";

import FinderIcon from "./FinderIcon.png";
import LaunchpadIcon from "./launchPad.png";
import MissionControlIcon from "./expose.png";
import AppstoreIcon from "./appstore.png";
import SafariIcon from "./Safari.png";
import IchatIcon from "./ichat.png";
import FacetimeIcon from "./facetime.png";
import AddressIcon from "./address.png";
import PreviewIcon from "./preview.png";
import ITunesIcon from "./iTunes.png";
import PreferencesIcon from "./preferences.png";
import TrashIcon from "./trash.png";

interface Props {
}

interface App {
    id: string;
    name: string;
    src: string;
}
const applications: App[] = [
    { id: 'finder', name: 'Finder', src: FinderIcon },
    { id: 'launchPad', name: 'Launchpad', src: LaunchpadIcon },
    { id: 'mission-control', name: 'Mission Control', src: MissionControlIcon },
    { id: 'appStore', name: 'App Store', src: AppstoreIcon },
    { id: 'safari', name: 'Safari', src: SafariIcon },
    { id: 'iChat', name: 'iChat', src: IchatIcon },
    { id: 'facetime', name: 'FaceTime', src: FacetimeIcon },
    { id: 'addressBook', name: 'Address Book', src: AddressIcon },
    { id: 'preview', name: 'Preview', src: PreviewIcon },
    { id: 'iTunes', name: 'iTunes', src: ITunesIcon },
    { id: 'preferences', name: 'System Preferences', src: PreferencesIcon },
    { id: 'trash', name: 'Trash', src: TrashIcon }
];

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
