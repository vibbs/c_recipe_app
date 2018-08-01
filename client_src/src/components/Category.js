import React, {Component} from "react";
import axios from 'axios';
import CategoryItem from './CategoryItem';

class Category extends Component{ 
  constructor(){
		super();
		this.state = {
			categories : []
		}
	}
	componentWillMount(){
		this.getCategories();
	}
	getCategories(){
		axios.get('http://localhost:3000/api/categories')
		.then(response => {
			this.setState({categories : response.data},() => {
				//console.log(this.state);
			})
		}).catch(err => console.log(err))
	}
	render(){
		const categoryItems = this.state.categories.map((category, i) => {
			return (
				<CategoryItem item={category} key= {category.name}/>
			)
		})
		return (
				<div>
				    <h1> Categories </h1>
						<ul className="collection">
							{categoryItems}
						</ul>
						</div>
				 
			)
	}
}

export default Category;
