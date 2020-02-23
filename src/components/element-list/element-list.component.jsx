import React from 'react';
import './element-list.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import EditableElement from '../editable-element/editable-element';
import {selectElements} from '../../redux/elements/elements.selectors';

const ElementList = ({elements})=>{


    
return(
    <div className="elements">
        {
            elements.map(({id,...props})=>(
                <EditableElement
                key={id}
                id={id}
                {...props}
                />
            ))
        }
    </div>
)
    }

const mapStateToProps = createStructuredSelector({
    elements:selectElements
})

export default connect(mapStateToProps)(ElementList);