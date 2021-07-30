import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HistoryList from './HistoryList';

describe('Method History Container', () => {
  afterEach(() => cleanup());
  it('Displays a list of method history items', () => {
    const histories = [
      {
        method: 'GET',
        urlValue: 'https://last-airbender-api.herokuapp.com/api/v1/characters/5cf5679a915ecad153ab68c8'
      }
    ]
    const { getByText } = render(<HistoryList history={histories} />);
    expect(getByText('GET')).toBeDefined();
  });
});