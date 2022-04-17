import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Project from "..";

afterEach(cleanup)

describe('Project component', () => {
    // First Test
    it('renders', () => {
      render(<Project />);
    })
    it('matches snapshot DOM node structure', () => {
      // render Project
      const { asFragment } = render(<Project />);
      expect(asFragment()).toMatchSnapshot();
    })
});