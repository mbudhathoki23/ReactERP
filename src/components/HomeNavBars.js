import { Typography, Button, Box, AppBar, Toolbar, IconButton, Menu, MenuItem, Link } from "@mui/material";
import React from "react";
import Wrapper from "../assest/wrappers/NavBarWrappers";
import Mrsolution from "../assest/images/MrSolution.png";
import { Container } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { navLinks, actualLinks } from "../details/NavLinksDetails";

const NavBars = () => {

  // Small Screen Menu List
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // large screen tutorial dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // arrays
  const videoLinksTypes = ["How to install the software", "How work with the software basics", "Generating New Ledger"]

  const navBarLink = navLinks.map((link, index) => {
    return (
      <Button key={index} onClick={handleCloseNavMenu} sx={{ mx: 2, color: 'white', display: 'block' }} className="cButton" disableRipple disableFocusRipple disableTouchRipple>
        <Link key={index} href={actualLinks[index]} className="cButton">{link}</Link>
      </Button>
    )
  })

  const navbarFullScreen = navLinks.map((navlink, index) => (

    navlink === "Tutorial" ?
      // tutorial dropdown
      <>
        <Button
          key={index}
          sx={{ mx: 2, color: 'white', display: 'block' }}
          className="cButton"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          disableRipple disableFocusRipple disableTouchRipple
        >Tutorial</Button>
        <Menu
          id="basic-menu"
          sx={{ backgroundColor: "rgba(0, 0, 0,0.25)" }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}>
          {videoLinksTypes.map((link, i) => {
            return (
              <MenuItem component={Link} key={i} to={actualLinks[index]} sx={{ fontSize: 18 }} align="center">
                {link}
              </MenuItem>
            )
          })}

        </Menu>
      </>
      :
      // links without dropdown
      <Button key={index} onClick={handleCloseNavMenu} sx={{ mx: 2, color: 'white', display: 'block' }} className="cButton">
        {navlink}
      </Button>))




  return (
    <Wrapper>
      <Box sx={{ marginBottom: 15 }}>
        <AppBar position="fixed" sx={{ py: 2 }} className="navbar-bg-color">
          <Container maxWidth="xl" fixed>
            <Toolbar>
              {/* laege screen logo and name display */}
              <Box sx={{ display: { xs: "none", md: "flex" } }} className="navigation-xl-display">
                <Box className="logo-name">
                  <img src={Mrsolution} alt="mr" className="img-container" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                  <Box className="name-address" display='flex' flexDirection='column' sx={{ marginLeft: 1.5 }}>
                    <Typography className="company-logo-name" noWrap sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}> M AND R SOLUTION</Typography>
                    <Typography className="company-logo-location" noWrap sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>Putalisadak, Computer Bazar 4th Floor</Typography>
                  </Box>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: "center", justifyContent: "center" }} className="links-display">
                  {navbarFullScreen}
                </Box>
              </Box>
              {/* small screen display */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  edge="end">
                  <FontAwesomeIcon icon={faBars} />
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
                  {navBarLink}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </Wrapper>
  );
};

export default NavBars;
