import React from "react";

function News() {

    
    return( 
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="inline-flex flex-col items-center justify-center mt-10 [background-color:#3b2a1a] [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:6px_6px] [background-repeat:repeat]  border-4 border-yellow-700 rounded-md p-4 px-10 shadow-md w-[440px] ">
            <h1 className="text-[2.2em] leading-[1.1] pb-10 pt-10  text-yellow-100 " style={{ fontFamily:  "'Garamond', serif"}}>0.0.2</h1>
            <text className="text-[#D4BF9C]"style={{ fontFamily:   "'Garamond', serif"}}>Decisão das tecnologias a serem usadas e começo da documentação</text>
          </div>
          <div className="inline-flex flex-col items-center justify-center m-10 [background-color:#3b2a1a] [background-image:radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:6px_6px] [background-repeat:repeat]  border-4 border-yellow-700 rounded-md p-4 px-10 shadow-md w-[440px] ">
          <h1 className="text-[2.2em] leading-[1.1] pb-10 pt-10  text-yellow-100 " style={{ fontFamily:  "'Garamond', serif"}}>0.0.1</h1>
          <text className="text-[#D4BF9C]"style={{ fontFamily:   "'Garamond', serif"}}>Brainstorm de story line, estilo artístico e mecânicas de gameplay</text>
        </div>
        </div>
    </>
    );
  }
  
  export default News;