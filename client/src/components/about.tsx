import React from "react";
import { Typography, Container } from "@mui/material";

export default function NavigationBar() {
  return (
    <Container className="align-center">
      <Typography variant="h1" sx={{ mt: 20 }}>
        Canary
      </Typography>
      <Typography variant="h4">A modern web application template</Typography>
    </Container>
  );
}
