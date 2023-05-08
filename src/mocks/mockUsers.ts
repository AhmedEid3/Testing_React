import { rest } from 'msw';
import { IUser } from '../components/User/user.type';

export const mockUsersData: Array<IUser> = [
  { id: '1', name: 'Ahmed Eid', email: 'ahmed@gmail.com' },
  { id: '3', name: 'Eman Eid', email: 'eman@outlook.com' },
  { id: '7', name: 'Dina Mahmoud', email: 'dina@gmail.com' },
];

export const mockUsersApi = rest.get(
  'https://jsonplaceholder.typicode.com/users',
  (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUsersData));
  },
);
