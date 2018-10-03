import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import styles from './index.css';
import MouseTracker from './Prop/MouseTracker';
import DerivedStateBefore from './DerivedState/Before/';
import DerivedStateAfter from './DerivedState/After/';
import asyncEmailInput from './DerivedState/EmailInput';

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
        <Link to="/you-dont-need-derived-state">Before</Link>
      </li>
      <li>
        <Link to="/you-dont-need-derived-state-after">After</Link>{' '}
      </li>
      <li>
        <Link to="/email">Email example</Link>
      </li>
    </ul>

    <Route exact path="/" component={() => <h1>Welcome!</h1>} />
    <Route path="/code-reuse" component={MouseTracker} />
    <Route path="/you-dont-need-derived-state" component={DerivedStateBefore} />
    <Route path="/you-dont-need-derived-state-after" component={DerivedStateAfter} />
    <Route path="/email" component={asyncEmailInput} />
  </div>
);

ReactDOM.render(
  <Router>
    <Index />
  </Router>,
  document.getElementById('root')
);
