import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import "boostrap/dist/css/bootstrap.min.css";
import "./App.css";
import SeshBuilderDataService from "./services/seshBuilder.service";

class Meow extends Component {
	getPoseList() {
    SeshBuilderDataService.getAll()
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  componentWillMount() {
  	this.getPoseList();
  }

	render() {
		return(
			<div>
				<h3>Sesh Builder</h3>
				<p>Where you build the sesh & the sesh builds you</p>
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<Router>
		      <div>
		        <nav>
		          <ul>
		            <li>
		              <Link to="/">Home</Link>
		            </li>
		            {/*<li>
		              <Link to="/about">About</Link>
		            </li>
		            <li>
		              <Link to="/users">Users</Link>
		            </li>*/}
		          </ul>
		        </nav>

	        {/* A <Switch> looks through its children <Route>s and
	            renders the first one that matches the current URL. */}
		        <Switch>
		          <Route path="/">
		            <Meow />
		          </Route>
		        </Switch>
		      </div>
    		</Router>
		);
	}

}

export default App;