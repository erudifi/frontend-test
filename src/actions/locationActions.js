import locationService from '../services/locationService';
import locationActionTypes from '../actionTypes/locationActionTypes';

export default {
	getProvinces,
	getCities,
	getDistricts,
	getSubDistricts
}

function getProvinces(){
	const request = () => ({
		type: locationActionTypes.GET_PROVINCES_REQUEST
	});

	const success = provinces => ({
		type: locationActionTypes.GET_PROVINCES_SUCCESS,
		payload: provinces
	});

	const fail = error => ({
		type: locationActionTypes.GET_PROVINCES_FAIL,
		payload: error,
		error: true
	});

	return dispatch => {
		dispatch(request());
		return locationService.getProvince().then(
			res=>{
		 	const provinces = res.data.provinces.map(province => ({
					label: province.name,
					value: province.id
			}));
		 	dispatch(success(provinces))
		 },
			err=>{
		 	  dispatch(fail(err))
		 })
	}
}

function getCities(id){
	const request = () => ({
		type: locationActionTypes.GET_CITIES_REQUEST
	});

	const success = cities => ({
		type: locationActionTypes.GET_CITIES_SUCCESS,
		payload: cities
	});

	const fail = error => ({
		type: locationActionTypes.GET_CITIES_FAIL,
		payload: error,
		error: true
	});

	return dispatch => {
		dispatch(request());
		return locationService.getCities(id).then(
			res=>{
		 	const cities = res.data.cities.map(city => ({
					label: city.name,
					value: city.id
			}));
		 	dispatch(success(cities))
		 },
			err=>{
		 	  dispatch(fail(err))
		 })
	}
}

function getDistricts(id){
	const request = () => ({
		type: locationActionTypes.GET_DISTRICTS_REQUEST
	});

	const success = districts => ({
		type: locationActionTypes.GET_DISTRICTS_SUCCESS,
		payload: districts
	});

	const fail = error => ({
		type: locationActionTypes.GET_DISTRICTS_FAIL,
		payload: error,
		error: true
	});

	return dispatch => {
		dispatch(request());
		return locationService.getDistricts(id).then(
			res=>{
				const districts = res.data.districts.map(district => ({
					label: district.name,
					value: district.id
				}));
				dispatch(success(districts))
			},
			err=>{
				dispatch(fail(err))
			})
	}
}

function getSubDistricts(id){
	const request = () => ({
		type: locationActionTypes.GET_SUB_DISTRICTS_REQUEST
	});

	const success = subdistricts => ({
		type: locationActionTypes.GET_SUB_DISTRICTS_SUCCESS,
		payload: subdistricts
	});

	const fail = error => ({
		type: locationActionTypes.GET_SUB_DISTRICTS_FAIL,
		payload: error,
		error: true
	});

	return dispatch => {
		dispatch(request());
		return locationService.getSubDistricts(id).then(
			res=>{
				const subdistricts = res.data.subdistricts.map(subdistrict => ({
					label: subdistrict.name,
					value: subdistrict.id
				}));
				dispatch(success(subdistricts))
			},
			err=>{
				dispatch(fail(err))
			})
	}
}