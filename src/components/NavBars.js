import { Grid, Typography,Link} from "@mui/material";
import React from "react";
import Wrapper from "../assest/wrappers/NavBarWrappers";
import Mrsolution from "../assest/images/MrSolution.png";

const NavBars = () => {
  return (
    <Wrapper>
      <Grid container md={12} className="maindoing" sx={{ p: 1 }}>

      {/* Frist box for logo and title */}
        <Grid item md={5} sx={{ hegiht: 10 }} className="showBorder">
          <div className="imagepara">
            <img src={Mrsolution} alt="mr" className="imageresize"></img>
            <div className="twot">
              <Typography variant="" className="forboldtitle">M AND R SOLUTION</Typography>
              <Typography variant="body1">Putalisadak,kathmandu</Typography>
            </div>
          </div>
        </Grid>

      {/* second box for logo and title */}
      <Grid item md={7} sx={{ hegiht: 10 }} className="showBorder" >
      <div className="linkingList">
      <Typography variant="body">
      <Link href="#" className="itemlist" underline="none">Home</Link>
      <Link href="#" className="itemlist" underline="none">Service</Link>
      <Link href="#" className="itemlist" underline="none">About</Link>
      <Link href="#" className="itemlist" underline="none">Portolio</Link>
      <Link href="#" className="itemlist" underline="none">Team</Link>
      <Link href="#" className="itemlist" underline="none">Contact</Link>
 


      </Typography>
      </div>
      </Grid>



      </Grid>
    </Wrapper>
  );
};

export default NavBars;
