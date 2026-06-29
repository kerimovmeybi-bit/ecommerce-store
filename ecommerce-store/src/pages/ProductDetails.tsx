import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Rating,
  Stack,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { toggleFavorite } from "../features/favorites/favoritesSlice";
import { addToCart } from "../features/cart/cartSlice";

import type { RootState, AppDispatch } from "../app/store";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();

  const { products } = useSelector(
    (state: RootState) => state.products
  );

  const favorites = useSelector(
    (state: RootState) => state.favorites.items
  );

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const isFavorite = favorites.includes(
    Number(id)
  );

  if (!product) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5">
          Product not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Card>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            height: 400,
            objectFit: "contain",
            p: 2,
          }}
        />

        <CardContent>
          <Typography
            variant="h4"
            gutterBottom
          >
            {product.title}
          </Typography>

          <Typography
            variant="h5"
            color="primary"
            sx={{ mb: 2 }}
          >
            ${product.price}
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
          >
            Category: {product.category}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Rating
              value={product.rating.rate}
              precision={0.5}
              readOnly
            />

            <Typography variant="body2">
              {product.rating.rate} / 5
              ({product.rating.count} reviews)
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 3 }}
          >
            <Button
              variant={
                isFavorite
                  ? "contained"
                  : "outlined"
              }
              startIcon={
                isFavorite ? (
                  <FavoriteIcon />
                ) : (
                  <FavoriteBorderIcon />
                )
              }
              onClick={() =>
                dispatch(
                  toggleFavorite(product.id)
                )
              }
            >
              Favorite
            </Button>

            <Button
              variant="contained"
              startIcon={
                <ShoppingCartIcon />
              }
              onClick={() =>
                dispatch(addToCart(product))
              }
            >
              Add To Cart
            </Button>
          </Stack>

          <Box sx={{ mt: 2 }}>
            <Typography variant="body1">
              {product.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductDetails;