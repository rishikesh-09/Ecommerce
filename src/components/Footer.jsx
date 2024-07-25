import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: 'black', 
        color: 'white', 
        p: 1, 
        marginTop: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }} 
      component="footer"
    >
      <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
        <Grid item>
          <Link href="/privacy" color="inherit" underline="">Privacy Policy</Link>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        © 2024 eCommerce. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
