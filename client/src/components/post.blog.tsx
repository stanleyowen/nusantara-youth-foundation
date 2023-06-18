import Link from "next/link";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

type Blog = {
  key: string;
  title: string;
  description: string;
  thumbnail: string;
  properties: {
    createdAt: string;
    estimatedReadTime: number;
  };
  author: {
    name: string;
    profilePicture: string;
  };
};

export default function LatestBlog(
  props: React.PropsWithChildren<{ blog: Blog[] | null }>
) {
  const blogs = props.blog || [];

  return (
    <Grid container spacing={4}>
      {blogs.map((blog) => {
        const link = `${blog?.key}/${blog?.title
          .toLocaleLowerCase()
          .replace(/[\W_]+/g, "-")}`;
        console.log(blog?.properties?.estimatedReadTime);

        return (
          <Grid item xs={12} md={4} key={blog?.key}>
            <Link href={link}>
              <Card className="blog-card">
                <CardMedia
                  component="img"
                  height="180"
                  image={
                    blog?.thumbnail || "https://source.unsplash.com/random?blog"
                  }
                />
                <CardContent>
                  <Chip
                    size="small"
                    label={blog?.properties?.createdAt}
                    color="primary"
                    variant="outlined"
                    className="inline-flex"
                    sx={{ mb: 1, fontSize: "0.6125rem", height: "20px" }}
                  />

                  <Typography gutterBottom variant="h5" component="div">
                    {blog?.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog?.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 2, mb: -1.5 }}
                    alignItems="center"
                  >
                    <Avatar
                      src={
                        blog?.author?.profilePicture ||
                        "https://source.unsplash.com/random?profile"
                      }
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {blog?.author?.name} |{" "}
                      {blog?.properties?.estimatedReadTime} min read
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
}
