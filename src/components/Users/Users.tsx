import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { IUser } from '../User/user.type';
import User from '../User/User';

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((usersRes) => setUsers(usersRes))
      .catch((e) => {
        if (e instanceof SyntaxError) {
          setError('Error Fetching Users');
        } else {
          setError(e);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      <Typography variant="h4" component="h2">
        Users
      </Typography>

      <Divider />

      {loading && (
        <Box
          data-testid="loading"
          sx={{ m: 2, display: 'flex', justifyContent: 'center' }}
        >
          <CircularProgress />
        </Box>
      )}

      {error && <Typography role="paragraph">{error}</Typography>}

      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <User
              user={user}
              onEditUser={() => {
                console.log('edit user: ', '#' + user.id);
              }}
              onRemoveUser={() => {
                console.log('delete user', '#' + user.id);
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Users;
