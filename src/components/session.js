import React, { Component } from 'react';

class Session extends Component {
	render() {
		return(
			<div>
				<h3>Your Sesh:</h3>
				<div className="sesh-builder-container">
					<ul id="sesh-ul">
						{this.props.pose_list.map((name, index) => <li key={index}>{name}</li>)}
					</ul>
				</div>
			</div>
		);
	}
}

export default Session