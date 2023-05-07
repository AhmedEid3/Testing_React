import { Box } from '@mui/material';
import Counter from './components/Counter/Counter';
import MuiMode from './components/MuiMode/MuiMode';
import Users from './components/Users/Users';

function App() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Counter />
      <MuiMode />
      <Users />
    </Box>
  );
}

export default App;
