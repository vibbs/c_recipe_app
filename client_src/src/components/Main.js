import React from "react";
import {Switch, Route} from 'react-router-dom';

import AddRecipe from './AddRecipe';
import EditRecipe from './EditRecipe';
import Recipes from './Recipes';
import RecipeDetails from './RecipeDetails';
import About from './About';


const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Recipes} />
			<Route exact path='/about' component={About} />

			<Route exact path='/recipes/add' component={AddRecipe} />
			<Route exact path='/recipes/edit/:id' component={EditRecipe} />
			<Route exact path='/recipes/:id' component={RecipeDetails} />
		</Switch>
	</main>

	)

export default Main;
