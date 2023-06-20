import React, { useState, useEffect, FormEvent } from "react";
import {
  Box,
  Grid,
  Divider,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { useRouter } from "next/router";
import Link from "next/link";
import BlogForm from "@/components/form.blog";
import { useAuthContext } from "@/firebase/auth";

export default function CreateBlog() {
  const [isLoading, setStatus] = useState<boolean>(true);

  const router = useRouter();
  const { user }: any = useAuthContext();

  useEffect(() => {
    if (user?.email)
      axios.get(`/admin/${user?.email}`).then((res) => {
        if (res.data?.email === user?.email && res.data?.isAdmin)
          setStatus(false);
        else router.push("/blogs");
      });
    else router.push("/blogs");
  }, [user, router]);

  return (
    <Container component="main">
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
          Create Blog
        </Typography>
        <BlogForm blog={null} />
      </Box>
    </Container>
  );
}
