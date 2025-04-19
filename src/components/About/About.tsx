import React from "react";

function About() {


    return (
        <>
        <div className="flex flex-col items-center justify-center p-20">

            <div className="inline-block  w-[440px] align-top bg-[#8a5a34] border-4 border-[#b88d5b] rounded-[10px] font-serif shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-10 n-txt-box md:w-90% md:text-base md:my-2">
                <h2 className="text-[2.2em] leading-[1.1]">Adapte</h2>
                <text>Explore um cenário sci-fi corrompido por resíduos tóxicos e estruturas esquecidas. 
                    Cada arma oferece sinergias únicas e altera sua mobilidade, 
                    forçando você a adaptar seu estilo de combate para enfrentar os desafios do ambiente hostil.</text>
            </div>
            <div className="inline-block w-[440px] align-top bg-[#8a5a34] border-4 border-[#b88d5b] rounded-[10px] font-serif shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-10 n-txt-box md:w-90% md:text-base md:my-2">
                <h2 className="text-[2.2em] leading-[1.1]">Lute</h2>
                <text>O combate é fluido e estratégico, com trocas constantes de estilos que aumentam a intensidade da ação. 
                    Cada troca de arma não só muda suas habilidades, mas também maximiza seu dano, 
                    recompensando quem dominar a variedade de movimentos e ataques.</text>
            </div>
            <div className="inline-block w-[440px] align-top bg-[#8a5a34] border-4 border-[#b88d5b] rounded-[10px] font-serif shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-10 n-txt-box md:w-90% md:text-base md:my-2">
                <h2 className="text-[2.2em] leading-[1.1]">Supere</h2>
                <text>Os bosses são controlados por uma inteligência artificial adaptativa, 
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