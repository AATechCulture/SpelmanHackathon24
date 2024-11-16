import React from 'react';
import { Box, Typography, Button, Paper, TextField } from '@mui/material';

const MenteeDash = () => {
  const [viewNotes, setViewNotes] = React.useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        height: '100vh',
        padding: 4,
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Hi, Jasmine!
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Ready to Grow Today? 3/5 Goals Achieved
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button variant="contained" sx={{ mr: 1 }}>
          Schedule Growth Session
        </Button>
        <Button variant="contained">View Calendar</Button>
      </Box>
      <Button
        variant="contained"
        sx={{ mt: 4 }}
        onClick={() => setViewNotes(!viewNotes)}
      >
        {viewNotes ? 'Hide Notes' : 'View Notes'}
      </Button>
      {viewNotes && (
        <Paper sx={{ mt: 4, p: 2, width: '100%' }}>
          <Typography variant="h6">Meeting Notes:</Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            sx={{ mt: 2 }}
          />
        </Paper>
      )}
    </Box>
  );
};

export default MenteeDash;
