import React from "react";
import './Credits.css';

function Credits() {


    return(
        <>
            <div className="c-box-pd"></div>
            <div className="c-txt-box">
                <h2>Créditos</h2>
                <header className="carg">
                    <h3>
                        <b>
                            <center>
                            Desenvolvimento
                            </center>
                        </b>
                    </h3>
                </header>
                <header className="carg-nome">
                    <h4>
                        <center>
                            Kaue Orlandini
                        </center>
                    </h4>
                </header>
                
                <header className="carg">
                    <h3>
                        <b>
                            <center>
                                Design Artístico
                            </center>
                        </b>
                    </h3>
                </header>
                <header className="carg-nome">
                    <h4>
                        <center>
                            Matheus "Mega" Chagas
                        </center>
                    </h4>
                </header>

                <header className="carg">
                    <h3>
                        <b>
                            <center>
                                Roteiro de Personagens
                            </center>
                        </b>
                    </h3>
                </header>
                <header className="carg-nome">
                    <h4>
                        <center>
                            Igor "Rodi" Rodrigues 
                        </center>
                    </h4>
                </header>
            </div>
            
        </>
    );
}

export default Credits;