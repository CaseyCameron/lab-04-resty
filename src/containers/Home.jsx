import React, { Component } from 'react';
import ControlForm from '../components/controls/ControlForm';
import Response from '../components/controls/Response';

export default class Home extends Component {
  state = {
    urlValue: '',
    method: 'POST',
    bodyValue: '',
    response: '',
  }

  handleURLChange = ({ target }) => {
    this.setState({ urlValue: target.value });
  };

  handleMethod = (e) => {
    e.preventDefault();
    this.setState({ method: e.target.value });
  };

  handleBodyValueChange = ({ target }) => {
    this.setState({ bodyValue: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Success');
  }

  render() {
    return (
      <>
        <header className="test">
          <h1>RESTless</h1>
        </header>
        <ControlForm
          urlValue={this.state.urlValue}
          handleURLChange={this.handleURLChange}
          handleMethod={this.handleMethod}
          bodyValue={this.state.bodyValue}
          handleBodyValueChange={this.handleBodyValueChange}
          handleSubmit={this.handleSubmit}
        />
        <Response response={this.state.response} />
      </>
    );
  }
}
