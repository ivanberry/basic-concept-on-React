import React, { Component } from 'react';
const dog = require('./dog.jpg');

export default class Dog extends Component {
	render() {
		const mouse = this.props.mouse;
		return (
			<img width="40" src={dog} style={{position: 'absolute', left: mouse.x, top: mouse.y, borderRadius: '100%'}} />
		);
	}
}




