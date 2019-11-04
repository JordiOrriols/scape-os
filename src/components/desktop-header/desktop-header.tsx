import React from "react";
import "./desktop-header.scss";
import { User } from "../../App";

interface Props {
    user: User;
}

const DesktopHeader: React.FC<Props> = (props) => {

    return (
        <header id="head" className={"vis"}>
            <nav id="menu">
                <ul>
                    <li className="apple">
                        <a href="#all">Apple</a>
                        <ul className="sublist">
                            <li><a href="#about-this-mac" data-rel="show">About This Mac</a></li>
                            <li>Software Updates...</li>
                            <li>App Store...</li>
                            <li className="divider"></li>
                            <li>System Preferences...</li>
                            <li>Dock
            	<span className="arrow"></span>
                                <ul className="sublist-menu">
                                    <li>Turn Hiding Off</li>
                                    <li>Turn Magnification Off</li>
                                    <li className="divider"></li>
                                    <li>Position on Left</li>
                                    <li>Position on Bottom</li>
                                    <li>Position on Right</li>
                                    <li className="divider"></li>
                                    <li>Dock Preferences...</li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li>Recent Items
            	<span className="arrow"></span>
                                <ul className="sublist-menu">
                                    <li className="disable">Applications</li>
                                    <li className="divider"></li>
                                    <li className="disable">Documents</li>
                                    <li className="divider"></li>
                                    <li className="disable">Servers</li>
                                    <li className="divider"></li>
                                    <li>Clear Menu</li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li>Force Quit...</li>
                            <li className="divider"></li>
                            <li>Sleep</li>
                            <li>Restart...</li>
                            <li>Shut Down...</li>
                            <li className="divider"></li>
                            <li>Log Out...</li>
                        </ul>
                    </li>
                    <li className="here">
                        <a href="#all">Finder</a>
                        <ul className="sublist">
                            <li><a href="#finder" data-rel="show">About Finder</a></li>
                            <li className="divider"></li>
                            <li>Preferences...</li>
                            <li className="divider"></li>
                            <li>Secure Empty Trash...</li>
                            <li className="divider"></li>
                            <li>Services
            	<span className="arrow"></span>
                                <ul className="sublist-menu">
                                    <li className="disable">No Services Apply</li>
                                    <li>Services Preferences...</li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li>Hide Finder</li>
                            <li>Hide Others</li>
                            <li className="disable">Show All</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#all">File</a>
                        <ul className="sublist">
                            <li>New Finder Window</li>
                            <li>New Folder</li>
                            <li className="disable">New Folder with Selection</li>
                            <li>New Smart Folder</li>
                            <li>New Burn Folder</li>
                            <li className="disable">Open</li>
                            <li className="disable">Open With
            	<span className="arrow"></span>
                            </li>
                            <li className="disable">Print</li>
                            <li className="disable">Close Window</li>
                            <li className="divider"></li>
                            <li>Get Info</li>
                            <li className="divider"></li>
                            <li className="disable">Compress</li>
                            <li className="divider"></li>
                            <li className="disable">Duplicate</li>
                            <li className="disable">Make Alias</li>
                            <li className="disable">Quick Look</li>
                            <li className="disable">Show Original</li>
                            <li className="disable">Add to Sidebar</li>
                            <li className="divider"></li>
                            <li className="disable">Move to Trash</li>
                            <li className="disable">Eject</li>
                            <li>Burn "Desktop" to Disc...</li>
                            <li className="divider"></li>
                            <li>Find</li>
                            <li className="divider"></li>
                            <li className="disable">Label:</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#all">Edit</a>
                        <ul className="sublist">
                            <li className="disable">Undo</li>
                            <li className="disable">Redo</li>
                            <li className="divider"></li>
                            <li className="disable">Cut</li>
                            <li className="disable">Copy</li>
                            <li className="disable">Paste</li>
                            <li>Select All</li>
                            <li className="divider"></li>
                            <li>Show Clipboard</li>
                            <li className="divider"></li>
                            <li>Special Characters...</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#all">View</a>
                        <ul className="sublist">
                            <li className="disable">as Icons</li>
                            <li className="disable">as List</li>
                            <li className="disable">as Columns</li>
                            <li className="disable">as Cover Flow</li>
                            <li className="divider"></li>
                            <li>Clean Up</li>
                            <li>Clean Up By
            	<span className="arrow"></span>
                                <ul className="sublist-menu">
                                    <li>Name</li>
                                    <li>Kind</li>
                                    <li>Date Modified</li>
                                    <li>Date Created</li>
                                    <li>Size</li>
                                    <li>Label</li>
                                </ul>
                            </li>
                            <li>Sort By
            	<span className="arrow"></span>
                                <ul className="sublist-menu">
                                    <li>None</li>
                                    <li className="divider"></li>
                                    <li>Snap to Grid</li>
                                    <li className="divider"></li>
                                    <li>Name</li>
                                    <li>Kind</li>
                                    <li>Date Last Opened</li>
                                    <li>Date Added</li>
                                    <li>Date Modified</li>
                                    <li>Date Created</li>
                                    <li>Size</li>
                                    <li>Label</li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li className="disable">Hide Path Bar</li>
                            <li className="disable">Hide Status Bar</li>
                            <li className="disable">Hide Sidebar</li>
                            <li className="divider"></li>
                            <li className="disable">Toolbar</li>
                            <li className="disable">Customize Toolbar...</li>
                            <li className="divider"></li>
                            <li>Show View Options...</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#all">Go</a>
                        <ul className="sublist">
                            <li className="disable">Back</li>
                            <li className="disable">Forward</li>
                            <li>Enclosing Folder</li>
                            <li className="divider"></li>
                            <li>All My Files</li>
                            <li>Documents</li>
                            <li>Desktop</li>
                            <li>Downloads</li>
                            <li>Home</li>
                            <li>Computer</li>
                            <li>AirDrop</li>
                            <li>Network</li>
                            <li>Applications</li>
                            <li>Utilities</li>
                            <li className="divider"></li>
                            <li>Recent Folders
            	<span className="arrow"></span>
                                <ul className="sublist-menu">
                                    <li>2012-01-10</li>
                                    <li>Archieves</li>
                                    <li>buildFiles</li>
                                    <li>MyProjects</li>
                                    <li>XCode_iPhone</li>
                                    <li className="divider"></li>
                                    <li>Clear Menu</li>
                                </ul>
                            </li>
                            <li className="divider"></li>
                            <li>Go to Folder...</li>
                            <li>Connect to Server...</li>
                        </ul>
                    </li>
                    <li>
                        <a href="#all">Window</a>
                        <ul className="sublist">
                            <li className="disable">Minimize</li>
                            <li className="disable">Zoom</li>
                            <li className="disable">Cycle Through Windows</li>
                            <li className="divider"></li>
                            <li>Bring All to Front</li>
                        </ul>
                    </li>
                    <li><a href="#all">Help</a></li>
                </ul>
            </nav>
            <nav id="menu-dx">
                <ul>
                    <li className="wireless">
                        <a href="#all">Wireless</a>
                    </li>
                    <li className="time">
                        <ul>
                            <li id="DateAbbr"> </li>
                            <li className="hour"> </li>
                            <li className="point">:</li>
                            <li className="mins"> </li>
                        </ul>
                    </li>
                    <li className="username">
                        <a href="#all">{props.user.name}</a>
                    </li>
                </ul>
            </nav>
        </header>

    );
};

export default DesktopHeader;
