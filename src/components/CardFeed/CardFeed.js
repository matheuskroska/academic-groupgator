import React from 'react'
import { CardFeedButton, CardFeedContainer, CardFeedContent, CardFeedItem } from './CardFeed.elements'

export const CardFeed = ({titulo,descricao,titulobotao}) => {
    return (
        <>
            <CardFeedContainer>
                <CardFeedItem margin={"0 0 10px 0"}>
                    {titulo}
                </CardFeedItem>
                <CardFeedItem>
                    <CardFeedContent>{descricao}</CardFeedContent>
                    <CardFeedContent>{descricao}</CardFeedContent>
                    <CardFeedContent>{descricao}</CardFeedContent>
                    <CardFeedButton>{titulobotao}</CardFeedButton>
                </CardFeedItem>
            </CardFeedContainer>
        </>     
    )
}