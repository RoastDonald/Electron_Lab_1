import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {
    UpdateTriangleContainer,
    SetButton,
    ResetButton,
    UpdateTringle,
    CloseButton
    } from './create-tringle-container.styles';
import {createTringle} from '../../redux/triangles/triangles.actions';
import {connect} from 'react-redux';
const FormComponent = (props)=>{  
    const { handleSubmit , reset, onClose } = props;


    return (
        <form>

            {/*TOP*/}
            <div>
                <label htmlFor='top'>_TOP</label>
                <Field component='input' type='text' name='top'/>
            </div> 
            
            {/*LEFT*/}
            <div>
                <label htmlFor='left'>_TOP</label>
                <Field component='input' type='text' name='left'/>
            </div>
            
            {/*RIGHT*/}
            <div>
                <label htmlFor='right'>_TOP</label>
                <Field component='input' type='text' name='right'/>
            </div>

            <ResetButton onClick={reset}/>
            <SetButton onClick={handleSubmit}/>
            <CloseButton onClick={onClose}/>
        </form>
        )
    }

   
    
const FormReduxComponent = reduxForm({form:'createTriangle'})(FormComponent);



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