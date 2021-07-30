import React from 'react';
import Home from './Home';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import ControlForm from '../components/controls/ControlForm';

describe('Home page render', () => {
  afterEach(() => cleanup());

  it('Renders the home page', () => {
    // const urlValue = ({ target }) => {
    //   this.setState({ urlValue: target.value });
    // };

    // const methodValue = (e) => {
    //   this.setState({ method: e.target.value });
    // };

    // const bodyValue = ({ target }) => {
    //   this.setState({ bodyValue: target.value });
    // };

    // render(<Home />);

    // screen.getByText('RESTless');
    const { queryByPlaceholderText } = render(<ControlForm
    // urlValue={urlValue}
    // method={methodValue}
    // body={bodyValue}
    />);

    const searchInput = queryByPlaceholderText('URL');
    fireEvent.change(searchInput, { target: { value: 'http://www.w.com' } });
    expect(searchInput).toHaveValue('http://www.w.com');

  });
});