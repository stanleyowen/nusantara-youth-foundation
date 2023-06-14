import React, { useState, FormEvent } from "react";
import {
  Box,
  Grid,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { signInWithEmailAndPasswordHandler } from "@/firebase/signIn";
import { useRouter } from "next/router";
import Link from "next/link";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"© " + new Date().getFullYear() + " Psychopal"}
    </Typography>
  );
}

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidAuth, setInvalidAuth] = useState<boolean>(false);
  const [isLoading, setLoadingState] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingState(true);

    const { result, error }: any = await signInWithEmailAndPasswordHandler(
      email,
      password
    );

    if (error) {
      error.code === "auth/invalid-email"
        ? setInvalidEmail(true)
        : setInvalidEmail(false);
      setInvalidAuth(true);
    } else if (result) return router.push("/");

    setLoadingState(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          Reset your password
        </Typography>
        <Typography component="h2" variant="body1" sx={{ mb: 3 }}>
          To reset your password, enter your email below and submit. An email
          will be sent to you with instructions about how to complete the
          process.
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={invalidEmail || invalidAuth}
          helperText={
            invalidEmail
              ? "Please enter a valid email address."
              : invalidAuth
              ? "Invalid email or password."
              : null
          }
          autoComplete="email"
          autoFocus
        />

        <Grid container>
          <Grid item xs>
            <Link href="/login" className="link">
              Login
            </Link>
          </Grid>
          <Grid item>
            <Link href="/signup" className="link">
              Sign Up
            </Link>
          </Grid>
        </Grid>

        <LoadingButton
          loading={isLoading}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={!password || !email}
        >
          Reset Password
        </LoadingButton>
      </Box>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
