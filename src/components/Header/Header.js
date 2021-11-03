import React, {useContext, useState, useEffect, } from 'react'
import {NavContainer,NavWrapper,NavLeft,NavRight,NavCenter, NavProfile, NavSidebar} from './Header.elements'
import {HeaderLogado} from "../index";
import firebase from 'firebase';
import { NavLink, useHistory, useLocation  } from "react-router-dom";
import { AuthContext } from "../../firebase-auth";
import { MdVpnKey, MdOutlineLogin, MdPowerSettingsNew,MdAccountCircle, MdSettings, MdExpandMore, MdOutlineAdd } from "react-icons/md";
import logo from '../../assets/Images/logo-groupgator.png';
import {CustomSelect} from "../index";
import { CardButton } from '../Card/Card.elements';


export const Header = () => {

    const { currentUser } = useContext(AuthContext);
    const [name, setName] = useState('');
    const history = useHistory();

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }

    useEffect(()=>{
        if(currentUser) {
            setName(currentUser.nome);
        } else {
            history.push('/');
        }
    },[currentUser])

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
                                     <MdVpnKey/><div>Sign-in</div>
                             </NavLink>
                            <NavLink exact activeClassName="active" to="/login">
                                     <MdOutlineLogin/><div>Login</div>
                            </NavLink>
                        </NavRight>
                    </>
                    ):
                    <>     
                        <HeaderLogado logo={logo} name={name}/>
                    </>                             
                    }              
                </NavWrapper>
            </NavContainer>
            : ""}
        </>     
    )
}
