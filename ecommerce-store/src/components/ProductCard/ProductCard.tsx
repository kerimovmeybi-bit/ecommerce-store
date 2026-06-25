import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import type { Product } from "../../types/Product";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import  FavoriteBorderIcon  from "@mui/icons-material/FavoriteBorder";

import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "../../features/favorites/favoritesSlice";

import type { RootState, AppDispatch  } from "../../app/store";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  
  const dispatch = useDispatch<AppDispatch>();

  const favorites = useSelector(
    (state: RootState) => state.favorites.items
  );

  const isFavorite = favorites.includes(product.id);

  return (
    <Card
      sx={{
        position: "reletive",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transition: "0.3s ease",

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: 10,
        },
      }}
    >
    <IconButton
      onClick={() => dispatch(toggleFavorite(product.id))}
      sx={{
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 2,
      }}
    >
      {isFavorite ? (
        <FavoriteIcon color="error" />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{
          height: 220,
          objectFit: "contain",
          p: 2,
        }}
      />

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            textAlign: "center",
            height: 64,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.title}
        </Typography>

        <Typography
            variant="h5"
            color="primary"
            sx={{
                fontWeight: "bold",
                textAlign: "center",
                mb: 2,
            }}
        >
            ${product.price}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: "auto",
          }}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;