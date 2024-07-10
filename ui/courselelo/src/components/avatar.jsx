import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';

export default function BasicAvatars(username) {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
  { username ?(  <Avatar />) 
  : (<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />  ) }
    </Box>
  );
}