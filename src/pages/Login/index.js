import React, {useState, useEffect, Component } from "react";
import SignIn from '../SignIn'
import firebase from '../../firebase-config';
import {Link} from 'react-router-dom';



function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const deslogar = async (e) => {    
    await firebase.auth().signOut();
    //voltar para tela de inicio
  }

  const logar = async (e) => {    
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(()=>{
      alert("entrou");
    })
    .catch((error) =>{
      
        alert("deu ruim");
      
    })
  }

  return (
    <div className="login">            

      <h2>Login</h2>
      
      <input class="inputCadastro1" type="email" placeholder="Email" onChange={ (e)=> {setEmail(e.target.value)}}></input><br></br>
      <input class="inputCadastro1" type="password" placeholder="Senha" onChange={ (e)=> {setSenha(e.target.value)}}></input><br></br>
      <h9>Esqueci a senha</h9> <br></br>
      <button class="bCadastrar" onClick = {logar}> Login </button>
      <Link to= '/Login' class="bLogin">Login</Link>
        
        
      </div>
    
  )
}


export default Login;
