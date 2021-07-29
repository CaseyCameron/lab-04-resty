import React, { Component } from 'react';
import ControlForm from '../components/controls/ControlForm';
import Response from '../components/controls/Response';

export default class Home extends Component {
  state = {
    urlValue: '',
    method: 'POST'
  }

  handleURLChange = ({ target }) => {
    this.setState({ urlValue: target.value })
  };

  handleMethod = (e) => {
    e.preventDefault();
    this.setState({ method: e.target.value })
    console.log(this.state);
  };

  render() {
    return (
      <>
        <header className="test">
          <h1>RESTless</h1>
        </header>
        <ControlForm
          urlValue={this.state.urlValue}
          handleURLChange={this.handleURLChange}
          handleMethod={this.handleMethod} />
        <Response />
      </>
    );
  }
}
