import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const menuItems = [
        { name: "HOME", path: "/" },
        { name: "NEWS", path: "/news" },
        { name: "ABOUT", path: "/about" },
        { name: "CREDITS", path: "/credits" },
    ];

    const renderMenuItems = (items) => {
        return items.map(({ name, path }) => (
            <li key={name}>
                <NavLink
                    to={path}
                    className={({ isActive }) => `
                       px-4 m-1 py-2 border-2 border-yellow-700 rounded-md font-semibold bg-[#5c4033] text-yellow-100 hover:bg-yellow-70
                        ${isActive ? "bg-yellow-700 text-[#fff2cc]" : ""}
                    `}
                >
                    {name}
                </NavLink>
            </li>
        ));
    };

    return (
        <nav className="inline-flex mt-6 gap-3 border-4 border-yellow-600 rounded-lg px-6 py-3 shadow-lg text-white [background-color:#3b2a1a] [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:6px_6px] [background-repeat:repeat]" style={{ fontFamily:  "'IM Fell English SC', serif"}}>

            <ul className="flex list-none m-0 p-0 flex-1 justify-center items-center whitespace-nowrap min-w-0">
                {renderMenuItems(menuItems.slice(0, 2))}

                <div className="bg-[url('../assets/Scythe.png')] bg-center bg-contain w-[60px] h-[60px] mx-2 text-[16px] font-bold text-[#fd0000] flex items-center justify-center">
                    <NavLink to="https://store.steampowered.com/?l=portuguese">BUY</NavLink>
                </div>

                {renderMenuItems(menuItems.slice(2))}
            </ul>
        </nav>
    );
};

export default NavBar;
