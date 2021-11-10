import React, {useEffect, useState} from 'react'
import { CardFeedButton, CardFeedContainer, CardFeedContent, CardFeedItem } from './CardFeed.elements'
import esporte from '../../assets/Images/futebol_background.jpg'
import manifestacao from '../../assets/Images/manifestacao.jpg'
import encontro from '../../assets/Images/meeting.jpg'


export const CardFeed = ({titulo,descricao,titulobotao,data, integrantes, imgID}) => {

    let initialStatus;
    switch (imgID) {
    case 0:
      initialStatus = esporte
      break;
    case 1:
      initialStatus = manifestacao
      break;
    case 2:
      initialStatus = encontro
      break;
    default:
    }

    const [img, setImg] = useState(initialStatus);

    return (
        <>
            <CardFeedContainer imgUrl={img}>
                <CardFeedItem margin={"0 0 10px 0"}>
                    {titulo}
                </CardFeedItem>
                <CardFeedItem>
                    <CardFeedContent>{descricao}</CardFeedContent>
                    <CardFeedContent>{data}</CardFeedContent>
                    <CardFeedContent>1 / {integrantes}</CardFeedContent>
                    <CardFeedButton>{titulobotao}</CardFeedButton>
                </CardFeedItem>
            </CardFeedContainer>
        </>     
    )
}