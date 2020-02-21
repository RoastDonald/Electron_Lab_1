import React from 'react';
import './element.styles.scss';

import { ReactComponent as Trash } from './rubbish.svg';
import { ReactComponent as Update } from './processing.svg';

class Element extends React.Component {

    handleTrashClick = ()=>{
        this.props.onTrashClick(this.props.id);
    };

    handleInvertDATA =()=>{
        
        this.props.onInvertDATA();
        
    }

    handleNegativeData = ()=>{
        this.props.onNegativeDATA();
    }


   
    render(){

        let  classNameElement = 'element';
       

        if(isNaN(Number(this.props.to)) || isNaN(Number(this.props.from)))classNameElement = 'element highlight';
        else{

            


            if(this.props.to < this.props.from)classNameElement = "element type-error";


            if(this.props.isInverted){
                if(this.props.from > 0 && this.props.to > 0 || this.props.from < 0 && this.props.to < 0)classNameElement = 'element';
                else classNameElement = 'element inccorect';
                
            
            }

        }   
        
        
        console.log(classNameElement);
        let classNameInverted;
        if(this.props.isInverted)classNameInverted = "inverted-element inv";
        else classNameInverted = "inverted-element";


        let classNameNegative;
        if(this.props.isNegative)classNameNegative = "negative-display inv";
        else classNameNegative = "negative-display";

        



        return(
            <div className={classNameElement}>
                <div className="content">
                     <span className="name">{this.props.name}</span>
                     <span className="delete-element">
                        <Trash  width={30} height={30} onClick={this.handleTrashClick}/>
                     </span>
                     <span className={classNameInverted} onClick={this.handleInvertDATA}>-1</span>
                     <span className={classNameNegative} onClick={this.handleNegativeData}>-</span>
                    
                     <span className="update-toggle">
                         <Update width={100} height={30} onClick={this.props.onEditClick}/>
                     </span>
                     
                </div>
            </div>
        )
    }
}

export default Element;