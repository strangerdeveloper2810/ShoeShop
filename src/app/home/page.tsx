"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { productServices } from "@/services/ProductServices";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/Components/Loading";
import { Product } from "@/types/Product";
const defaultTheme = createTheme();

const Home: React.FC = () => {
  // const pageIndex:number = 2;
  // const pageSize: number = 10;
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["products"],
    // queryFn: ()=> productServices.getProduct(pageIndex,pageSize ),
    queryFn: ()=> productServices.getAllProduct()
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    // @ts-ignore
    return <span>Error: {error.message}</span>;
  }
  console.log('items',data?.content?.items)
  const renderCardProduct = () => {
    return data?.content.map((card: Product) => (
      <Grid item key={card.id} xs={12} sm={6} md={4}>
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <CardMedia
            component="div"
            sx={{
              // 16:9
              pt: "56.25%",
            }}
            image={card.image}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {card.name}
            </Typography>
            <Typography>{card.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" color="primary">View</Button>
            <Button size="small" variant="contained" color="success">Buy</Button>
          </CardActions>
        </Card>
      </Grid>
    ));
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Hot Shoe
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
             {renderCardProduct()}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Home;
