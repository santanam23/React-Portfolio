import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '..';

afterEach(cleanup)

describe('Footer component', () => {
    // First Test
    it('renders', () => {
      render(<Footer />);
    });
    it('matches snapshot DOM node structure', () => {
      // render Footer
      const { asFragment } = render(<Footer />);
      expect(asFragment()).toMatchSnapshot();
    })
})