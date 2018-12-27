import { combineReducers } from 'redux';
import locationReducer from './locationReducer';

export default combineReducers({
	location: locationReducer
});