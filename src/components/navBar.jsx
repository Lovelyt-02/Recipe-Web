import { AppBar, Avatar, Box, Button, Menu, MenuItem, Toolbar } from '@mui/material'
import React from 'react'
import { useTheme } from '../../src/components/ThemeContext.jsx';
import { SignedIn, SignedOut, SignInButton, useClerk, useUser } from '@clerk/clerk-react';
import { Margin } from '@mui/icons-material';

const NavBar = () => {

    const { theme, toggleTheme } = useTheme();
    const { user } = useUser();

    const logosrc = theme === "light" ? "../src/assets/Logo.png" : "../src/assets/Logo2.png";
    const { signOut } = useClerk();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = async () => {
        await signOut();
    };

    return (
        <AppBar position='sticky' sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                <Box sx={{ flexGrow: '1' }}>
                    <img src={logosrc} alt="logo" style={{ height: '40px', width: 'auto' }} />
                </Box>

                <SignedIn>
                    {user && (
                        <>
                            <Button onClick={toggleTheme} varient="contained" sx={{ marginRight: 2 }}>
                                {theme === "light" ? "DarkMode" : "LightMode"}
                            </Button>
                            <Avatar src={user?.imageUrl} alt="profile" onClick={handleProfileClick} sx={{cursor: "pointer"}}/>

                            <Menu                                 anchorEl = {anchorEl}
                                open = {Boolean(anchorEl)}
                                onClose= {handleClose}>
                                <MenuItem onClick={handleLogout}>Logout
                                </MenuItem>
                            </Menu>
                        </>
                    )}
                </SignedIn>

                <SignedOut>
                    <SignInButton>
                        <Button variant='outlined' color='primary'>LogIn</Button>
                    </SignInButton>
                </SignedOut>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
