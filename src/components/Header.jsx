import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem component="a" href="/products"><ListItemText primary="Products" /></ListItem>
        <ListItem component="a" href="/"><ListItemText primary="About" /></ListItem>
        <ListItem component="a" href="/"><ListItemText primary="Contact" /></ListItem>
        <ListItem button component="a" href="/cart">
          <ShoppingCartIcon sx={{ marginRight: 1 }} />
          <ListItemText primary="Cart" />
        </ListItem>
        <ListItem button component="a" href="/profile">
          <AccountCircleIcon sx={{ marginRight: 1 }} />
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          <Link href="/" color="inherit" underline="none">
            eCommerce
          </Link>
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/products" color="inherit" underline="none">
              Products
            </Link>
            <Link href="/about" color="inherit" underline="none">
              About
            </Link>
            <Link href="/contact" color="inherit" underline="none">
              Contact
            </Link>
            <Link href="/cart" color="inherit" underline="none">
              <ShoppingCartIcon />
            </Link>
            <Link href="/profile" color="inherit" underline="none">
              <AccountCircleIcon />
            </Link>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;


