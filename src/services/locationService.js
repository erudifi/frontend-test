import axios from 'axios';

export default {
	getLocation,
	getProvince,
	getCities,
	getDistricts,
	getSubDistricts
}

function getLocation() {
	const sucess = position => {
		return console.log(position)
	};

	const fail = error => {
		return console.error(error)
	};

	window.navigator.geolocation.getCurrentPosition(sucess, fail)
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