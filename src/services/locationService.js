import axios from 'axios';

export default {
	getGeolocation,
	getReverseGeocoding,
	getProvince,
	getCities,
	getDistricts,
	getSubDistricts
}

function getGeolocation(sucess, fail) {
	window.navigator.geolocation.getCurrentPosition(sucess, fail)
}

function getReverseGeocoding(lat, lng) {
	return axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_API}&lat=${lat}&lon=${lng}&format=json`)
}

function getProvince() {
	return axios.get('https://danacita.co.id/api/locations/v1/provinces')
}

function getCities(id){
	return axios.get(`https://danacita.co.id/api/locations/v1/cities?province_id=${id}`)
}
function getDistricts(id){
	return axios.get(`https://danacita.co.id/api/locations/v1/districts?city_id=${id}`)
}
function getSubDistricts(id){
	return axios.get(`https://danacita.co.id/api/locations/v1/subdistricts?district_id=${id}`)
}