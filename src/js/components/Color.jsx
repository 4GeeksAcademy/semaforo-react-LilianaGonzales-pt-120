import React from "react";
import { useState, useEffect } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

//  const Color = () => {
//      const [ colorSemaforoRojo, setColorSemaforoRojo ] = useState({backgroundColor: "red"});
//      const [ colorSemaforoOrange, setColorSemaforoOrange ] = useState({backgroundColor: "orange"});
//      const [ colorSemaforoGreen, setColorSemaforoGreen ] = useState({backgroundColor: "green"});
//      const [showCirculo, setShowCirculo] = useState (true);

//      useEffect (()=>{
//             console.log(showCirculo);
//     },[showCirculo])

//     const cambio_color_rojo = () =>{
//        setShowCirculo(!showCirculo);
//         if(!showCirculo){
//             console.log('ingreso en 1');
//             setColorSemaforoRojo({backgroundColor: "red"});
//         } else {
//             console.log('ingreso en 2');
//             setColorSemaforoRojo(styleSemaforoActivoRed);
//             setColorSemaforoGreen({backgroundColor: "green"});
//             setColorSemaforoOrange({backgroundColor: "orange"})
//         }
        
//     }

// const cambio_color_orange = () =>{
//     setShowCirculo(!showCirculo);
//      if(showCirculo==false){
//         console.log('ingreso en 1 orange');
//         setColorSemaforoOrange({backgroundColor: "orange"});
//     }
//     else {
//         console.log('ingreso en 2 orange');
//         setColorSemaforoOrange(styleSemaforoActivoOrange);
//         setColorSemaforoRojo({backgroundColor: "red"});
//         setColorSemaforoGreen({backgroundColor: "green"})
//     }
// }


// const cambio_color_green = () =>{
//     setShowCirculo(!showCirculo);
//     console.log(showCirculo);
//     if(!showCirculo){
//         setColorSemaforoGreen({backgroundColor: "green"});
//     } else {
//         console.log('ingreso en 2');
        
//         setColorSemaforoGreen(styleSemaforoActivoGreen);
//         setColorSemaforoRojo({backgroundColor: "red"});
//         setColorSemaforoOrange({backgroundColor: "orange"})
//     }
// }

//     const styleSemaforoActivoRed ={
//         backgroundColor: 'red',
//         boxShadow : '0 0 50px red'
//     }
//     const styleSemaforoActivoOrange ={
//         backgroundColor: 'orange',
//         boxShadow : '0 0 50px orange'
//     }
//     const styleSemaforoActivoGreen ={
//         backgroundColor: 'green',
//         boxShadow : '0 0 50px green'
//     }


//     return (
//         <div>  

//             <div className="circulo" style={colorSemaforoRojo} onClick={cambio_color_rojo}></div>
//             <div className="circulo" style={colorSemaforoOrange} onClick={cambio_color_orange}></div>
//             <div className="circulo" style={colorSemaforoGreen} onClick={cambio_color_green}></div>

//         </div>
//     );
// };

// const Color = () => {
//      const [ colorSemaforoRojo, setColorSemaforoRojo ] = useState({backgroundColor: "red"});
//      const [ colorSemaforoOrange, setColorSemaforoOrange ] = useState({backgroundColor: "orange"});
//      const [ colorSemaforoGreen, setColorSemaforoGreen ] = useState({backgroundColor: "green"});
//      const [showCirculo, setShowCirculo] = useState (true);

//      useEffect (()=>{
//             console.log(showCirculo);
//     },[showCirculo])

//     const cambio_color_rojo = () =>{
//        setShowCirculo(!showCirculo);
        
//             setColorSemaforoRojo(styleSemaforoActivoRed);
//             setColorSemaforoGreen({backgroundColor: "green"});
//             setColorSemaforoOrange({backgroundColor: "orange"})
//     }

// const cambio_color_orange = () =>{
//     setShowCirculo(!showCirculo);
    
//         setColorSemaforoOrange(styleSemaforoActivoOrange);
//         setColorSemaforoRojo({backgroundColor: "red"});
//         setColorSemaforoGreen({backgroundColor: "green"})
    
// }


// const cambio_color_green = () =>{
//     setShowCirculo(!showCirculo);
    
//         setColorSemaforoGreen(styleSemaforoActivoGreen);
//         setColorSemaforoRojo({backgroundColor: "red"});
//         setColorSemaforoOrange({backgroundColor: "orange"})
// }

// const styleSemaforoActivoRed ={
//     backgroundColor: 'red',
//     boxShadow : '0 0 50px red'
// }
// const styleSemaforoActivoOrange ={
//     backgroundColor: 'orange',
//     boxShadow : '0 0 50px orange'
// }
// const styleSemaforoActivoGreen ={
//     backgroundColor: 'green',
//     boxShadow : '0 0 50px green'
// }

//     return (
//         <div>  

//             <div className="circulo" style={colorSemaforoRojo} onClick={cambio_color_rojo}></div>
//             <div className="circulo" style={colorSemaforoOrange} onClick={cambio_color_orange}></div>
//             <div className="circulo" style={colorSemaforoGreen} onClick={cambio_color_green}></div>

//         </div>
//     );
// };


const Color = ({colorLuz,luzPrendida,setLuzPrendida}) => {
// const [luz, setLuz] = useState({backgroundColor: colorLuz})
// const [showLuz, setShowLuz] = useState (true);

//  useEffect (()=>{
          
//     },[showLuz])

// const cambioColor=()=>{
// setShowLuz(!showLuz);
// showLuz?setLuz(styleSemaforoActivo):setLuz({backgroundColor: colorLuz});
// }
// const styleSemaforoActivo ={
//     backgroundColor: colorLuz,
//     boxShadow : `0 0 50px ${colorLuz}`
// }





    return (
        <div>  
            <div className={`circulo ${luzPrendida==colorLuz? `${colorLuz}-on`:''}`} onClick={()=>setLuzPrendida(colorLuz)}></div>
        </div>
    );
};





export default Color;