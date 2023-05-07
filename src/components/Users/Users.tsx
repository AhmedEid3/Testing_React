import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { IUser } from '../User/user.type';

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
            <ListItemText primary={'#' + user.id + ' ' + user.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Users;
