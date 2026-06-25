import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid } from "@mui/material";

import ProductCard from "../components/ProductCard/ProductCard";
import { fetchProducts } from "../features/products/productsSlice";

import type { AppDispatch, RootState } from "../app/store";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <h1>Home Page</h1>

      <p>Products: {products.length}</p>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid
            key={product.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;