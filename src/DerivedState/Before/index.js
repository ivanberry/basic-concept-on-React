import React from 'react';

export default class ExampleComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			externalData: null
		};
	}

	componentDidMount() {
		this._loadAsyncData(this.props.id);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.id !== this.props.id) {
			this.setState({ externalData: null });
			this._loadAsyncData(nextProps.id);
		}
	}

	componentWillUnmount() {
		if (this._asyncRequest) {
			this._asyncRequest.cancle();
		}
	}

	render() {
		return (
			!this.state.externalData ? <h1>Loading</h1> : <h1>渲染结果-Before</h1>
		)
	}

	_loadAsyncData(id) {
		this._asyncRequest = Promise.resolve({
			externalData: [1, 2, 3]
		}).then(externalData => {
			this._asyncRequest = null;
			this.setState({ externalData });
		});
	}
}
