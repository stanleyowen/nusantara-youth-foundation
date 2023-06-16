import Head from "next/head";
import Image from "next/image";
import { Container, Typography } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Container className="align-center">
        <Typography variant="h1" sx={{ mt: 20 }}>
          Contact
        </Typography>
      </Container>
    </>
  );
}
