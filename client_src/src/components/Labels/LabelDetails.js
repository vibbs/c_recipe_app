import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import RecipeItem from '../Recipes/RecipeItem';

class LabelDetails extends Component {
  constructor(props){
		super(props);
		this.state = {
      details : '',
      recipes : [],
      random_recipe : {}
    };
    
	}
  componentWillMount(){
    console.log("test");
    this.getLabel();
    this.getRecipes();
    this.getRandom();
	}

	getLabel(){
    console.log("test");
		axios.get(`http://localhost:3000/api/labels/${this.props.match.params.id}`)
		.then(response => {
			this.setState({details : response.data},() => {

        console.log("test");
        console.log(response);
				console.log(this.state);
			})

		}).catch(err => console.log(err))
	}

  getRecipes(){
		axios.get(`http://localhost:3000/api/recipes?filter={"where":{"labels_list":{"like":"${this.props.match.params.id}.*","options":"i"}}}`)
		.then(response => {
			this.setState({recipes : response.data},() => {
				//console.log(this.state);
			})
		}).catch(err => console.log(err))
	}

  getRandom(){
		axios.get(`http://localhost:3000/api/recipes/random?filter={"labels_list":"${this.props.match.params.id}"}`)
		.then(response => {
      console.log(response);
      if(response.data.data.length >0){
        this.setState({random_recipe : response.data.data[0]},() => {
          //console.log(this.state);
        })
      }
			
		}).catch(err => console.log(err))
  }
  
  onDelete(){
    axios.delete(`http://localhost:3000/api/labels/${this.props.match.params.name}`)
    .then(response => {
      this.props.history.push('/labels');
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
      <div  className="row" >
      <br/>
    <Link className="btn grey col s2" to="/labels">Back</Link>
 
    <h1 className="col s8">{this.state.details.name}</h1>
    <Link   className="btn blue col s2" to={`/recipes/${this.state.random_recipe._id}`}>
			Get Random	
				</Link>
        </div>

    <div>
      <ul className="collection">
        {recipeItems}
      </ul>
		</div>


    {/* <Link className="btn" to={`/labels/edit/${this.state.details.name}`}>
    Edit</Link> */}

    {/* <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button> */}
    </div>
    )


  }
}

export default LabelDetails;


/*
{"where":{"labels_list":{"like":"Refresh.*","options":"i"}}}


*/