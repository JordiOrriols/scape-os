import React from "react";
import "./desktop.scss";
import { User } from "../../App";
import DesktopHeader from "../../components/desktop-header/desktop-header";
import DesktopDock from "../../components/desktop-dock/desktop-dock";

interface Props {
  user: User;
}

const Desktop: React.FC<Props> = (props) => {

  return (
    <div id="page" className={"vis"}>
      <DesktopHeader user={props.user}></DesktopHeader>
      <DesktopDock></DesktopDock>

    </div>
  );
};

export default Desktop;
