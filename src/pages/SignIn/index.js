import React, {Component, useState, useEffect} from "react";
import firebase from '../../firebase-config';



function SignIn() {

  const [estado, setEstado] = useState();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");  
  const [nome, setNome] = useState("");  
  const [sobrenome, setSobrenome] = useState("");  
  const [ddd, setDdd] = useState("");  
  const [telefone, setTelefone] = useState("");  
  const [endereco, setEndereco] = useState("");  

  
    const [usuario, setUser] = useState([]);
    
    function useUser() {
      const [usuario, setUser] = useState([]);
      
      useEffect(() => {
        firebase.firestore()
          .collection('usuarios')
          .onSnapshot((snapshot) => {
            const newUser = snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()
            }))

            setUser(newUser)
          })
      }, [])

      return usuario
    }

  
    const inserirUsuario = async (e) => {
      e.preventDefault();
      if(typeof estado != "undefined" || estado != null){
        await firebase.firestore().collection('usuarios').add({
        nome: estado,
        insertDate: new Date()
        }).then( () => {
          console.log("gravou corretamente");
        }).catch( (erro) => {
          console.log("erro " + erro);
        });
      }else {
        alert ("Invalid data");
      }
    }

  
   
    return (
      <div className="signIn">
        <h2>Cadastro</h2>
        <input type="text" placeholder="Nome" onChange={ (e)=> {setNome(e.target.value)}}></input>&nbsp; 
        <input type="text" placeholder="Sobrenome" onChange={ (e)=> {setSobrenome(e.target.value)}}></input><br></br>
        <input type="text" placeholder="Email" onChange={ (e)=> {setEmail(e.target.value)}}></input><br></br>
        <input type="text" placeholder="DDD" onChange={ (e)=> {setDdd(e.target.value)}}></input>&nbsp; 
        <input type="text" placeholder="Telefone" onChange={ (e)=> {setTelefone(e.target.value)}}></input><br></br>
        <input type="text" placeholder="Email" onChange={ (e)=> {setEmail(e.target.value)}}></input><br></br>
        <input type="password" placeholder="Senha" onChange={ (e)=> {setSenha(e.target.value)}}></input><br></br>
        <input type="password" placeholder=" Repetir Senha" onChange={ (e)=> {setSenha(e.target.value)}}></input><br></br>
        <button onClick = {inserirUsuario}> Criar Usuario</button>
        
        
      </div>
    )

  }
export default SignIn;
