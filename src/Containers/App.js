import React from "react";
import { Switch, Route } from "react-router-dom";
import FormPage from './FormPage';
import HomePage from './HomePage';

const App = () => (
	<Switch>
		<Route  path="/" component={FormPage} exact />
		<Route path="/home" component={HomePage} exact />
	</Switch>
);

export default App;