import React, { Component } from 'react';
import ControlForm from '../components/controls/ControlForm';
import style from './Home.css';
import HistoryList from '../components/controls/HistoryList';
import { request } from '../services/Request';
import Response from '../components/controls/Response';

export default class Home extends Component {
  state = {
    urlValue: '',
    method: 'GET',
    bodyValue: '',
    response: '',
    history: [],
  }

  handleURLChange = ({ target }) => {
    this.setState({ urlValue: target.value });
  };

  handleMethod = (e) => {
    this.setState({ method: e.target.value });
  };

  handleBodyValueChange = ({ target }) => {
    this.setState({ bodyValue: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await request(this.state.method, this.state.urlValue, this.state.bodyValue);
    this.setState({ response: response });

    const requestHistoryItem = {
      method: this.state.method,
      urlValue: this.state.urlValue
    }

    const requestHistory = [...this.state.history, requestHistoryItem];
    this.setState({ history: requestHistory });
  }

  render() {
    return (
      <div>
        <header className={style.Header}>
          <h1>RESTless</h1>
        </header>
        <ControlForm
          urlValue={this.state.urlValue}
          handleURLChange={this.handleURLChange}
          method={this.state.method}
          handleMethod={this.handleMethod}
          bodyValue={this.state.bodyValue}
          handleBodyValueChange={this.handleBodyValueChange}
          handleSubmit={this.handleSubmit}
        />
        <Response response={this.state.response} />
        {/* {this.state.response !== '' && <Response response={this.state.response} />} */}
        {this.state.history.length > 0 && <HistoryList history={this.state.history} />}
      </div>
    );
  }
}
