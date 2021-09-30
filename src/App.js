import {useState, useEffect} from "react";
import firebase from './firebase-config';
import {createGlobalStyle} from "styled-components";
import {Header} from './components/index';

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    select {
          height: fit-content;
    }
`;
  
function App() {

    const [estado, setEstado] = useState();
    const [pesquisa, setPesquisa] = useState('');
    
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

        console.log(lista)
      })
    }

    const times = useUser()
   
  return (
    <div>
      <GlobalStyle/>
      <Header></Header>

      <button onClick={inserirUsuario}>Inserir Usuario</button><br></br>

      <input placeholder="nome" onChange={e => setEstado(e.target.value)}></input>

      <input placeholder="pesquisar..." onChange={e => {setPesquisa(e.target.value)}} ></input>

      <button onClick={listarUsuario}>Listar Usuario</button>
      
        {times.length > 0 ? times.filter((val) => {
          console.log(pesquisa)
          if(pesquisa == "") {
            return val
          } else if (val.nome.toLowerCase().includes(pesquisa.toLowerCase())) {
            return val
          }}).map( times => <div key={times.id}><div>{times.nome}</div><div>{times.insertDate.toString()}</div></div>) : <>Não existe registro no banco</>}</div> 
        // componente com props ou componente de mensagem vazio
  );
}


export default App;
