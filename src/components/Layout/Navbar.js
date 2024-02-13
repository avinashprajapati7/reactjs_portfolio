import { useState } from 'react';

import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const navItems = ['About', 'Skills', 'Contact'];

const Navbar = (props) => {
  const { window } = props;
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Portfolio
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link smooth to={`#${item.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <ListItemButton
                sx={{
                  color: location.hash === `#${item.toLowerCase()}` ? '#da54da' : 'white',
                  fontSize: '18px',
                  '&:hover': {
                    fontWeight: '600',
                    color: '#da54da',
                    backgroundColor: 'transparent',
                  },
                  textAlign: 'center',
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box >
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component='nav'
        sx={{
          backgroundColor: 'rgb(25, 25, 36)',
          height: '80px',
          justifyContent: 'center',
        }}
      >
        <Toolbar>
          <IconButton
            color='black'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{ mr: 1, fill: 'white' }} />
            <Typography
              sx={{ fontSize: '24px', fontWeight: 500, color: 'white' }}
            >
              Portfolio
            </Typography>
          </IconButton>
          <Typography
            component='div'
            sx={{
              color: 'white',
              flexGrow: 1,
              fontSize: '28px',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            <Link smooth to='#about' style={{ textDecoration: 'none', color: 'white' }} >
              Portfolio
            </Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link key={item} smooth to={`#${item.toLowerCase()}`}>
                <Button
                  key={item}
                  sx={{
                    color: location.hash === `#${item.toLowerCase()}` ? '#da54da' : 'white',
                    fontSize: '18px',
                    '&:hover': {
                      fontWeight: 'bold',
                      color: '#da54da',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#B2B5E0',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box >
  );
};

export default Navbar;
