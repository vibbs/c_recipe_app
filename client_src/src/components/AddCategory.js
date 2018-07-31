import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class AddCategory extends Component {

  addCategory(newCategory){
    console.log(newCategory);
    axios.request({
      method:'POST',
      url:'http://localhost:3000/api/categories',
      data : newCategory
    }).then(response =>{
      //console.log(response);
      this.props.history.push('/category');
    }).catch(err => console.log(err))
  }

  onSubmit(e){
    const newCategory = {
      name : this.refs.name.value
    }
    this.addCategory(newCategory);
    e.preventDefault();
  }


  render() {
    return (
    <div>
    <br/>
      <Link className="btn grey" to="/">Back</Link>
      <h1>AddCategory</h1>
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
          <input type="text" name="name"  ref="name"/>
          <label htmlFor="name"> Name</label>
        </div>

        <input type="submit" className="btn" value="Save"></input>
      </form>
    </div>
    )


  }
}

export default AddCategory;
