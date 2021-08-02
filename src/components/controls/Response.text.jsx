import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Response from '../../components/controls/Response';

describe('Response component', () => {
  afterEach(() => cleanup());
  it('Renders the Response component', () => {
    const { asFragment } = render(<Response />);
    expect(asFragment()).toMatchInlineSnapshot();
  });
});