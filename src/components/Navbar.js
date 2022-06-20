import { AppBar, Box, Toolbar, Typography, Button, Alert } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              ShopBazar
            </Typography>

            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? '#01579b' : '' };
              }}
              sx={{ color: 'white', textTransform: 'none' }}
            >
              Home
            </Button>

            <Button
              component={NavLink}
              to="/contact"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? '#01579b' : '' };
              }}
              sx={{ color: 'white', textTransform: 'none' }}
            >
              Contact
            </Button>

            <Button
              component={NavLink}
              onSubmit={onsubmit}
              to="/login"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? '#01579b' : '' };
              }}
              sx={{ color: 'white', textTransform: 'none' }}
            >
              Login/Registration
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
