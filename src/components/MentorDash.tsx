import React from 'react';
import { Box, Typography, Paper, Button, Avatar, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddIcon from '@mui/icons-material/Add';

const MentorDash = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#E8F4FF', // Light blue background
        minHeight: '100vh',
        padding: 3,
        position: 'relative',
      }}
    >
      {/* Settings Icon */}
      <IconButton
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
        }}
      >
        <SettingsIcon />
      </IconButton>

      {/* Header Section */}
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: '600px',
          p: 3,
          mb: 4,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          bgcolor: '#1976D2', // Blue background
          color: '#fff', // White text
          borderRadius: 2,
        }}
      >
        <Avatar
          src="/path/to/avatar.png" // Replace with the mentor's avatar path
          alt="Mentor Avatar"
          sx={{
            width: 80,
            height: 80,
            mr: 3,
          }}
        />
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
            Hi, Brianna!
          </Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Your Guidance Shapes Futures.
          </Typography>
          <Paper
            elevation={1}
            sx={{
              bgcolor: '#ffffff',
              color: '#000',
              padding: 1,
              borderRadius: 1,
              display: 'inline-block',
            }}
          >
            <Typography variant="caption">You have 3 Mentees</Typography>
          </Paper>
        </Box>
      </Paper>

      {/* Mentee List */}
      <Typography variant="h6" sx={{ width: '100%', maxWidth: '600px', mb: 2 }}>
        Mentee List
      </Typography>
      {['Morgan Lee', 'Jaida Plair', 'Antonio Moretti'].map((mentee, index) => (
        <Paper
          key={index}
          elevation={2}
          sx={{
            width: '100%',
            maxWidth: '600px',
            p: 2,
            mb: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: '#FFFFFF', // White background
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {mentee}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Aspiring {index === 0 ? 'Data Analyst' : index === 1 ? 'Consultant' : 'Developer'}
            </Typography>
          </Box>
          <IconButton>
            <GroupIcon />
          </IconButton>
        </Paper>
      ))}

      {/* Action Buttons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '600px',
          mb: 4,
        }}
      >
        <Button
          variant="contained"
          startIcon={<GroupIcon />}
          sx={{
            bgcolor: '#1976D2',
            color: '#fff',
            flex: 1,
            marginRight: 1,
            '&:hover': { bgcolor: '#155a9c' },
          }}
        >
          2 Pending Requests
        </Button>
        <Button
          variant="contained"
          startIcon={<CalendarTodayIcon />}
          sx={{
            bgcolor: '#FFFFFF',
            color: '#000',
            flex: 1,
            marginLeft: 1,
            '&:hover': { bgcolor: '#F5F5F5' },
          }}
        >
          Upcoming
        </Button>
      </Box>

      {/* New Group Event Button */}
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          bgcolor: '#1976D2',
          color: '#fff',
          borderRadius: '25px',
          paddingX: 4,
          textTransform: 'none',
        }}
      >
        New Group Event
      </Button>
    </Box>
  );
};

export default MentorDash;
