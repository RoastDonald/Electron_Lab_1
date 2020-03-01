import React from 'react';
import {connect} from 'react-redux';
import CreateFormComponent  from '../triangle-form/triangle-form.component'; 
import {FormContainer} from './edit-triangle-container.styles';
import {updateTriangle} from '../../redux/triangles/triangles.actions';
import { createStructuredSelector } from 'reselect';
import {selectCurrentEdit} from '../../redux/triangles/tringles.selectors';
const FormReduxComponent = CreateFormComponent('editTriangle');


const EditTriangleContainer = (props)=>(
    <div>
        <FormContainer/>
        <FormReduxComponent
            onSubmit={props.updateTriangle}
            onClose={props.closeForm}
            id={props.id}
            currentEdit={props.currentEdit}
        />
    </div>
);


const mapStateToProps = createStructuredSelector({
    currentEdit: selectCurrentEdit
})

const mapDispatchToProps = dispatch =>({
    closeForm:()=>dispatch({type:'CLOSE_FORM'}),
    updateTriangle:(triangle)=>{
        dispatch(updateTriangle(triangle))
        dispatch({type:'CLOSE_FORM'});
    }
});

export default connect(mapStateToProps,mapDispatchToProps)(EditTriangleContainer);