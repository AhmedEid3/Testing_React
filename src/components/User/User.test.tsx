import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import User from './User';

describe('User', () => {
  it('should render correctly', () => {
    render(<User user={{ name: 'Ahmed', age: 30, id: '#1' }} />);
    const userDetailsHeading = screen.getByRole('heading');
    const userNameEle = screen.getByText(/name/i);
    const userAgeEle = screen.getByText(/age/i);

    expect(userDetailsHeading).toBeInTheDocument();
    expect(userNameEle).toBeInTheDocument();
    expect(userAgeEle).toBeInTheDocument();
  });

  it('should be empty DOM element when user not passed', () => {
    const { container } = render(<User user={null} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('should not render edit button and remove button', () => {
    render(<User user={{ name: 'Ahmed', age: 30, id: '#1' }} />);

    const editBtn = screen.queryByRole('button', { name: /edit user/i });
    const removeBtn = screen.queryByRole('button', { name: /remove user/i });

    expect(editBtn).not.toBeInTheDocument();
    expect(removeBtn).not.toBeInTheDocument();
  });

  it('should render edit button and remove button', () => {
    render(
      <User
        user={{ name: 'Ahmed', age: 30, id: '#1' }}
        onEditUser={jest.fn}
        onRemoveUser={jest.fn}
      />,
    );

    const editBtn = screen.getByRole('button', { name: /edit user/i });
    const removeBtn = screen.getByRole('button', { name: /remove user/i });

    expect(editBtn).toBeInTheDocument();
    expect(removeBtn).toBeInTheDocument();
  });

  it('should call edit button and remove button', async () => {
    userEvent.setup();

    const mockOnEditUser = jest.fn();
    const mockOnRemoveUser = jest.fn();

    render(
      <User
        user={{ name: 'Ahmed', age: 30, id: '#1' }}
        onEditUser={mockOnEditUser}
        onRemoveUser={mockOnRemoveUser}
      />,
    );

    const editBtn = screen.getByRole('button', { name: /edit user/i });
    const removeBtn = screen.getByRole('button', { name: /remove user/i });

    await userEvent.click(editBtn);
    await userEvent.click(removeBtn);

    expect(mockOnEditUser).toBeCalledTimes(1);
    expect(mockOnRemoveUser).toBeCalledTimes(1);
  });
});
