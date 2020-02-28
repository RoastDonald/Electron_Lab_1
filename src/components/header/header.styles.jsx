import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as Menu} from './menu.svg';
import {ReactComponent as Bi} from './hummingbird.svg';


export const Bird = styled(Bi)`
    ${({width,height})=>{
        return `
            width:${width}px;
            height:${height}px;
            position:absolute;
            top:20px;
            left:0;
        `
    }}
`


export const Burger = styled(Menu)`
    width:35px;
    height:35px;

`;

export const MenuContainer = styled.div`
    position:absolute;
    top:40px;
    left:0;
    width:150px;
    height:93vh;
    background:#0E1318;
    z-index:1000;
    color:white;
    

    ul {
        
        margin-top:30px;
        list-style:none;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        height:85px;
        width:100px;
        

        li {
            cursor:pointer;
        
            text-transform:capitalize;
            font-size:25px;

            a { text-decoration: none; color:white}
        }
    }

    `


export const HeaderContainer = styled.div`
    height:40px;
    z-index: 10000;
    position: static;
    width: 100vw;
    padding-bottom: 0;
    background-color:#0E1318 ;
    display: flex;
    -webkit-app-region:drag;

    

`

export const OptionContainer = styled(Link)`
    margin-right:${({start})=>start ?'auto':''};
    padding: 0 5px;
    -webkit-app-region:no-drag;
    cursor: pointer;


`;
