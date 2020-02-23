import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import elementsReducer from './elements/elements.reducer';
const conf = {
    key:'root',
    storage,
    whitelist:['elements']
}

export default persistReducer(conf,combineReducers({
    basicOperations:elementsReducer
}));


