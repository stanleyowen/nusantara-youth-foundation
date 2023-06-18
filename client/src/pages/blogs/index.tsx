import { Container, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import LatestBlog from "@/components/latest.blog";
import Blog from "@/components/post.blog";

export default function About() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <LatestBlog blog={blogs[0] || null} />
        <Divider sx={{ my: 5 }} />
        <Blog blog={blogs.slice(1)} />
      </Container>
    </>
  );
}
