import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/header/header.component';
import BasicPage from './pages/basicPage/basic.components';
import TrianglePage from './pages/trianglePage/triangle.component';
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

        <Route exact path='/basic' component={BasicPage}/>
        <Route exact path='/triangle' component={TrianglePage} />

     </Switch>
   </div>
  )
}

export default App;





























