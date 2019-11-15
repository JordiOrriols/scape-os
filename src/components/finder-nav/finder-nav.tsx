
import React from "react";
import "./finder-nav.scss";

interface Props {

}

const FinderNav: React.FC<Props> = props => {
    return (
        <div className="pane pane-sm sidebar">
            <nav className="nav-group">
                <h5 className="nav-group-title">Favorites</h5>
                <span className="nav-group-item">
                    <span className="icon icon-download"></span>
                    Downloads
          </span>
                <span className="nav-group-item active">
                    <span className="icon icon-folder"></span>
                    Documents
          </span>
                <span className="nav-group-item">
                    <span className="icon icon-signal"></span>
                    AirPlay
          </span>
                <span className="nav-group-item">
                    <span className="icon icon-print"></span>
                    Applications
          </span>
                <span className="nav-group-item">
                    <span className="icon icon-cloud"></span>
                    Desktop
          </span>
            </nav>


            <nav className="nav-group">
                <h5 className="nav-group-title">Tags</h5>
                <span className="nav-group-item">
                    <span className="icon icon-record" style={{ color: '#fc605b' }}></span>
                    Red
          </span>
                <span className="nav-group-item" >
                    <span className="icon icon-record" style={{ color: '#fdbc40' }}></span>
                    Orange
          </span>
                <span className="nav-group-item" >
                    <span className="icon icon-record" style={{ color: '#34c84a' }} ></span>
                    Green
          </span>
                <span className="nav-group-item">
                    <span className="icon icon-record" style={{ color: '#57acf5' }}></span>
                    Blue
          </span>
            </nav>
            <nav className="nav-group">
                <h5 className="nav-group-title">Devices</h5>
                <span className="nav-group-item">
                    <span className="icon icon-drive"></span>
                    External PenDrive
          </span>
            </nav>
        </div>
    );
};

export default FinderNav;


