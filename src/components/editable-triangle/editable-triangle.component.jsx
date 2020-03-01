import React from 'react';
import {TringleFigure} from './editable-triangle.styles';
import {connect} from 'react-redux';

const EditableTriangle = (props)=>{

    const {openEditForm} = props;

    return (
        <TringleFigure
            onClick={openEditForm}
        />
        )
            
}


const mapDispatchToProps = dispatch =>({
    openEditForm:()=>dispatch({type:'OPEN_EDIT'})
})

export default connect(null,mapDispatchToProps)(EditableTriangle);