import React, { useContext, useState, useEffect, } from 'react'
import { NavContainer, NavWrapper, NavLeft, NavRight } from './Header.elements'
import { HeaderLogado } from "../index";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { AuthContext } from "../../firebase-auth";
import { MdVpnKey, MdOutlineLogin } from "react-icons/md";
import logo from '../../assets/Images/logo-groupgator.png';
import firebase from 'firebase';


export const Header = () => {

    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState('');
    const history = useHistory();

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }

    useEffect(() => {
        if (currentUser) {
            var docRef = firebase.firestore().collection("usuario").doc(currentUser.uid);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    setName(doc.data().nome);
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        } else {
            history.push('/');
        }
    }, [currentUser])

    return (
        <>{usePathname() != "/" ?
            <NavContainer >
                <NavWrapper>
                    {!currentUser ? (
                        <>
                            <NavLeft>
                                <NavLink exact activeClassName="active" to="/">
                                    <img src={logo}></img>
                                    <p>GroupGator</p>
                                </NavLink>
                            </NavLeft>
                            <NavRight>
                                <NavLink exact activeClassName="active" to="/cadastro">
                                    <MdVpnKey /><div>Sign-in</div>
                                </NavLink>
                                <NavLink exact activeClassName="active" to="/login">
                                    <MdOutlineLogin /><div>Login</div>
                                </NavLink>
                            </NavRight>
                        </>
                    ) :
                        <>
                            <HeaderLogado logo={logo} name={name} />
                        </>
                    }
                </NavWrapper>
            </NavContainer>
            : ""}
        </>
    )
}
