import React from 'react'
import {FooterContainer,FooterWrapper,FooterCenter,FooterRight} from './Footer.elements'

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterCenter>
                        <ul>
                            <li>
                                <a href="#">Sobre</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Contato</a>
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


