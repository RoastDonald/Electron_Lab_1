import triangleTypes from './triangles.type';
import {
    hanldeCreation
} from './triangles.utils';
const INITIAL_STATE = {
    triangles:[],
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
                formType:'edit'
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