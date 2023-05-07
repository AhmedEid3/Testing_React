import { Box } from '@mui/material';
import Counter from './components/Counter/Counter';
import MuiMode from './components/MuiMode/MuiMode';

function App() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Counter />
      <MuiMode />
    </Box>
  );
}

export default App;
