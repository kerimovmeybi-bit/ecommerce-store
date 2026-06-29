import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 10,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        color="primary"
        sx={{ fontWeight: "bold" }}
      >
        404
      </Typography>

      <Typography
        variant="h4"
        sx={{ mb: 2 }}
      >
        Page Not Found
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 4 }}
      >
        The page you are looking for does not exist.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate("/")}
      >
        Go Home
      </Button>
    </Container>
  );
}

export default NotFound;