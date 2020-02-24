import styled from 'styled-components';

export const StarterContainer = styled.div`
    font-family: 'Trade Winds', ;
    width: 100vw;
    font-size: 15px;
    height: 100vh;
    background-image: url(${({image})=>image});
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MenuItemsContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 55vw;
    height: 50vh;
`