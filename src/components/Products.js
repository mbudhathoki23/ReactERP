import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { softwares } from "../details/FeaturesOffered";
import ProductsWrapper from "../assest/wrappers/ProductsWrapper";
import { Button } from "react-scroll";
import Particle from "./configs/particles/Particle";

const softwareList = softwares.map((software, index) => {
  const { icon, name } = software;
  return (
    <ListItem className="card-list" key={index}>
      <Card className="card" sx={{ px: 5 }}>
        <CardHeader avatar={<Avatar className="icon-display">{icon}</Avatar>} />
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={icon}
            alt={name}
            className="product-img-container"
          />

          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              className="software-list"
              sx={{ textTransform: "capitalize" }}
            >
              {name}
            </Typography>
            <Typography>Description Here</Typography>
          </CardContent>
        </Box>
      </Card>
    </ListItem>
  );
});

const Products = () => {
  return (
    <ProductsWrapper>
      <Box>
        <Particle />
        <Container maxWidth="xl" fixed>
          <List className="list-container">{softwareList}</List>
        </Container>
      </Box>
    </ProductsWrapper>
  );
};

export default Products;
