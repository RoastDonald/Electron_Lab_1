import React from 'react';
import './editable-element.scss';

import ElementForm from '../element-form/element-form.component';
import Element from '../element/element.component';
import ActionElement from '../editable-action-element/action-element.component';


class EditableElement extends React.Component {

    state = {
        editFormOpen:false,
        light:false,
        inverted:false,
        negative:false,
  
    };


    onLightPush = ()=>{             
        this.setState({light:true});    

    }

    handleLightPush = ()=>{
        this.onLightPush();
    }


    toInvertDATA = ()=>{
        
        this.setState({inverted:!this.state.inverted},()=>{
            this.props.onInversionUpdate({
                id:this.props.id,
                inverted:this.state.inverted,
                isCorrect:this.state.isCorrect
            });
        })
        
    }

    toNegativeData = () =>{
        
        this.setState({negative:!this.state.negative},()=>{
            this.props.onNegativeUpdate({
                id:this.props.id,
                negative:this.state.negative
            });
        })
    }


    handleNegativeDATA = ()=>{
        this.toNegativeData();
    }

    handleInvertDATA =()=>{

        this.toInvertDATA();
    }



    //delivery
    handleEditClick = ()=>{
        this.openForm();
    }

    handleFormClose =() =>{
        this.closeForm();   
    }

    handleSubmit = (element) =>{
        this.props.onFormSubmit(element);
        this.closeForm();
    }

    //Prepate for delivery

    closeForm = ()=>{
        this.setState({editFormOpen:false});
    }

    openForm = ()=>{
        this.setState({editFormOpen:true});
    }



    render(){
       
        if(this.props.type === 'action'){
            return (
                <ActionElement 
                    onActionUpdate={this.props.onActionUpdate}
                   
                    action={this.props.action}
                    onTrashClick={this.props.onTrashClick}
                    id={this.props.id}
                    />
            )
        }

//----------------------------------------------------TODO:DIVIDE INTO CONTROLERS
        else {
            if(this.state.editFormOpen){
            return (
                <ElementForm
                 
                    isInverted={this.state.inverted}
                    id={this.props.id}
                    name={this.props.name}
                    from={this.props.from}
                    to={this.props.to}
                    onLightPush={this.handleLightPush}
                    onFormSubmit={this.handleSubmit}
                    onFormClose={this.handleFormClose}
                    />
            )
        }
        else {
            return(
                <Element
                    onNegativeDATA={this.handleNegativeDATA}
                    onInvertDATA={this.handleInvertDATA}
                    isInverted={this.state.inverted}
                    isNegative={this.state.negative}
                    from={this.props.from}
                    to={this.props.to}
                    id={this.props.id}
                    name={this.props.name}
                    onEditClick={this.handleEditClick}
                    onTrashClick={this.props.onTrashClick}
                    

                    isHighlighted={this.state.light}
                    />
            )
        }
    }
}
}

export default EditableElement;