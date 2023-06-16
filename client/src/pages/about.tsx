import Head from "next/head";
import Image from "next/image";
import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <>
      <Container className="align-center">
        <Typography variant="h1" sx={{ mt: 20 }}>
          About
        </Typography>
      </Container>
    </>
  );
}
