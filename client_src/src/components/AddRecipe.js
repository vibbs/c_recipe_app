import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class AddRecipe extends Component {

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

  onSubmit(e){
    const newRecipe = {
      name : this.refs.name.value,
      desc : this.refs.desc.value
    }
    this.addRecipe(newRecipe);
    e.preventDefault();
  }


  render() {
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

        <input type="submit" className="btn" value="Save"></input>
      </form>
    </div>
    )


  }
}

export default AddRecipe;
