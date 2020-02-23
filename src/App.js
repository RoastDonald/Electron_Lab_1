import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import Main from './components/main/main.components';
import StartMenu from './components/start-menu/starter-menu.component';
import './App.css';

const App = () => {

  return (
   <div className="app">
    <Header/>
      <Switch>
        <Route exact path='/' component={StartMenu}/> 
        <Route path='/user' render={()=>
          (<div>test</div>) 
        }/>

        <Route exact path='/basic' component={Main}/>
     </Switch>
   </div>
  )
}

export default App;





























