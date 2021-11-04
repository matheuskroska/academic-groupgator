import React, {useState, useContext} from 'react'
import firebase from 'firebase';
import {CardItem,CardInput,CardButton} from '../../components/Card/Card.elements';
import {Card} from '../../components/index';
import { ForgotPassword, NewAccount } from './Login.elements';
import {Redirect } from "react-router";
import { AuthContext } from "../../firebase-auth";
import { NavLink } from "react-router-dom";
import {MdLogin} from "react-icons/md"

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loadingStatus, setLoadingStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const logarUsuario = async (e) => {
        setLoadingStatus("flex");
        const timer = setTimeout(() => {
                firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
                setEmail('');setPassword('');
                return <Redirect  to="/"/>;
                }).catch((error) => {
                setLoadingStatus("none!important");
                let errorCode = error.code;
                switch (errorCode) {
                    case "auth/invalid-email":
                        setErrorMessage("O valor fornecido para a propriedade do usuário email é inválido");
                        break;
                    case "auth/invalid-password":
                        setErrorMessage("O valor fornecido para a propriedade do usuário password é inválido");
                    default:
                        setErrorMessage("Email ou Senha incorretos!");
                        break;
                }
            }) 
        }, 1000);
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/feed" />;
    }

    return (
        <>
            <Card error={errorMessage} loading={loadingStatus} cardTitle="Login" cardButton="Entrar">
                <CardItem>
                    <CardInput type="email" value={email} onChange={e => {setEmail(e.target.value)}} placeholder="Email" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput type="password" value={password} onChange={e => {setPassword(e.target.value)}} placeholder="Senha" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem justifyContent="space-between">
                    <NavLink exact activeClassName="active" to="/esqueciminhasenha">
                       <ForgotPassword>Esqueci minha senha</ForgotPassword>
                    </NavLink>
                    <NavLink exact activeClassName="active" to="/cadastro">
                       <NewAccount>Crie sua conta!</NewAccount>
                    </NavLink>
                </CardItem>
                <CardButton onClick={ () => logarUsuario()}>Entrar<MdLogin/></CardButton>
            </Card>
        </>     
    )
}