import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class AddLabel extends Component {

  addLabel(newLabel){
    console.log(newLabel);
    axios.request({
      method:'POST',
      url:'http://localhost:3000/api/labels',
      data : newLabel
    }).then(response =>{
      //console.log(response);
      this.props.history.push('/labels');
    }).catch(err => console.log(err))
  }

  onSubmit(e){
    const newLabel = {
      name : this.refs.name.value
    }
    this.addLabel(newLabel);
    e.preventDefault();
  }


  render() {
    return (
    <div>
    <br/>
      <Link className="btn grey" to="/labels">Back</Link>
      <h1>AddLabel</h1>
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

export default AddLabel;
