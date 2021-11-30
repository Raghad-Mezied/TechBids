import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {
  Box, AppBar, IconButton, Toolbar, Menu, MenuItem, Typography, InputBase, Divider,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchIcon from '@mui/icons-material/Search';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../../context/useAuth';
import navLogo from '../../../images/navLogo.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '2rem',
  backgroundColor: alpha(theme.palette.common.white, 1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.9),
  },
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

// interface Props {
//   searchInput: string,
//   handleChange: any,
//   onClickHandle: any,
// }

// const NavBar : React.FC<Props> = ({
//   searchInput,
//   handleChange,
//   onClickHandle,
// }) => {
const NavBar : React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  // const { user, logout } = useAuth();
  // const navigate = useNavigate();

  const handleProfileMenuOpen = (event: any): any => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (): any => {
    setAnchorEl(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id="userMenu"
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My Auctions</MenuItem>
      <MenuItem onClick={handleMenuClose}>Win Items</MenuItem>
      <MenuItem onClick={handleMenuClose}>My Bids</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <LogoutIcon sx={{ mr: 0.5 }} />
        Logout
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ mr: 4 }}
          >
            <img src={navLogo} alt="Logo" width="80%" />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Bids
          </Typography>
          <Box width="40%" sx={{ ml: 16 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: '#000' }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{ color: '#000' }}
              />
            </Search>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              // edge="end"
              aria-label="account of current user"
              aria-controls="userMenu"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleOutlinedIcon />
              <Typography sx={{ ml: 1, mr: 3 }}>username</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};

export default NavBar;
