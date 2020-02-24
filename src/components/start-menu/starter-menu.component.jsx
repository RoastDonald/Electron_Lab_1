import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {Route} from 'react-router-dom';
import {StarterContainer, MenuItemsContainer} from './starter-menu.styles';
import image from './back.svg';
const StarterMenu = ({match})=>{
   return (
    <StarterContainer image={image}>           
            <Route  exact path={`${match.path}`} render={()=>{
                return (
                    <MenuItemsContainer> 
                        <MenuItem title='basic' complexity='3'/>
                        <MenuItem title='test2' complexity='3'/>
                    </MenuItemsContainer>
                )
            }}/> 
    </StarterContainer>
   )
}

export default StarterMenu;