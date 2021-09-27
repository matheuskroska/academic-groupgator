import {useState, useEffect} from "react";
import firebase from './firebase-config';


function App() {

    const [estado, setEstado] = useState();
    
    function useUser() {
      const [usuario, setUser] = useState([]);
      
      useEffect(() => {
        firebase
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
        await firebase.collection('usuarios').add({
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

    const listarUsuario = async (e) => {
      await firebase.collection('usuarios').get()
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((item)=>{
          lista.push({
            id: item.id,
            nome: item.data().nome,
            insertDate: item.data().insertDate
          });
        });
      })
    }

    const times = useUser()
   
  return (
    <div>
      <button onClick={inserirUsuario}>Inserir Usuario</button><br></br>
      <input placeholder="valor dinamico" onChange={e => setEstado(e.target.value)}></input>
      <button onClick={listarUsuario}>Listar Usuario</button>
      <br></br>
        {times.length > 0 ? times.map( times => <div key={times.id}><div>{times.nome}</div><div>{times.insertDate.toString()}</div></div>) : <>Não existe registro no banco</>}</div> 
        // componente com props ou componente de mensagem vazio
  );
}


export default App;
