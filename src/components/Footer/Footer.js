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
                                 <NavLink exact activeClassName="active" to="/sobre">
                                     Sobre
                                 </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/faq">
                                     FAQ
                                 </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName="active" to="/contato">
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


