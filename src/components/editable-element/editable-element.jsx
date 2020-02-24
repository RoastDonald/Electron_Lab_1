import React from 'react';
import './editable-element.scss';

import ElementForm from '../element-form/element-form.component';
import Element from '../element/element.component';
import ActionElement from '../editable-action-element/action-element.component';

import {
    setInversion,
    setNegative,
    updateOperand,
    deleteElement,
    updateOperation
    } from '../../redux/elements/elements.actions';


import {connect} from 'react-redux';

class EditableElement extends React.Component {

    


    state = {
        editFormOpen:false,
        isInverted:false,
        isNegative:false,
  
    };

  


    onInvertData = ()=>{
        console.log('called');
        this.setState({isInverted:!this.state.isInverted},()=>{
            this.props.setInversion({
                id:this.props.id,
                isInverted:this.state.isInverted,
            });
        })
        
    }

    onNegativeData = () =>{

        this.setState({isNegative:!this.state.isNegative},()=>{
            this.props.setNegative({
                id:this.props.id,
                isNegative:this.state.isNegative
            });
        })
    }


    handleNegativeData = ()=>{

        this.onNegativeData();
    }

    handleInvertData =()=>{

        this.onInvertData();
    }



    handleEditClick = ()=>{
        this.openForm();
    }

    handleFormClose =() =>{
        this.closeForm();   
    }

    handleOperandSubmit = (element) =>{
        this.props.updateOperand(element);
        this.closeForm();
    }

  


    closeForm = ()=>{
        this.setState({editFormOpen:false});
    }

    openForm = ()=>{
        this.setState({editFormOpen:true});
    }



    render(){


        console.log('EDIT',this.props);
       
        if(this.props.type === 'action'){
            return (
                <ActionElement  
                    action={this.props.action}
                    id={this.props.id}
                    onActionFormSubmit={this.props.updateOperation}
                    onDeleteElement={this.props.deleteElement}
                    />
            )
        }

//----------------------------------------------------TODO:DIVIDE INTO CONTROLERS
        else {
            if(this.state.editFormOpen){
            return (
                <ElementForm
                 
                    isInverted={this.state.isInverted}
                    id={this.props.id}
                    name={this.props.name}
                    from={this.props.from}
                    to={this.props.to}
                    onFormSubmit={this.handleOperandSubmit}
                    onFormClose={this.handleFormClose}
                    />
            )
        }
        else {
            return(
                <Element

        
            
                    onNegativeData={this.handleNegativeData}
                    onInvertData={this.handleInvertData}
                    isInverted={this.state.isInverted}
                    isNegative={this.state.isNegative}
                    from={this.props.from}
                    to={this.props.to}
                    id={this.props.id}
                    name={this.props.name}
                    onEditClick={this.handleEditClick}
                    onDeleteElement={this.props.deleteElement}
                    />
            )
        }
    }
}
}

const mapDispatchToProps = dispatch =>({
  setInversion: (element)=>dispatch(setInversion(element)),
  setNegative: (element)=>dispatch(setNegative(element)),
  updateOperand:(element)=>dispatch(updateOperand(element)),
  deleteElement:(element)=>dispatch(deleteElement(element)),
  updateOperation:(element)=>dispatch(updateOperation(element))
});

export default connect(null,mapDispatchToProps)(EditableElement);
