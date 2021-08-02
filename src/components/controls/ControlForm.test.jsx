import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ControlForm from '../../components/controls/ControlForm';

describe('Form component', () => {
  afterEach(() => cleanup());
  it('Renders the form', () => {
    const { asFragment } = render(<ControlForm />);
    expect(asFragment()).toMatchSnapshot();
  });
});