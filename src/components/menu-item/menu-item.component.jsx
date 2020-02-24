import React from 'react'; 
import {withRouter} from 'react-router-dom';
import {MenuItemContainer, TitleContainer, ComplexityContainer} from './menu-items.styles';


const MenuItem = ({title,complexity, history,match,topic})=>(
    <MenuItemContainer  onClick={()=>history.push(`${match.path}${title}`)}>
        <TitleContainer>
            <span >{title}</span>
        </TitleContainer>

        <ComplexityContainer topic={topic}>
            <span >{complexity}</span>
        </ComplexityContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);