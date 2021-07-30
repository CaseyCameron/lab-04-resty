import React from 'react';
import { render, screen } from '@testing-library/react';
import History from './History';

describe('Method History component', () => {
  it('Displays a history element', () => {
    const { asFragment } = render(
      <History
        method='GET'
        urlValue='https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c8'
      />);

    expect(asFragment()).toMatchSnapshot();
  });
});