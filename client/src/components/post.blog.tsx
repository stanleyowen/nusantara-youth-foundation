import { useRouter } from "next/router";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

export default function LatestBlog() {
  const router = useRouter();
  return (
    <Grid container spacing={2}>
      {["1", "2", "3", "4"].map((value) => {
        return (
          <Grid item xs={12} md={4}>
            <Card onClick={() => router.push("/")}>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random?wallpapers"
                alt="random"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Heading
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, quibusdam.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
