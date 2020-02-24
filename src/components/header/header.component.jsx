import React from 'react';
import {ReactComponent as Exit} from './cancel.svg';
import {ReactComponent as Hide} from './blind.svg';
import {ReactComponent as Menu} from './menu.svg';
import {HeaderContainer, OptionContainer} from './header.styles';


const handleExitEvent =()=>{
    const {ipcRenderer} = window.require("electron")
    ipcRenderer.send('exitEvent', 'dodov');
}

const handleHideEvent = ()=>{
    const {ipcRenderer} = window.require("electron")
    ipcRenderer.send('hideEvent', 'dodovHide');
}
const size = 35;

/**
 * Start prop stands for aligning item to left side of default
 */
const Header =()=>(
        <HeaderContainer>
            <OptionContainer to='/' start="true">
                <Menu width={size} height={size}/>
            </OptionContainer>

            <OptionContainer as="div" >
                <Hide width={size} height={size} onClick={handleHideEvent}/>
            </OptionContainer>
        
            <OptionContainer as="div">
                <Exit width={size} height={size} onClick={handleExitEvent}/>
            </OptionContainer>
        </HeaderContainer>
    )
export default Header;
