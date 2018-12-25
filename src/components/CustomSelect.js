import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CustomSelect = ({ label, value, options, handleChange, isLoading, isDisabled }) => {
	return (
		<div>
			<h3>{label}</h3>
			<Select
				value={value}
				isDisabled={isDisabled}
				options={options}
				onChange={handleChange}
				isLoading={isLoading}
			/>
		</div>
	);
};

CustomSelect.defaultProps = {
	label: 'forms',
	value: { label: '', value: 0 },
	options: [{ label: '', value: 0 }],
	isLoading: true,
	isDisabled: true
};

CustomSelect.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.number
	}).isRequired,
	isDisabled: PropTypes.bool.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			value: PropTypes.number
		}).isRequired
	),
	handleChange: PropTypes.func.isRequired,
	isLoading: PropTypes.bool,
};

//Use React.memo to ensure no rerenders unless a prop has changed
export default React.memo(CustomSelect);
