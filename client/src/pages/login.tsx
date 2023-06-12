import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Divider } from "@mui/material";
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
  const [isLoading, setLoadingState] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingState(true);

    const { result, error } = await signInWithEmailAndPasswordHandler(
      email,
      password
    );

    setLoadingState(false);

    if (error) {
      return console.log(error);
    }
    console.log(result);
    // return router.push("/");
  };

  const handleGoogleSignIn = async () => {
    const { result, error } = await signInWithGoogleHandler();

    if (error) {
      return console.log(error);
    }
    console.log(result);
    return router.push("/");
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

        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 2, mb: 2 }}
          startIcon={<GoogleIcon />}
          onClick={() => handleGoogleSignIn()}
        >
          Sign In with Google
        </Button>

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
