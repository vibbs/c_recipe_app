import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class RecipeDetails extends Component {
  constructor(props){
		super(props);
		this.state = {
			details : '',
      ingredient_list : []
		}
	}
  componentWillMount(){
		this.getRecipe();
	}
	getRecipe(){
		axios.get(`http://localhost:3000/api/recipes/${this.props.match.params.id}`)
		.then(response => {
			this.setState({details : response.data},() => {
				//console.log(this.state);
			})
      this.setState({ingredient_list : response.data.ingredient_list},() => {
				//console.log(this.state);
			})
		}).catch(err => console.log(err))
	}
  render() {
    const ingredient_list = this.state.ingredient_list.map((item, i) => {
			return (
        <ul className="collection" key= {item.ingredient}>
          <li className="collection-item" >
            {item.ingredient} :
            {item.qty}
          </li>
        </ul>
			)
		})
    return (
    <div>
    <br/>
    <Link className="btn grey" to="/">Back</Link>
    <h1>{this.state.details.name}</h1>

    <ul className="collection">
      <li className="collection-item" >  {ingredient_list}  </li>
    </ul>

    <Link className="btn" to={`recipes/edit/${this.state.details.id}`}>
    Edit</Link>

    <button className="btn red right">Delete</button>
    </div>
    )


  }
}

export default RecipeDetails;
