import React from 'react'
import {NavContainer,NavWrapper,NavLeft,NavRight,NavCenter, NavProfile, NavSidebar} from './Header.elements'
import { useState } from 'react';
import logo  from '../../img/logo.png';

export const Header = () => {

    const [isOpen, setOpen] = useState(false);
    const [logado, setLogado] = useState(true);

    const toggleSidebar = () => setOpen(!isOpen);
    console.log(isOpen)

    return (
        <>
            <NavContainer >
                <NavWrapper logado={logado}>                 
                    {!logado ? (
                    <>
                        <NavLeft>
                            <img src={logo} width="60" />
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
                            <a href="#" onClick={() => setLogado(true)}>Sign in</a>
                            <a href="#">Login</a>
                        </NavRight>
                    </>
                    ):
                    <>  
                        
                        
                        <NavSidebar show={isOpen}>
                        </NavSidebar>
                        <NavLeft onClick={toggleSidebar}>
                            <img src={logo} width="60" />
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
                        <NavRight>
                            <NavProfile>
                                <img src="https://place-hold.it/50x50&text=user"/>
                                <p>Joca da Motoca</p>
                            </NavProfile>
                                <a href="#" >💿</a>
                                <a href="#" onClick={() => setLogado(false)}>📀</a>
                        </NavRight>
                    </>                             
                    }              
                </NavWrapper>
            </NavContainer>
        </>     
    )
}
