import React from 'react';
import Home from './Home';
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Home page render', () => {
  afterEach(() => cleanup());

  it('Renders the home page', async () => {
    render(<Home />);
    const urlInput = screen.getByPlaceholderText('URL');
    const methodButton = screen.getByDisplayValue('GET');
    const submitButton = screen.getByText('Go!');

    //user types in url input
    userEvent.type(urlInput, 'https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c8');
    //user event is next a click on the method radio button
    userEvent.click(methodButton);
    //user clicks the submit button
    userEvent.click(submitButton);

    return await waitFor(() => {
      const response = screen.getByTestId('responseBody');
      expect(response).toBeInTheDocument();
    }, 5000);
  });
});