import styled from 'styled-components';

export const UserPageContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:94vh;
    background-image: url(${({image})=>image? image :''});
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
`
export const Prompt = styled.div`
    display:flex;
    flex-direction:column;
    width:43vw;
    height:43vh;
    background-color:#de87e8;
    border-radius:20px;
    

`
export const TabContainer = styled.div`
    display:flex;
    align-items:center;
    height:10vh;
    width:43vw;
    border-bottom:2px solid white;
    color:white;
    font-size:25px;
    & div {
        text-align:center;
        height:100%;
        width:50%;
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        
        &:first-child{
            border-top-left-radius:20px;
            background-color:#64DEFF;
        }
        &:last-child {
            border-top-right-radius:20px;
            background-color:#006FC0;
        }
        
    }
`