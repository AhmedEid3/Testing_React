import { Box, Button, Typography } from '@mui/material';
import { UserProps } from './user.type';

const User = ({ user, onEditUser, onRemoveUser }: UserProps) => {
  if (!user) return null;

  return (
    <Box border="1px solid #c9c9c9" borderRadius={1} padding={2}>
      <Box>
        <Typography sx={{ mb: 2 }} variant="h5" component="h2">
          User Details: #{user.id}
        </Typography>

        <Typography component="p" role="paragraph">
          Name: {user.name}
        </Typography>
        <Typography component="p" role="paragraph">
          Email:{user.email}
        </Typography>
      </Box>

      <Box>
        {onEditUser && (
          <Button
            sx={{ mr: 2 }}
            color="primary"
            variant="outlined"
            size="small"
            onClick={() => onEditUser(user)}
          >
            Edit User
          </Button>
        )}

        {onRemoveUser && (
          <Button
            color="error"
            variant="outlined"
            size="small"
            onClick={() => onRemoveUser(user.id)}
          >
            Remove User
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default User;
