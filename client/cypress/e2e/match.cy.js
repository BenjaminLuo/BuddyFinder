import * as React from 'react';
import Matching from '../../src/components/Matching'
import { render, screen } from '@testing-library/react'

// let renderTest;

describe('Select', () => {
  function renderComponent() {
    render(<Matching />);
  }

  it('Select component has', () => {
    renderComponent();
    expect(screen.getByText('PAC'));
  })
})