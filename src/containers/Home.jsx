import React, { Component } from 'react';
import ControlForm from '../components/controls/ControlForm';
import { request } from '../services/Request';
import Response from '../components/controls/Response';

export default class Home extends Component {
  state = {
    urlValue: '',
    method: 'GET',
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await request(this.state.method, this.state.urlValue, this.state.bodyValue);
    console.log(response);
    this.setState({ response: response });
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
