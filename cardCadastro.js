import React from 'react';
import './card.css'

function CardCadastrar(){
    return(
        <div id= "card">
            <h1 id="font">Cadastro</h1>
            <input type="text" placeholder="Nome" id="input"></input>
            <input type="text" placeholder="Sobrenome" id="input"></input>
            <input type="text" placeholder="Email" id="input"></input>
            <input type="text" placeholder="DDD" id="input"></input>
            <input type="text" placeholder="Telefone" id="input"></input>
            <input type="text" placeholder="Enderenço" id="input"></input>
            <input type="text" placeholder="Senha" id="input"></input>
            <input type="text" placeholder="Repitir sehna" id="input"></input>
            <button id="button">Cadastrar +</button>
        </div>
    )
}

export default CardCadastrar;