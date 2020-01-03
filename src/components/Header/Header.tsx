import React, {useState} from "react";
import './Header.scss';
import {Link} from "react-router-dom";

enum Tab {
    WORK,
    ABOUT
}

export const Header = () => {
    const [activeTab, setActiveTab] = useState(Tab.WORK);

    const getClassNameForTab = (tab: Tab): string => {
        return `Header__tab ${activeTab === tab && 'Header__tab--active'}`;
    };

    return <header className="Header">
        <nav>
            <input className="Header__menu-button" type="checkbox" id="menu-button"/>
            <label className="Header__menu-icon" htmlFor="menu-button"><span/></label>
            <ul className="Header__nav-sub">
                <Link onClick={() => setActiveTab(Tab.WORK)} className="Header__logo" style={{zIndex: 1000}}
                      to={'/'}/>
                <li className={getClassNameForTab(Tab.WORK)}>
                    <Link onClick={() => setActiveTab(Tab.WORK)} to={'/'}>Work</Link>
                </li>
                <li className={getClassNameForTab(Tab.ABOUT)}>
                    <Link onClick={() => setActiveTab(Tab.ABOUT)} to="/about">About</Link>
                </li>
            </ul>
        </nav>
    </header>
};