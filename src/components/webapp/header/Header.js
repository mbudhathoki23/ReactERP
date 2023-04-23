import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import { Box, Typography, Grid, Container, IconButton } from "@mui/material";
import MrLogo from "../../../assest/images/MrSolution.png";
import MessageIcon from "@mui/icons-material/Message";

const Header = () => {
  const code = "BRANCH01";
  const company_name = "Brach Demo Company";
  const start_date = "01/04/2079";
  const end_date = "31/03/2080";
  const user = "demo 0";
  const user_demo = "demo";
  const user_unit = "Birgunj";
  const new_user = "New user";

  return (
    <>
      <HeaderWrapper>
        <Box sx={{ px: 5 }}>
          <Grid
            container
            className="header-main"
            spacing={2}
            sx={{ py: 1, alignItems: "center" }}
          >
            <Grid item className="grid-item">
              <Box
                width={50}
                height={50}
                sx={{ backgroundColor: "white", borderRadius: 100 }}
              >
                {" "}
                <img src={MrLogo} alt="Company Logo" width={50} height={50} />
              </Box>
            </Grid>
            <Grid item className="grid-item">
              <Box>CODE : {code} </Box>
            </Grid>

            <Grid item className="grid-item">
              <Box>Company Name : {company_name}</Box>
            </Grid>

            <Grid item className="grid-item">
              <Box>Start Date : {start_date} </Box>
            </Grid>

            <Grid item className="grid-item">
              <Box>End Date : {end_date} </Box>
            </Grid>

            <Grid item className="grid-item">
              <Box>User : {user}</Box>
            </Grid>

            <Grid item className="grid-item">
              <Box>User : {user_demo}</Box>
            </Grid>

            <Grid item className="grid-item">
              <Box> Unit : {user_unit} </Box>
            </Grid>

            <Grid item className="grid-item">
              <Box> {new_user} </Box>
            </Grid>

            <Grid item className="grid-item">
              <IconButton>
                <MessageIcon className="message-icon"/>
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </HeaderWrapper>
    </>
  );
};

export default Header;
