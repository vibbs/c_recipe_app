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
      if(response.data.hasOwnProperty('ingredient_list')){
        this.setState({ingredient_list : response.data.ingredient_list},() => {
  				//console.log(this.state);
  			})
      }

		}).catch(err => console.log(err))
	}


  onDelete(){
    axios.delete(`http://localhost:3000/api/recipes/${this.props.match.params.id}`)
    .then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err))
  }
  render() {
      const ingredient_list = this.state.ingredient_list.map((item, i) => {
  			return (
          <tr >
              <td className="col s10">{item.name}</td>
              <td className="right col s2">{item.qty}</td>
          </tr>

          
  			)
  		})


    return (
    <div>
    <br/>
    <Link className="btn grey" to="/">Back</Link>
    <h1>{this.state.details.name}</h1>
  

    <table className="bordered">
      <thead >
        <tr>
            <th className="col s10">Step</th>
            <th className="right col s2">Qty</th>
        </tr>
      </thead>
      <tbody>
        {ingredient_list}
      </tbody>  
    </table>


        <h5>Description</h5>
        <text className="right col s2">{this.state.details.desc}</text>

        
    <Link className="btn pad-mar" to={`/recipes/edit/${this.state.details.id}`}>
    Edit</Link>

    <button onClick={this.onDelete.bind(this)} className="btn red right pad-mar">Delete</button>
    </div>
    )


  }
}

export default RecipeDetails;
