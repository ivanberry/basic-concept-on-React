import React from 'react';
import Timer from '../../Components/Timer';

let defaultEmail = 'tabvim.dev@gmail.com';

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: props.email
		};
	}

	/**
		Implements:
		0. add conditional: compare nextProps.email !== this.state.email
		1. shouldComponentUpdate: call on parent re-render no matter the props have changed or not
		*/
	componentWillReceiveProps(nextProps) {
		// This will erase any local state updates!
		// Do not do this
		// implement 0: useless
		if (nextProps.email !== this.props.email) {
			this.setState({ email: nextProps.email });
		}
	}

	render() {

		const changePropsEmail = () => {
			// 主动改变prop值，使得两次props值不懂，进而触发更新
			defaultEmail = '1@gmail.com';
		};

		const handleChange = evt => {
			this.setState({ email: evt.target.value });
		};
		return (
			<React.Fragment>
				<input onChange={handleChange} value={this.state.email} />
				<button onClick={changePropsEmail}>主动改变组件Prop值</button>
			</React.Fragment>
		);

	}




	// use?
	// should a component need re-render
	// This sucks, I tried a lot to implement but failed
	// shouldComponentUpdate(nextProps, nextState) {
	//   // nextState: 组件状态，通过点击，输入等改变的组件本身状态值, 并未patch
	//   // this.state: 当前组件的状态
	//   // nextProps: 下次更新Props
	//   // this.props: 当前Props
	//   if (nextProps.email === this.props.email) {
	//     return false;
	//   } else if (nextState.email !== this.state.email) {
	//     return true;
	//   } else {
	//     return true;
	//   }
	// }

}

const asyncEmailInput = () => <Timer render={() => <Example email={defaultEmail} />} />;

export default asyncEmailInput;
