import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

const pages = ['Home', 'Shop', 'Contact'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ width: '100%', backgroundColor: '#fff' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          padding: '0px !important',
          margin: '0px',
          width: '100%',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            justifyContent: {
              xs: 'space-between',
              md: 'center',
            },
            backgroundColor: '#fff',
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              fontFamily: 'gelica-black',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#141414',
              textDecoration: 'none',
            }}
          >
            Sun pop
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'gelica-black',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sun pop
          </Typography>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center',
            background: '#FDE9EA',
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: '#141414',
                display: 'block',
                fontFamily: 'gelica-regular',
              }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Box>
    </AppBar>
  );
}

export default Header;
