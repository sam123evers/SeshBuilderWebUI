import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./App.css";
import axs from "./http-common";
import Main from './components/main';
import PoseList from './components/poseList';
import Login from './components/login';
import SignUp from './components/signup';
import Splash from './components/splash';

class App extends Component {
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