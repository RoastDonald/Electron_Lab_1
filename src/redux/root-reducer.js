import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import elementsReducer from './elements/elements.reducer';
import triangleReducer from './triangles/triangles.reducer';
import {reducer as formReducer} from 'redux-form';
const conf = {
    key:'root',
    storage,
    whitelist:['basicOperations']
}

export default persistReducer(conf,combineReducers({
    basicOperations:elementsReducer,
    tringleOperations:triangleReducer,
    form:formReducer
}));


