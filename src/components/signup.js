import React, { Component } from 'react'

import axs from "../http-common.js";

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
			username: username, 
			password: password,
			password2: pwd_confirm
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

export default SignUp