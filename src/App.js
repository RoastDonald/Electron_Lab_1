import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import BasicPage from './pages/basicPage/basic.components';
import TrianglePage from './pages/trianglePage/triangle.component';
import StartMenu from './components/start-menu/starter-menu.component';
import './App.css';
import {auth} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {createUserProfile} from './firebase/firebase.utils';
import UserPage from './pages/userPage/user.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

class App  extends React.Component  {
  unsubscibeFromAuth = null;
  
  componentDidMount(){
    const {setCurrentUser} = this.props;
    
    this.unsubscibeFromAuth = auth.onAuthStateChanged(async user =>{
        if(user){
          const userRef = await createUserProfile(user);
        
          userRef.onSnapshot(snap =>{
         
              setCurrentUser({
                id:snap.id,
                ...snap.data()
              });
          });
        }
        setCurrentUser(user);

    })
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }



  render(){

        return (
        <div className="app">
          <Header/>
            <Switch>
              <Route exact path='/' component={StartMenu}/> 
              <Route path='/user' component={UserPage}/>

              <Route exact path='/basic' component={BasicPage}/>
              <Route exact path='/triangle' component={TrianglePage} />

          </Switch>
        </div>
        )
      }
}
const mapDisatchToProps = dispatch =>({
  setCurrentUser:(user)=>dispatch(setCurrentUser(user))
});

export default connect(null,mapDisatchToProps)(App);





























