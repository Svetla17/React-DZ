import React, { useState } from 'react';


// function MouseMoove(){
//     const [clientX, setCounterX] = useState(0)
//     const [clientY, setCounterY] = useState(0)

//     const handeleMouseMoove = (event)=> {
//         // console.log(event);
        
//         setCounterX(event.clientX) 
//         setCounterY(event.clientY)
        
//     }

//         return(
//             <div onMouseMove = {handeleMouseMoove} className= "divMouse">

//                 X:{clientX}, Y:{clientY}
//             </div>
//         )
// }

class MouseMoove extends React.Component { 
    
        state = {
            clientX : 0,  
            clientY : 0          
        }       
    
   

    handeleMouseMoove = (event) => {                     
            this.setState({clientX : event.clientX , clientY : event.clientY} )
          
        
           
    }   
        render () {
        
        return (
            <div onMouseMove = {this.handeleMouseMoove} className= "divMouse">

               X: {this.state.clientX}, Y: {this.state.clientY}
            </div>
                )
    }

    
}

export default MouseMoove;