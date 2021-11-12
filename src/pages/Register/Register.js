import React, { useContext } from 'react';
import { useState } from "react";
import firebase from 'firebase';
import { CardItem, CardInput, CardButton } from '../../components/Card/Card.elements';
import { Card } from '../../components/index';
import { Redirect } from "react-router";
import { AuthContext } from "../../firebase-auth";
import { MdOutlineAdd} from "react-icons/md";

export const Register = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [ddd, setDDD] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const [loadingStatus, setLoadingStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const cadastrarUsuario = () => {
        setLoadingStatus("flex");
        const timer = setTimeout(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                .then((data) => {
                console.log(data.user.uid);
                firebase.firestore().collection('usuario').doc(data.user.uid).set({
                nome: name,
                sobrenome: surname,
                email: email,
                telefone : ddd + " " + phone,
                endereco: address,
                grupos: []  
                }).then( () => {
                    setName("");setSurname("");setEmail("");
                    setDDD("");setPhone("");setAddress(""); 
                    setPassword("");setPasswordRepeat("");
                })
            })
            .catch((error) => {
                setLoadingStatus("none!important");
                let errorCode = error.code;
                switch (errorCode) {
                    case "auth/email-already-in-use":
                        setErrorMessage("O email já está em uso!");
                        break;
                    case "auth/weak-password":
                        setErrorMessage("A senha é fraca!");
                        break;
                    default:
                        setErrorMessage("Preencha todos os campos!");
                        break;
                }
            });
        }, 1000)    
    }


    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <Card error={errorMessage} loading={loadingStatus} cardTitle="Cadastro" cardButton="Cadastrar">
                <CardItem>
                    <CardInput value={name} onChange={e => {setName(e.target.value)}} placeholder="Nome" inputWidth="50%"></CardInput>
                    <CardInput value={surname} onChange={e => {setSurname(e.target.value)}} placeholder="Sobrenome" inputWidth="50%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput value={email} type="mail" onChange={e => {setEmail(e.target.value)}} placeholder="Email" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput value={ddd} onChange={e => {setDDD(e.target.value)}} placeholder="DDD" inputWidth="10%"></CardInput>
                    <CardInput value={phone} onChange={e => {setPhone(e.target.value)}} placeholder="Telefone" inputWidth="90%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput value={address} onChange={e => {setAddress(e.target.value)}} placeholder="Endereço" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput value={password} type="password" onChange={e => {setPassword(e.target.value)}} placeholder="Senha" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput value={passwordRepeat} type="password" onChange={e => {setPasswordRepeat(e.target.value)}} placeholder="Repita sua senha" inputWidth="100%"></CardInput>
                </CardItem>
                <CardButton onClick={ () => cadastrarUsuario()}>Cadastrar<MdOutlineAdd/></CardButton>
            </Card>
        </>     
    )
}