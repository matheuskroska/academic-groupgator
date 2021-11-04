import React, {Component, useState} from "react";
import firebase from '../../firebase-config';


function Edit(){


    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");  
    const [sobrenome, setSobrenome] = useState("");  
    const [ddd, setDdd] = useState("");  
    const [telefone, setTelefone] = useState("");  
    const [endereco, setEndereco] = useState(""); 

    
    const user = firebase.auth().currentUser;
/*
    if (user !== null) {
        user.providerData.forEach((profile) => {
        setNome(profile.nome);
        setSobrenome(profile.sobrenome);
        setEmail(profile.email);
        setDdd(profile.ddd);
        setTelefone(profile.telefone);
        setEndereco(profile.endereco);
        setSenha(profile.senha) 
        });
    }
*/

        


    return(
        <div className="signIn">
        
        <h2>Atualizar Cadastro</h2>
        <input class="inputCadastro" type="text" placeholder="Nome" onChange={ (e)=> {setNome(e.target.value)}}></input>&nbsp; 
        <input class="inputCadastro" type="text" placeholder="Sobrenome" onChange={ (e)=> {setSobrenome(e.target.value)}}></input>
        <input class="inputCadastro1" type="email" placeholder="Email" onChange={ (e)=> {setEmail(e.target.value)}}></input><br></br>
        <input class="inputCadastro3" type="text" placeholder="DDD" onChange={ (e)=> {setDdd(e.target.value)}}></input>&nbsp; 
        <input class="inputCadastro4" type="text" placeholder="Telefone" onChange={ (e)=> {setTelefone(e.target.value)}}></input><br></br>
        <input class="inputCadastro1" type="text" placeholder="Endereço" onChange={ (e)=> {setEndereco(e.target.value)}}></input><br></br>
        <input class="inputCadastro1" type="password" placeholder="Senha" onChange={ (e)=> {setSenha(e.target.value)}}></input><br></br>
        <input class="inputCadastro1" type="password" placeholder=" Repetir Senha" onChange={ (e)=> {setSenha(e.target.value)}}></input><br></br>
        
        <button class="bCadastrar" onClick = {console.log('oi')}> Cadastrar</button>
        
                    
        
        
        </div>
    )

}

export default Edit;