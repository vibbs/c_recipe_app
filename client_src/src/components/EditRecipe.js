import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Select from 'react-select';

class EditRecipe extends Component {


  constructor(props){
    super(props);
    this.state = {
      id : '',
      name : '',
      desc : '',
      categories: [],
      categories_list : [],
      selectedOption: [],
      ingredient_list : []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount(){
    this.getRecipe();
    this.getCategories();
  }

  getCategories(){
		axios.get('http://localhost:3000/api/categories')
		.then(response => {
			this.setState({categories : response.data},() => {
				//console.log(response.data);
			})
		}).catch(err => console.log(err))
  }

  getRecipe(){
		axios.get(`http://localhost:3000/api/recipes/${this.props.match.params.id}`)
		.then(response => {
			this.setState({
        name : response.data.name,
        desc : response.data.desc,
        ingredient_list : response.data.ingredient_list || [],
        categories_list : response.data.categories_list || [],
        selectedOption : response.data.categories_list.map((name, i) => {
          return (
            {
              label : name,
              value : name
            }
          )
        })
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
    console.log("newRecipe : " + JSON.stringify(newRecipe));
    console.log(newRecipe.toString());
    axios.request({
      method:'PUT',
      url:`http://localhost:3000/api/recipes/${this.props.match.params.id}`,
      data : newRecipe
    }).then(response =>{
      console.log(response);
      this.props.history.push(`/recipes/${this.props.match.params.id}`);
    }).catch(err => console.log(err))
  }

  onSubmit(e){
    const newRecipe = {
      name : this.refs.name.value,
      desc : this.refs.desc.value,
      categories_list : this.state.categories_list,
      ingredient_list : this.state.ingredient_list,
    }
    this.editRecipe(newRecipe);
    e.preventDefault();
  }

  handleInputChange= (idx) => (evt) =>{
    const value = evt.target.value;
    const name = evt.target.name;
    console.log(name)
    if(name.includes("i-")){
      const newIngredients = this.state.ingredient_list.map((ingredient, sidx) => {
        console.log(ingredient)
        if (idx !== sidx) return ingredient;
        if(name.includes("i-name")){
          return { ...ingredient, name: value };
        }else if(name.includes("i-qty")){
          return { ...ingredient, qty: value };
        }
        
      });
  
      this.setState({ ingredient_list: newIngredients });


    }else{
      
      this.setState({
        [name] : value
      })
    }
    
  }


  // THis is ingredient_list code 

  
  handleIngredientNameChange = (idx) => (evt) => {
    const newIngredients = this.state.ingredient_list.map((ingredient, sidx) => {
      console.log(ingredient)
      if (idx !== sidx) return ingredient;
    });

    this.setState({ ingredient_list: newIngredients });
  }

  

  handleAddIngredient = () => {
    this.setState({
      ingredient_list: this.state.ingredient_list.concat([{ name: '' , qty : ''}])
    });
  }

  handleRemoveIngredient = (idx) => () => {
    this.setState({
      ingredient_list: this.state.ingredient_list.filter((s, sidx) => idx !== sidx)
    });
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption :selectedOption});
    let newCatList = [];
    for(let i = 0 ; i < selectedOption.length ;  i++){
      newCatList.push(selectedOption[i].value);
    }
    this.setState({ categories_list :newCatList});
  }

  // end of ingredient_list code

  render() {
    const selectedOption  = this.state.selectedOption;
    const categoryItems = this.state.categories.map((category, i) => {
			return (
        {
          label : category.name,
          value : category.name
        }
			)
		})
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

        <div className="input-field">
          <input type="text" name="desc"  ref="desc" value={this.state.desc}
          onChange={this.handleInputChange}/>
          <label htmlFor="desc">Description</label>
        </div>

        <label htmlFor="ingredient_list">Ingredients</label>
{this.state.ingredient_list.map((ingredient, idx) => (
  <div className="row input-field ingredient">
    <input
      className="col s8"
      type="text"
      placeholder={` #${idx + 1} ingredient `}
      name={`i-name-${idx + 1}`}
      value={ingredient.name}
      onChange={this.handleInputChange(idx)}
    />
    <div className="col s1"></div>
    <input
    className="col s2"
      type="text"
      placeholder={`qty`}
      name={`i-qty-${idx + 1}`}
      value={ingredient.qty}
      onChange={this.handleInputChange(idx)}
    />
    <button type="button" onClick={this.handleRemoveIngredient(idx)} className="btn red col s1">-</button>
  
  </div>
))}
<button type="button" onClick={this.handleAddIngredient} className="btn blue">Add Ingredient</button>


 <Select
name="categories"
placeholder="Catergories"
        value={selectedOption}
        isSearchable
        onChange={this.handleChange}
        options={categoryItems}
        isMulti
        className="input-field basic-multi-select"
        classNamePrefix="select"
      />


        <input type="submit" className="btn" value="Save"></input>
      </form>
    </div>
    )


  }
}

export default EditRecipe;
