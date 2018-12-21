import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CustomSelect = ({ label, value, options, handleChange, isLoading }) => {
	return (
		<div>
			<h3>{label}</h3>
			<Select
				value={value}
				isDisabled={isLoading}
				options={options}
				onChange={handleChange}
				isLoading={isLoading}
			/>
		</div>
	);
};

CustomSelect.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.string
	}).isRequired,
	options,
	handleChange,
	isLoading
};

export default memo(CustomSelect);
