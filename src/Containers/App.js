import React, { Component, lazy, Suspense } from 'react';
import locationService from '../services/locationService';
//Lazy load CustomSelect components https://reactjs.org/blog/2018/10/23/react-v-16-6.html
const CustomSelect = lazy(() => import('../Components/CustomSelect') );

class App extends Component {
  state ={
    provinces: [],
    selectedProvince: { label: '', value: 0 },

    cities: [],
	  selectedCity: { label: '', value: 0 },

    districts: [],
    selectedDistrict: { label: '', value: 0 },

    subDistricts: [],
    selectedSubDistrics: { label: '', value: 0 },
  };

	async componentDidMount() {
		//Get the province and set it to state
   const provinces = await this.getProvinces();
   this.setState({ provinces });
	}

	async componentDidUpdate(prevProps, prevState) {
		//If the user change the province, get the cities and reset the selected city, districts and subdistricts
    if(prevState.selectedProvince.value !== this.state.selectedProvince.value){
	    const cities =  await this.getCities(this.state.selectedProvince.value);
	    this.setState({
		    cities,
		    selectedCity: { label: '', value: 0 },
		    selectedDistrict: { label: '', value: 0 },
		    selectedSubDistrics: { label: '', value: 0 }
	    });
    }

		if(prevState.selectedCity.value !== this.state.selectedCity.value){
			//If the user change the city, get the districts and reset the selected districts and subdistricts
			const districts =  await  this.getDistricts(this.state.selectedCity.value);
			this.setState({
				districts,
				selectedDistrict: { label: '', value: 0 },
				selectedSubDistrics: { label: '', value: 0 }
			});
		}

		if(prevState.selectedDistrict.value !== this.state.selectedDistrict.value){
			//If the user change the district, get the cities and reset the selected subdistricts
			const subDistricts =  await this.getSubDistricts(this.state.selectedDistrict.value);
			this.setState({
				subDistricts,
				selectedSubDistrics: { label: '', value: 0 }
			});
		}
	}

	getProvinces = () => {
		return locationService.getProvince().then(data =>
			data.data.provinces.map(province => ({
				label: province.name,
				value: province.id
			}))
		);
  };

	getCities = (id) => {
	  return locationService.getCities(id).then(data =>
		  data.data.cities.map(city => ({
			  label: city.name,
			  value: city.id
		  }))
	  );
  };

	getDistricts = (id) => {
		return locationService.getDistricts(id).then(data =>
			data.data.districts.map(district => ({
				label: district.name,
				value: district.id
			}))
		);
  };

	getSubDistricts = (id) => {
	  return locationService.getSubDistricts(id).then(data =>
		  data.data.subdistricts.map(subdistrict => ({
			  label: subdistrict.name,
			  value: subdistrict.id
		  }))
	  );
  };

	handleChange = selected => value => {
		this.setState({ [selected]: value })
	};


	render() {
	  const {
	  	provinces,
		  cities,
		  districts,
		  subDistricts,
		  selectedProvince,
		  selectedCity,
		  selectedDistrict,
		  selectedSubDistrics
	  } = this.state;
    return (
      <div>
	      <Suspense fallback={<div>Loading...</div>}>
		      <CustomSelect
			      label={"Province"}
			      value={selectedProvince}
			      options={provinces}
			      handleChange={this.handleChange('selectedProvince')}
			      isLoading={provinces.length === 0}
			      isDisabled={false}
		      />
		      <CustomSelect
			      label={"Cities"}
			      value={selectedCity}
			      options={cities}
			      handleChange={this.handleChange('selectedCity')}
			      isLoading={cities.length === 0}
			      isDisabled={!selectedProvince.value}
		      />
		      <CustomSelect
			      label={"Districts"}
			      value={selectedDistrict}
			      options={districts}
			      handleChange={this.handleChange('selectedDistrict')}
			      isLoading={districts.length === 0}
			      isDisabled={!selectedCity.value}
		      />
		      <CustomSelect
			      label={"SubDistricts"}
			      value={selectedSubDistrics}
			      options={subDistricts}
			      handleChange={this.handleChange('selectedSubDistrics')}
			      isLoading={subDistricts.length === 0}
			      isDisabled={!selectedDistrict.value}
		      />
	      </Suspense>
      </div>
    );
  }
}

export default App;
