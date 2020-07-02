import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import PoseDataService from "./services/seshBuilder.service";
import axs from "./http-common";


class Main extends Component {
	constructor(props){
		super(props);

		this.state = {
			poseList: []
		}
	}

	
	getPoseList() {
	    PoseDataService.getAll()
	      .then(response => {
	        this.setState({poseList: response.data})
	      })
	      .catch(e => {
	        console.log(e);
	      });
 	}

    componentDidMount() {
  	  this.getPoseList();
    }
  

	render() {
		return(
			<div>
				<h3>Sesh Builder</h3>
				<p>Where you build the sesh & the sesh builds you</p>
				<ul>
					{
						this.state.poseList.map((pose) => {
							return<li key={pose.name}>{pose.name}</li>
						})
					}
				</ul>
			</div>
		);
	}
}

class Login extends Component {
	constructor(props){
		super(props);

		this.state = {
			isAuthentcated: false,
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
	   			this.props.history.push("/main")
	   		}
   		
	   	}).catch((err) => {
	   		console.log(err);
	   	})
	}

	render() {
		return (
			<div>
				Login
				<form>
					<input id="inputUsername" value={this.state.username} type="text" placeholder="username..." onChange={this.handleChangeUsername}/>
					<input id="inputPassword" value={this.state.password} type="text" placeholder="password..." onChange={this.handleChangePassword} />
				</form>
				<button onClick={() => this.useCredsGetToken()}>Login</button>
			</div>
		);
	}
}

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

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			pwd_confirm: ""

		}

		this.handleChangeUsername = this.handleChangeUsername.bind(this)
		this.handleChangePassword = this.handleChangePassword.bind(this)
		this.handleChangePasswordConfirm = this.handleChangePasswordConfirm.bind(this)
	}

	handleChangeUsername(e) {
		this.setState({username: e.target.value});
	}

	handleChangePassword(e) {
		this.setState({password: e.target.value});
	}

	handleChangePasswordConfirm(e) {
		this.setState({pwd_confirm: e.target.value});
	}

	createNewUser() {
		const {username, password, pwd_confirm} = this.state
		if(password !== pwd_confirm) {
			return alert("passwords must match");
		}
		
		axs.post("/signup/", {
			username: this.state.username, 
			password: this.state.password,
			password2: this.state.pwd_confirm
		}).then((res) => {
			console.log(res);
			alert("you created a new user with name " + res.data.username + " sign in with this username and password you created on the login page");
			this.props.history.push("/login");
		}).catch((err) => {
			console.log(err);
		})
	}

	render() {
		return(
			<div>
				Sign Up
				<form>
					<input id="inputUsername" value={this.state.username} type="text" placeholder="username..." onChange={this.handleChangeUsername}/>
					<input id="inputPassword" value={this.state.password} type="text" placeholder="password..." onChange={this.handleChangePassword} />
					<input id="inputPasswordConfirm" value={this.state.pwd_confirm} type="text" placeholder="password..." onChange={this.handleChangePasswordConfirm} />
				</form>
				<button onClick={() => this.createNewUser()}>Register New User</button>
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
		        	<Route path="/signup" component={SignUp}/>
		          	<Route path="/main" component={Main}/>
		          	<Route path="/login" component={Login}/>
		          	<Route path="/" component={Splash} />
		        </Switch>
		      </div>
    		</Router>
		);
	};
}

export default App;