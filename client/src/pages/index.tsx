import Head from "next/head";
import { Button, Container, Typography } from "@mui/material";
import { useAuthContext } from "@/firebase/auth";
import { KeyboardDoubleArrowDownRounded } from "@mui/icons-material";

export default function Home() {
  const { user }: any = useAuthContext();

  return (
    <>
      <Head>
        <title>Nusantara Youth Foundation</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container className="align-center">
        <Typography variant="h4" sx={{ mt: 15, ml: "20%", mr: "20%" }}>
          &#34;Fostering the{" "}
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
          of the youth, Envisioning a brighter future for Nusantara&#34;
        </Typography>
        <Typography sx={{ mt: 5, ml: "20%", mr: "20%", fontSize: 14 }}>
          Nusantara Youth Foundation adalah sebuah fondasi yang bertujuan untuk
          mengembangkan dan memanfaatkan potensi generasi muda Indonesia dalam
          menghadapi tantangan global.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 5, mb: 5, ml: "20%", mr: "20%" }}
          onClick={() =>
            window.open(
              "https://www.instagram.com/nusantarayouthfoundation/",
              "_blank"
            )
          }
        >
          Join Us
        </Button>
        {/* <KeyboardDoubleArrowDownRounded
          className="floating-icon"
          sx={{ fontSize: 30, mt: 10, color: "#90caf9" }}
        /> */}
      </Container>
    </>
  );
}
