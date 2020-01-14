import { combineReducers } from 'redux';
import ContactsReducer from './contactReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
	contacts: ContactsReducer,
    loginReducer : loginReducer
});

export default rootReducer;
