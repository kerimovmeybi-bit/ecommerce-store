import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  Box,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "../../app/store";

function Navbar() {
  const favoritesCount = useSelector(
    (state: RootState) => state.favorites.items.length
  );

  // Пока корзину еще не сделали
  const cartCount = 0;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          E-Commerce Store
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            HOME
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/favorites"
            startIcon={
              <Badge
                badgeContent={favoritesCount}
                color="error"
              >
                <FavoriteIcon />
              </Badge>
            }
          >
            FAVORITES
          </Button>

          <Button
            color="inherit"
            component={Link}
            to="/cart"
            startIcon={
              <Badge
                badgeContent={cartCount}
                color="primary"
              >
                <ShoppingCartIcon />
              </Badge>
            }
          >
            CART
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;