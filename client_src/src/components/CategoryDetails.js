import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class CategoryDetails extends Component {
  constructor(props){
		super(props);
		this.state = {
			details : '',
		}
	}
  componentWillMount(){
    console.log("test");
		this.getCategory();
	}

	getCategory(){
    console.log("test");
		axios.get(`http://localhost:3000/api/categories/${this.props.match.params.id}`)
		.then(response => {
			this.setState({details : response.data},() => {

        console.log("test");
        console.log(response);
				console.log(this.state);
			})

		}).catch(err => console.log(err))
	}


  onDelete(){
    axios.delete(`http://localhost:3000/api/categories/${this.props.match.params.id}`)
    .then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err))
  }
  render() {

    return (
    <div>
    <br/>
    <Link className="btn grey" to="/">Back</Link>
    <h1>{this.state.details.name}</h1>

    <Link className="btn" to={`/categories/edit/${this.state.details.id}`}>
    Edit</Link>

    {/* <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button> */}
    </div>
    )


  }
}

export default CategoryDetails;
