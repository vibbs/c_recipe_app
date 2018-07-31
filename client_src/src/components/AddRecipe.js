import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CategoryItem from './CategoryItem';

class AddRecipe extends Component {
  constructor(){
		super();
		this.state = {
			categories : []
		}
	}
  addRecipe(newRecipe){
    console.log(newRecipe);
    axios.request({
      method:'POST',
      url:'http://localhost:3000/api/recipes',
      data : newRecipe
    }).then(response =>{
      console.log(response);
      this.props.history.push('/');
    }).catch(err => console.log(err))
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

  onSubmit(e){
    const newRecipe = {
      name : this.refs.name.value,
      desc : this.refs.desc.value
    }
    this.addRecipe(newRecipe);
    e.preventDefault();
  }


  render() {
    const categoryItems = this.state.categories.map((category, i) => {
			return (
				<CategoryItem item={category} key= {category.id}/>
			)
		})
    return (
    <div>
    <br/>
      <Link className="btn grey" to="/">Back</Link>
      <h1>AddRecipe</h1>
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
          <input type="text" name="name"  ref="name"/>
          <label htmlFor="name"> Name</label>
        </div>

        <div className="input-field">
          <input type="text" name="desc"  ref="desc"/>
          <label htmlFor="desc">Description</label>
        </div>
        <div>
				    <h1> Categories </h1>
						<ul className="collection">
							{categoryItems}
						</ul>
						</div>
        <input type="submit" className="btn" value="Save"></input>
      </form>
    </div>
    )


  }
}

export default AddRecipe;
