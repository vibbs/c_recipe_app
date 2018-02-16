import React, {Component} from "react";
import {Link} from 'react-router-dom';


class Navbar extends Component{
	render(){
		return (
				<div>
        <nav className="blue darken-3">
         <div className="nav-wrapper">
           <a href="/" className="brand-logo center">C-Recipies</a>
           <a  data-activates="main-menu" className="button-collapse show-on-large">
					 <i className="fa fa-bars"></i></a>
           <ul id="nav-mobile" className="right hide-on-small-only">

             <li><Link to="/" className="fa fa-users">Recipies</Link></li>


           </ul>
           <ul className="side-nav" id="main-menu">
					 		<li><Link to="/" className="fa fa-users">Recipies</Link></li>

					 		<li><Link to="/recipies/add" className="fa fa-users">Add Recipie</Link></li>
           </ul>
         </div>
        </nav>
				</div>
			)
	}
}


export default Navbar;
