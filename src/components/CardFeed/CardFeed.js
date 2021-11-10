import React from 'react'
import { CardFeedButton, CardFeedContainer, CardFeedContent, CardFeedItem } from './CardFeed.elements'

export const CardFeed = ({titulo,descricao,titulobotao,data, integrantes}) => {
    return (
        <>
            <CardFeedContainer>
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