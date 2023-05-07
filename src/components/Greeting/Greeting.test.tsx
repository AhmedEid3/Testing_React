import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

it('should see hello user', () => {
  render(<Greeting />);

  const paragraphElement = screen.getByText(/hello Guest/i);

  expect(paragraphElement).toBeInTheDocument();
});

it('should see hello $username', () => {
  render(<Greeting username="Ahmed" />);

  const paragraphElement = screen.getByTestId('user');

  expect(paragraphElement).toHaveTextContent(/hello ahmed/i);
});
