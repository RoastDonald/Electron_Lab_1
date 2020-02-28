import React from 'react';
import {ReactComponent as Exit} from './cancel.svg';
import {ReactComponent as Hide} from './blind.svg';
import {ReactComponent as Profile} from './account.svg';
import {HeaderContainer, OptionContainer, Burger, MenuContainer, Bird } from './header.styles';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {currentSelector} from '../../redux/user/user.selectors';
import {auth} from '../../firebase/firebase.utils';

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
        const {currentUser} = this.props;
        return(
            <HeaderContainer>
                <OptionContainer start="true">
                    <Burger onClick={this.handleMenuOpen}/>
                </OptionContainer>
            {
                this.state.isMenuOpen ?
                <MenuContainer>
                    <ul>
                        <Bird height={size} width={size}/>
                        <li><Link to='/'>Menu</Link></li>
                        {
                            currentUser?
                                <li onClick={()=> auth.signOut()}>Log out</li>
                            :
                                <li><Link to='/user'>Log in </Link></li>
                        }
                            
                    </ul>
                </MenuContainer>
                : null
            }
                {currentUser?
                <OptionContainer as="div">
                    <Link to='/user'><Profile width={size} height={size} /></Link>
                </OptionContainer>
                 :null
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

const mapStateToProps = createStructuredSelector({
    currentUser:currentSelector
})

export default connect(mapStateToProps)(Header);
