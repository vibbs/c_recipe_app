import React, {Component} from "react";
import axios from 'axios';
import GlassItem from './GlassItem';

class Glass extends Component{ 
  constructor(){
		super();
		this.state = {
			glasses : []
		}
	}
	componentWillMount(){
		this.getGlasses();
	}
	getGlasses(){
		axios.get('http://localhost:3000/api/glasses')
		.then(response => {
			this.setState({glasses : response.data},() => {
				//console.log(this.state);
			})
		}).catch(err => console.log(err))
	}
	render(){
		const labelItems = this.state.glasses.map((label, i) => {
			return (
				<GlassItem item={label} key= {label.name}/>
			)
		})
		return (
				<div>
				    <h1> Glasses </h1>
						<ul className="collection">
							{labelItems}
						</ul>
						</div>
				 
			)
	}
}

export default Glass;
