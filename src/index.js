import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";
import MouseTracker from "./Prop/MouseTracker";

const Index = () => {
	return <MouseTracker />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
