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


export default function HeaderComponent() {
    let userObj={
        name:"MCET"
    };
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState(userObj);
    
    const [token, setToken] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorE2, setAnchorE2] = useState(null);
    useEffect(() => {
        setToken(sessionStorage.getItem('token'));
        if (token != null) {
            setAuth(true);

        }
    });



    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleDrawer = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleDrawerClose = () => {
        setAnchorE2(null);
    };

    const logOut = () => {
        setToken(null);
        setAuth(false);
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("setupTime");
        sessionStorage.removeItem("expiresIn");
        setAnchorE2(null);
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
                            onClick={handleDrawer}
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
                                id="menu-drawer"
                                anchorEl={anchorE2}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorE2)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleDrawerClose}>Home</MenuItem>
                                <MenuItem onClick={handleDrawerClose}>Customer</MenuItem>

                            </Menu>

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
        </Box>
    );
}