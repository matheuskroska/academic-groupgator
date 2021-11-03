import React, {useContext, useState, useEffect, } from 'react'
import {NavContainer,NavWrapper,NavLeft,NavRight,NavCenter, NavProfile, NavSidebar} from './Header.elements'
import firebase from 'firebase';
import { NavLink, useHistory  } from "react-router-dom";
import { AuthContext } from "../../firebase-auth";
import { MdVpnKey, MdOutlineLogin, MdPowerSettingsNew,MdAccountCircle, MdSettings, MdExpandMore, MdOutlineAdd } from "react-icons/md";
import logo from '../../assets/Images/logo-groupgator.png';
import {CustomSelect} from "../index";
import { CardButton } from '../Card/Card.elements';


export const Header = () => {

    const [isOpen, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!isOpen);
    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState('');

    const history = useHistory();

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const signOut = () => {
        firebase.auth().signOut();   
    }

    useEffect(()=>{
        if (currentUser) {
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
        } else {
            history.push('/');
        }
    },[currentUser])

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
                        {/* <NavCenter>
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
                        </NavCenter> */}
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
                            <CustomSelect options={options}/>
                            <NavLink exact activeClassName="active" to="/criargrupo">
                                    <CardButton header>Criar um grupo<MdOutlineAdd/></CardButton>      
                            </NavLink>
                        </NavCenter>
                        <NavRight paddingSVG="5px!important" paddingAnchor="0">
                            <NavProfile>
                                <a href="#"><MdAccountCircle/></a>
                            </NavProfile>
                                <p>{name}
                                    <MdExpandMore/>
                                </p>
                                <a ><MdSettings/></a>
                                <a onClick={() => signOut()}><MdPowerSettingsNew/></a>
                        </NavRight>
                    </>                             
                    }              
                </NavWrapper>
            </NavContainer>
        </>     
    )
}
