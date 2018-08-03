import React, {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class LabelDetails extends Component {
  constructor(props){
		super(props);
		this.state = {
			details : '',
		}
	}
  componentWillMount(){
    console.log("test");
		this.getLabel();
	}

	getLabel(){
    console.log("test");
		axios.get(`http://localhost:3000/api/labels/${this.props.match.params.id}`)
		.then(response => {
			this.setState({details : response.data},() => {

        console.log("test");
        console.log(response);
				console.log(this.state);
			})

		}).catch(err => console.log(err))
	}


  onDelete(){
    axios.delete(`http://localhost:3000/api/labels/${this.props.match.params.name}`)
    .then(response => {
      this.props.history.push('/labels');
    }).catch(err => console.log(err))
  }
  render() {

    return (
    <div>
    <br/>
    <Link className="btn grey" to="/labels">Back</Link>
    <h1>{this.state.details.name}</h1>

    {/* <Link className="btn" to={`/labels/edit/${this.state.details.name}`}>
    Edit</Link> */}

    {/* <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button> */}
    </div>
    )


  }
}

export default LabelDetails;


/*
{"where":{"labels_list":{"like":"Refresh.*","options":"i"}}}


*/