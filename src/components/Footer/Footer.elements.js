import styled from "styled-components";

const FooterBase = styled.div`
    align-items: center;
    display: flex;
`

export const FooterContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    position: absolute;
    bottom: 0;
`

export const FooterWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    position:relative;
    
    a {
        color: #66A571;
        font-size: 18px;
        text-decoration: none;
    }

    a:hover {
        color:green;
    }
`

export const FooterRight = styled(FooterBase)`
    position: absolute;
    right: 0;
    height: 100%;
    top: 0;
    margin-right: 20px;

    p {
        color: #66A571;
        font-size: 16px;
    }
`

export const FooterCenter = styled(FooterBase)`
    ul {
        display: flex;
    }

    li, a {
        padding: 10px;
        color: #66A571;
        font-style: 'Roboto Condensed', sans-serif;
        text-decoration: none;
    }
       
`


