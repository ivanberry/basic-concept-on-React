import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import styles from "./index.css";
import MouseTracker from "./Prop/MouseTracker";

const Index = () => (
	<div style={{height: '100%'}}>
		<ul>
			<Link to="/code-reuse">MouseTracker</Link>
			<Link to="/form">Form</Link>
		</ul>

		<Route exact path="/" component={() => <h1>Welcome!</h1>} />
		<Route path="/code-reuse" component={MouseTracker} />
	</div>
);


ReactDOM.render((
	<Router>
		<Index />	
	</Router>
), document.getElementById("root"))
