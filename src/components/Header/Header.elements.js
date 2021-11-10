import styled from "styled-components";

const NavBase = styled.div`
    align-items: center;
    display: flex;
`

export const NavContainer = styled.div`
   background-color:#fff;
    box-shadow: rgb(50 50 93 / 25%) 0px 6px 12px -2px, rgb(0 0 0 / 30%) 0px 3px 7px;
`

export const NavWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    position: relative;
`

export const NavLeft = styled(NavBase)`
    cursor: pointer;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    p {
        padding: 5px;
        color: #66A571;
        font-weight: bold;
        font-size:18px;
        margin-left: 10px;
    }
`

export const NavRight = styled(NavBase)`
    a {
    padding: ${props => props.paddingAnchor || "5px 10px"};
    display: flex;
    text-decoration: none;
    font-size: 18px;
    color: #66A571;
    font-weight: bold;
    cursor: pointer;
    }

    a:hover {
        color: green;
    }

    svg {
        padding-right: ${props => props.paddingSVG || "10px"};
        width: 22px;
        height: 22px;
    }

    p {
        color: #66A571;
        font-weight: bold;
        text-transform: capitalize;
        margin-right: 20px;
        display: flex;
        align-items: center;
    }

    div {
        display: flex;
        align-items: center;
    }
    
`

export const NavCenter = styled(NavBase)`
    ul {
        display: flex;
    }

    li, a {
        padding: 10px;
    }

    a {
        text-decoration: none;
    }

    a div {
        margin: initial
    }

    /* a:hover div{
        background-color:green;
    } */
    
`

export const NavProfile = styled(NavBase)`   
    img {
        height: fit-content;
        width: fit-content;
        max-width: 100px;
        max-height: 100px;
        border-radius: 50%;
    }
    p {
        padding: 5px;
        white-space: nowrap;
    } 

    svg {
        width: 50px!important;
        height: 50px!important;
    }
`

export const NavSidebar = styled.div`   
    height: ${props => props.show ? "100vh" : "0vh"};
    position: absolute;
    width: 210px;
    left: 0;
    top: 130px;
    opacity: ${props => props.show ? "1" : "0"};
    transition: height 0.5s ease-in-out;
    background-color: #fff;
    background: linear-gradient(
180deg, #66A571 0%, rgba(102, 165, 113, 0) 100%);
`

export const NavSelect = styled.select`
    outline: 0;
    border: 1px solid #66A571;
    border-radius: 25px;
    height: 35px;
    padding: 0 20px;
`