import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class EditRecipe extends Component {


  constructor(props){
    super(props);
    this.state = {
      id : '',
      name : '',
      ingredient_list : []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount(){
    this.getRecipe();
  }
  getRecipe(){
		axios.get(`http://localhost:3000/api/categories/${this.props.match.params.id}`)
		.then(response => {
			this.setState({
        id : response.data.id,
        name : response.data.name
      },() => {
				//console.log("---"+this.state);
			})
      if(response.data.hasOwnProperty('ingredient_list')){
        this.setState({ingredient_list : response.data.ingredient_list},() => {
  				//console.log(this.state);
  			})
      }

		}).catch(err => console.log(err))
	}


  editRecipe(newRecipe){
    console.log(newRecipe);
    axios.request({
      method:'PUT',
      url:`http://localhost:3000/api/categories/${this.props.match.params.id}`,
      data : newRecipe
    }).then(response =>{
      console.log(response);
      this.props.history.push(`/categories/${this.props.match.params.id}`);
    }).catch(err => console.log(err))
  }

  onSubmit(e){
    const newRecipe = {
      name : this.refs.name.value
    }
    this.editRecipe(newRecipe);
    e.preventDefault();
  }

  handleInputChange(e){
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name] : value
    })
  }

  render() {
    return (
    <div>
    <br/>
      <Link className="btn grey" to="/">Back</Link>
      <h1>AddRecipe</h1>
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
          <input type="text" name="name"  ref="name" value={this.state.name}
          onChange={this.handleInputChange}/>
          <label htmlFor="name"> Name</label>
        </div>

        <input type="submit" className="btn" value="Save"></input>
      </form>
    </div>
    )


  }
}

export default EditRecipe;
