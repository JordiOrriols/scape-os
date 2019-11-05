import React, { useState } from "react";
import "./desktop.scss";
import DesktopHeader from "../../components/desktop-header/desktop-header";
import DesktopDock from "../../components/desktop-dock/desktop-dock";
import { App } from "../../data/apps/apps";
import { User } from "../../data/users/users";

interface Props {
  user: User;
  logout(): void;
}

const Desktop: React.FC<Props> = (props) => {

  const [openedApps, setOpenedApps] = useState<App[]>([]);

  const openApp = (app: App) => {
    if (openedApps.indexOf(app) === -1) setOpenedApps([...openedApps, app])
  }

  const closeApp = (app: App) => () => {
    if (openedApps.indexOf(app) !== -1) setOpenedApps(openedApps.filter(openedApp => openedApp !== app))
  }

  return (
    <div id="page" className={"vis"}>
      <DesktopHeader user={props.user} logout={props.logout}></DesktopHeader>
      <DesktopDock openedApps={openedApps} openApp={openApp}></DesktopDock>
      <div className="window-space">
        {openedApps.map(app => app.window({ onClose: closeApp(app) }))}
      </div>

    </div>
  );
};

export default Desktop;
