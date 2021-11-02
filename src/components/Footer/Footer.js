import React from 'react'
import {FooterContainer,FooterWrapper,FooterCenter,FooterRight} from './Footer.elements'
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterCenter>
                        <ul>
                            <li>
                                 <NavLink exact activeClassName="active" to="/cadastro">
                                     Sobre
                                 </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/cadastro">
                                     FAQ
                                 </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/cadastro">
                                     Contato
                                 </NavLink>
                            </li> 
                        </ul>
                    </FooterCenter>
                    <FooterRight>
                        <p>GroupGator ® Todos os direitos reservados</p>
                    </FooterRight>
                </FooterWrapper>
            </FooterContainer>  
        </>     
    )
}


