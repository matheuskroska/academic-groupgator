import React, {Component, useState, useEffect} from "react";
import firebase from '../../firebase-config';
import {Link} from 'react-router-dom';


function SignIn() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");  
  const [nome, setNome] = useState("");  
  const [sobrenome, setSobrenome] = useState("");  
  const [ddd, setDdd] = useState("");  
  const [telefone, setTelefone] = useState("");  
  const [endereco, setEndereco] = useState("");  

 
    const inserirUsuario = async (e) => {
      await firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(async(value)=>{
        await firebase.firestore().collection("usuario").doc(value.user.uid)
        .set({
          nome: nome,
          sobrenome: sobrenome,
          ddd: ddd,
          telefone: telefone,
          endereco: endereco
        }).then(()=>{
          alert("Cadastrado com sucesso");
        })
        .catch((error) =>{
          
            alert("deu ruim");
          
        })
      });
    }

  
   
    return (
      <div className="signIn" >
        <h2>Cadastro</h2>
        
        <input class="inputCadastro" type="text" placeholder="Nome" onChange={ (e)=> {setNome(e.target.value)}}></input>&nbsp; 
        <input class="inputCadastro" type="text" placeholder="Sobrenome" onChange={ (e)=> {setSobrenome(e.target.value)}}></input>
        <input class="inputCadastro1" type="email" placeholder="Email" onChange={ (e)=> {setEmail(e.target.value)}}></input><br></br>
        <input class="inputCadastro3" type="text" placeholder="DDD" onChange={ (e)=> {setDdd(e.target.value)}}></input>&nbsp; 
        <input class="inputCadastro4" type="text" placeholder="Telefone" onChange={ (e)=> {setTelefone(e.target.value)}}></input><br></br>
        <input class="inputCadastro1" type="text" placeholder="Endereço" onChange={ (e)=> {setEndereco(e.target.value)}}></input><br></br>
        <input class="inputCadastro1" type="password" placeholder="Senha" onChange={ (e)=> {setSenha(e.target.value)}}></input><br></br>
        <input class="inputCadastro1" type="password" placeholder=" Repetir Senha" onChange={ (e)=> {setSenha(e.target.value)}}></input><br></br>
        <button class="bCadastrar" onClick = {inserirUsuario}> Cadastrar</button>
        
        
      </div>
    )

  }
export default SignIn;
