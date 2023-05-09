import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { render } from '../../test-utils';
import MuiMode from './MuiMode';

describe('MuiMode', () => {
  it('Should render correctly', () => {
    render(<MuiMode />);

    const modeEle = screen.getByRole('paragraph');

    expect(modeEle).toBeInTheDocument();
  });

  it.skip('Should show dark mode text @darkMode', () => {
    render(<MuiMode />);

    const modeEle = screen.getByRole('paragraph');

    expect(modeEle).toHaveTextContent(/dark mode/);
  });

  it('Should show light mode text @lightMode', () => {
    render(<MuiMode />);

    const modeEle = screen.getByRole('paragraph');

    expect(modeEle).toHaveTextContent(/light mode/);
  });
});
