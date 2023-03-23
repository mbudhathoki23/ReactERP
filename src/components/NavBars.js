import { Grid, Typography, Link } from "@mui/material";
import React from "react";
import Wrapper from "../assest/wrappers/NavBarWrappers";
import Mrsolution from "../assest/images/MrSolution.png";

const NavBars = () => {

  const navLinks = ["Home", "Services", "About", "Team Portfolio", "Tutorial", "Contact us"]
  const actualLinks = ["/home", "/services", "/about", "/team", "/tutorial", "/contactUs"]
  const navBarLink = navLinks.map((link, index) => {
    return (
      <Link key={index} href={actualLinks[index]} variant="text" className="cButton">{link}</Link>
    )
  })
  return (
    <Wrapper>
      <Grid container md={12} className="maindoing" sx={{ p: 1 }}>
        {/* Frist box for logo and title */}
        <Grid item md={5} sx={{ hegiht: 10 }} className="showBorder">
          <div className="imagepara">
            <img src={Mrsolution} alt="mr" className="imageresize"></img>
            <div className="twot">
              <Typography className="company-logo-name">M AND R SOLUTION</Typography>
              <Typography className="company-logo-location">Putalisadak, Kathmandu</Typography>
            </div>
          </div>
        </Grid>

        {/* second box for logo and title */}
        <Grid item md={7} sx={{ hegiht: 10 }} className="showBorder" >
          <div className="linkingList">
            {navBarLink}
          </div>
        </Grid>



      </Grid>
    </Wrapper>
  );
};

export default NavBars;
