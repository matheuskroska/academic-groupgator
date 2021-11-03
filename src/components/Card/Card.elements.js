import styled, {css} from "styled-components";

export const CardContainer = styled.div`
    width: 100%;
    max-width: 650px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    position: relative;
`

export const CardLoader = styled.div`
    display: ${props => props.loading || "none!important"};
    position: absolute;
    width:100%;
    height: 100%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    backdrop-filter: blur(1px);
    opacity: 0.8;
`

export const CardSpinner = styled.div`
    color: #66A571;
    font-size: 90px;
    text-indent: -9999em;
    overflow: hidden;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    margin: 72px auto;
    position: relative;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load6 1.7s infinite ease, round 1.7s infinite ease;
    animation: load6 1.7s infinite ease, round 1.7s infinite ease;


        @-webkit-keyframes load6 {
    0% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    }
    @keyframes load6 {
    0% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    5%,
    95% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    10%,
    59% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
    }
    20% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em, -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, -0.749em -0.34em 0 -0.477em;
    }
    38% {
        box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em, -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, -0.82em -0.09em 0 -0.477em;
    }
    100% {
        box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
    }
    }
    @-webkit-keyframes round {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
    @keyframes round {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    }
`

export const CardInput = styled.input`
    border-radius: 25px;
    border: 1px solid #66A571;
    color: #66A571;
    width: ${props => props.inputWidth || "100%"};
    padding: 0px 10px;
    height: 35px;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    padding: 0 20px;

    ::placeholder {
        color: rgb(102 165 113 / 55%);
    }
`

export const CardWrapper = styled.div`
    padding: 20px 64px;
`

export const CardItem = styled.div`
    display: flex;
    margin-bottom: 13px;
    gap: 8px;
    justify-content: ${props => props.justifyContent || "initial"};
`

export const CardTitle = styled.h1`
    font-weight: bold;
    font-size: 48px;
    color: #66A571;
    text-align: center;
    margin: 25px 0 25px 0;
`

export const CardButton = styled.div`
    border-radius: 25px;
    background-color: #66A571;
    max-width: 155px;
    height: 55px;
    font-size: 24px;
    font-weight: bold;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;

    ${props =>
    props.home &&
    css`
      min-width: 154px;
      height: 35px;
      font-size: 18px;
      margin: initial;
    `};

    ${props =>
    props.header &&
    css`
      min-width: initial;
      height:35px;
      font-size: 16px;
      text-decoration: none;
      padding: 0 5px 0 10px;
    `};

    a {
        color: #fff;
        text-decoration: none;
        width: 100%;
        text-align: center;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    

    a:active {
    box-shadow: none;
    color: green;
    transition: 0.2s all;
    }
    
    a:hover {
        color: green;
    }

    svg {
        padding-left: 5px;
    }

`

export const CardError = styled.p`
    height: 25px;
    color: red;
    font-size: 15px;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
`
  