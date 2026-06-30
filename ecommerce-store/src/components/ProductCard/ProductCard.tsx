import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/Product";

import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useDispatch, useSelector } from "react-redux";

import { toggleFavorite } from "../../features/favorites/favoritesSlice";
import { addToCart } from "../../features/cart/cartSlice";

import type { RootState, AppDispatch } from "../../app/store";

import { motion } from "framer-motion";
import { toast } from "react-toastify";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const favorites = useSelector(
    (state: RootState) => state.favorites.items
  );

  const isFavorite = favorites.includes(product.id);

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      style={{ height: "100%" }}
    >
      <Card
        onClick={() => navigate(`/product/${product.id}`)}
        sx={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <IconButton
          onClick={(e) => {
            e.stopPropagation();

            dispatch(toggleFavorite(product.id));

            if (isFavorite) {
              toast.info("Removed from favorites");
            } else {
              toast.success("Added to favorites ❤️");
            }
          }}
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 2,
          }}
        >
          <motion.div
            whileTap={{ scale: 1.4 }}
            transition={{ duration: 0.15 }}
          >
            {isFavorite ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </motion.div>
        </IconButton>

        <motion.div
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.3,
          }}
        >
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
        </motion.div>

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

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              fullWidth
              startIcon={<ShoppingCartIcon />}
              sx={{
                mt: "auto",
              }}
              onClick={(e) => {
                e.stopPropagation();

                dispatch(addToCart(product));

                toast.success("Added to cart 🛒");
              }}
            >
              Add to Cart
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ProductCard;