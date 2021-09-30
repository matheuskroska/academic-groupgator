import React from 'react'
import {NavContainer,NavWrapper,NavLeft,NavRight,NavCenter, NavProfile} from './Header.elements'
import { useState } from 'react';





export const Header = () => {

    const [logado, setLogado] = useState('true');

    return (
        <>
            <NavContainer>
                <NavWrapper>
                    <NavLeft>
                        <img src="https://place-hold.it/90x50&text=logo"></img>
                        <p>GroupGator</p>
                    </NavLeft>
                    {!logado ? (
                    <>
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
