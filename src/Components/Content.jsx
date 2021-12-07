import React from "react";

let elems = [
    {id: "001", name:"Стол", description: "Деревянный", price: "123$"  },
    {id: "002", name:"Стул", description: "Пластмассовый", price: "12$" },
    {id: "003", name:"Диван", description: "Кожанный", price: "888$"  }, 
    {id: "004", name:"Лампа", description: "Светодиодная", price: "14$" }
    

]

function Content (){    

    return (
        <>
            {elems.map((elem) => (                
            <div key = {elem.id} className = "content-box">
                        
                <h2  className = "head">{elem.name}</h2>  
                <p className = "description">{elem.description}</p>
                <span className = "price">{elem.price}</span>
                <button className="btn">Купить</button>          
               
            </div> 
            
    ))}
        </>
    )
}

        
    

//     return (
//     <>    
//         <div className = "content">
//            <h2 className = "head">Наименование</h2>
//            <p className = "description">Описание</p>
//            <span className = "price">Цена</span>
//            <button className="btn">Заказать</button>          

//         </div> 
        

//     </>)


export default Content