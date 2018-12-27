import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import CustomSelect from '../components/CustomSelect';


const RegistrationForm = ({ handleSubmit, provinces, cities, districts, subDistricts, selectedProvince, selectedCity, selectedDistrict }) => {
	return (
		<form onSubmit={handleSubmit}>
			<Field
				name="province"
				component={CustomSelect}
				label={"Province"}
				options={provinces}
				isLoading={provinces.length === 0}
				isDisabled={false}
			/>
			<Field
				name="city"
				component={CustomSelect}
				label={"Cities"}
				options={cities}
				isLoading={cities.length === 0}
				isDisabled={!selectedProvince.value}

			/>
			<Field
				name="district"
				component={CustomSelect}
				label={"District"}
				options={districts}
				isLoading={districts.length === 0}
				isDisabled={!selectedCity.value}
			/>
			<Field
				name="subdistrict"
				component={CustomSelect}
				label={"Sub-District"}
				options={subDistricts}
				isLoading={subDistricts.length === 0}
				isDisabled={!selectedDistrict.value}
			/>
			<button
				type="submit"
				style={{
					marginTop: '16px',
					width: '70px',
					height: '30px',
					borderRadius: '8px'
				}}
			>
				Submit
			</button>
		</form>
	);
};

RegistrationForm.defaultProps = {
	provinces: [{ label: '', value: 0 }],
	cities: [{ label: '', value: 0 }],
	districts: [{ label: '', value: 0 }],
	subDistricts: [{ label: '', value: 0 }],

	selectedProvince: { label: '', value: 0 },
	selectedCity: { label: '', value: 0 },
	selectedDistrict: { label: '', value: 0 }
};

RegistrationForm.propTypes = {
	handleSubmit: PropTypes.func.isRequired,

	provinces: PropTypes.array.isRequired,
	cities: PropTypes.array.isRequired,
	districts: PropTypes.array.isRequired,
	subDistricts: PropTypes.array.isRequired,

	selectedProvince: PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.number
	}),
	selectedCity: PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.number
	}),
	selectedDistrict: PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.number
	})
};

export default reduxForm({ form: 'RegistrationForm'})(RegistrationForm);
