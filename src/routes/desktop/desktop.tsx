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

  return (
    <div id="page" className={"vis"}>
      <DesktopHeader user={props.user} logout={props.logout}></DesktopHeader>
      <DesktopDock openedApps={openedApps} openApp={(app: App) => setOpenedApps([...openedApps, app])}></DesktopDock>
      {openedApps.map(app => app.window)}
    </div>
  );
};

export default Desktop;
