import React, { Component } from 'react';

export class withSubscription extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			data: selectData(DataSource, props)
		};
	}
	
	render() {
		return (
			<div></div>
		);
	}
}
