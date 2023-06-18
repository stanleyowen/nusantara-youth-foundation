import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Stack,
  Chip,
  Button,
} from "@mui/material";

export default function LatestBlog() {
  return (
    <>
      <Grid container spacing={5}>
        <Grid item xs={12} md={7}>
          <figure>
            <img
              className="blog-img"
              src="https://source.unsplash.com/random?wallpapers"
              alt="blog"
            />
          </figure>
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
        </Grid>
      </Grid>
    </>
  );
}
