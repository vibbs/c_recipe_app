import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import RecipeItem from '../Recipes/RecipeItem';

class CategoryDetails extends Component {
  constructor(props){
		super(props);
		this.state = {
			details : '',
      recipes : []
		}
	}
  componentWillMount(){
    console.log("test");
    this.getCategory();
    this.getRecipes();
  }
  
  getRecipes(){
		axios.get(`http://localhost:3000/api/recipes?filter={"where":{"categories_list":{"like":"${this.props.match.params.id}.*","options":"i"}}}`)
		.then(response => {
			this.setState({recipes : response.data},() => {
				//console.log(this.state);
			})
		}).catch(err => console.log(err))
  }
  
	getCategory(){
    console.log("test");
		axios.get(`http://localhost:3000/api/categories/${this.props.match.params.id}`)
		.then(response => {
			this.setState({details : response.data},() => {

        console.log("test");
        console.log(response);
				console.log(this.state);
			})

		}).catch(err => console.log(err))
	}


  onDelete(){
    axios.delete(`http://localhost:3000/api/categories/${this.props.match.params.id}`)
    .then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err))
  }



  render() {
    const recipeItems = this.state.recipes.map((recipe, i) => {
			return (
				<RecipeItem item={recipe} key= {recipe.id}/>
			)
		})
    return (
    <div>
    <br/>
    <Link className="btn grey" to="/categories">Back</Link>
    <h1>{this.state.details.name}</h1>

    <div>
      <ul className="collection">
        {recipeItems}
      </ul>
		</div>

    {/* <Link className="btn" to={`/categories/edit/${this.state.details.name}`}>
    Edit</Link> */}

    {/* <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button> */}
    </div>
    )


  }
}

export default CategoryDetails;


/*

{ fields: {id: true, make: true, model: true} }
{"where":{"categories_list":{"like":"Refresh.*","options":"i"}}}


*/