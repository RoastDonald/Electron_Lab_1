import React from 'react';
import './element-list.styles.scss';

import EditableElement from '../editable-element/editable-element';

class ElementList extends React.Component {


    

    render(){
        console.log(this.props.elements);

      const elements = this.props.elements.map(({id,...props})=>(
            <EditableElement
                key={id}
                id={id}
                onFormSubmit={this.props.onFormSubmit}
                onTrashClick={this.props.onTrashClick}
                onInversionUpdate={this.props.onInversionUpdate}
                onNegativeUpdate={this.props.onNegativeUpdate}
                isLastOperand={this.props.isLastOperand}
                onActionUpdate={this.props.onActionUpdate}
               
                {...props}
                />
        ));


      
        
        return (
            <div className="elements">
                {elements}
            </div>
        )
        
    }
}

export default ElementList;