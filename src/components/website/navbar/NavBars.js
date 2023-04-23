import {
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Card,
  Popover,
} from "@mui/material";
import React from "react";
import Wrapper from "./NavBarWrappers";
import { Container } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { navLinks } from "../details/NavLinksDetails";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouteLink } from "react-router-dom";
import { OtherSolutions, ERPsolutions } from "../../../details/NavLinksDetails";

// image import
import Mrsolution from "../../../assest/images/MrSolution.png";

// import { Translate } from "@mui/icons-material";

const NavBars = () => {
  // Small Screen Menu List
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // nav dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // function ScrollLink(props) {
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     const target = document.querySelector(props.to);
  //     target.scrollIntoView({ behavior: 'smooth' });
  //   };

  // large screen tutorial dropdown
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // arrays
  // const videoLinksTypes = [
  //   "How to install the software",
  //   "How work with the software basics",
  //   "Generating New Ledger",
  // ];

  return (
    <Wrapper>
      <Box sx={{ marginBottom: 15 }}>
        <AppBar position="fixed" sx={{ py: 2 }} className="navbar-bg-color">
          <Container maxWidth="xl" fixed>
            <Toolbar>
              {/* large screen logo and name display */}
              <Box
                sx={{ display: { xs: "none", xl: "flex" } }}
                className="navigation-xl-display"
              >
                <Box className="logo-name">
                  <img
                    src={Mrsolution}
                    alt="mr"
                    className="img-container"
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                  <Box
                    className="name-address"
                    display="flex"
                    flexDirection="column"
                    sx={{ marginLeft: 1.5 }}
                  >
                    <Typography
                      className="company-logo-name"
                      noWrap
                      sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    >
                      {" "}
                      M AND R SOLUTION
                    </Typography>
                    <Typography
                      className="company-logo-location"
                      noWrap
                      sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    >
                      Putalisadak, Computer Bazar 4th Floor
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  className="links-display"
                >
                  <RouteLink to="/#Hero">
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
                        display: { md: "none", xl: "block" },
                      }}
                      className="cButton"
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                    >
                      Home
                    </Button>
                  </RouteLink>
                  {/* <>
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
                        display: { md: "none", xl: "block" },
                      }}
                      className="cButton"
                      id="basic-button"
                      aria-controls={anchorEl ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={anchorEl ? "true" : undefined}
                      onClick={handleClick}
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                    >
                      Tutorial
                    </Button>
                    <Menu
                      id="basic-menu"
                      sx={{ backgroundColor: "rgba(0, 0, 0,0.25)" }}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {videoLinksTypes.map((link, i) => {
                        return (
                          <MenuItem
                            component={ScrollLink}
                            key={i}
                            to={link}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            sx={{ fontSize: 18 }}
                            align="center"
                            onClick={handleClose}
                          >
                            {link}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </> */}
                  {/* <RouteLink></RouteLink> */}

                  <ScrollLink
                    offset={-122}
                    duration={15000}
                    activeClass="active"
                    to="Services"
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
                        display: { md: "none", xl: "block" },
                      }}
                      className="cButton"
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                    >
                      Services
                    </Button>
                  </ScrollLink>
                  {/* <RouteLink to="/products"> */}
                  <Button
                    sx={{
                      mx: 2,
                      color: "white",
                      display: { md: "none", xl: "block" },
                    }}
                    className="cButton"
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                    id="product-list-btn"
                    aria-controls={open ? "products-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    // onMouse
                    // onMouseLeave={handleClose}
                  >
                    Products
                  </Button>
                  {/* </RouteLink> */}
                  <Popover
                    id="product-menu"
                    anchorEl={anchorEl}
                    open={open}
                    // onMouseEnter={handleClick}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    sx={{ height: "500px" }}
                  >
                    <Card
                      className="product-list"
                      sx={{ display: "flex", flexDirection: "row", p: 3 }}
                    >
                      <Box sx={{ pr: 5 }}>
                        <Box className="border-bottom">
                          <Typography variant="h6">Other Solutions</Typography>
                        </Box>
                        <MenuList>
                          {OtherSolutions.map((list, i) => {
                            return (
                              <MenuItem
                                className="ani-list"
                                key={i}
                                onClose={handleClose}
                              >
                                {list}
                              </MenuItem>
                            );
                          })}
                        </MenuList>
                      </Box>
                      <Box sx={{ p: 0 }}>
                        <Box className="border-bottom">
                          <Typography variant="h6">
                            ERP{" "}
                            <span className="depricated-text">
                              {`(Corporate Solutions)`}{" "}
                            </span>
                          </Typography>
                        </Box>
                        <MenuList>
                          {ERPsolutions.map((list, i) => {
                            return (
                              <MenuItem
                                className="ani-list"
                                key={i}
                                onClose={handleClose}
                              >
                                {list}
                              </MenuItem>
                            );
                          })}
                        </MenuList>
                      </Box>
                    </Card>
                  </Popover>
                  <ScrollLink
                    offset={-122}
                    duration={15000}
                    activeClass="active"
                    to="About"
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
                        display: { md: "none", xl: "block" },
                      }}
                      className="cButton"
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                    >
                      About
                    </Button>
                  </ScrollLink>
                  <ScrollLink
                    offset={-122}
                    duration={15000}
                    activeClass="active"
                    to="Enquiry"
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
                        display: { md: "none", xl: "block" },
                      }}
                      className="cButton"
                      disableRipple
                      disableFocusRipple
                      disableTouchRipple
                    >
                      Enquiry
                    </Button>
                  </ScrollLink>
                </Box>
              </Box>
              {/* small screen display */}
              {/* icon */}
              <Box sx={{ flexGrow: 1, display: { md: "block", xl: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="small-screen-nav"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                  edge="end"
                >
                  <FontAwesomeIcon icon={faBars} />
                </IconButton>
                {/* menulist for small screen */}
                <Menu
                  id="small-screen-nav"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { md: "block", xl: "none" },
                  }}
                >
                  <MenuItem>
                    <RouteLink to="/" className="cButton">
                      <Button
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{ color: "#0d113c" }}
                      >
                        Home
                      </Button>
                    </RouteLink>
                  </MenuItem>
                  <MenuItem>
                    <ScrollLink
                      to="Services"
                      className="cButton"
                      offset={-122}
                      duration={15000}
                      activeClass="active"
                    >
                      <Button
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{ color: "#0d113c" }}
                      >
                        Services
                      </Button>
                    </ScrollLink>
                  </MenuItem>
                  <MenuItem>
                    <RouteLink
                      to="/products"
                      className="cButton"
                      offset={-122}
                      duration={15000}
                      activeClass="active"
                      sx={{ color: "#0d113c" }}
                    >
                      <Button
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{ color: "#0d113c" }}
                      >
                        Products
                      </Button>
                    </RouteLink>
                  </MenuItem>
                  <MenuItem>
                    <ScrollLink
                      to="About"
                      className="cButton"
                      offset={-122}
                      duration={15000}
                      activeClass="active"
                    >
                      <Button
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{ color: "#0d113c" }}
                      >
                        About
                      </Button>
                    </ScrollLink>
                  </MenuItem>
                  <MenuItem>
                    <ScrollLink
                      to="Enquiry"
                      className="cButton"
                      offset={-122}
                      duration={15000}
                      activeClass="active"
                    >
                      <Button
                        disableElevation
                        disableFocusRipple
                        disableRipple
                        disableTouchRipple
                        sx={{ color: "#0d113c" }}
                      >
                        Enquiry
                      </Button>
                    </ScrollLink>
                  </MenuItem>
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
