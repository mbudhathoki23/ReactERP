import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { softwares } from "../../details/FeaturesOffered";
import ProductsWrapper from "./ProductsWrapper";
import ComingSoon from "../comingSoon/ComingSoon";
// import Particle from "./configs/particles/Particle";

const softwareList = softwares.map((software, index) => {
  const { icon, name } = software;
  return (
    <>
      {index % 2 === 0 ? (
        <ListItem className="card-list" key={index}>
          <Card className="card" sx={{ px: 5 }} raised={false}>
            <CardHeader
              avatar={<Avatar className="icon-display">{icon}</Avatar>}
              title={name}
            />
            <Box sx={{ display: "flex" }}>
              <CardMedia
                component="img"
                image={icon}
                alt={name}
                className="product-img-container"
              />

              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>Description Here</Typography>
                <CardActions>
                  <Button variant="contained">View Pricings</Button>
                </CardActions>
              </CardContent>
            </Box>
          </Card>
        </ListItem>
      ) : (
        <ListItem className="card-list" key={index}>
          <Card className="card" sx={{ px: 5 }}>
            <CardHeader
              avatar={<Avatar className="icon-display">{icon}</Avatar>}
              title={name}
            />
            <Box sx={{ display: "flex" }}>
              <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>Description Here</Typography>
                <CardActions>
                  <Button variant="contained">View Pricings</Button>
                </CardActions>
              </CardContent>
              <CardMedia
                component="img"
                image={icon}
                src={icon}
                alt={name}
                className="product-img-container"
              />
            </Box>
          </Card>
        </ListItem>
      )}
    </>
  );
});

const Products = () => {
  return (
    <ProductsWrapper>
      <ComingSoon />
      <Box>
        {/* <Particle /> */}
        {/* <Container maxWidth="xl" fixed>
          <List className="list-container">{softwareList}</List>
        </Container> */}
      </Box>
    </ProductsWrapper>
  );
};

export default Products;
