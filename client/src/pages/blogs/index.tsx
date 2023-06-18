import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import LatestBlog from "@/components/latest.blog";

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
      <Container maxWidth="lg">
        <LatestBlog />
      </Container>
    </>
  );
}
