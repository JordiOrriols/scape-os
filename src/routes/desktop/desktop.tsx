import React, { useState } from "react";
import "./desktop.scss";
import { User } from "../../App";
import DesktopHeader from "../../components/desktop-header/desktop-header";
import DesktopDock from "../../components/desktop-dock/desktop-dock";
import { App } from "../../apps/apps";

interface Props {
  user: User;
  logout(): void;
}

const Desktop: React.FC<Props> = (props) => {

  const [openedApps, setOpenedApps] = useState<App[]>([]);

  const openApp = (app: App) => {
    if (openedApps.indexOf(app) === -1) setOpenedApps([...openedApps, app])
  }

  return (
    <div id="page" className={"vis"}>
      <DesktopHeader user={props.user} logout={props.logout}></DesktopHeader>
      <DesktopDock openedApps={openedApps} openApp={openApp}></DesktopDock>
      {openedApps.map(app => app.window)}
    </div>
  );
};

export default Desktop;
