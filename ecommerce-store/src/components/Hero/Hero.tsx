import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          textAlign: "center",
          py: 8,
          mb: 4,
        }}
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontWeight: 800,
              letterSpacing: "-0.04em",
            }}
          >
            Discover Amazing Products
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          <Typography
            variant="h6"
            color="text.secondary"
          >
            Browse our collection of
            high-quality products at
            the best prices.
          </Typography>
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default Hero;