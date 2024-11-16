import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

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
      <Typography variant="h2" sx={{ mb: 4 }}>
        Protégé
      </Typography>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate('/create-account')}>
        Create an Account
      </Button>
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate('/mentee-login')}>
        Mentee Login
      </Button>
      <Button variant="outlined" onClick={() => navigate('/mentor-login')}>
        Mentor Login
      </Button>
    </Box>
  );
};

export default HomePage;
