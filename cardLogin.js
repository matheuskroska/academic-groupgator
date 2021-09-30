import React from 'react';
import './card.css'

function CardLogin(){
    return(
        <div id= "card">
            <h1 id="font">Login</h1>
            <input type="text" placeholder="Email" id="input"></input>
            <input type="text" placeholder="Senha" id="input"></input>
            <h6 id="font">Esqueci minha senha</h6>
            <button id="button">Entrar</button>
        </div>
    )
}

export default CardLogin;