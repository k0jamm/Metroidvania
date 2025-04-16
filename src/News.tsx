import React from "react";
import { useState } from 'react';
import './News.css';

function News() {

    
    return( 
    <>
      <div className="n-box-pd"></div>
  
          <div className="n-txt-box">
            <h1>0.0.2</h1>
            <text>Decisão das tecnologias a serem usadas e começo da documentação</text>
          </div>

          <div className="n-box-pd"></div>

          <div className="n-txt-box">
            <h1>0.0.1</h1>
            <text>Brainstorm de story line, estilo artístico e mecânicas de gameplay</text>
          </div>
    </>
    );
  }
  
  export default News;