import React from 'react';
import './roll-bar.styles.scss';

import ElementsList from '../element-list/element-list.component';
import ToggleableForm from '../toggleable-form/toggleable-form.component';

class RollBar extends React.Component{
    
    
    render(){
        
        return (
        <div className="outer-wrapper">
        <div className="element-list">
        <ElementsList
            //Default elements
            elements={this.props.elements}
            onFormSubmit={this.props.handleEditFormSubmit}
            onTrashClick={this.props.handleTrashClick}
            onInversionUpdate={this.props.handeUpdateInversion}
            onNegativeUpdate={this.props.handleUpdateNegative}
            
            //Change action 
            onActionUpdate={this.props.handleUpdateAction}
            //Action part
            isLastOperand={this.props.isLastELementOperand()}

           


        />
        <ToggleableForm
            isOpen={false}
            onFormSubmit={this.props.handleCreateFormSubmit}
            onActionFormSubmit={this.props.handleCreateActionFormSubmit}
            isLastOperand={this.props.isLastELementOperand()}
            />
        </div>
        </div>
        )
    }
}

export default RollBar;

