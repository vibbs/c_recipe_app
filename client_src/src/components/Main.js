import React from "react";
import {Switch, Route} from 'react-router-dom';

import AddRecipe from './AddRecipe';
import EditRecipe from './EditRecipe';
import Recipes from './Recipes';
import RecipeDetails from './RecipeDetails';
import About from './About';

import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import Category from './Category';
import CategoryDetails from './CategoryDetails';


const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Recipes} />
			<Route exact path='/about' component={About} />
			<Route exact path='/category' component={Category} />
			<Route exact path='/category/add' component={AddCategory} />

			
		

			<Route exact path='/recipes/add' component={AddRecipe} />

			<Route exact path='/recipes/edit/:id' component={EditRecipe} />
			<Route exact path='/category/edit/:id' component={EditCategory} />


			<Route exact path='/recipes/:id' component={RecipeDetails} />
			<Route exact path='/category/:id' component={CategoryDetails} />
		</Switch>
	</main>

	)

export default Main;
