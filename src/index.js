import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import styles from './index.css';
import MouseTracker from './Prop/MouseTracker';
import DerivedStateBefore from './DerivedState/Before/';
import DerivedStateAfter from './DerivedState/After/';
import asyncEmailInput from './DerivedState/EmailInput';
import ContorlledEmailInput from './DerivedState/EmailInput/fullContorl';


const fakerUser = {
  id: 1,
  name: 'ivan',
  email: 'tabvim.dev@gmail.com'
}

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
      <li><Link to="/full-control-input">解决办法一</Link></li>
      <li><Link to="/full-uncontrol-input"> 解决办法二</Link></li>
    </ul>

    <Route exact path="/" component={() => <h1>Welcome!</h1>} />
    <Route path="/code-reuse" component={MouseTracker} />
    <Route path="/you-dont-need-derived-state" component={DerivedStateBefore} />
    <Route path="/you-dont-need-derived-state-after" component={DerivedStateAfter} />
    <Route path="/email" component={asyncEmailInput} />
    <Route path="/full-control-input" component={() => <ContorlledEmailInput user={fakerUser} />} />
  </div>
);

ReactDOM.render(
  <Router>
    <Index />
  </Router>,
  document.getElementById('root')
);
