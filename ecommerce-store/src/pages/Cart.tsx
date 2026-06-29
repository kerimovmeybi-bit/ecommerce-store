import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";

import type { AppDispatch, RootState } from "../app/store";

function Cart() {
  const dispatch = useDispatch<AppDispatch>();

  const cartItems = useSelector(
    (state: RootState) => state.cart.items
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 8,
        textAlign: "center",
      }}
    >
      <ShoppingCartIcon
        sx={{
          fontSize: 80,
          mb: 2,
        }}
      />

      <Typography
        variant="h4"
        gutterBottom
      >
        Your cart is empty
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
      >
        Start shopping and add
        products to your cart.
      </Typography>
    </Container>
  );
}

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        sx={{ mb: 4 }}
      >
        Shopping Cart
      </Typography>

      {cartItems.map((item) => (
        <Card
          key={item.product.id}
          sx={{
            display: "flex",
            mb: 3,
            p: 2,
          }}
        >
          <CardMedia
            component="img"
            image={item.product.image}
            alt={item.product.title}
            sx={{
              width: 120,
              objectFit: "contain",
            }}
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h6">
              {item.product.title}
            </Typography>

            <Typography
              color="primary"
              sx={{ mt: 1 }}
            >
              ${item.product.price}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 2,
              }}
            >
              <IconButton
                onClick={() =>
                  dispatch(decreaseQuantity(item.product.id))
                }
              >
                <RemoveIcon />
              </IconButton>

              <Typography>
                {item.quantity}
              </Typography>

              <IconButton
                onClick={() =>
                  dispatch(increaseQuantity(item.product.id))
                }
              >
                <AddIcon />
              </IconButton>

              <Button
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() =>
                  dispatch(removeFromCart(item.product.id))
                }
              >
                Remove
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}

      <Divider sx={{ my: 4 }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
      <Divider sx={{ my: 4 }} />
      <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mb: 3,
          }}
      >
          <Button
            variant="outlined"
            color="error"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
      </Box>

        <Typography variant="h5">
          Total
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
        >
          ${totalPrice.toFixed(2)}
        </Typography>
      </Box>
    </Container>
  );
}

export default Cart;