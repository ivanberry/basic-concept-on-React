export default class MouseWithDog extends Component {
	constructor(props) {
		super(props);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.state = {
			x: 0,
			y: 0
		};
	}

	handleMouseMove(event) {
		this.setState({
			x: event.clientX,
			y: event.clientY
		});
	}


	render() {
		return (
			<div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
			<Dog mouse={this.state} />
			</div>
		);
	}
}