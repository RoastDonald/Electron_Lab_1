import React from 'react';
import {connect} from 'react-redux';
import CreateFormComponent  from '../triangle-form/triangle-form.component'; 
import {createTringle} from '../../redux/triangles/triangles.actions';
import {UpdateTriangleContainer, UpdateTringle} from './create-tringle-container.styles';



const FormReduxComponent = CreateFormComponent('createTriangle');


const CreateTriangleContainer = (props)=>(
    <UpdateTriangleContainer>
        <UpdateTringle/>
        <FormReduxComponent
            onSubmit={props.createTriangle}
            onClose={props.closeForm}
            />
    </UpdateTriangleContainer>        
);



const mapDispatchToProps = dispatch =>({
    closeForm:()=>dispatch({type:'CLOSE_FORM'}),
    createTriangle:(triangle)=>{
        dispatch(createTringle(triangle))
        dispatch({type:'CLOSE_FORM'});
    }
});

export default  connect(null,mapDispatchToProps)(CreateTriangleContainer);