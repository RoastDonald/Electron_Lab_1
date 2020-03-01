import React from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable';
import {ResetButton, SetButton, CloseButton} from './trinagle-form.styles';
import { createStructuredSelector } from 'reselect';

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
                <label htmlFor='left'>_LEFT</label>
                <Field component='input' type='text' name='left'/>
            </div>
            
            {/*RIGHT*/}
            <div>
                <label htmlFor='right'>_RIGHT</label>
                <Field component='input' type='text' name='right'/>
            </div>

            <ResetButton onClick={reset}/>
            <SetButton onClick={handleSubmit}/>
            <CloseButton onClick={onClose}/>
        </form>
        )
}

const mapStateToProps = createStructuredSelector({

});

export default (formName)=>
        compose(
            reduxForm({
                form:formName
            }),
            connect(mapStateToProps)
        )(FormComponent);