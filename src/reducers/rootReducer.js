import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
	form: formReducer,
	location: locationReducer
});