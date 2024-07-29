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
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


export default function HeaderComponent() {

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['User', 'Role', 'Department', 'Exam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
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


    let userObj = {
        name: "MCET"
    };
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(userObj);

    const [token, setToken] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        setToken(sessionStorage.getItem('token'));
        if (token != null) {
            setAuth(true);
            //navigate("/home");
        }
    });



    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    const logOut = () => {
        setToken(null);
        setAuth(false);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("setupTime");
        sessionStorage.removeItem("expiresIn");

        navigate("/");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>


            <AppBar position="static" >

                <Toolbar>
                    {auth && (
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
                    {auth && (
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
                                <MenuItem onClick={logOut}>Sign-Out</MenuItem>
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

