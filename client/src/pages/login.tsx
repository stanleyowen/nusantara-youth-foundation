import React, { useState } from "react";
import {
  Box,
  Link,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { LoadingButton } from "@mui/lab";
import {
  signInWithGoogleHandler,
  signInWithEmailAndPasswordHandler,
} from "@/firebase/signIn";
import { useRouter } from "next/router";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Psychopal
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const [invalidAuth, setInvalidAuth] = useState<boolean>(false);
  const [isLoading, setLoadingState] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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

  const handleGoogleSignIn = async () => {
    setLoadingState(true);
    const { result } = await signInWithGoogleHandler();

    setLoadingState(false);
    if (result) return router.push("/");
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
        <Typography component="h1" variant="h5">
          Sign In to Psychopal
        </Typography>

        <LoadingButton
          fullWidth
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
          loading={isLoading}
          startIcon={<GoogleIcon />}
          onClick={() => handleGoogleSignIn()}
        >
          Sign In with Google
        </LoadingButton>

        <Divider>OR</Divider>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            id="password"
            error={invalidAuth}
            helperText={invalidAuth ? "Invalid email or password." : null}
            autoComplete="current-password"
          />

          <LoadingButton
            loading={isLoading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!password || !email}
          >
            Sign In
          </LoadingButton>
        </Box>
      </Box>

      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
