import React, { useState, useEffect } from 'react'
import {NavContainer,NavWrapper,NavLeft,NavRight,NavCenter, NavProfile, NavSidebar} from './Header.elements'
import logo  from '../../img/logo.png';
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";
import '../../routes';
import firebase from '../../firebase-config';
import Button from '@material-ui/core/Button';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons//AccountCircleOutlined';




export const Header = () => {

    const [isOpen, setOpen] = useState(false);
    const [logado, setLogado] = useState(false);

    const [name, setName] = useState();
    const [mensagem, setMensagem] = useState(""); 

    const toggleSidebar = () => setOpen(!isOpen);
    

    const deslogar = async (e) => {
        firebase.auth().signOut().then(() => {
            console.log("saiu")
          }).catch((error) => {
          });
    }



    firebase.auth().onAuthStateChanged((user)=>{
        let user_id;
        if(user){
            setLogado(true);
            setMensagem("logado");
            let uid = user.uid;
            setName(user.email)
            let lista = []
            //where("userId", "==", uid)
            firebase.firestore()
            .collection('usuario')
            .onSnapshot((snapshot) => {
            const newUser = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            })
        }
    });



    return (
<>
    <BrowserRouter>
        <Switch>
            <NavContainer >
                <NavWrapper logado={logado}>                 
                    {!logado ? (
                    <>
                        <NavLeft>
                            <img src={logo} width="60" />
                            <p>GroupGator</p>
                            <h6>{mensagem}</h6>
                        </NavLeft>
                        <NavCenter>
                            <ul>
                                <li>
                                    <Link to= '/' class="bHome">Home</Link>&nbsp;         
                                </li>
                                <li>
                                    <Link to= '/about' class="bAbout">About</Link>&nbsp;  
                                </li>
                                <li>
                                    <Link to= '/contact' class="bContact">Contact</Link>&nbsp;  
                                </li>
                                <li>
                                    <Link to= '/member' class="bMember">Member</Link>&nbsp;  
                                </li>   
                            </ul>
                        </NavCenter>
                        <NavRight>
                            <Button 
                                onClick={() => console.log("oi")}
                                style={{
                                    color: '#66A571',
                                    
                                }}
                                startIcon={<VpnKeyOutlinedIcon/>}
                                
                                component={Link}
                                to = "/SignIn"
                            >
                                
                                Sing In
                            </Button>&nbsp;  &nbsp; 
                            <Button 
                                onClick={() => console.log("oi")}
                                style={{
                                    color: '#66A571',
                                    
                                }}
                                startIcon={<AccountCircleOutlinedIcon/>}
                                
                                component={Link}
                                to = "/Login"
                            >
                                
                                Login
                            </Button>&nbsp;                              
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
                                <p class="classNameUser">{name}</p>&nbsp;
                                </NavProfile>&nbsp;&nbsp;
                                <Link to= '/#' class="bConf" > <SettingsOutlinedIcon/></Link>&nbsp;
                                <Link to= '/' onClick={() => deslogar()}> <PowerSettingsNewOutlinedIcon/></Link>&nbsp;
                        </NavRight>
                    </>                             
                    }              
                </NavWrapper>
            </NavContainer>
        </Switch>
    </BrowserRouter>
        </>     
    )
}
