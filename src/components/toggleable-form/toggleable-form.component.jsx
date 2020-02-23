import React from 'react';
import './toggleable-form.styles.scss';


import { ReactComponent as PlusIcon } from './plus.svg';
import { ReactComponent as PlusAction } from './plusAction.svg';
import {connect} from 'react-redux';
import {createOperation, createOperand} from '../../redux/elements/elements.actions';
import ElementForm from '../element-form/element-form.component';
import ActionForm from '../action-form/action-form.component';
import {isLastOperand} from '../../redux/elements/elements.utils';
import {selectElements} from '../../redux/elements/elements.selectors';
import {createStructuredSelector} from 'reselect';



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

        this.props.createOperand(element);
        this.handleFormClose();
    };



    handleActionFormSubmit = (element) =>{
        this.props.createOperation(element);
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
        let isLast =  isLastOperand(this.props.elements);


        if(isLast){
            if(this.state.isActionOpen){
                return (
                <ActionForm
                    onActionFormSubmit={this.handleActionFormSubmit}
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


const mapStateToProps = createStructuredSelector({
    elements:selectElements
})


const mapDispatchToProps = dispatch =>({
    createOperation:(element)=>dispatch(createOperation(element)),
    createOperand:(element)=>dispatch(createOperand(element))
});

export default connect(mapStateToProps,mapDispatchToProps)(ToggleableForm);