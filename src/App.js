import { useState, useEffect } from "react";
import firebase from './firebase-config';
import { GlobalStyle } from './components/index';
import { Routes } from "./routes";


function App() {
    document.title = "GroupGator"


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

    // const inserirUsuario = async (e) => {
    //   e.preventDefault();
    //   if(typeof estado != "undefined" || estado != null){
    //     await firebase.firestore().collection('usuarios').add({
    //     nome: estado,
    //     insertDate: new Date()
    //     }).then( () => {
    //       console.log("gravou corretamente");
    //     }).catch( (erro) => {
    //       console.log("erro " + erro);
    //     });
    //   }else {
    //     alert ("Invalid data");
    //   }
    // }

    const listarUsuario = async (e) => {
        await firebase.firestore().collection('usuarios').get()
            .then((snapshot) => {
                let lista = [];

                snapshot.forEach((item) => {
                    lista.push({
                        id: item.id,
                        nome: item.data().nome,
                        insertDate: item.data().insertDate
                    });
                });

                console.log(lista)
            })
    }
*/
    const times = useUser()

    // firebase.auth().onAuthStateChanged((user) => {

    //   if(user) {
    //     console.log("logado");
    //   }

    // })

    return (
        <>
            <GlobalStyle />
            <Routes />
            {/* <Header/>
      <Container>
          <Register/>
          <Login/>
        <button onClick={inserirUsuario}>Inserir Usuario</button><br></br>
        <Note title={"Jogo do joão"}/>

        <input placeholder="nome" onChange={e => setEstado(e.target.value)}></input>

        <input placeholder="pesquisar..." onChange={e => {setPesquisa(e.target.value)}} ></input>

        <button onClick={listarUsuario}>Listar Usuario</button>
      
        {times.length > 0 ? times.filter((val) => {
            console.log(pesquisa)
            if(pesquisa == "") {
              return val
            } else if (val.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
              return val
            }}).map( times => <div key={times.id}><div>{times.nome}</div><div>{times.insertDate.toString()}</div></div>) : <>Não existe registro no banco</>}
      </Container>
      <Footer/>  */}
        </>
    );
}


export default App;
