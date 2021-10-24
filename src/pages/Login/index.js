import React, {useState } from "react";
import firebase from '../../firebase-config';
import {Link} from 'react-router-dom';



function Login() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const logar = async (e) => {    
    await firebase.auth().signInWithEmailAndPassword(email, senha)
    .then(()=>{
      console.log("entrou");
    })
    .catch((error) =>{
      
        console.log("deu ruim");
      
    })
  }

  return (
    <div className="login">            

      <h2>Login</h2>
      
      <input class="inputCadastro1" type="email" placeholder="Email" onChange={ (e)=> {setEmail(e.target.value)}}></input><br></br>
      <input class="inputCadastro1" type="password" placeholder="Senha" onChange={ (e)=> {setSenha(e.target.value)}}></input><br></br>
      <h9>Esqueci a senha</h9> <br></br>
      <Link to= '/pageUser' onClick = {logar} class="bLogin">Login</Link>
        
              
      </div>
    
  )
}


export default Login;
