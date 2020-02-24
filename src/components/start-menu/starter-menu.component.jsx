import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {Route} from 'react-router-dom';
import {StarterContainer, MenuItemsContainer} from './starter-menu.styles';
import image from './back.svg';
import intervaImage from './intervals.png';
import triangleImage from './triangle.png';


const StarterMenu = ({match})=>{
   return (
    <StarterContainer image={image}>           
            <Route  exact path={`${match.path}`} render={()=>{
                return (
                    <MenuItemsContainer> 
                        <MenuItem title='basic' topic={intervaImage} complexity='3'/>
                        <MenuItem title='triangle' topic={triangleImage} complexity='3'/>
                    </MenuItemsContainer>
                )
            }}/> 
    </StarterContainer>
   )
}

export default StarterMenu;