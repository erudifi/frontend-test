import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import get from 'lodash.get';
import locationActions from '../actions/locationActions'
import RegistrationForm from '../components/RegistrationForm';

const mapStateToProps = state => {
	return {
		provinces: state.location.provinces,
		cities: state.location.cities,
		districts: state.location.districts,
		subDistricts: state.location.subDistricts,

		selectedProvince: formValueSelector('RegistrationForm')(state, 'province'),
		selectedCity: formValueSelector('RegistrationForm')(state, 'city'),
		selectedDistrict: formValueSelector('RegistrationForm')(state, 'district'),
		selectedSubDistric: formValueSelector('RegistrationForm')(state, 'subdistrict'),
	}
};

const mapDispatchToProps =  {
	getProvinces: locationActions.getProvinces,
	getCities: locationActions.getCities,
	getDistricts: locationActions.getDistricts,
	getSubDistricts: locationActions.getSubDistricts
};

class FormPage extends Component {
	componentDidMount() {
		this.props.getProvinces()
	}

	componentDidUpdate(prevProps) {
		if(get(prevProps, 'selectedProvince.value') !== get(this.props, 'selectedProvince.value')){
			this.props.getCities(this.props.selectedProvince.value);
		}

		if(get(prevProps, 'selectedCity.value') !== get(this.props, 'selectedCity.value')){
			this.props.getDistricts(this.props.selectedCity.value);
		}

		if(get(prevProps, 'selectedDistrict.value') !== get(this.props, 'selectedDistrict.value')){
			this.props.getSubDistricts(this.props.selectedDistrict.value)
		}
	}

	handleSubmit = values => {
		console.log({
			selectedProvince: values.province.label,
			selectedCity: values.city.label,
			selectedDistrict: values.district.label,
			selectedSubDistric: values.subdistrict.label
		})
	}

	render() {
		const {
			provinces,
			cities,
			districts,
			subDistricts,
			selectedProvince,
			selectedCity,
			selectedDistrict,
			selectedSubDistric
		} = this.props;
		return (
			<div>
				<RegistrationForm
					provinces={provinces}
					cities={cities}
					districts={districts}
					subDistricts={subDistricts}
					selectedProvince={selectedProvince}
					selectedCity={selectedCity}
					selectedDistrict={selectedDistrict}
					selectedSubDistrics={selectedSubDistric}
					onSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
