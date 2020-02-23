import React from 'react';
import './element.styles.scss';
import { ReactComponent as Trash } from './rubbish.svg';
import { ReactComponent as Update } from './processing.svg';

const Element = ({id,onInvertData,onNegativeData,isInverted,isNegative,from,to,name,onEditClick,onDeleteElement}) => {

    

        let  classNameElement = 'element';
        console.log('ITS ME',isInverted,isNegative);

        if(isNaN(Number(to)) || isNaN(Number(from)))classNameElement = 'element highlight';
        else{
            if(to < from)classNameElement = "element type-error";
            if(isInverted){
                if(from > 0 && to > 0 || from < 0 && to < 0)classNameElement = 'element';
                else classNameElement = 'element inccorect';
                 
            }
        }   

        
        let classNameInverted;
        if(isInverted)classNameInverted = "inverted-element inv";
        else classNameInverted = "inverted-element";


        let classNameNegative;
        if(isNegative)classNameNegative = "negative-display inv";
        else classNameNegative = "negative-display";




        return(
            <div className={classNameElement}>
                <div className="content">
                     <span className="name">{name}</span>
                     <span className="delete-element">
                        <Trash  width={30} height={30} onClick={()=>onDeleteElement(id)}/>
                     </span>
                     <span className={classNameInverted} onClick={onInvertData}>-1</span>
                     <span className={classNameNegative} onClick={onNegativeData}>-</span>
                    
                     <span className="update-toggle">
                         <Update width={100} height={30} onClick={onEditClick}/>
                     </span>
                     
                </div>
            </div>
        )
    }



export default Element;