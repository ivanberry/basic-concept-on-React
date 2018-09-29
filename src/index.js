import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import styles from './index.css';
import MouseTracker from './Prop/MouseTracker';
import DerivedStateBefore from './DerivedState/Before/';
import DerivedStateAfter from './DerivedState/After/';

const Index = () => (
	<div style={{ height: '100%' }}>
		<ul>
			<li>
				<Link to="/">Index</Link>
			</li>
			<li>
				<Link to="/code-reuse">MouseTracker</Link>
			</li>
			<li>
				<Link to="/form">Form</Link>
			</li>
			<li>
				<Link to="/you-dont-need-derived-state">Before</Link> {" "}
				<Link to="/you-dont-need-derived-state-after">After</Link>
			</li>
		</ul>

		<Route exact path="/" component={() => <h1>Welcome!</h1>} />
		<Route path="/code-reuse" component={MouseTracker} />
		<Route path="/you-dont-need-derived-state" component={DerivedStateBefore} />
		<Route path="/you-dont-need-derived-state-after" component={DerivedStateAfter} />
	</div>
);

ReactDOM.render(
	<Router>
		<Index />
	</Router>,
	document.getElementById('root')
);
