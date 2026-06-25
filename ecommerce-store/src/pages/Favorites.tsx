import { Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import ProductCard from "../components/ProductCard/ProductCard";

import type { RootState } from "../app/store";

function Favorites() {
  const products = useSelector(
    (state: RootState) => state.products.products
  );

  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.items
  );

  const favoriteProducts = products.filter((product) =>
    favoriteIds.includes(product.id)
  );

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
            Favorites
        </Typography>

      {favoriteProducts.length === 0 ? (
        <Typography>No favorite products yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {favoriteProducts.map((product) => (
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
      )}
    </Container>
  );
}

export default Favorites;