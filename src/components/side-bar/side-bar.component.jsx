import React from 'react';
import './side-bar.styles.scss';


export default class SideBar extends React.Component {
    
   

    render(){
        console.log(this.props.isBarOpen);
        if(this.props.isBarOpen){
    
            return (
                <div className="side-bar">
                 side bar
                </div>
            )
        }else{
            return null;
        }
        

    }
}