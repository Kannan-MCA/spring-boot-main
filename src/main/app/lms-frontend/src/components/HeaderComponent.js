import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './../image/logo.png';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import "./header.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useAuth } from '../context/AuthContext';

export default function Header() {

  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  const location = useLocation();
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  useEffect(() => {
    
  }, [isAuthenticated, location.pathname, navigate]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const openMenu = (event) => setMenuAnchor(event.currentTarget);
  const closeMenu = () => setMenuAnchor(null);

  const handleLogout = () => {
    logout();
    navigate(0);
    closeMenu();
  };

  const drawerItems = ['Home', 'Departments', 'employees', 'Students', 'uploadquestions'];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          {isAuthenticated && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="menu-drawer"
              aria-haspopup="true"
              onClick={openDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" className="logo" />
          </Typography>
          {isAuthenticated && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={openMenu}
                color="inherit"
              >
                <Avatar>{user.fullName[0]}</Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={menuAnchor}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(menuAnchor)}
                onClose={closeMenu}
              >
                <MenuItem onClick={closeMenu}>Profile</MenuItem>
                <MenuItem onClick={closeMenu}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Sign-Out</MenuItem>
              </Menu>
            </div>
          )}
          {!isAuthenticated && (
            <div>
              <button className="register-link-button" onClick={() => navigate('/login')}>Login</button>
              <button className="register-link-button" onClick={() => navigate('/register')}>Sign-Up</button>
            </div>
          )}

        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={closeDrawer}>
          <List>
            {drawerItems.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(`/${text}`);
                  }}
                >
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>

      </Drawer>
    </Box>
  );
}