import React, { useState } from 'react'

const CreatImput = () => {
    const [counter, setCounter] = useState(0);
    
    const hendleClick1 = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const hendleClick3 = () => {
        setCounter((prevCounter) => prevCounter + 3)
    }

    const hendleClick5 = () => {
        setCounter((prevCounter) => prevCounter + 5)
    }

    
    return (<>
        <h1>{counter}</h1>
        <button onClick={hendleClick1}>Add 1</button>
        <button onClick={hendleClick3}>Add 3</button>
        <button onClick={hendleClick5}>Add 5</button>
        

    </>)
}

export default CreatImput;