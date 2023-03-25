import * as React from 'react';
import NavBar from '../../src/components/Appbar'
import { render, screen } from '@testing-library/react'

// let renderTest;

describe('AppBar', () => {
  function renderComponent() {
    render(<NavBar />);
  }

  it('Renders', () => {
    renderComponent();
    expect(screen.getByText('Statistics'));
  })
})