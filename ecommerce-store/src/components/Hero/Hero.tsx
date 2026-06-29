import {
  Box,
  Typography,
} from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 6,
        mb: 4,
      }}
    >
    <Typography
      variant="h2"
      gutterBottom
      sx={{
        fontWeight: "bold",
      }}
    >
         Discover Amazing Products
    </Typography>
      <Typography
        variant="h6"
        color="text.secondary"
      >
        Browse our collection of
        high-quality products at
        the best prices.
      </Typography>
    </Box>
  );
}

export default Hero;