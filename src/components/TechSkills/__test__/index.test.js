import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TechSkills from '..';

afterEach(cleanup)

describe('TechSkills component', () => {
    // First Test
    it('renders', () => {
      render(<TechSkills />);
    });
    it('renders', () => {
      const { asFragment } = render(<TechSkills />)
      expect(asFragment()).toMatchSnapshot()
    })

});