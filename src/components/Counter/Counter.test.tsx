import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from './Counter';
import { describe, it, expect } from 'vitest';

describe('Counter', () => {
  it('should render correctly', () => {
    render(<Counter />);

    const paragraphElement = screen.getByRole('paragraph');
    const buttonElement = screen.getByRole('button', { name: /increment/i });

    expect(paragraphElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should render default value of counter Zero', () => {
    render(<Counter />);

    const paragraphElement = screen.getByRole('paragraph');

    expect(paragraphElement).toHaveTextContent('0');
  });

  it('should increment counter to be 1 after one click on button', async () => {
    userEvent.setup();

    render(<Counter />);

    const paragraphElement = screen.getByRole('paragraph');
    const buttonElement = screen.getByRole('button', { name: /increment/i });

    const increments = [1, 2, 3, 4, 5, 6, 7];

    for await (const increment of increments) {
      await userEvent.click(buttonElement);

      expect(paragraphElement).toHaveTextContent(increment.toString());
    }
  });

  it('should counter equal to 10 after user type in input amount and click set button', async () => {
    userEvent.setup();

    render(<Counter />);

    const paragraphElement = screen.getByRole('paragraph');
    const amountInputEle = screen.getByRole('spinbutton');
    await userEvent.type(amountInputEle, '10');
    expect(amountInputEle).toHaveValue(10);

    const setButtonEle = screen.getByRole('button', { name: /set/i });
    await userEvent.click(setButtonEle);

    expect(paragraphElement).toHaveTextContent('10');
  });

  it('should focus in right order', async () => {
    userEvent.setup();

    render(<Counter />);

    const buttonElement = screen.getByRole('button', { name: /increment/i });
    const amountInputEle = screen.getByRole('spinbutton');
    const setButtonEle = screen.getByRole('button', { name: /set/i });

    await userEvent.tab();
    expect(buttonElement).toHaveFocus();

    await userEvent.tab();
    expect(amountInputEle).toHaveFocus();

    await userEvent.tab();
    expect(setButtonEle).toHaveFocus();
  });
});
