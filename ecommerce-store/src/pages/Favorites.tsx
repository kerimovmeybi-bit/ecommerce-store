import {
  Container,
  Grid,
  Typography,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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

  if (favoriteProducts.length === 0) {
    return (
      <Container
        maxWidth="md"
        sx={{
          mt: 8,
          textAlign: "center",
        }}
      >
        <FavoriteBorderIcon
          sx={{
            fontSize: 80,
            mb: 2,
          }}
        />

        <Typography
          variant="h4"
          gutterBottom
        >
          No favorites yet
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
        >
          Browse products and add
          your favorite items here.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Favorites
      </Typography>

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
    </Container>
  );
}

export default Favorites;