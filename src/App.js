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
			username: "",
			password: ""
		}

		this.handleChangeUsername = this.handleChangeUsername.bind(this);
		this.handleChangePassword = this.handleChangePassword.bind(this);
	}

	handleChangeUsername(e) {
		this.setState({username: e.target.value});
	}

	handleChangePassword(e) {
		this.setState({password: e.target.value});
	}

	useCredsGetToken() {
		axs.post("/api-token-auth/", {
	   		username: this.state.username,
	   		password: this.state.password
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
				Get Auth Token
				<form>
					<input id="inputUsername" value={this.state.username} type="text" placeholder="username..." onChange={this.handleChangeUsername}/>
					<input id="inputPassword" value={this.state.password} type="text" placeholder="password..." onChange={this.handleChangePassword} />
				</form>
				<button onClick={() => this.useCredsGetToken()}>Get Token</button>
			</div>
		);
	}
}



class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isCashed: true
		}
	}
	render() {
		return (
			<Router>
		      <div>
		        <Switch>
		          	<Route path="/home" component={Home}/>
		          	<Route path="/" component={Auth}/>
		        </Switch>
		      </div>
    		</Router>
		);
	};
}

export default App;