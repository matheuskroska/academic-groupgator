import styled from "styled-components";
// import myImage from '../../assets/Images/futebol_background.jpg'

export const CardFeedContainer = styled.div`
    background-image: url(${props => props.imgUrl});
    border-radius: 25px;
    max-width: 243px;
    padding: 20px;
    border: 1px solid green;
    width: 100%;
    background-size: cover;
    margin: 20px auto;
`
export const CardFeedWrapper = styled.div`
   
`
export const CardFeedItem = styled.div`
    border-radius: 25px;
    border: 1px solid green;
    text-align: center;
    margin: ${props => props.margin || "initial"};
    padding: 10px;
    background-color: rgb(255 255 255 / 70%);
`
export const CardFeedContent = styled.div`
    width: 100%;
    text-align: left;
`

export const CardFeedButton = styled.div`
    border-radius: 25px;
    width: 150px;
    margin: 10px auto;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #66A571;
    box-shadow: rgb(0 0 0 / 15%) 1.95px 1.95px 2.6px;
    color: #FFFFFF;
`



