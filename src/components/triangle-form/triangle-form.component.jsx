import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import {ResetButton, SetButton, CloseButton} from './trinagle-form.styles';
import {connect} from 'react-redux';

const FormComponent = (props)=>{  
    const { handleSubmit , reset, onClose, currentEdit } = props;

    if(!!currentEdit){
        var {top, left, right} = currentEdit;
    }

    return (
        <form>

            {/*TOP*/}
            <div>
                <label htmlFor='top'>_TOP</label>
                <Field component='input' value={top? top : ""} type='text' name='top'/>
            </div> 
            
            {/*LEFT*/}
            <div>
                <label htmlFor='left'>_LEFT</label>
                <Field component='input' value={right? left : ""} type='text' name='left'/>
            </div>
            
            {/*RIGHT*/}
            <div>
                <label htmlFor='right'>_RIGHT</label>
                <Field component='input' value={right? right : ""} type='text' name='right'/>
            </div>

            <ResetButton onClick={reset}/>
            <SetButton onClick={handleSubmit}/>
            <CloseButton onClick={onClose}/>
        </form>
        )
}

const mapDispatchToProps = dispatch =>({
    //for future updates
});

export default (formName)=>
        compose(
            reduxForm({
                form:formName
            }),
            connect(null,mapDispatchToProps)
        )(FormComponent);