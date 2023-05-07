import { render, screen } from '../../test-utils';
import MuiMode from './MuiMode';

describe('MuiMode', () => {
  it('Should render correctly', () => {
    render(<MuiMode />);

    const modeEle = screen.getByRole('paragraph');

    expect(modeEle).toBeInTheDocument();
  });

  it('Should show dark mode text @darkMode', () => {
    render(<MuiMode />);

    const modeEle = screen.getByRole('paragraph');

    expect(modeEle).toHaveTextContent(/dark mode/);
  });

  it.skip('Should show light mode text @lightMode', () => {
    render(<MuiMode />);

    const modeEle = screen.getByRole('paragraph');

    expect(modeEle).toHaveTextContent(/light mode/);
  });
});
