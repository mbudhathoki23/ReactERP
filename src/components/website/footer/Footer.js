import { Box, Container } from "@mui/system";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import FooterWrapper from "./FooterWrappers";

import { Link } from "react-scroll";

// img imports
import MrSolution from "../../assest/images/MrLogo.ico";

// details import
import { navLinks } from "../../../details/NavLinksDetails";
import SocialLinks from "../../../details/SocialLinks";
import OurServicesDetails from "../../../details/OurServicesDetails";

// import icons
import CopyrightIcon from "@mui/icons-material/Copyright";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const companyDetail = {
    mail: "info@mrsolution.com.np",
    phone: "(+977) 1-4430676 / 4438465",
    alternatePhone: "(+977) 980-1093560 / 980-1093561",
    address: "Putalisadak, Computer Bazar 4th floor",
  };

  return (
    <FooterWrapper>
      <Box sx={{ py: 5 }} className="footer-section">
        <Container maxWidth="xl" fixed>
          <Box>
            <Grid container spacing={6}>
              <Grid item md={5}>
                <Box className="company-logo-name" sx={{ pb: 3 }}>
                  <img
                    src={MrSolution}
                    alt="Logo of the company"
                    className="company-logo"
                  />
                  <Typography className="footer-list-title company-name">
                    M AND R SOLUTION
                  </Typography>
                </Box>
                <Typography className="description-what-do" sx={{ pb: 3 }}>
                  The management software's robust reporting and analytics
                  capabilities provided us with detailed insights into our
                  financial performance, enabling us to quickly identify areas
                  for improvement and take proactive steps to optimize our
                  operations and increase profitability.
                </Typography>
                <Box>
                  {/* social links listing */}
                  <List className="social-links">
                    {SocialLinks.map((links, index) => {
                      const { icon, link } = links;
                      return (
                        <ListItem key={index}>
                          <Link
                            href={link}
                            className="social-link"
                            target="_blank"
                          >
                            {icon}
                          </Link>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Typography className="footer-list-title">Company</Typography>
                <List>
                  {navLinks.map((link, index) => {
                    return (
                      <ListItem key={index} className="list-item-box">
                        <Link
                          to={link}
                          className="list-items"
                          offset={-122}
                          duration={500}
                          activeClass="active"
                        >
                          {link}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
              <Grid item md={2} display="none">
                <Typography className="footer-list-title">
                  Industries
                </Typography>
                <List>
                  {navLinks.map((link, index) => {
                    return (
                      <ListItem key={index} className="list-item-box">
                        <ListItemText className="list-items"></ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
              <Grid item md={2}>
                <Typography className="footer-list-title">Services</Typography>
                <List>
                  {OurServicesDetails.map((item, index) => {
                    return (
                      <ListItem key={index} className="list-item-box">
                        <Typography className="list-items">
                          {item.title}
                        </Typography>
                      </ListItem>
                    );
                  })}
                </List>
              </Grid>
              <Grid item md={3}>
                <Typography className="footer-list-title">
                  Contact Details
                </Typography>
                <Box>
                  <List>
                    <ListItem className="list-item-box">
                      <Typography className="list-items">
                        {companyDetail.address}
                      </Typography>
                    </ListItem>
                    <ListItem className="list-item-box">
                      <Typography className="list-items">
                        {companyDetail.phone}
                      </Typography>
                    </ListItem>
                    <ListItem className="list-item-box">
                      <Typography className="list-items">
                        {companyDetail.alternatePhone}
                      </Typography>
                    </ListItem>
                    <ListItem className="list-item-box">
                      <Typography className="list-items">
                        {companyDetail.mail}
                      </Typography>
                    </ListItem>
                  </List>
                  <Link
                    to="Home"
                    offset={-122}
                    duration={10}
                    activeClass="active"
                  >
                    <Button
                      sx={{
                        height:"60px",
                        backgroundColor: "white",
                        color: "black",
                        width: "fit-content",
                        marginLeft: 30,
                        borderRadius:"100%",
                        "&:hover": {
                          color: "white",
                          backgroundColor: "black",
                        },
                      }}
                    >
                      <ArrowUpwardIcon />
                    </Button>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ my: 2, borderBottom: "2px solid white", width: "100%" }} />
          <Box>
            <Grid container>
              <Grid item sm={6}>
                <Typography className="copyright-text">
                  <CopyrightIcon /> Copyright (M AND R SOLUTION)
                </Typography>
              </Grid>
              <Grid item sm={6} display="flex" justifyContent="end">
                <Link href="/termsConditions" className="footer-foot-link">
                  {" "}
                  Terms & Condition
                </Link>
                <Link href="/privacyPolicy" className="footer-foot-link">
                  {" "}
                  Privacy Policy
                </Link>
                <Link href="/cookiePolicy" className="footer-foot-link">
                  {" "}
                  Cookie Policy
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </FooterWrapper>
  );
};

export default Footer;
