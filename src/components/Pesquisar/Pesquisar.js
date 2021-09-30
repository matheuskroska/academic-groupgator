import React from 'react'
import {useState, useEffect} from "react";
import {StyledPesquisar} from './Pesquisar.style';




export const Pesquisar = (props) => {

    return (
        <StyledPesquisar>{props.children}</StyledPesquisar>
    )
}

