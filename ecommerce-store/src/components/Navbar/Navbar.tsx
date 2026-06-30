import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  useMediaQuery,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { useThemeContext } from "../../context/ThemeContext";

import type { RootState } from "../../app/store";

function Navbar() {
  const { mode, toggleTheme } =
    useThemeContext();

  const isMobile = useMediaQuery("(max-width:600px)");

  const [open, setOpen] = useState(false);

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

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontSize: {
                xs: "1rem",
                sm: "1.25rem",
              },
            }}
          >
            E-Commerce Store
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box
              sx={{
                display: "flex",
                gap: 2,
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
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer}
      >
        <Box
          sx={{
            width: 260,
          }}
          role="presentation"
          onClick={toggleDrawer}
        >
          <Typography
            variant="h6"
            sx={{
              p: 2,
              fontWeight: "bold",
            }}
          >
            Menu
          </Typography>

          <Divider />

          <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/"
            >
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/favorites"
            >
              <FavoriteIcon sx={{ mr: 2 }} />

              <ListItemText
                primary={`Favorites (${favoritesCount})`}
              />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/cart"
            >
              <ShoppingCartIcon sx={{ mr: 2 }} />

              <ListItemText
                primary={`Cart (${cartCount})`}
              />
            </ListItemButton>
          </ListItem>

          <Divider sx={{ my: 1 }} />

          <ListItem disablePadding>
            <ListItemButton
              onClick={toggleTheme}
            >
              {mode === "light" ? (
                <DarkModeIcon sx={{ mr: 2 }} />
              ) : (
                <LightModeIcon sx={{ mr: 2 }} />
              )}

              <ListItemText
                primary={
                  mode === "light"
                    ? "Dark Mode"
                    : "Light Mode"
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;