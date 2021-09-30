import styled from "styled-components";

const NavBase = styled.div`
    align-items: center;
    display: flex;
`

export const NavContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
`

export const NavWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 20px;
`

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