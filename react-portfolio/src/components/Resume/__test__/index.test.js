import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';

afterEach(cleanup)

describe('Resume component', () => {
    // First Test
    it('renders', () => {
      render(<Resume />);
    });
    it('renders', () => {
      const { asFragment } = render(<Resume />)
      expect(asFragment()).toMatchSnapshot()
    })

});