import React, { Component, Fragment, PureComponent } from 'react';

// Impelement as PureComponent
class Timer extends PureComponent {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}

	componentDidMount() {
		this.interval = setInterval(
			() =>
				this.setState(prevState => ({
					count: prevState.count + 1
				})),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}


	render() {
		return (
			<Fragment>
				<h1>衍生状态反模式</h1>
				<blockquote>输入邮件:</blockquote>
				{this.props.render()}
				<p>
					这个组件每一秒钟都会重新渲染，每一次渲染，你的输入就会被重置。
				</p>
				<p>
					Read the inline comments in <code>index.js</code> to learn why.
				</p>
			</Fragment>
		);
	}
}

export default Timer;