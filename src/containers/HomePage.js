import React, {Component} from 'react';
import locationService from '../services/locationService';

class HomePage extends Component {
	state = {
		position: {},
		error: '',
	};

	async componentDidMount() {
		await locationService.getGeolocation(this.getLocationSuccess, this.getLocationFail);
	}

	async componentDidUpdate(prevProps, prevState) {
		if(JSON.parse(JSON.stringify(prevState.position)) !== JSON.parse(JSON.stringify(this.state.position))){
			const location = await locationService.getReverseGeocoding(this.state.position.lat, this.state.position.lng)
			console.log('location: ', location);
		}
	}


	getLocationSuccess = position => {
		this.setState({ position: {lat: position.coords.latitude, lng: position.coords.longitude } })
	};

	getLocationFail = error => {
		this.setState({ error })
	};

	render() {
		const { position } = this.state;
		if(position.lat && position.lng){
			return (
				<div>
					This is your location {position.lat}, {position.lng}
				</div>
			);
		}
		return <div />
	}
}

export default HomePage;
