import React from 'react';
import Home from './Home';
import { render, screen } from '@testing-library/react';

describe('Home page render', () => {
  it('Renders the home page', () => {
    render(
      <Home />
    );
    screen.getByText('RESTless');
  });
});