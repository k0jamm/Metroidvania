import React from "react";

function News() {

    
    return( 
    <>
      <div className="flex flex-col items-center justify-center p-20">
        <div className="inline-block h-[200px] w-[440px] align-top bg-[#8a5a34] border-4 border-[#b88d5b] rounded-[10px] font-serif shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-10 n-txt-box md:w-90% md:text-base md:my-2">
            <h1 className="text-[2.2em] leading-[1.1]">0.0.2</h1>
            <text>Decisão das tecnologias a serem usadas e começo da documentação</text>
          </div>
        <div className="inline-block h-[200px] w-[440px] align-top bg-[#8a5a34] border-4 border-[#b88d5b] rounded-[10px] font-serif shadow-[0_4px_8px_rgba(0,0,0,0.4)] p-10 n-txt-box md:w-90% md:text-base md:my-2">
            <h1 className="text-[2.2em] leading-[1.1]">0.0.1</h1>
            <text>Brainstorm de story line, estilo artístico e mecânicas de gameplay</text>
        </div>
        </div>
    </>
    );
  }
  
  export default News;