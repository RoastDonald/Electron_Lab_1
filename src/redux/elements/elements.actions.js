import ElementsTypes from './elements.types';


//OPERATION ACTIONS --------------------------
export const createOperation = (operation)=>({
    type:ElementsTypes.CREATE_OPERATION,
    payload:operation
});

export const updateOperation = (operation)=>({
    type:ElementsTypes.UPDATE_OPERATION,
    payload:operation
});

export const deleteElement= (element)=>({
    type:ElementsTypes.DELETE_ELEMENT,
    payload:element
});
//OPERAND ACTIONS ----------------------------

export const createOperand = (operand)=>({
    type:ElementsTypes.CREATE_OPERAND,
    payload:operand
});

export const updateOperand = (operand)=>({
    type:ElementsTypes.UPDATE_OPERAND,
    payload:operand
});

//ADDITIONAL OPERATIONS-----------------------
export const setInversion = (operand)=>({
    type:ElementsTypes.SET_INVERSION,
    payload:operand
});

export const setNegative = (operand)=>({
    type:ElementsTypes.SET_NEGATIVE,
    payload:operand
});
