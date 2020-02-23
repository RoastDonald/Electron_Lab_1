import React from 'react';
import './action-element.styles.scss';



import {ReactComponent as Minus} from './minus.svg';
import {ReactComponent as Multiply} from './multiply.svg';
import {ReactComponent as Plus} from './plus.svg';
import {ReactComponent as Division} from './division.svg';
import {ReactComponent as Trash} from './rubbish.svg';

import {ReactComponent as ConJ} from './ConJ.svg';
import {ReactComponent as DisJ} from './DisJ.svg';


import ActionForm from '../action-form/action-form.component';


 class ActionElement extends React.Component {

    state = {
        isOpen:false
    }


    hanldeFormOpen = () =>{
        this.setState({isOpen:true})
    }


    handleFormClose = ()=>{
        this.setState({isOpen:false})
    }

    handleFormUpdate = (action) =>{
        
        this.props.updateOperation(action);
        this.handleFormClose();
    }




    handleDeleteAction = ()=>{
        this.props.onDeleteElement(this.props.id);
    }
    

    render(){
        const IMAGE_SIZE = 60;

        //E84775
        const imageTable = {     //O(1)
            "minus":<Minus width={IMAGE_SIZE} height={IMAGE_SIZE}/>,
            "plus":<Plus width={IMAGE_SIZE} height={IMAGE_SIZE} />,
            "multiply":<Multiply width={IMAGE_SIZE} height={IMAGE_SIZE} />,
            "division": <Division width={IMAGE_SIZE} height={IMAGE_SIZE} />,
            "conj":<ConJ width={IMAGE_SIZE} height={IMAGE_SIZE} />,
            "disj":<DisJ width={IMAGE_SIZE} height={IMAGE_SIZE} />
        }
        const image = imageTable[this.props.action];  


        if(!this.state.isOpen){
        return (
            <div className="action-element" onClick={this.hanldeFormOpen}>
                {image}
                <Trash width={25} height={25} className="trash-action" onClick={this.handleDeleteAction}/>
               
            </div>
        )
        }else{
            return (
                <div>
                    <ActionForm
                        onActionFormSubmit={this.handleFormUpdate}
                        onActionFormClose={this.handleFormClose}
                        {...this.props}
                    />
                </div>
            )
        }
    }
}

export default ActionElement;