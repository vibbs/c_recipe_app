import React, {Component}  from 'react';


class SelectCategoryItem extends Component {
  constructor(props){
		super(props);
		this.state = {
			item : props.item
		}
	}
  render() {
    return (
      <input type="checkbox" value={this.state.item.id} >
      {this.state.item.name}
      </input>
    )


  }
}

export default SelectCategoryItem;
