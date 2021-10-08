import styled from "styled-components";

const NavBase = styled.div`
    align-items: center;
    display: flex;
`

export const NavContainer = styled.div`
   background-color:#fff;
`

export const NavWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 20px;
    position: relative;
`

// export const NavWrapper = styled.div`
//     max-width: ${props => props.logado ? '1130px' : '1280px'};
//     margin: ${props => props.logado ? '0 0 0 auto' : '0 auto'};
//     display: flex;
//     justify-content: space-between;
//     padding: 30px 20px;
//     padding-left: ${props => props.logado ? '150px' : ''};
// `

export const NavLeft = styled(NavBase)`
    p {
        padding: 5px;
    }
`

export const NavRight = styled(NavBase)`
    a {
        padding: 5px;
    }
`

export const NavCenter = styled(NavBase)`
    ul {
        display: flex;
    }

    li, a {
        padding: 10px;
    }
    
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
`

export const NavSidebar = styled.div`   
    height: ${props => props.show ? "100vh" : "0vh"};
    position: absolute;
    width: 210px;
    left: 0;
    top: 110px;
    opacity: ${props => props.show ? "1" : "0"};
    transition: height 0.5s ease-in-out;
    background-color: #fff;
    background: linear-gradient(
180deg, #66A571 0%, rgba(102, 165, 113, 0) 100%);
`