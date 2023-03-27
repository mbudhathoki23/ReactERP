import { Box, Container } from "@mui/system";
import { Grid, Link, List, ListItem, ListItemText, Typography } from "@mui/material"
import { navLinks, actualLinks } from "../details/NavLinksDetails";
import FooterWrapper from "../assest/wrappers/FooterWrappers";
import MrSolution from "../assest/images/MrLogo.ico"

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const Footer = () => {

  return (
    <FooterWrapper>
      <Box sx={{ py: 5 }} className="footer-section">
        <Container maxWidth="xl" fixed>
          <Grid container spacing={6}>
            <Grid item md={5}>
              <Box className="company-logo-name" sx={{ pb: 3 }}>
                <img src={MrSolution} alt="Logo of the company" className="company-logo" />
                <Typography className="footer-list-title company-name" >
                  M AND R SOLUTION
                </Typography>
              </Box>
              <Typography className="description-what-do" sx={{ pb: 3 }}>
                The management software's robust reporting and analytics capabilities provided us with detailed insights into our financial performance, enabling us to quickly identify areas for improvement and take proactive steps to optimize our operations and increase profitability.
              </Typography>
              <Box>
                <List className="social-links">
                  <ListItem >
                    <Link href="facebook.com" className="social-link">
                      <FacebookIcon />
                    </Link>
                  </ListItem>
                  <ListItem  >
                    <Link href="facebook.com" className="social-link">
                      <LinkedInIcon />
                    </Link>
                  </ListItem>
                  <ListItem >
                    <Link href="facebook.com" className="social-link">
                      <InstagramIcon />
                    </Link>
                  </ListItem>
                  <ListItem >
                    <Link href="facebook.com" className="social-link">
                      <TwitterIcon />
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item md={3}>
              <Typography className="footer-list-title">
                Navigations
              </Typography>
              <List >
                {navLinks.map((link, index) => {
                  return (
                    <ListItem key={index} className="list-item-box">
                      <Link href={actualLinks[index]} className="list-items">{link}</Link>
                    </ListItem>
                  )
                })
                }
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </FooterWrapper>
  )
}

export default Footer;