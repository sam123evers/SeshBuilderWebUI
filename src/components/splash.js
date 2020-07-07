import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class Splash extends Component {
	render() {
		return(
			<div className="splash-main">
				<h1 className="title">Sesh Builder</h1>
				<div className="nav">
					<Link to="/signup">Sign Up</Link>
					<Link to="/login">Log In</Link>
				</div>
			</div>
		);
	}
}

export default Splash