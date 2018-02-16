import React from "react";
import {Switch, Route} from 'react-router-dom';

import Recipies from './Recipies';
import About from './About'


const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Recipies} />
			<Route exact path='/about' component={About} />
		</Switch>
	</main>

	)

export default Main;
