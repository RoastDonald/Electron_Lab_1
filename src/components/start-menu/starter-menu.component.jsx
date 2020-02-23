import React from 'react';
import './starter-menu.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {Route} from 'react-router-dom';
import Main from '../main/main.components';

const StarterMenu = ({match})=>{
   return (
    <div className="starter-back">           
            <Route  exact path={`${match.path}`} render={()=>{
                return (
                    <div className="menu-items"> 
                        <MenuItem title='basic' complexity='3'/>
                        <MenuItem title='test2' complexity='3'/>
                    </div>
                )
            }}/>


        </div>
   )
}

export default StarterMenu;