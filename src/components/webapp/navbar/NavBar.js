import * as React from "react";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
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
// import { ChartOfAccountant, ERPsolutions } from "../../../details/NavLinksDetails";
import { ChartOfAccountant } from "./NavDetails/NavMaster";

const pages = [
  "Home",
  "Software Registration",
  "Support",
  "Sales",
  "Amc Ledger",
  "Configuration",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const theme = createTheme({
  palette: {
    primary: {
      main: "#8b5cf6",
    },
  },
});

export default function NavBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElSales, setAnchorElSales] = useState(null);
  const [anchorElSupport, setAnchorElSupport] = useState(null);
  const [anchorElConfiguration, setAnchorElConfiguration] = useState(null);

  // nav dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <AppBar position="fixed" sx={{ bgcolor: "#5B21B6" }}>
          {/* <Container maxWidth="xl"> */}
            <Toolbar disableGutters>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* Add a Menu component for "Home" */}
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button sx={{ my: 2, color: "white", display: "block" }}>
                      Home
                    </Button>
                    {/* <Link to={"/Home"}>
                    </Link> */}
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Master
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Finance
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Sales
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                 <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Purchase
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Inventor
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Smart Sales
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Doc Management
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Utility
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Users
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                   <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <Button
                      sx={{
                        mx: 2,
                        color: "white",
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
                      Help
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
                            <Typography variant="h6">
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                              ChartOfAccountant{" "}
                            </Typography>
                          </Box>
                          <MenuList>
                            {ChartOfAccountant.map((list, i) => {
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
                  </Box>

                </Box>
                <Box>
                  <Box>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/2.jpg"
                        />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                          <Typography textAlign="center">{setting}</Typography>
                          {/* <Link to={`/${setting}`}>
                          </Link> */}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                </Box>
              </Box>
            </Toolbar>
          {/* </Container> */}
        </AppBar>
        {/* </Box> */}
      </Box>
    </ThemeProvider>
  );
}
