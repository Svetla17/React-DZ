import React from "react";

function Footer (){

    return (
        
        <div className = "footer">          
           <a className = "footerLinks" href ="URL">задать вопрос</a>
           <a className = "footerLinks" href ="URL">доставка и оплата</a>
           <a className = "footerLinks" href ="URL">вернуть товар</a>
           <a className = "footerLinks" href ="URL">регистрация</a>
           <input className = "imput" type = "text" placeholder = "введите эл.адрес"></input>
           <input className = "imput" type = "text" placeholder = "тема обращения"></input>       
           <input className = "imput" type = "text" placeholder = "получить консультацию"></input>
           <button className="button1">Отправить</button> 
        </div> )

}

export default Footer