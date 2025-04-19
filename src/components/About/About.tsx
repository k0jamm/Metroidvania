import React from "react";

function About() {


    return (
        <>
        <div className="flex flex-col items-center justify-center">

            <div className="inline-flex flex-col items-center justify-center mt-10 [background-color:#3b2a1a] [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:6px_6px] [background-repeat:repeat]  border-4 border-yellow-700 rounded-md p-4 px-10 shadow-md w-[440px] ">
               <h1 className="text-[2.2em] leading-[1.1] pb-10 pt-10  text-yellow-100 " style={{ fontFamily:  "'Garamond', serif"}}>Adapte</h1>
                <text className="text-[#D4BF9C]"style={{ fontFamily:   "'Garamond', serif"}}>Explore um cenário sci-fi corrompido por resíduos tóxicos e estruturas esquecidas. 
                    Cada arma oferece sinergias únicas e altera sua mobilidade, 
                    forçando você a adaptar seu estilo de combate para enfrentar os desafios do ambiente hostil.</text>
            </div>
            <div className="inline-flex flex-col items-center justify-center mt-10 [background-color:#3b2a1a] [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:6px_6px] [background-repeat:repeat]  border-4 border-yellow-700 rounded-md p-4 px-10 shadow-md w-[440px] ">
               <h1 className="text-[2.2em] leading-[1.1] pb-10 pt-10  text-yellow-100 " style={{ fontFamily:  "'Garamond', serif"}}>Lute</h1>
                <text className="text-[#D4BF9C]"style={{ fontFamily:   "'Garamond', serif"}}>O combate é fluido e estratégico, com trocas constantes de estilos que aumentam a intensidade da ação. 
                    Cada troca de arma não só muda suas habilidades, mas também maximiza seu dano, 
                    recompensando quem dominar a variedade de movimentos e ataques.</text>
            </div>
            <div className="inline-flex flex-col items-center justify-center mt-10 [background-color:#3b2a1a] [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:6px_6px] [background-repeat:repeat]  border-4 border-yellow-700 rounded-md p-4 px-10 shadow-md w-[440px] ">
               <h1 className="text-[2.2em] leading-[1.1] pb-10 pt-10  text-yellow-100 " style={{ fontFamily:  "'Garamond', serif"}}>Supere</h1>
                <text className="text-[#D4BF9C]"style={{ fontFamily:   "'Garamond', serif"}}>Os bosses são controlados por uma inteligência artificial adaptativa, 
                    que se modifica de acordo com o seu estilo de jogo. 
                    Cada derrota traz um novo desafio, 
                    já que os inimigos aprendem com suas falhas e ajustam suas estratégias, 
                    forçando você a se superar a cada confronto.</text>
            </div>
        </div>
        </>
    )
}

export default About;