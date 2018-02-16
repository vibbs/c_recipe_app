import React, {Component} from "react";
import axios from 'axios';
import RecipeItem from './RecipeItem';

class Recipes extends Component{
	constructor(){
		super();
		this.state = {
			recipes : []
		}
	}
	componentWillMount(){
		this.getRecipes();
	}
	getRecipes(){
		axios.get('http://localhost:3000/api/recipes')
		.then(response => {
			this.setState({recipes : response.data},() => {
				//console.log(this.state);
			})
		}).catch(err => console.log(err))
	}
	render(){
		const recipeItems = this.state.recipes.map((recipe, i) => {
			return (
				<RecipeItem item={recipe}/>
			)
		})
		return (
				<div>
				    <h1> My Recipes </h1>
						<ul className="collection">
							{recipeItems}
						</ul>
				  </div>
			)
	}
}


export default Recipes;
