import React from "react";
import './Credits.css';

function Credits() {


    return(
        <>
            <div className="inline-block w-[440px] align-top bg-[#8a5a34] border-4 border-[#b88d5b] rounded-[10px] font-serif shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-10 n-txt-box md:w-90% md:text-base md:my-2">
                <h2 className="text-[2.2em] leading-[1.1]">Créditos</h2>
                <header className="h-[52px] pl-5 pr-5 pt-3 text-[#d6ffe4] mt-[-5px] z-2 relative text-[150%]">
                    <h3>
                        <b>
                            <center>
                            Desenvolvimento
                            </center>
                        </b>
                    </h3>
                </header>
                <header className="p-[10px_15px] overflow-hidden text-[#f6ffe3] text-[120%]">
                    <h4>
                        <center>
                            Kaue Orlandini
                        </center>
                    </h4>
                </header>
                
                <header className="h-[52px] pl-5 pr-5 pt-3 text-[#d6ffe4] mt-[-5px] z-2 relative text-[150%]">
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

                <header className="h-[52px] pl-5 pr-5 pt-3 text-[#d6ffe4] mt-[-5px] z-2 relative text-[150%]">
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