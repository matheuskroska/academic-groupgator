import styled from "styled-components";

export const HomeContainer = styled.div`
    max-height:550px;
    width: 100%;
`

export const HomeWrapper = styled.div`
    display: flex;
    gap: 10px;
`

export const HomeColumn = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    img {
        width: 100%;
        max-width: 690px;
    }

    h1 {
        color: #66A571;
        font-size: 110px;
        font-weight: bold;
    }

    h2 {
        color: #335237;
        font-size: 48px;
    }
`

export const HomeContainerFlex = styled.div`
    display: flex;
    gap: 10px;
`