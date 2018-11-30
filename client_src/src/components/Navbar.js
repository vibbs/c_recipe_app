import React, {Component} from "react";
import {Link} from 'react-router-dom';
import {AppConsumer, AppProvider }from './AppContext';


class Navbar extends Component{
  // constructor(props){
  //   super(props);
  // }
  state = {
    
    setContext :(context) =>{
      console.log("NavBar User object");
      console.log(context)
    }
  }

  componentDidMount = () => {
    console.log("Message from NavBar:")
    console.log(this.props);
  }

	render(){
		return (
				<div>
          <AppConsumer>
            {(context) => {this.state.setContext(context)}}
          </AppConsumer> 
        <nav className="blue darken-3">
         <div className="nav-wrapper">
           <a href="/" className="brand-logo center">C-Recipies</a>
           
           <a  data-activates="slide-out" className="button-collapse show-on-large">
					 <i className="fa fa-bars"></i></a>


           <ul id="nav-mobile" className="right hide-on-small-only">

             <li><Link to="/" className="fa ">Recipies</Link></li>
             <li><Link to="/about" className="fa ">About</Link></li>
           </ul>


           <ul className="side-nav" id="slide-out">

              <li><Link to="/about" className="fa ">About</Link></li>
					 		<li><Link to="/" className="fa ">Recipes</Link></li>
              <li><Link to="/categories" className="fa ">Categories</Link></li>
              <li><Link to="/labels" className="fa ">Labels</Link></li>
              <li><Link to="/glasses" className="fa ">Glasses</Link></li>
              
           </ul>
         </div>
        </nav>
				</div>
			)
	}
}


export default Navbar;