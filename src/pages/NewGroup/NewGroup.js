import React, {useContext, useState, useEffect} from 'react'
import {CardItem,CardInput,CardButton} from '../../components/Card/Card.elements';
import {Card, CustomSelect} from '../../components/index';
import firebase from 'firebase';
import {Redirect } from "react-router";
import { NavLink, useHistory, useLocation  } from "react-router-dom";
import { AuthContext } from "../../firebase-auth";
import DatePicker, {registerLocale, setDefaultLocale} from "react-datepicker";
import { MdOutlineAdd} from "react-icons/md";
import pt from 'date-fns/locale/pt';
import "react-datepicker/dist/react-datepicker.css";
import './DatePicker.css';
import moment from 'moment'
import Select from 'react-select'


registerLocale('pt', pt)


export const NewGroup = () => {

    const history = useHistory();

    const options = [
        { id: 0, value: 'Esporte', label: 'Esporte' },
        { id: 1, value: 'Manifestação', label: 'Manifestação' },
        { id: 2, value: 'Encontro', label: 'Encontro' }
    ]

    const options2 = [
        { value: '2', label: '2 Pessoas'},
        { value: '4', label: '4 Pessoas'},
        { value: '6', label: '6 Pessoas'},
        { value: '8', label: '8 Pessoas'},
        { value: '10', label: '10 Pessoas'},
        { value: '12', label: '12 Pessoas'},
    ]

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };

    const[value, setValue] = useState('')
    const { currentUser } = useContext(AuthContext);
    const [evento, setEvento] = useState('');
    const [esporte, setEsporte] = useState('');
    const [tipo, setTipo] = useState('');
    const [limite, setLimite] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [startDate, setStartDate] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const [loadingStatus, setLoadingStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const criarGrupo = () => {
        setLoadingStatus("flex");
        const timer = setTimeout(() => {
                firebase.firestore().collection('grupos').doc().set({
                id_criador: currentUser.uid,
                tipo: tipo,
                esporte: esporte,
                nome: evento,
                endereco: address,
                data: startDate,
                limite: limite   
                }).then( () => {
                    setEvento("");setStartDate("");setAddress("");
                    history.push('/feed');
                }).catch((error) => {
                setLoadingStatus("none!important");
                let errorCode = error.code;
                switch (errorCode) {
                    case "auth/email-already-in-use":
                        setErrorMessage("O email já está em uso!");
                        break;
                    case "auth/weak-password":
                        setErrorMessage("A senha é fraca!");
                    default:
                        setErrorMessage("Preencha todos os campos!");
                        break;
                }
            });
        }, 1000)    
    }

    const onChangeSetEsporte = (value) => {
        setEsporte(value.value);
        setTipo(value.id);
    }

    const onChangeSetLimitePessoas = (value) => {
        setLimite(value.value);
    }

    const setDate = (date) => {
        setStartDate(date);
    }

    return (
        <>
            <Card error={errorMessage} loading={loadingStatus} cardTitle="Criar Grupo" cardButton="Cadastrar">
                <CardItem>
                    <CustomSelect placeholder="Selecione o tipo de evento" onChange={onChangeSetEsporte} width="100%" options={options}/>
                </CardItem>
                <CardItem>
                    <CardInput value={evento} type="mail" onChange={e => {setEvento(e.target.value)}} placeholder="Nome do evento" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem>
                    <CardInput value={address} onChange={e => {setAddress(e.target.value)}} placeholder="Endereço" inputWidth="100%"></CardInput>
                </CardItem>
                <CardItem gap="0">
                     <DatePicker
                     minDate={moment().toDate()}
                     placeholderText="Data do evento" 
                     locale="pt" 
                     showTimeSelect 
                     timeFormat="p" 
                     timeIntervals={30} 
                     dateFormat="Pp" 
                     filterTime={filterPassedTime}
                     selected={startDate}
                     onChange={setDate} />
                </CardItem>
                <CardItem>
                    <CustomSelect placeholder="Limite de pessoas" onChange={onChangeSetLimitePessoas} width="100%" options={options2}/>
                </CardItem>
                <CardButton onClick={ () => criarGrupo()}>Cadastrar<MdOutlineAdd/></CardButton>
            </Card>
        </>
    )
}
