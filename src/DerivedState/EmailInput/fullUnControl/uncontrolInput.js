import React, { Component } from 'react';

// Fully Uncontrol Implement
class fullUncontrolInput extends Component {
	state = {
		email: this.props.defaultEmail
	}

	componentDidMount() {
		console.log('component did mount');
	}

	componentWillUnmount() {
		console.log('component will unmount');
	}

	handleChange = (evt) => {
		this.setState({
			email: evt.target.value
		});
	}

	render() {
		return (
			<React.Fragment>
				<h1>非受控组件</h1>
				<input value={this.state.email} onChange={this.handleChange} />
			</React.Fragment>
		);
	}
}

export default fullUncontrolInput;