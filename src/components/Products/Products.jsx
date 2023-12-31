import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './styles';

const products = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "$5", image: 'https://images.pexels.com/photos/17567908/pexels-photo-17567908/free-photo-of-dag-fotografi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  { id: 2, name: "Macbook", description: "Apple macbook.", price: "$10", image: 'https://images.pexels.com/photos/17567908/pexels-photo-17567908/free-photo-of-dag-fotografi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

const Products = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
