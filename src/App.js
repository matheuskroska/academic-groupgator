import { useState, useEffect } from "react";
import firebase from './firebase-config';
import { GlobalStyle, Header, Container, Footer } from './components/index';
import Note from "./components/DefaultCard/Card";
import logo  from './img/logo.png';
import './css/style.css';
import Routes from './routes';


function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
        <Container>
        <Routes/>
         
        </Container>
      <Footer/> 
    </>       
  );
}


export default App;
