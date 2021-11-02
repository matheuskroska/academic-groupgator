import React from 'react'
import {CardContainer,CardWrapper,CardTitle,CardSpinner,CardLoader, CardError} from './Card.elements'


export const Card = (props) => {
    return (
        <>
            <CardContainer>
                <CardLoader loading={props.loading}>
                    <CardSpinner/>
                </CardLoader>
                <CardWrapper>
                    <CardTitle>{props.cardTitle}</CardTitle>
                    {props.children}
                </CardWrapper>
                <CardError>{props.error}</CardError>
            </CardContainer>  
        </>     
    )
}