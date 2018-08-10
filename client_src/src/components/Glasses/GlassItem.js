import React, {Component}  from 'react';
import {Link} from 'react-router-dom';


class GlassItem extends Component {
  constructor(props){
		super(props);
		this.state = {
			item : props.item
		}
	}
  render() {
    return (
      <li className="collection-item" >
      <Link to={`/glasses/${this.state.item.name}`}>
      {this.state.item.name}
      </Link>
      </li>
    )


  }
}

export default GlassItem;
