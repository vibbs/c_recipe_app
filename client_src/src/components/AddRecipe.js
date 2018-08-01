import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Select from 'react-select';

class AddRecipe extends Component {
  constructor(){
		super();
		this.state = {
      categories : [],
      selectedOption: [],
      categories_list : [],
      ingredient_list: [{ name: '' , qty : ''}]
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
				//console.log(response.data);
			})
		}).catch(err => console.log(err))
  }
  
  handleChange = (selectedOption) => {
    this.setState({ selectedOption :selectedOption});
    let newCatList = [];
    for(let i = 0 ; i < selectedOption.length ;  i++){
      newCatList.push(selectedOption[i].value);
    }
    this.setState({ categories_list :newCatList});
  }

  onSubmit(e){
    const newRecipe = {
      name : this.refs.name.value,
      desc : this.refs.desc.value,
      categories_list : this.state.categories_list,
      ingredient_list : this.state.ingredient_list,
    }
    this.addRecipe(newRecipe);
    e.preventDefault();
  }




  // THis is ingredient_list code 

  
  handleIngredientNameChange = (idx) => (evt) => {
    const newIngredients = this.state.ingredient_list.map((ingredient, sidx) => {
      console.log(ingredient)
      if (idx !== sidx) return ingredient;
      if(evt.target.name === "name"){
        return { ...ingredient, name: evt.target.value };
      }else if(evt.target.name === "qty"){
        return { ...ingredient, qty: evt.target.value };
      }
      
    });

    this.setState({ ingredient_list: newIngredients });
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
    // const ingredientList = this.state.ingredient_list.map((ingredient, idx) => (
  
    //   <IngredientItem item={ingredient} idx ={idx} key={idx} />
    // ))
    return (
    <div>
    <br/>
      <Link className="btn grey" to="/">Back</Link>
      <h1>AddRecipe</h1>
      <form onSubmit={this.onSubmit.bind(this)}>

      <label htmlFor="name"> Name</label>
        <div className="input-field">
          <input type="text" name="name"  ref="name"/>
          
        </div>

<label htmlFor="desc">Description</label>
        <div className="input-field">
          <input type="text" name="desc"  ref="desc"/>
          
        </div>

<label htmlFor="ingredient_list">Ingredients</label>
{this.state.ingredient_list.map((ingredient, idx) => (
  
  <div className="row input-field ingredient" key={idx}>
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



        <input type="submit" className="btn pad-mar" value="Save"></input>
      </form>
    </div>
    )


  }
}

export default AddRecipe;
