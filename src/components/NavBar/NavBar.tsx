import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    const menuItems = [
        { name: "Home", path: "/" },
        { name: "News", path: "/news" },
        { name: "About", path: "/about" },
        { name: "Credits", path: "/credits" },
    ];

    const renderMenuItems = (items) => {
        return items.map(({ name, path }) => (
            <li key={name}>
                <NavLink
                    to={path}
                    className={({ isActive }) => `
                        bg-[#a87547] py-2 px-3 mx-0.5 border border-[#5b3924] text-[#fce6b5] 
                        uppercase font-bold cursor-pointer clip-path-[polygon(10%_0%,_90%_0%,_100%_50%,_90%_100%,_10%_100%,_0%_50%)] 
                        whitespace-nowrap flex-shrink min-w-0 hover:bg-[#c78b56] 
                        ${isActive ? "bg-[#d9a869] text-[#fff2cc]" : ""}
                    `}
                >
                    {name}
                </NavLink>
            </li>
        ));
    };

    return (
        <nav className="inline-flex items-center bg-[#8a5a34] border-4 border-[#b88d5b] rounded-lg p-1 px-2.5 font-serif shadow-lg">
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
