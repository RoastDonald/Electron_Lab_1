import triangleTypes from './triangles.type';
import {
    hanldeCreation,
    handleEdition,
    handleDelition
} from './triangles.utils';
const INITIAL_STATE = {
    triangles:[],
    currentEdit:null,
    formType:'none'
};
const triangleReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case triangleTypes.CREATE_TRIANGLE:
            return {
                ...state,
                triangles: hanldeCreation(state,action.payload)
            }
        case triangleTypes.OPEN_CREATE:
            return {
                ...state,
                formType:'create'
            }

        case triangleTypes.OPEN_EDIT:
            return {
                ...state,
                formType:'edit',
                currentEdit:handleEdition(state, action.payload)
            }
        case triangleTypes.DELETE_TRIANGLE:
            return {
                ...state,
                triangles:handleDelition(state,action.payload)
            }
        case triangleTypes.OPEN_POP_UP:
            return {
                ...state,
                formType:'choose'
            }
        
        case triangleTypes.CLOSE_FORM:
            return {
                ...state,
                formType:'none'
            }

        default:{
            return state;
        }
    }
}

export default triangleReducer;