import React, { Component } from 'react';
import UncontrolInput from './uncontrolInput';

const fakerUser = [
	{ id: 1, email: 'tabvim.dev@gmail.com' },
	{ id: 2, email: '1@gmail.com' },
];

export default class Index extends Component {

	state = {
		now: 0
	};

	handleClick = () => {
		this.setState({
			now: !this.state.now
		});
	};

	render() {
		const { now } = this.state;
		const index = Number(now);
		const user = fakerUser[index];
		return (
			<React.Fragment>
				<UncontrolInput key={user.id} defaultEmail={user.email} />
				<button onClick={this.handleClick}>改变用户</button>
			</React.Fragment>
		);
	}
}