import React from 'react';
import './main-window.styles.scss';

import Main from "../main/main.components";
import Header from "../header/header.component";
import SideBar from '../side-bar/side-bar.component';

export default class  MainWindow  extends React.Component{

    state = {
        isBarOpen:false
    }


    handleBar = ()=>{
      
    }

    
  

   
    render(){
       

        return (
        <div className="main-window">
            <Header onBar={this.handleBar}/>
            <SideBar isBarOpen={this.state.isBarOpen}/>
            <Main/>
        
         </div>
    )}
}

