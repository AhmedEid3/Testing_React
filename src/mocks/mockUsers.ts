import { rest } from 'msw';

export const mockUsersData = [
  { id: 1, name: 'Ahmed Eid', age: 30 },
  { id: 3, name: 'Eman Eid', age: 24 },
  { id: 7, name: 'Dina Mahmoud', age: 24 },
];

export const mockUsersApi = rest.get(
  'https://jsonplaceholder.typicode.com/users',
  (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockUsersData));
  },
);
