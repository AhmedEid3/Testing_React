import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import Users from './Users';
import { mockUsersData } from '../../mocks/mockUsers';
import { server } from '../../mocks/server';

describe('Users', () => {
  it('should render correctly', async () => {
    render(<Users />);
    const headingEle = screen.getByRole('heading');

    expect(headingEle).toHaveTextContent(/users/i);
  });

  it('should render users list', async () => {
    render(<Users />);

    const usersList = await screen.findAllByRole('listitem');

    expect(usersList).toHaveLength(mockUsersData.length);
  });

  it('should render error', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users',
        (_req, res, ctx) => {
          return res(ctx.status(403));
        },
      ),
    );

    render(<Users />);
    const errorEle = await screen.findByRole('paragraph');
    const usersList = await screen.findByRole('list');

    expect(usersList).toBeEmptyDOMElement();
    expect(errorEle).toBeInTheDocument();
  });
});
