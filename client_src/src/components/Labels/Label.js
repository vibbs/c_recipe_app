import React, {Component} from "react";
import axios from 'axios';
import LabelItem from './LabelItem';

class Label extends Component{ 
  constructor(){
		super();
		this.state = {
			labels : []
		}
	}
	componentWillMount(){
		this.getLabels();
	}
	getLabels(){
		axios.get('http://localhost:3000/api/labels')
		.then(response => {
			this.setState({labels : response.data},() => {
				//console.log(this.state);
			})
		}).catch(err => console.log(err))
	}
	render(){
		const labelItems = this.state.labels.map((label, i) => {
			return (
				<LabelItem item={label} key= {label.name}/>
			)
		})
		return (
				<div>
				    <h1> Labels </h1>
						<ul className="collection">
							{labelItems}
						</ul>
						</div>
				 
			)
	}
}

export default Label;
