import { Box } from '@mui/material';
import Counter from './components/Counter/Counter';
import MuiMode from './components/MuiMode/MuiMode';
import User from './components/User/User';

function App() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Counter />
      <MuiMode />
      <User
        user={{ name: 'Ahmed Eid', age: 31, id: '#1' }}
        onEditUser={() => {
          console.log('edit user: ', '#1');
        }}
        onRemoveUser={() => {
          console.log('delete user', '#1');
        }}
      />
    </Box>
  );
}

export default App;
