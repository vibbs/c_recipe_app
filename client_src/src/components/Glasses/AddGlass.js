import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class AddGlass extends Component {

  addGlass(newGlass){
    console.log(newGlass);
    axios.request({
      method:'POST',
      url:'http://localhost:3000/api/glasses',
      data : newGlass
    }).then(response =>{
      //console.log(response);
      this.props.history.push('/glasses');
    }).catch(err => console.log(err))
  }

  onSubmit(e){
    const newGlass= {
      name : this.refs.name.value
    }
    this.addGlass(newGlass);
    e.preventDefault();
  }


  render() {
    return (
    <div>
    <br/>
      <Link className="btn grey" to="/glasses">Back</Link>
      <h1>AddGlass</h1>
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

export default AddGlass;
