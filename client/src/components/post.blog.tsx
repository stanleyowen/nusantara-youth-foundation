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

export default function LatestBlog() {
  return (
    <Grid container spacing={4}>
      {["1", "2", "3", "4"].map((value) => {
        return (
          <Grid item xs={12} md={4}>
            <Link href="#">
              <Card className="blog-card">
                <CardMedia
                  component="img"
                  height="180"
                  image="https://source.unsplash.com/random?wallpapers"
                  alt="random"
                />
                <CardContent>
                  <Chip
                    size="small"
                    label="Jun 14, 2023"
                    color="primary"
                    variant="outlined"
                    className="inline-flex"
                    sx={{ mb: 1, fontSize: "0.6125rem", height: "20px" }}
                  />

                  <Typography gutterBottom variant="h5" component="div">
                    Heading
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam.
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ mt: 2, mb: -1.5 }}
                    alignItems="center"
                  >
                    <Avatar
                      src="https://source.unsplash.com/random?face"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      Author | 2 min read
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
