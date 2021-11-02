import React, {useContext, useState} from 'react'
import {NavContainer,NavWrapper,NavLeft,NavRight,NavCenter, NavProfile, NavSidebar} from './Header.elements'
import firebase from 'firebase';
import { Redirect } from "react-router";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase-auth";
import { MdVpnKey, MdOutlineLogin, MdPowerSettingsNew,MdAccountCircle, MdSettings, MdExpandMore } from "react-icons/md";
import logo from '../../assets/Images/logo-groupgator.png';

export const Header = () => {

    const [isOpen, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!isOpen);
    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState('');

    const signOut = () => {
        firebase.auth().signOut();
        return <Redirect to="/feed" />;
    }

    if (currentUser) {
        console.log(currentUser.uid)
        var docRef = firebase.firestore().collection("usuario").doc(currentUser.uid);

        docRef.get().then((doc) => {
            if (doc.exists) {
                setName(doc.data().nome);
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }

    return (
        <>
            <NavContainer >
                <NavWrapper>                 
                    {!currentUser ? (
                    <>
                        <NavLeft>
                            <img src={logo}></img>
                            <p>GroupGator</p>
                        </NavLeft>
                        <NavCenter>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Member</a>
                                </li>   
                            </ul>
                        </NavCenter>
                        <NavRight>
                            <NavLink exact activeClassName="active" to="/cadastro">
                                     <MdVpnKey/><div>Sign-in</div>
                             </NavLink>
                            <NavLink exact activeClassName="active" to="/login">
                                     <MdOutlineLogin/><div>Login</div>
                            </NavLink>
                        </NavRight>
                    </>
                    ):
                    <>     
                        <NavSidebar show={isOpen}>
                        </NavSidebar>
                        <NavLeft onClick={toggleSidebar}>
                            <img src={logo}></img>
                            <p>GroupGator</p>
                        </NavLeft> 
                        <NavCenter>
                            <select name="cars" id="cars">
                                <option value="none" selected disabled hidden>Select uma categoria</option>
                                <option value="futebol">Futebol</option>
                                <option value="volley">Volley</option>
                                <option value="basquete">Basquete</option>
                                <option value="handball">Handball</option>
                            </select>
                            <a href="#">Crie um grupo</a>
                        </NavCenter>
                        <NavRight paddingSVG="5px!important" paddingAnchor="0">
                            <NavProfile>
                                <a href="#"><MdAccountCircle/></a>
                            </NavProfile>
                                <p>{name}
                                    <MdExpandMore/>
                                </p>
                                <a href="#"><MdSettings/></a>
                                <a href="#" onClick={() => signOut()}><MdPowerSettingsNew/></a>
                        </NavRight>
                    </>                             
                    }              
                </NavWrapper>
            </NavContainer>
        </>     
    )
}
