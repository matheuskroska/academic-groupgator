import React, { useContext, useState, useEffect, } from 'react'
import { AuthContext } from "../../firebase-auth";
import firebase from 'firebase';
import {useHistory} from "react-router-dom";
import {CardItem,CardInput, CardButton} from '../../components/Card/Card.elements';
import {Card} from '../../components/index';
import { MdOutlineAdd} from "react-icons/md";

export function Edit(){


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const history = useHistory();
    const { currentUser } = useContext(AuthContext);

    
    useEffect(() => {
        if (currentUser) {
            var docRef = firebase.firestore().collection("usuario").doc(currentUser.uid);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    setName(doc.data().nome);
                    setSurname(doc.data().sobrenome);
                    setEmail(doc.data().email);
                    setPhone(doc.data().telefone);
                    setAddress(doc.data().endereco);
                    
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        } else {
            history.push('/');
        }
    }, [currentUser])
    
    const atualizarUsuario = () => {
        const user = firebase.auth().currentUser;

        if (password === passwordRepeat){
            user.updatePassword(password).then(() => {
                // Update successful.
                setErrorMessage("Senha alterada com sucesso!!!")
              }).catch((error) => {
                // An error ocurred
                setErrorMessage("Senha não alterada!!!")
              });
        }else{
            setErrorMessage("As senhas informadas devem ser iguais")
        }       
        


    }
        


    return(
    
        <>
            <Card error={errorMessage} cardTitle="Atualizar Cadastro" cardButton="Cadastrar">
                <CardItem>
                    <CardInput disabled={true} value={name} onChange={e => {setName(e.target.value)}} placeholder="Nome" inputWidth="50%"></CardInput>
                    <CardInput disabled={true} value={surname} onChange={e => {setSurname(e.target.value)}} placeholder="Sobrenome" inputWidth="50%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput disabled={true} value={email} type="email" onChange={e => {setEmail(e.target.value)}} placeholder="Email" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput disabled={true} value={phone} onChange={e => {setPhone(e.target.value)}} placeholder="Telefone" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput disabled={true} value={address} onChange={e => {setAddress(e.target.value)}} placeholder="Endereço" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput value={password} type="password" onChange={e => {setPassword(e.target.value)}} placeholder="Senha" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput value={passwordRepeat} type="password" onChange={e => {setPasswordRepeat(e.target.value)}} placeholder="Repita sua senha" inputWidth="100%"></CardInput>
                </CardItem>
                <CardButton onClick={ () => atualizarUsuario()}>Salvar<MdOutlineAdd/></CardButton>
            </Card>
        </>     
        
                    
        
        
    )

}

