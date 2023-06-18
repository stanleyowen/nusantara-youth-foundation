import { Grid, Typography, Chip, Button, Stack, Avatar } from "@mui/material";
import Link from "next/link";

export default function LatestBlog() {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <Link href="#" className="blog-img">
            <figure>
              <img
                src="https://source.unsplash.com/random?wallpapers"
                alt="blog"
              />
            </figure>
          </Link>
        </Grid>

        <Grid item xs={12} md={5} className="main-blog">
          <Chip
            size="small"
            label="Jun 14, 2023"
            color="primary"
            variant="outlined"
            className="inline-flex"
            sx={{ mb: 1 }}
          />

          <Typography variant="h4" component="h4" gutterBottom>
            Blog Title
          </Typography>
          <Typography
            variant="body1"
            component="p"
            gutterBottom
            sx={{ mb: 2 }}
            align="justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            voluptatum, quibusdam, quia, voluptate quos dolorum quod
          </Typography>

          <Button
            size="small"
            color="primary"
            variant="contained"
            className="inline-flex"
          >
            Read More
          </Button>

          <Stack direction="row" spacing={1} sx={{ mt: 4 }} alignItems="center">
            <Avatar
              src="https://source.unsplash.com/random?face"
              sx={{ width: 24, height: 24 }}
            />
            <Typography variant="caption" color="text.secondary">
              Author | 2 min read
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
