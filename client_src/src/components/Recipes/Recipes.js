import React, {Component} from "react";
import axios from 'axios';
import RecipeItem from './RecipeItem';
import {Link} from 'react-router-dom';


class Recipes extends Component{
	constructor(){
		super();
		this.state = {
			recipes : [],
			random_recipe : {},
		}
	}
	componentWillMount(){
		this.getRecipes();
		this.getRandom();
	}
	getRecipes(){
		axios.get('http://localhost:3000/api/recipes')
		.then(response => {
			this.setState({recipes : response.data},() => {
				//console.log(this.state);
			})
		}).catch(err => console.log(err))
	}
	getRandom(){
		axios.get('http://localhost:3000/api/recipes/random')
		.then(response => {

			if(response.data.data.length >0){
				this.setState({random_recipe : response.data.data[0]},() => {
					//console.log(this.state);
				})
			}
		}).catch(err => console.log(err))
	}
	render(){
		const recipeItems = this.state.recipes.map((recipe, i) => {
			return (
				<RecipeItem item={recipe} key= {recipe.id}/>
			)
		})
		return (
				<div >
				<div className="row" >
				<h1  className="col s8"> My Recipes </h1>

				
				<Link className="btn blue pad-mar col s4" to={`/recipes/${this.state.random_recipe._id}`}>
				Get Random	
				</Link>
	
				</div>
				    
						<ul className="collection">
							{recipeItems}
						</ul>
				  </div>
			)
	}
}


export default Recipes;
