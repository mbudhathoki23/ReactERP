import {
  Box,
  // Button,
  Card,
  CardActionArea,
  // CardActions,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import PricingWrapper from "./PricingsWrapper";
import pricingsDetails from "../../details/PricingsDetail";
import {Link as RouteLink} from "react-router-dom"

const Pricings = () => {
  const priceCard = Object.keys(pricingsDetails).map((i) => {
    return (
      <Grid item key={i} xs={12} sm={6} md={6} xl={3}>
        <Card
          sx={{
            borderRadius: "20px",
            py: 1,
            height: { xs: "auto", sm: "400px" },
          }}
          raised
          className="price-card"
        >
          <CardActionArea LinkComponent={RouteLink} to={"/pricings"} sx={{width:"100%", height:"100%"}}>
            <CardContent>
              {/* category */}
              <Typography
                sx={{
                  textAlign: "center",
                  textTransform: "uppercase",
                  fontSize: "1.1rem",
                  color: "white",
                  textDecoration: "underline",
                  textDecorationThickness: "3px",
                  textDecorationColor: "#4c1d95",
                }}
              >
                {i}
              </Typography>
              {/* price */}
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "1.7rem",
                  fontWeight: "bolder",
                  color: "white",
                }}
              >
                {pricingsDetails[i].price}
              </Typography>
              <Box>
                <List
                  sx={{
                    textAlign: "center",
                    borderTop: "3px solid",
                    color: "white",
                  }}
                  className="price-card-list"
                >
                  {/* features list */}
                  <Typography
                    sx={{
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Features
                  </Typography>
                  {pricingsDetails[i].features.map((feature) => (
                    <ListItem key={feature} sx={{ width: "100%" }}>
                      <Typography
                        variant="h6"
                        sx={{ textAlign: "center", color: "white" }}
                      >
                        {feature}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </CardContent>
            {/* <CardActions
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="contained" className="action-button">
                Buy Now
              </Button>
            </CardActions> */}
          </CardActionArea>
        </Card>
      </Grid>
    );
  });

  return (
    <PricingWrapper>
      <Box sx={{ py: 5 }}>
        <Container maxWidth="xxl" fixed>
          <Box>
            <Typography className="component-title">
              Pricings for our products
            </Typography>
            <Grid container spacing={4} sx={{ my: 3 }}>
              {priceCard}
            </Grid>
          </Box>
        </Container>
      </Box>
    </PricingWrapper>
  );
};

export default Pricings;
