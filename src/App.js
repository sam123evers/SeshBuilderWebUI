import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation} from "react-router-dom";
import "./App.css";
import SeshBuilderDataService from "./services/seshBuilder.service";
import axs from "./http-common";


class Home extends Component {
	
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

class Auth extends Component {
	constructor(props){
		super(props);

		this.state = {
			isAuthenticated: false
		}
	}

	authenticate() {
		axs.post("/api-token-auth/", {
	   		username: "samevers",
	   		password: "MeowMix86"
	   	}).then((res) => {
	   		if(res.status === 200) {
	   			this.setState({isAuthenticated: true});
	   			axs.defaults.headers.common['Authorization'] = res.data.token;
	   			this.props.history.push("/home")
	   		}
   		
	   	}).catch((err) => {
	   		console.log(err);
	   	})

	}

	render() {
		return (
			<div>
				Auth
				<button onClick={() => this.authenticate()}>login</button>
			</div>
		);
	}
}



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isAuthenticated: false
		}
	}
	render() {
		return (
			<Router>
		      <div>
		        <Switch>
		            <Route path="/login" component={Auth}/>
		    
		          	<Route path="/home" component={Home}/>
		        </Switch>
		      </div>
    		</Router>
		);
	};
}

export default App;