import React, { Component } from 'react';
import axs from '../http-common';

import PoseList from './poseList';
import Session from './session';
import Modal from './modal'

class Main extends Component {
	constructor(props){
		super(props);

		this.state = {
			value: '',
			newPoseName: "",
			seshPoseList: [],
			showAddPose: false
		}

		this.addPoseToSesh = this.addPoseToSesh.bind(this)
		this.showModal = this.showModal.bind(this)
		this.hideModal = this.hideModal.bind(this)
		this.addNewPose = this.addNewPose.bind(this)
		this.handleChangePoseName = this.handleChangePoseName.bind(this)
	}

    addPoseToSesh(e) {
    	let tempPoseList = this.state.seshPoseList.concat(e.target.value)
    	this.setState({seshPoseList: tempPoseList})
    }

    showModal() {
    	this.setState({showAddPose: true})
    }

    hideModal() {
    	this.setState({showAddPose: false})
    }

    handleChangePoseName(e) {
    	this.setState({newPoseName: e.target.value})
    }

    addNewPose(e) {
    	e.preventDefault();
    }

	render() {
		return(
			<div>
				<h3>Sesh Builder</h3>
				<p>Where you build the sesh & the sesh builds you</p>
				<button onClick={this.showModal}>Add Pose</button>
				<Modal show={this.state.showAddPose} handleClose={this.hideModal}>
					<div className={this.showHideClassName}>
				      
				        Add Pose to DB:
							<form>
								<label>
									Pose Name
									<input type="text" name="pose_name" id="input-pose-name" onChange={this.handleChangePoseName}/>
								</label>
								<button onClick={this.addNewPose}>Add Pose to DB</button>
							</form>
				        <button onClick={this.props.handleClose}>close</button>
				      
	    			</div>
				</Modal>
				<PoseList />
				<Session pose_list={this.state.seshPoseList}/>
			</div>
		);
	}
}

export default Main