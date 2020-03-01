import React from 'react';
import {
    TringleFigure,
    TrashIcon} from './editable-triangle.styles';

import {connect} from 'react-redux';

const EditableTriangle = (props)=>{

    const {openEditForm, deleteTriangle} = props;
    return (
        <div>
            <TringleFigure
                onClick={()=>openEditForm(props.id)}
            />
        <TrashIcon onClick={()=>deleteTriangle(props.id)}/>
        </div>
    )
            
}


const mapDispatchToProps = dispatch =>({
    openEditForm:(id)=>dispatch({type:'OPEN_EDIT',payload:id}),
    deleteTriangle:(id)=>dispatch({type:'DELETE_TRIANGLE',payload:id})
});

export default connect(null,mapDispatchToProps)(EditableTriangle);