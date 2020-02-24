import styled, {css} from 'styled-components';


export const MenuItemsStyles = css`
background-color: #52c8ff;
color:white;
`

export const MenuItemContainer = styled.div`
 cursor: pointer;
 width: 30%;
 height: 50%;
 background-color: #71E3FF;
 border-radius: 20px;
 border:2px solid #96B4FF;
 text-align: center;
 margin:5px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-around;
 transition: .5s;
 
 
 &:hover {
     width: 32%;
     height: 55%;
 }
`
export const TitleContainer = styled.div`
 font-size: 1.5em;
 min-width: 90%;
 border-radius: 10px;
 text-transform: capitalize;
 ${MenuItemsStyles}
`
export const ComplexityContainer = styled.div`
width:90%;
height: 60%;
border-radius: 10px;
background-image:url(${({topic})=>topic ? topic : ''});
background-position:center;
background-size:cover;
opacity:.7;
${MenuItemsStyles}
`