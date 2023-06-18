import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Blog } from "@/components/types.util";
import {
  Avatar,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Markdown from "@/components/markdown.blog";
import { ArrowBackIosRounded } from "@mui/icons-material";

export default function Redirects() {
  const router = useRouter();
  const key = router.query?.key;
  const [blog, setBlog] = useState<Blog>();

  console.log(router.query);

  // Redirects further to /blogs/[key]/[title]
  useEffect(() => {
    axios
      .get(`/blogs/${key}`)
      .then((res) => setBlog(res.data))
      .catch((_) => router.push("/404"));
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mb: 5 }}>
      <Button
        variant="text"
        size="small"
        onClick={() => router.push("/blogs")}
        startIcon={<ArrowBackIosRounded />}
        sx={{ mb: 3 }}
      >
        Back to blog
      </Button>

      <Typography variant="caption" component="h4" color="text.secondary">
        {blog?.properties?.createdAt}
      </Typography>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        {blog?.title}
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{ mt: 1, mb: 5 }}
        alignItems="center"
      >
        <Avatar
          sx={{ width: 26, height: 26 }}
          src={
            blog?.author?.profilePicture || "https://source.unsplash.com/random"
          }
        />
        <Typography variant="caption" color="text.secondary">
          {blog?.author?.name}
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography variant="caption" color="text.secondary">
          {blog?.properties?.estimatedReadTime} min read
        </Typography>
      </Stack>

      <Image
        src={blog?.thumbnail || "https://source.unsplash.com/random?blog"}
        alt={blog?.title || "Blog thumbnail"}
        width={700}
        height={400}
        style={{ marginBottom: "2rem" }}
      />

      <Markdown>{blog?.content || ""}</Markdown>
    </Container>
  );
}
