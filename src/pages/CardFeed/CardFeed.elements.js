import styled, {css} from "styled-components";

export const CardFeedContainer = styled.div`
    
`
export const CardFeedWrapper = styled.div`
    padding: 20px 64px;
`

export const CardFeedItem = styled.div`
    display: flex;
    margin-bottom: 13px;
    gap: 8px;
    justify-content: ${props => props.justifyContent || "initial"};
`


  