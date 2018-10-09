

function ContorlledEmailInput(props) {
	return <input value={props.email} onChange={props.onChange} />;
}


import React, { Component } from 'react';


class UserEmail extends Component {

	state = {
		draftEmail: this.props.user.email
	}

	handleChange = (evt) => {
		this.setState({
			draftEmail: evt.target.value
		})
	}


	render() {
		return (
			<div>
				<p>受控组件</p>
				<ContorlledEmailInput email={this.state.draftEmail} onChange={this.handleChange} />
			</div>
		)
	}
}

export default UserEmail;
