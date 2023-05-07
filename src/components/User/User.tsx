import { Box, Button, Divider, Typography } from '@mui/material';
import { UserProps } from './user.type';

const User = ({ user, onEditUser, onRemoveUser }: UserProps) => {
  if (!user) return null;

  return (
    <Box>
      <Box>
        <Typography variant="h2" component="h2">
          User Details:
        </Typography>
        <Typography component="p" role="paragraph">
          Name: {user.name}
        </Typography>
        <Typography component="p" role="paragraph">
          Age:{user.age}
        </Typography>
      </Box>
      <Box marginY={3}>
        <Divider />
      </Box>

      <Box>
        {onEditUser && (
          <Button
            sx={{ mr: 2 }}
            color="primary"
            variant="outlined"
            onClick={() => onEditUser(user)}
          >
            Edit User
          </Button>
        )}

        {onRemoveUser && (
          <Button
            color="error"
            variant="outlined"
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
