import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';

const AcceptDecline = () => {
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
        Pending Requests
      </Typography>
      <Paper
        elevation={3}
        sx={{
          width: '80%',
          p: 2,
          mb: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">John Doe</Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Aspiring Data Analyst
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Button variant="contained" color="primary" sx={{ flex: 1, mr: 1 }}>
            Accept
          </Button>
          <Button variant="contained" color="secondary" sx={{ flex: 1, ml: 1 }}>
            Decline
          </Button>
        </Box>
      </Paper>
      {/* Repeat similar Paper components for other mentees */}
    </Box>
  );
};

export default AcceptDecline;
