import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Quote from '../Quote';

test('Quote component', () => {
  const tree = render(<Quote />, { wrapper: Router });
  expect(tree).toMatchSnapshot();
});
