import React from "react";
import {Switch, Route} from 'react-router-dom';

import About from './About';

import AddRecipe from './Recipes/AddRecipe';
import EditRecipe from './Recipes/EditRecipe';
import Recipes from './Recipes/Recipes';
import RecipeDetails from './Recipes/RecipeDetails';

import AddCategory from './Categories/AddCategory';
import EditCategory from './Categories/EditCategory';
import Category from './Categories/Category';
import CategoryDetails from './Categories/CategoryDetails';

import AddLabel from './Labels/AddLabel';
import EditLabel from './Labels/EditLabel';
import Label from './Labels/Label';
import LabelDetails from './Labels/LabelDetails';

import AddGlass from './Glasses/AddGlass';
import EditGlass from './Glasses/EditGlass';
import Glass from './Glasses/Glass';
import GlassDetails from './Glasses/GlassDetails';



const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Recipes} />
			<Route exact path='/about' component={About} />
			<Route exact path='/categories' component={Category} />
			<Route exact path='/labels' component={Label} />
			<Route exact path='/glasses' component={Glass} />


			<Route exact path='/categories/add' component={AddCategory} />
			<Route exact path='/labels/add' component={AddLabel} />
			<Route exact path='/glasses/add' component={AddGlass} />
			<Route exact path='/recipes/add' component={AddRecipe} />

			<Route exact path='/categories/edit/:id' component={EditCategory} />
			<Route exact path='/labels/edit/:id' component={EditLabel} />
			<Route exact path='/glasses/edit/:id' component={EditGlass} />
			<Route exact path='/recipes/edit/:id' component={EditRecipe} />


			<Route exact path='/categories/:id' component={CategoryDetails} />
			<Route exact path='/labels/:id' component={LabelDetails} />
			<Route exact path='/glasses/:id' component={GlassDetails} />
			<Route exact path='/recipes/:id' component={RecipeDetails} />
		</Switch>
	</main>

	)

export default Main;
