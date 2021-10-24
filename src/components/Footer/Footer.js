import React from 'react'
import {FooterContainer,FooterWrapper,FooterCenter,FooterRight} from './Footer.elements'
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterCenter>
                        <BrowserRouter>
                            <Switch>
                            <ul>
                                <li>
                                    <Link to= '/about' class="bAbout">Sobre</Link>&nbsp;  
                                </li>
                                <li>
                                <Link to= '/faq' class="bFaq">FAQ</Link>&nbsp;  
                                </li>
                                <li>
                                    <Link to= '/contact' class="bContact">Contato</Link>&nbsp;  
                                </li> 
                            </ul>
                            </Switch>                        
                        </BrowserRouter>
                            
                    </FooterCenter>
                    <FooterRight>
                        <p>GroupGator ® Todos os direitos reservados</p>
                    </FooterRight>
                </FooterWrapper>
            </FooterContainer>  
        </>     
    )
}


