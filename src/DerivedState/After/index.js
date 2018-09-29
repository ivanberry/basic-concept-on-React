import React from 'react';

export default class ExampleComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      externalData: null
    };
  }

  static getDerivedStateFromProps(props, state) {
    // Store prevId in state so we can compoare when we props change.
    // Chear out previously-loaded data (so we don't render stale stuff).
    if (props.id !== state.prevId) {
      return {
        externalData: null,
        prevId: props.id
      };
    }

    // No state update necessary
    return null;
  }

  componentDidMount() {
    this._loadAsyncData(this.props.id);
  }

  componentDidUpdate() {
    if (this.state.externalData === null) {
      this._loadAsyncData(this.props.id);
    }
  }

  //componentWillReceiveProps(nextProps) {
  //if (nextProps.id !== this.props.id) {
  //this.setState({externalData: null});
  //this._loadAsyncData(nextProps.id);
  //}
  //}

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancle();
    }
  }

  render() {
    return (
      !this.state.externalData ? <h1>Loading</h1> : <h1>渲染结果-After</h1>
    );
  }

  _loadAsyncData(id) {
    this._asyncRequest = Promise.resolve({ externalData: [1, 2, 3] }).then(externalData => {
      this._asyncRequest = null;
      this.setState({ externalData });
    });
  }
}