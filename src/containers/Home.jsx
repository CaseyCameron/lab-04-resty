import React, { Component } from 'react';
import ControlForm from '../components/controls/ControlForm';

export default class Home extends Component {
  render() {
    return (
      <>
        <header className="test">
          <h1>RESTless</h1>
        </header>
        <ControlForm />
      </>
    );
  }
}
