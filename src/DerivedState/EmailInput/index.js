import React from 'react';
import Timer from '../../Components/Timer';

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: props.email
		};
	}

	render() {
		const handleChange = evt => {
			this.setState({ email: evt.target.value });
		};
		return <input onChange={handleChange} value={this.state.email} />;
	}



	componentWillReceiveProps(nextProps) {
		// This will erase any local state updates!
		// Do not do this
		if (nextProps.email !== this.props.email) {
			this.setState({ email: nextProps.email });
		}
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	/**
	// 	 * 0. set local state mannualy
	// 	 */
	// 	if (this.state.email !== nextState.email || nextProps.email !== this.props.email) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

}

const asyncEmailInput = () => <Timer render={() => <Example email="tabvim.dev@gmail.com" />} />;

export default asyncEmailInput;
