import React, { Component } from 'react';
import ControlForm from '../components/controls/ControlForm';
import Response from '../components/controls/Response';

export default class Home extends Component {
  state = {
    method: 'GET'
  }

  handleMethod = ({ target }) => {
    console.log({ target });
  };

  render() {
    return (
      <>
        <header className="test">
          <h1>RESTless</h1>
        </header>
        <ControlForm handleMethod={this.handleMethod} />
        <Response />
      </>
    );
  }
}
