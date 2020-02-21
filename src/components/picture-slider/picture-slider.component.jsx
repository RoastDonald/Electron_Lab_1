import React from 'react';
import './picture-slider.styles.scss';

import {ReactComponent as Minus} from './minus.svg';

import {ReactComponent as Multiply} from './multiply.svg';
import {ReactComponent as Plus} from './plus.svg';
import {ReactComponent as Division} from './division.svg';

import {ReactComponent as ConJ} from './conJ.svg';
import {ReactComponent as DisJ} from './disJ.svg';





export default class PictureSlider extends React.Component{
    
    state = {
        currentImage:0
    }

    incImage = (len)=>{
        if(this.state.currentImage < len-1){
            this.setState((prevState, prevProps)=>{
                
                return {
                currentImage:prevState.currentImage + 1
                }        
        },()=>this.handleStringAction(this.state.currentImage));

        }
        else{
            this.setState(()=>({currentImage:0}),()=>this.handleStringAction(this.state.currentImage));
        }

        
    }


    handleStringAction = (index)=>{

        let range = ['minus','plus','multiply','division','conj','disj']
        this.props.onString(range[index]);

    }

    // onString


    render(){
          const imageSize = 45;
          const images = [<Minus width={imageSize} height={imageSize}/>,
                         <Plus width={imageSize} height={imageSize}/>,
                         <Multiply width={imageSize} height={imageSize}/>,
                         <Division width={imageSize} height={imageSize}/>,                     
                         <ConJ width={imageSize} height={imageSize}/>,                     
                         <DisJ width={imageSize} height={imageSize}/>,                     

                        ];
          



    return (
        <div className="frame" onClick={()=>this.incImage(images.length)}>
           {images[this.state.currentImage]}
        </div>
    )

    }
}