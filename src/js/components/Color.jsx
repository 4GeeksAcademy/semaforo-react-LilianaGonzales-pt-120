import React from "react";
import { useState, useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Color = ({colorLuz,luzPrendida,setLuzPrendida}) => {

    return (
        <div>  
            <div className={`circulo ${colorLuz} ${luzPrendida==colorLuz? `${colorLuz}-on`:''}`} onClick={()=>setLuzPrendida(colorLuz)}></div>
            {/* <div className={`circulo ${colorLuz} ${luzPrendida==colorLuz?'color-on':''}`} onClick={()=>setLuzPrendida(colorLuz)}></div> */}
        </div>
    );
};



export default Color;