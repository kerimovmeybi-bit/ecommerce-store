import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 3,
        mt: 5,
      }}
    >
      <Typography variant="body2">
        © 2026 E-Commerce Store
      </Typography>
    </Box>
  );
}

export default Footer;