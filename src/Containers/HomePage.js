import React, {Component} from 'react';
import locationService from '../services/locationService';

class HomePage extends Component {
	state = {
		position: null,
		error: '',
	};

	async componentDidMount() {
		await locationService.getLocation(this.getLocationSuccess, this.getLocationFail);
	}

	getLocationSuccess = position => {
		this.setState({ position: {lat: position.coords.latitude, lng: position.coords.longitude } })
	};

	getLocationFail = error => {
		this.setState({ error })
	};

	render() {
		const { position } = this.state;
		if(position){
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
