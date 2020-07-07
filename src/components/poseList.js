import React, { Component } from 'react';

import axs from '../http-common';
import Cookies from 'js-cookie';

class PoseList extends Component {
	constructor(props){
		super(props);

		this.state = {
			rawPoseList: []
		}
	}

	async componentDidMount() {
		const token = Cookies.get('auth-token')
	    let getPoseResponse = await axs.get('/pose', {
	    	headers: {
	    		Authorization: `Token ${token}`
	    	}
	    })

	    this.setState({rawPoseList: getPoseResponse.data})
	    
	    
    }

	render() {
		return (
			<div className="pose-list-container">
				<ul>
					{
						this.state.rawPoseList.map((pose, index) => {
							return(
								<div key={index}>
									<li className="pose-list-item" key={pose.name}>{pose.name}</li>
									<button onClick={this.addPoseToSesh} value={pose.name}>add</button>
								</div>
							);
						})
					}
				</ul>
			</div>
		)
	}
}

export default PoseList