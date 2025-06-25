import React from "react";
import { NavLink } from "react-router-dom";
import './Wiki.css';

function Wiki() {

    return (
        <>
            <div className="w-box-pd"> </div>
                <div className="w-txt-box">
                    <div className="inside-pd"></div>
                    <div className="red-wiki">
                    <NavLink to="https://darksouls.fandom.com/wiki/Dark_Souls_Wiki" style={({color: "white"})} >Ir para Wiki</NavLink>
                    </div>
                </div>

            
        </>
    )
}

export default Wiki;