import React from 'react';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

// MentorLogin Component
const MentorLogin = () => {
  return (
    <Box
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', 
        bgcolor: '#f5f5f5', 
        position: 'relative', 
      }}
    >
      {/* Settings Icon */}
      <IconButton
        sx={{
          position: 'absolute', // Position in the top-right corner
          top: 16,
          right: 16,
        }}
      >
        <SettingsIcon />
      </IconButton>

      {/* Logo */}
      <Box
        component="img"
        src="/path/to/logo.png" // Replace with the actual logo path
        alt="Protégé Logo"
        sx={{
          width: '120px', // Adjust logo size
          height: 'auto',
          mb: 4,
        }}
      />

      {/* Greeting */}
      <Typography variant="h5" sx={{ mb: 4, textAlign: 'center' }}>
        Hello, Welcome Back Mentor!
      </Typography>

      {/* Username Field */}
      <TextField
        label="Enter Username"
        variant="outlined"
        sx={{
          mb: 2, // Add margin between fields
          width: '300px', // Input width
          bgcolor: '#f3f0f6', // Background color
          borderRadius: 1, // Slightly rounded corners
        }}
      />

      {/* Password Field */}
      <TextField
        label="Enter Password"
        type="password" // Hide the password input
        variant="outlined"
        sx={{
          mb: 4, // Add margin below the password field
          width: '300px',
          bgcolor: '#f3f0f6',
          borderRadius: 1,
        }}
      />

      {/* Sign In Button */}
      <Button
        variant="contained"
        sx={{
          bgcolor: '#1976d2', // Blue background
          color: '#fff', // White text
          width: '300px', // Match input field width
          borderRadius: 2, // Rounded corners
          '&:hover': {
            bgcolor: '#155a9c', // Darker blue on hover
          },
        }}
      >
        Sign in
      </Button>

      {/* Forgot Password Link */}
      <Typography
        variant="body2"
        sx={{
          mt: 2, // Add margin above the link
          textAlign: 'center',
          cursor: 'pointer',
          textDecoration: 'underline', // Underline text
        }}
        onClick={() => alert('Redirect to Forgot Password page')} // Placeholder functionality
      >
        Forgot Password?
      </Typography>
    </Box>
  );
};

export default MentorLogin;
