import ElementTypes from './elements.types';

import {
    handleCreationOperation,
    handleUpdateOperation,
    handleDelition,
    handleCreationOperand,
    handleUpdatingOperand,
    handleUpdateNegative,
    handleUpdatingInversion,
} from './elements.utils';


const INITIAL_STATE = {
    elements:[]
}

const elementsReducer = (prevState = INITIAL_STATE,action)=>{
    switch(action.type){
        case ElementTypes.CREATE_OPERAND:
            return {
                ...prevState,
                elements:handleCreationOperand(prevState,action.payload)
            }
        case ElementTypes.DELETE_ELEMENT:
            return {
                ...prevState,
                elements:handleDelition(prevState,action.payload)
            }
        case ElementTypes.UPDATE_OPERAND:
            return {
                ...prevState,
                elements:handleUpdatingOperand(prevState,action.payload)
            }
        case ElementTypes.CREATE_OPERATION:
            return {
                ...prevState,
                elements:handleCreationOperation(prevState,action.payload)
            }
        case ElementTypes.UPDATE_OPERATION:
            return {
                ...prevState,
                elements:handleUpdateOperation(prevState,action.payload)
            }
        case ElementTypes.SET_NEGATIVE:
            return {
                ...prevState,
                elements:handleUpdateNegative(prevState,action.payload)
            }
        case ElementTypes.SET_INVERSION:
            return {
                ...prevState,
                elements:handleUpdatingInversion(prevState,action.payload)
            }
       
            default:
                return prevState;
        }
    }

export default elementsReducer;