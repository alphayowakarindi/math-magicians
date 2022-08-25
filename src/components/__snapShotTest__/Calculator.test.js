import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Calculator from '../Calculator';

test('Calculator component', () => {
  const tree = render(<Calculator />, { wrapper: Router });
  expect(tree).toMatchSnapshot();
});
