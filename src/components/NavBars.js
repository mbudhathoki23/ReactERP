import { Typography, Button, Box, AppBar, Toolbar, IconButton, Menu, MenuItem, Link } from "@mui/material";
import React from "react";
import Wrapper from "../assest/wrappers/NavBarWrappers";
import Mrsolution from "../assest/images/MrSolution.png";
import { Container } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBars = () => {

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const navLinks = ["Home", "Services", "About", "Team", "Tutorial", "Contact us"]
  const actualLinks = ["/home", "/services", "/about", "/team", "/tutorial", "/contactUs"]
  const navBarLink = navLinks.map((link, index) => {
    return (
      <MenuItem key={index}>
        <Link key={index} href={actualLinks[index]} className="cButton">{link}</Link>
      </MenuItem>
    )
  })



  return (
    <Wrapper>
      {/* <Grid container md={12} className="maindoing" sx={{ p: 1 }}>
        <Grid item md={5} sx={{ hegiht: 10 }} className="showBorder">
          <div className="imagepara">
            <img src={Mrsolution} alt="mr" className="imageresize"></img>
            <div className="twot">
              <Typography className="company-logo-name">M AND R SOLUTION</Typography>
              <Typography className="company-logo-location">Putalisadak, Kathmandu</Typography>
            </div>
          </div>
        </Grid>
        <Grid item md={7} sx={{ hegiht: 10 }} className="showBorder" >
          <div className="linkingList">
            {navBarLink}
          </div>
        </Grid>
      </Grid> */}
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
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems:"center", justifyContent:"center" }} className="links-display">
                  {navLinks.map((navlink, index) => {
                    return (
                      <Button key={index} onClick={handleCloseNavMenu} sx={{mx:2, color: 'white', display: 'block' }} className="cButton">
                        {navlink}
                      </Button>
                    )
                  })}
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
