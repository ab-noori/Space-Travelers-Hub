import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Navbar from '../components/Layout/navbar/Navbar';

test('renders correctly', () => {
  const { container } = render(
    <Router>
      <Navbar />
    </Router>,
  );

  expect(container).toMatchSnapshot();
});
