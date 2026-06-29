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
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useThemeContext } from "../../context/ThemeContext";

import type { RootState } from "../../app/store";

function Navbar() {
  const { mode, toggleTheme } =
    useThemeContext();

  const favoritesCount = useSelector(
    (state: RootState) =>
      state.favorites.items.length
  );

  const cartCount = useSelector(
    (state: RootState) =>
      state.cart.items.reduce(
        (total, item) =>
          total + item.quantity,
        0
      )
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1 }}
        >
          E-Commerce Store
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 3,
            alignItems: "center",
          }}
        >
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
          startIcon={<FavoriteIcon />}
        >
          FAVORITES

          <Badge
            badgeContent={favoritesCount}
            color="error"
            sx={{ ml: 1 }}
          />
        </Button>

        <Button
          color="inherit"
          component={Link}
          to="/cart"
          startIcon={<ShoppingCartIcon />}
        >
          CART

          <Badge
            badgeContent={cartCount}
            color="primary"
            sx={{ ml: 1 }}
          />
        </Button>

        <Button
          color="inherit"
          onClick={toggleTheme}
          sx={{
            ml: 2,
          }}
          startIcon={
            mode === "light" ? (
              <DarkModeIcon />
            ) : (
              <LightModeIcon />
            )
          }
        >
          {mode === "light"
            ? "Dark"
            : "Light"}
        </Button>
      </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;