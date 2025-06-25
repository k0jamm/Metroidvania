import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const menuItens = [
    { name: "Home", path: "/" },
    { name: "News", path: "/news" },
    { name: "Midia", path: "/midia"},
    { name: "Wiki", path: "/wiki"},
    { name: "About", path: "/about" },
    { name: "Credits", path: "/credits" },
];

return (
    <nav className="nav-bar">
        <div className="nav-end left-end" />
        <ul className="nav-items">
            {menuItens.slice(0, 3).map(({ name, path}) => (
                <li key={name}>
                    <NavLink
                        to={path}
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
                <div className="nav-buy">
                    <NavLink to="https://store.steampowered.com/?l=portuguese" style={({color: "white"})}>BUY</NavLink>
                    {/* https://store.steampowered.com/?l=portuguese */}
                </div>
            {menuItens.slice(3).map(({ name, path}) => (
                <li key={name}>
                    <NavLink
                        to={path}
                        className={({ isActive }) =>
                            `nav-item ${isActive ? "active" : ""}`
                        }
                        >
                            {name}
                        </NavLink>
                    </li>
                ))}
        </ul>
        <div className="nav-end right-end" />
    </nav>
    );
};

export default NavBar;