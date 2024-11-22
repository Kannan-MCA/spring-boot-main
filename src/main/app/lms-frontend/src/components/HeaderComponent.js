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
import "./../App.css";
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
export default function HeaderComponent() {
    const { logout } = useAuth();
    const { authUser } = useAuth();
    const navigate = useNavigate();

    const initialAuthUserObj = {
        name: "",
        token: "",
        setupTime: "",
        expiresIn: ""
    }

    const [user, setUser] = useState(initialAuthUserObj);

    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Home', 'User', 'Role', 'Department', 'Exam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={(event) => {
                                event.preventDefault();
                                navigate("/" + event.target.textContent);
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
    );
    useEffect(() => {

        (user.token != "" && location.pathname === "/") ? navigate("/home") : navigate("/");

    }, []);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleLogout = () => {
       let islogout = logout
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" >

                <Toolbar>
                    {user.token != "" && (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            aria-controls="menu-drawer"
                            aria-haspopup="true"
                            onClick={toggleDrawer(true)}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}


                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <img src={logo} className='logo' />
                    </Typography>
                    {user.token != "" && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >

                                <Avatar>{user.name.charAt(0)}</Avatar>

                            </IconButton>


                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                                <MenuItem onClick={handleLogout}>Sign-Out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </Box>
    );
}