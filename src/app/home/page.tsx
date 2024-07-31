"use client";
import _ from "lodash";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Box, Typography, Container } from "@mui/material";
import Loading from "@/Components/Loading";
import { Product } from "@/types/Product";
import { httpForNextServer } from "@/utils/setting";
const Home: React.FC = () => {
  // const pageIndex:number = 2;
  // const pageSize: number = 10;
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    // queryFn: ()=> productServices.getProduct(pageIndex,pageSize ),
    queryFn: async () => await httpForNextServer.get("/api/product/getAllProduct"),
  });

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    // @ts-ignore
    return <span>Error: {error.message}</span>;
  }

  const product = _.get(data, "data.data", []);

  const renderCardProduct = () => {
    return _.map(product, (card: Product) => (
      <Grid item key={card.id} xs={12} sm={6} md={4}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            image={_.get(card, "image", "")}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="p" sx={{ textTransform: "capitalize" }}>
              {_.get(card, "name", "")}
            </Typography>
            <Typography sx={{ textTransform: "capitalize" }}>{_.get(card, "description", "").substring(0, 100)}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" color="primary">View</Button>
            <Button size="small" variant="contained" color="success">Buy</Button>
          </CardActions>
        </Card>
      </Grid>
    ))
  };
  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Hot Shoe
        </Typography>
        <Grid container spacing={4}>
          {renderCardProduct()}
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
