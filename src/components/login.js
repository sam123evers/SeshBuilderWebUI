import React, {Component} from 'react';

import axs from "../http-common";
import Cookies from 'js-cookie';

class Login extends Component {
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
	   			Cookies.set('auth-token', res.data.token);
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

export default Login



