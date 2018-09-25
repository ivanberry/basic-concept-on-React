import React, { Component } from 'react';
// import Mouse from './Mouse';
import NewMouse from './newMouse';
// import MouseWithDog from './MouseWithDog.js';
import Dog from './Dog';

export default class MouseTracker extends Component {

	render() {
		return (
			<div style={{height: '100%'}} >
				<h1>Move the mouse around!</h1>
				  {/*<Mouse />*/}
				 {/*<MouseWithDog /> */}

				 <NewMouse render = {mouse => <Dog mouse={mouse} />} />
			</div>
		)
	}
}
