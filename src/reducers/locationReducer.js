import locationActionTypes from '../actionTypes/locationActionTypes';

const defaultState = {
	provinces: [],
	cities: [],
	districts: [],
	subDistricts: [],
	isLoading: false,
	isError: false,
	error: '',
};

export default (state = defaultState, action) =>{
	switch (action.type){
		case locationActionTypes.GET_PROVINCES_REQUEST:
		case locationActionTypes.GET_CITIES_REQUEST:
		case locationActionTypes.GET_DISTRICTS_REQUEST:
		case locationActionTypes.GET_SUB_DISTRICTS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case locationActionTypes.GET_PROVINCES_SUCCESS:
			return {
				...state,
				provinces: action.payload,
				isLoading: false
			};
		case locationActionTypes.GET_CITIES_SUCCESS:
			return {
				...state,
				cities: action.payload,
				isLoading: false
			};
		case locationActionTypes.GET_DISTRICTS_SUCCESS:
			return {
				...state,
				districts: action.payload,
				isLoading: false
			};
		case locationActionTypes.GET_SUB_DISTRICTS_SUCCESS:
			return {
				...state,
				subDistricts: action.payload,
				isLoading: false
			};
		case locationActionTypes.GET_PROVINCES_FAIL:
		case locationActionTypes.GET_CITIES_FAIL:
		case locationActionTypes.GET_DISTRICTS_FAIL:
		case locationActionTypes.GET_SUB_DISTRICTS_FAIL:
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload
			};
		default: return state
	}
}