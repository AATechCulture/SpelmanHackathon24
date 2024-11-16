import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleSubmit = (role: string) => {
    if (role === 'mentee') navigate('/mentee-dash');
    if (role === 'mentor') navigate('/mentor-dash');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Create an Account
      </Typography>
      <TextField label="Name" variant="outlined" sx={{ mb: 2, width: '300px' }} />
      <TextField label="Email" variant="outlined" sx={{ mb: 2, width: '300px' }} />
      <TextField label="Password" type="password" variant="outlined" sx={{ mb: 4, width: '300px' }} />
      <Button variant="contained" onClick={() => handleSubmit('mentee')} sx={{ mb: 2 }}>
        Sign Up as Mentee
      </Button>
      <Button variant="contained" onClick={() => handleSubmit('mentor')}>
        Sign Up as Mentor
      </Button>
    </Box>
  );
};

export default CreateAccount;
