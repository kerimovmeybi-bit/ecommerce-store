import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        py: 4,
        mt: 6,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 1,
        }}
      >
        E-Commerce Store
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 2 }}
      >
        Built with React, TypeScript,
        Redux Toolkit and Material UI
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <IconButton
          component="a"
          href="https://github.com/kerimovmeybi-bit"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/meybi-kerimli-4287983a2/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:kerimovmeybi@gmail.com"
        >
          <EmailIcon />
        </IconButton>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
      >
        © 2026 Kerimli Meybi. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;