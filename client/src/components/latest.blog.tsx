import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Grid, Typography, Chip, Button, Stack, Avatar } from "@mui/material";

type Blog = {
  key: string;
  title: string;
  description: string;
  thumbnail: string;
  properties: {
    createdAt: string;
    estimatedReadTime: string;
  };
  author: {
    name: string;
    profilePicture: string;
  };
};

export default function LatestBlog(
  props: React.PropsWithChildren<{ blog: Blog | null }>
) {
  const { blog } = props;
  const router = useRouter();
  const link = `${blog?.key}/${blog?.title
    .toLocaleLowerCase()
    .replace(/[\W_]+/g, "-")}`;

  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <Link href={link} className="blog-img">
            <figure>
              <Image
                src={
                  blog?.thumbnail || "https://source.unsplash.com/random?blog"
                }
                alt="blog"
              />
            </figure>
          </Link>
        </Grid>

        <Grid item xs={12} md={5} className="main-blog">
          <Chip
            size="small"
            label={blog?.properties?.createdAt}
            color="primary"
            variant="outlined"
            className="inline-flex"
            sx={{ mb: 1 }}
          />

          <Typography variant="h4" component="h4" gutterBottom>
            {blog?.title}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            sx={{ mb: 2 }}
            align="justify"
          >
            {blog?.description}
          </Typography>

          <Button
            size="small"
            color="primary"
            variant="contained"
            className="inline-flex"
            onClick={() => router.push(link)}
          >
            Read More
          </Button>

          <Stack direction="row" spacing={1} sx={{ mt: 4 }} alignItems="center">
            <Avatar
              sx={{ width: 24, height: 24 }}
              src={
                blog?.author?.profilePicture ||
                "https://source.unsplash.com/random"
              }
            />
            <Typography variant="caption" color="text.secondary">
              {blog?.author?.name} | {blog?.properties?.estimatedReadTime} min
              read
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
