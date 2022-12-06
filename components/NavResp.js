import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';

const pages = ['Portfolio', 'Projects', 'Skills', 'Accomplishments'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'grid', md: 'none'  } }}>
            <IconButton
              size="small"
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
                horizontal: 'center',
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
             
                <MenuItem key={pages[0]} onClick={handleCloseNavMenu}>
                  <Link passHref href={'/'}>
                    <Typography textAlign="center">{pages[0]}</Typography>
                  </Link>
                </MenuItem>
                <MenuItem key={pages[1]} onClick={handleCloseNavMenu}>
                <Link passHref href={'/projects'}>
                    <Typography textAlign="center">{pages[1]}</Typography>
                  </Link>
                </MenuItem>
             <MenuItem key={pages[2]} onClick={handleCloseNavMenu}>
             <Link passHref href={'/skills'}>
                    <Typography textAlign="center">{pages[2]}</Typography>
                  </Link>
             </MenuItem>
             <MenuItem key={pages[3]} onClick={handleCloseNavMenu}>
             <Link passHref href={'/accomplishments'}>
                    <Typography textAlign="center">{pages[3]}</Typography>
                  </Link>
                  </MenuItem>
            </Menu>
          </Box>
          
          
          <Box sx={{ flexGrow: 1 , display: { xs: 'none', md: 'flex' } }}>
          
              <Link href={'/'} passHref>
              <Button
                key={pages[0]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block'}}
              >
                {pages[0]}
              </Button>
              </Link>  

              <Link href={'/projects'} passHref>
              <Button
                key={pages[1]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages[1]}
              </Button>
              </Link>  
         
              <Link href={'/skills'} passHref>
              <Button
                key={pages[2]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages[2]}
              </Button>
              </Link>

              <Link href={'/accomplishments'} passHref>
              <Button
                key={pages[3]}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {pages[3]}
              </Button>
              </Link>

          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
