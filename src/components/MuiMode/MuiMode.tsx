import { Typography, useTheme } from '@mui/material';

const MuiMode = () => {
  const theme = useTheme();

  return (
    <Typography variant="h2" component="p" role="paragraph">
      {theme.palette.mode} mode
    </Typography>
  );
};

export default MuiMode;
