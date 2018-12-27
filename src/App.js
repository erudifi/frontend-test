import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import FormPage from './containers/RegistrationPage';
import HomePage from './containers/HomePage';

const App = () => (
	<Provider store={store}>
		<Switch>
			<Route  path="/" component={FormPage} exact />
			<Route path="/home" component={HomePage} exact />
		</Switch>
	</Provider>
);

export default App;