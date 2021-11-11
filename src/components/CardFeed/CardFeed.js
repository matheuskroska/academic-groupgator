import React, {useEffect, useState, useContext} from 'react'
import firebase from 'firebase';
import { CardFeedButton, CardFeedContainer, CardFeedContent, CardFeedItem } from './CardFeed.elements'
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase-auth";

import cultural from '../../assets/Images/cultural.png'
import corporativo from '../../assets/Images/corporate.png'
import religioso from '../../assets/Images/church.png'
import social from '../../assets/Images/social.png'
import esportivo from '../../assets/Images/sports.png'
import academico from '../../assets/Images/study.png'

import { MdGroups, MdSportsBasketball, MdOutlineMenuBook, MdCorporateFare, MdGroup,MdOutlineCheck, MdOutlineClose } from "react-icons/md";
import { BiChurch } from "react-icons/bi";
import { GiPartyPopper } from "react-icons/gi";

export const CardFeed = ({titulo,descricao,titulobotao,data, integrantes, imgID, groupID}) => {

    
    let initialStatus;
    switch (imgID) {
    case 0:
        initialStatus = academico
        break;
    case 1:
        initialStatus = corporativo
        break;
    case 2:
        initialStatus = cultural
        break;
    case 3:
        initialStatus = esportivo
        break;
    case 4:
        initialStatus = religioso
    break;
    case 5:
        initialStatus = social
        break;
    default:
    }
 

    const [img, setImg] = useState(initialStatus);
    const [botao, setBotao] = useState();
    const { currentUser } = useContext(AuthContext);
    const [inscrito, setInscrito] = useState('0');
    const [desabilita, setDesabilita] = useState(false);
    const [textobtn, setTextobtn] = useState('Participar');
    const [groupStatus, setGroupStatus] = useState(false);
    const [bgColor, setBgColor] = useState('');
    const gID = groupID;
    

    useEffect(()=>{
        var docRef = firebase.firestore().collection("usuario").doc(currentUser.uid);
        var docRefGroup = firebase.firestore().collection("grupos").doc(gID);

        docRefGroup.get().then((doc) => {
            setInscrito(doc.data().inscritos ?? "0")  
            }).catch((error) => {
            console.log("Error getting document:", error);
        });    

        docRef.get().then((doc) => {
            if (doc.data().grupos.includes(gID)){
                setBotao(true);        
            }else if(!doc.data().grupos.includes(gID) && inscrito == integrantes && !groupStatus) {
                setTextobtn('Grupo cheio!')
                setBgColor("#335237");
                setDesabilita("none");
                setBotao(false);       
            }else {
                setDesabilita("initial");
                setTextobtn('Participar')
                setBotao(false); 
            }    
        }).catch((error) => {
            console.log("Error getting document:", error);
        });  
    })
 
    const handleClick = () => {    
        var docRef = firebase.firestore().collection("usuario").doc(currentUser.uid);
        var docRefGroup = firebase.firestore().collection("grupos").doc(gID);
        setDesabilita("none");

         

        if(!botao) {
            if(inscrito == integrantes){}else{
                docRef.update({grupos: firebase.firestore.FieldValue.arrayUnion(groupID)})
                .then(() => {
                    setGroupStatus("true");
                    docRefGroup.update({inscritos: firebase.firestore.FieldValue.increment(1)})
                    .then(() => {
                        setDesabilita("initial");
                    }).catch((error) => {
                        console.log("Error:", error);
                    });  
                });
                
            }   
        }else{

            docRef.update({grupos: firebase.firestore.FieldValue.arrayRemove(groupID)})
            .then(() => {
                docRefGroup.update({inscritos: firebase.firestore.FieldValue.increment(-1)})
                .then( () => {
                    setDesabilita("initial");
                }).catch((error) => {
                    console.log("Error:", error);
                });   
            })
                 
        }
          
    }

    const ChooseIcon = (props) => { 
        const icon = props.iconID;
        switch (icon) {
        case 0:
            return <MdOutlineMenuBook />;
        case 1:
            return <MdCorporateFare />;
        case 2:
            return <MdGroups />;
        case 3:
            return <MdSportsBasketball />;
        case 4:
            return <BiChurch />;
        case 5:
            return <GiPartyPopper />;
        default:
            return <MdOutlineMenuBook />;
        }  
    }


    return (
        <>
            <CardFeedContainer imgUrl={img}>
                <CardFeedItem $title margin={"0 0 10px 0"}>
                   <ChooseIcon iconID={imgID}/> {titulo}
                </CardFeedItem>
                <CardFeedItem>
                    <CardFeedContent>{descricao}</CardFeedContent>
                    <CardFeedContent>{data}</CardFeedContent>
                    <CardFeedContent counter>{inscrito} / {integrantes} <MdGroup/></CardFeedContent>
                    <CardFeedContent detalhe>
                        <NavLink exact activeClassName="active" to="/grupodetalhe">detalhes</NavLink>
                    </CardFeedContent>
                    
                    {botao ? (
                    <>     
                       <CardFeedButton pointerEvent={desabilita} cadastrado onClick={(e) => handleClick()}>Sair<MdOutlineClose/></CardFeedButton> 
                    </>  
                    ):
                    <>
                       <CardFeedButton bgcolor={bgColor} pointerEvent={desabilita} onClick={(e) => handleClick()}>{textobtn}<MdOutlineCheck/></CardFeedButton>  
                    </>                        
                    }
                </CardFeedItem>
            </CardFeedContainer>
        </>     
    )
}