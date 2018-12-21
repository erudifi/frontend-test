import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FormPage from 'FormPage';

const App = () => (
	<Router>
		<Route exact path="/" component={FormPage} />
	</Router>
);

export default App;