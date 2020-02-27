import React from 'react';
import {ReactComponent as Exit} from './cancel.svg';
import {ReactComponent as Hide} from './blind.svg';
import {HeaderContainer, OptionContainer, Burger, MenuContainer} from './header.styles';
import {Link} from 'react-router-dom';

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
class Header extends React.Component {

    state = {
        isMenuOpen:false
    }

    handleMenuOpen = () =>{
        this.setState({isMenuOpen:!this.state.isMenuOpen})
    }

    render(){
        
        return(
            <HeaderContainer>
                <OptionContainer start="true">
                    <Burger onClick={this.handleMenuOpen}/>
                </OptionContainer>
            {
                this.state.isMenuOpen ?
                <MenuContainer>
                    <ul>
                        <li><Link to='/'>Menu</Link></li>
                        <li>sign in</li>
                        <li>sign up</li>
                    </ul>
                </MenuContainer>
                : null
            }


                <OptionContainer as="div" >
                    <Hide width={size} height={size} onClick={handleHideEvent}/>
                </OptionContainer>
            
                <OptionContainer as="div">
                    <Exit width={size} height={size} onClick={handleExitEvent}/>
                </OptionContainer>
            </HeaderContainer>
        )
    }
    
}
export default Header;
