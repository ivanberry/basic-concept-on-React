import React, {Component} from 'react';

// Fully Uncontrol Implement
class fullUncontrolInput extends Component {
	state = {
		email: this.props.defaultEmail
	}

	handleChange = (evt) {
		this.setState({
			email: evt.target.value
		})
	}

	render() {
		return (
			<input value={this.state.email} onChange={this.handleChange} />
		)
	}
}

export default fullUncontrolInput;