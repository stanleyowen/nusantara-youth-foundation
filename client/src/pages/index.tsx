import Head from "next/head";
import {
  Container,
  Divider,
  Typography,
  Chip,
  Button,
  Stack,
  Avatar,
  Grid,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useAuthContext } from "@/firebase/auth";
import { KeyboardDoubleArrowDownRounded } from "@mui/icons-material";

export default function Home() {
  const { user }: any = useAuthContext();

  return (
    <>
      <Head>
        <title>Psychopal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="align-center">
        <Typography variant="h1" sx={{ mt: 20 }}></Typography>
        <Typography variant="h4" sx={{ ml: "20%", mr: "20%" }}>
          "Fostering the{" "}
          <Typography
            variant="h4"
            component="span"
            sx={{
              textDecoration: "underline",
              fontWeight: "bold",
              color: "#90caf9",
            }}
          >
            potential
          </Typography>{" "}
          of the youth, Envisioning a brighter future for Nusantara"
        </Typography>
        <Typography sx={{ mt: 5, ml: "20%", mr: "20%", fontSize: 14 }}>
          Nusantara Youth Foundation adalah sebuah fondasi yang bertujuan untuk
          mengembangkan dan memanfaatkan potensi generasi muda Indonesia dalam
          menghadapi tantangan global.
        </Typography>

        <KeyboardDoubleArrowDownRounded
          className="floating-icon"
          sx={{ fontSize: 30, mt: 10, color: "#90caf9" }}
        />

        {/* Create ca */}
        <Container maxWidth="lg" sx={{ py: 4 }}></Container>
      </Container>
    </>
  );
}
