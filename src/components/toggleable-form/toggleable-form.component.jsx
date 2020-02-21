import React from 'react';
import './toggleable-form.styles.scss';


import { ReactComponent as PlusIcon } from './plus.svg';
import { ReactComponent as PlusAction } from './plusAction.svg';


import ElementForm from '../element-form/element-form.component';
import ActionForm from '../action-form/action-form.component';

class ToggleableForm extends React.Component{
    
    state = {
        isOpen:false,
        isActionOpen:false
    };

    handleFormOpen = ()=>{
        this.setState({isOpen:true});
    };


    handleFormClose = () =>{
        this.setState({isOpen:false});
    };

    handleFormSubmit = (element)=>{
       
        this.props.onFormSubmit(element);
        this.handleFormClose();
    };






    handleActionFormSubmit = (element) =>{
        this.props.onActionFormSubmit(element);
        this.setState({isActionOpen:false});
    }

    handleActionFormClose = ()=>{
        this.setState({isActionOpen:false})
    }

    handleActionFormOpen = () =>{
        this.setState({isActionOpen:true})
    }



    iconSize = 70;
    render(){

        
        if(this.props.isLastOperand){
            if(this.state.isActionOpen){
                return (
                <ActionForm
                    onActionFormSubmit={this.props.onActionFormSubmit}
                    onActionFormClose={this.handleActionFormClose}
                    id={this.props.id}
                />
                )
            }

           else { return (
                <div className="icon" onClick={this.handleActionFormOpen}>
                    <PlusAction width={this.iconSize} height={this.iconSize} />
                </div>
                )
             }
    }
         
        

       
       
        else {
            if(this.state.isOpen){
            return(
                <ElementForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}

                />
            )
        }
        else{
            return (
                <div className="icon">
                    <button onClick={this.handleFormOpen}>
                        <PlusIcon width={this.iconSize} height={this.iconSize}/>
                    </button>
                </div>
            )
        }
    }
}
}

export default ToggleableForm;