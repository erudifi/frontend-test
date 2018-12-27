import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const CustomSelect = React.memo(({
	                      input: { value, onChange },
	                      meta:{ touched, error },
	                      label, options, isLoading, isDisabled
}) => {
	return (
		<div>
			<h3>{label}</h3>
			<Select
				value={value}
				isDisabled={isDisabled}
				options={options}
				onChange={onChange}
				isLoading={isLoading}
			/>
		</div>
	);
});

CustomSelect.defaultProps = {
	label: 'forms',
	options: [{ label: '', value: 0 }],
	isLoading: true,
	isDisabled: true
};

CustomSelect.propTypes = {
	label: PropTypes.string.isRequired,
	value: PropTypes.shape({
		label: PropTypes.string,
		value: PropTypes.number
	}),
	isDisabled: PropTypes.bool.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string,
			value: PropTypes.number
		}).isRequired
	),
	isLoading: PropTypes.bool,
};

//Use React.memo to ensure no rerenders unless a prop has changed
export default React.memo(CustomSelect);
