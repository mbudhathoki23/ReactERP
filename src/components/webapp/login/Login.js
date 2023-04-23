import {
  Box,
  Button,
  Card,
  CardHeader,
  Container,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// wrapper import
import LoginWrapper from "./LoginWrapper";

// details import
import { softwares } from "../../../details/FeaturesOffered";

// icons import
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [userInput, setUserInput] = useState({
    id: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(true);

  const showPasswordHandle = () => {
    setShowPassword(!showPassword);
  };

  const handleLogInChange = (e) => {
    const { name, value } = e.target;
    setUserInput((v) => ({
      ...v,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log("loged in");
  };

  const softwareMap = softwares.map((software, i) => {
    const { icon, name } = software;
    return (
      <Typography
        className="software-list"
        key={i}
        sx={{ marginLeft: 5, textTransform: "capitalize" }}
      >
        <span className="icons-display">{icon}</span>
        {name}
      </Typography>
    );
  });

  return (
    <LoginWrapper>
      <Box className="login-wrapper">
        <Container maxWidth="xl" fixed>
          <Grid container columnSpacing={6} alignItems={"center"}>
            {/* our products detail section */}
            <Grid item xs={6}>
              <Card sx={{ px: 2, py: 3 }} className="our-services-card">
                <Box>
                  <Typography className="component-title" sx={{ mb: 2 }}>
                    Services we offer{" "}
                  </Typography>
                  {softwareMap}
                </Box>
              </Card>
            </Grid>
            {/* login section */}
            <Grid item className="login-section" xs={4}>
              <Box className="login-section-box">
                <Card sx={{ py: 3, px: 2 }} className="card-style">
                  <CardHeader className="card-header" title="Log In" />
                  <FormControl sx={{ pb: 3 }} width="100%">
                    <FormLabel required className="text">
                      User Name
                    </FormLabel>
                    <TextField
                      value={userInput.id}
                      onChange={handleLogInChange}
                      type="text"
                      name="id"
                    />
                  </FormControl>
                  <FormControl sx={{ pb: 3 }}>
                    <FormLabel required className="text">
                      Password
                    </FormLabel>

                    <span>
                      {showPassword ? (
                        <Box className="password-input-section">
                          <TextField
                            value={userInput.password}
                            onChange={handleLogInChange}
                            type="password"
                            name="password"
                            className="text-field"
                          />
                          <IconButton onClick={showPasswordHandle}>
                            <VisibilityIcon />
                            {/* <VisibilityOffIcon/> */}
                          </IconButton>
                        </Box>
                      ) : (
                        <Box className="password-input-section">
                          <TextField
                            value={userInput.password}
                            onChange={handleLogInChange}
                            type="text"
                            name="password"
                            className="text-field"
                          />
                          <IconButton onClick={showPasswordHandle}>
                            <VisibilityOffIcon />
                          </IconButton>
                        </Box>
                      )}
                    </span>
                  </FormControl>
                  <Button
                    variant="contained"
                    className="action-btn"
                    onClick={handleLogin}
                  >
                    Log in
                  </Button>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </LoginWrapper>
  );
};

export default Login;
