import React from "react";

function Credits() {


    return(
        <>
            <div className="inline-flex flex-col items-center justify-center mt-10 [background-color:#3b2a1a] [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:6px_6px] [background-repeat:repeat]  border-4 border-yellow-700 rounded-md p-4 px-10 shadow-md w-[440px] ">
                <h1 className="text-[2.2em] leading-[1.1] pb-10 pt-10  text-yellow-100 " style={{ fontFamily:  "'Garamond', serif"}}>CRÉDITOS</h1>
                <div className="p-10">
                    <h3 className="text-[1.9em] leading-[1.1] mb-2 text-[#BACEE2]" style={{ fontFamily:  "'Garamond', serif"}}>Desenvolvimento</h3>
                    <h4 className="text-[1em] leading-[1.1]   text-[#99c2eb]" style={{ fontFamily:  "'Garamond', serif"}}>Kaue Orlandini</h4>
                </div>
                  
                <div className="p-10">
                    <h3 className="text-[1.9em] leading-[1.1] mb-2 text-[#BACEE2]" >Desenvolvimento</h3>
                    <h4 className="text-[1em] leading-[1.1]   text-[#99c2eb]" style={{ fontFamily:  "'Garamond', serif"}}>Kaue Orlandini</h4>
                </div>

                <div className="p-10">
                    <h3 className="text-[1.9em] leading-[1.1] mb-2 text-[#BACEE2]" >Design Artístico</h3>
                    <h4 className="text-[1em] leading-[1.1]   text-[#99c2eb]" style={{ fontFamily:  "'Garamond', serif"}}>Matheus "Mega" Chagas</h4>
                    <h4 className="text-[1em] leading-[1.1]   text-[#99c2eb]" style={{ fontFamily:  "'Garamond', serif"}}>Maria Júlia "Majuks" Raposo</h4>
                </div>

                <div className="p-10">
                    <h3 className="text-[1.9em] leading-[1.1] mb-2 text-[#BACEE2]" >Roteiro de Personagens</h3>
                    <h4 className="text-[1em] leading-[1.1]   text-[#99c2eb]" style={{ fontFamily:  "'Garamond', serif"}}> Igor "Rodi" Rodrigues </h4>
                </div>
            </div>
            
        </>
    );
}

export default Credits;