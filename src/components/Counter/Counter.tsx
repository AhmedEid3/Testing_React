import { Box, Button, TextField, Typography } from '@mui/material';
import { useRef } from 'react';
import useCounter from './useCounter';

const Counter = () => {
  const { counter, setCounter, handleIncrement } = useCounter();
  const amount = useRef<HTMLInputElement>(null);

  const handleAmount = () => {
    setCounter(Number(amount.current?.value));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      flexWrap="wrap"
      justifyContent="center"
    >
      <Box width="100%">
        <Typography align="center" component="p" variant="h1" role="paragraph">
          {counter}
        </Typography>
      </Box>

      <Button variant="contained" onClick={handleIncrement}>
        Increment
      </Button>
      <TextField
        type="number"
        inputRef={amount}
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        placeholder="amount"
        label="Amount"
        variant="standard"
      />
      <Button variant="contained" onClick={handleAmount}>
        Set
      </Button>
    </Box>
  );
};

export default Counter;
