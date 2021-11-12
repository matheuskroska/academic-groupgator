import React, {useState} from 'react'
import {NavLeft,NavRight,NavCenter, NavProfile, NavSidebar} from "../Header/Header.elements"
import firebase from 'firebase';
import { NavLink} from "react-router-dom";
import {MdPowerSettingsNew,MdAccountCircle, MdSettings, MdExpandMore, MdOutlineAdd } from "react-icons/md";
import {CustomSelect} from "../index";
import { CardButton } from '../Card/Card.elements';


export const HeaderLogado = ({name, logo}) => {

    const [isOpen, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!isOpen);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    const signOut = () => {
        firebase.auth().signOut();   
    }

    

    return (
        <>            
            <NavSidebar show={isOpen}>
            </NavSidebar>
            <NavLeft onClick={toggleSidebar}>
                <NavLink exact activeClassName="active" to="/">
                    <img alt="groupgator-logo" src={logo}></img>
                </NavLink>
                <p>GroupGator</p>
            </NavLeft> 
            <NavCenter>
                <CustomSelect placeholder="Selecione o tipo de evento" options={options}/>
                <NavLink exact activeClassName="active" to="/criargrupo">
                        <CardButton header>Criar um grupo<MdOutlineAdd/></CardButton>      
                </NavLink>
            </NavCenter>
            <NavRight paddingSVG="5px!important" paddingAnchor="0">
                <NavProfile>
                    <a><MdAccountCircle/></a>
                </NavProfile>
                    <p>{name}
                        <MdExpandMore/>
                    </p>
                    <NavLink exact activeClassName="active" to="/edit">
                        <MdSettings/>
                    </NavLink>
                    <a onClick={() => signOut()}><MdPowerSettingsNew/></a>
            </NavRight>
        </>                                 
    )
}
