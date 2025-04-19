import React from "react";

function Home() {

    return (
    <>
      <div className="inline-flex flex-col items-center justify-center m-10 [background-color:#3b2a1a] [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:6px_6px] [background-repeat:repeat]  border-4 border-yellow-700 rounded-md " >
        <div className=" p-4 px-10 shadow-md w-[440px] font-serif inline-block  ">
          <h2 className="text-[2.2em] leading-[1.1] pb-10 pt-10  text-yellow-100 " style={{ fontFamily:  "'Garamond', serif"}}>Adapte. Lute. Supere.</h2>
          <text className="text-[#D4BF9C]"style={{ fontFamily:   "'Garamond', serif"}} >Em um futuro onde a tecnologia entrou em colapso e o mundo se tornou um campo de teste abandonado, 
                  a sobrevivência exige mais do que força — exige adaptação.
                  Este metroidvania solo se passa em um cenário sci-fi corrompido por resíduos tóxicos e estruturas esquecidas.
                  A progressão é construída em torno de combate fluido e estratégico.
                  Cada arma oferece sinergias únicas e altera sua mobilidade, forçando você a pensar em movimento.
                  A troca constante entre estilos de combate não só mantém a ação intensa, 
                  como aumenta seu dano com um sistema de multiplicadores que recompensa jogadores que dominam a variedade.
                  Os bosses são controlados por uma inteligência artificial adaptativa, 
                  que aprende com seu estilo de jogo e se ajusta a cada derrota. A cada vez que você falhar, 
                  eles se tornam mais desafiadores, forçando você a se reinventar para superá-los.
                  Você não está sozinho nesse lugar.
            </text>
          </div>
        </div>
    </>
  )
}

export default Home;