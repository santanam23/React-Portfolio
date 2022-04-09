import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);
//use state allows us to manage in  use effect hook
describe('Nav component', () => {
    //baseline test
    it('renders', () => {
        render(<Nav/>);
    });
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
    describe('links are visible', () => {
        it('inserts text into the links', () => {
          const { getByTestId } = render(<Nav />);
          expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
          expect(getByTestId('about')).toHaveTextContent('About me');
        });
      });
      
    // emoji visibility
    // describe('emoji is visible', () => {
    //     it('inserts emoji into the h2', () => {
    //     // Arrange
    //     const { getByLabelText} = render(<Nav />);
    //     // Assert 
    //     expect(getByLabelText('camera')).toHaveTextContent('emoji');
    //     })
    // })
})