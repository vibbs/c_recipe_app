import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class EditGlass extends Component {


  constructor(props){
    super(props);
    this.state = {
      name : '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount(){
    this.getGlass();
  }
  getGlass(){
		axios.get(`http://localhost:3000/api/glasses/${this.props.match.params.id}`)
		.then(response => {
      console.log("---"+response);
			this.setState({
        name : response.data.name
      },() => {
				console.log("---"+this.state);
			})

		}).catch(err => console.log(err))
	}


  editGlass(newGlass){
    console.log(newGlass);
    axios.request({
      method:'PUT',
      url:`http://localhost:3000/api/glasses/${this.props.match.params.id}`,
      data : newGlass
    }).then(response =>{
      console.log(response);
      this.props.history.push(`/glasses/${this.props.match.params.id}`);
    }).catch(err => console.log(err))
  }

  onSubmit(e){
    const newGlass = {
      name : this.refs.name.value
    }
    this.editGlass(newGlass);
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
      <h1>Edit Label</h1>
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

export default EditGlass;
