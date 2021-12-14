import React from "react";
import { useState } from "react";


function Figure (){
    const [clientX, setCounterX] = useState(0)
    const [clientY, setCounterY] = useState(0)       

    let style = {
        left : Math.round(Math.random(clientX) * 1000) + 'px',
        top: Math.round(Math.random(clientY) * 750) + 'px'

    }           
        
    let handeleMouseMoove = (event)=> { setTimeout(() => { 
              
            setCounterX(event.clientX)
            setCounterY(event.clientY)
        
            }, 300 )}
   
    

        return(
            <div onMouseMove = {handeleMouseMoove}
                style={style}  
                className= "figure">               
            
            </div>
        )
}


export default Figure