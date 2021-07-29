import React, { Component } from 'react';
import ControlForm from '../components/controls/ControlForm';
import Response from '../components/controls/Response';

export default class Home extends Component {
  render() {
    return (
      <>
        <header className="test">
          <h1>RESTless</h1>
        </header>
        <ControlForm />
        <Response />
      </>
    );
  }
}
