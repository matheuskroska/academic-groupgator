import React, {useContext} from 'react'
import { HomeContainer, HomeWrapper, HomeColumn, HomeContainerFlex } from './Home.elements'
import {CardButton} from '../../components/Card/Card.elements'
import logo from '../../assets/Images/logo-groupgator-home.png';
import {NavLink, Redirect} from 'react-router-dom';
import { AuthContext } from "../../firebase-auth";


export const Home = (props) => {

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/feed" />;
    }

    return (
        <>
            <HomeContainer>
                <HomeWrapper>
                    <HomeColumn><img src={logo}></img></HomeColumn>
                    <HomeColumn>
                        <h1>GroupGator</h1>
                        <h2>find them!</h2>
                        <HomeContainerFlex>
                            <CardButton home>
                                <NavLink exact activeClassName="active" to="/cadastro">
                                     Sign in
                                </NavLink>
                            </CardButton>
                            <CardButton home>
                                <NavLink exact activeClassName="active" to="/login">
                                     Login
                                </NavLink>
                            </CardButton>
                        </HomeContainerFlex>       
                    </HomeColumn>
                </HomeWrapper>
            </HomeContainer>
        </>
    )
}
