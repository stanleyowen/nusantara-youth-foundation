import { LoadingButton } from "@mui/lab";
import {
  Container,
  Box,
  Typography,
  Divider,
  TextField,
  Grid,
  Link,
} from "@mui/material";
import { Blog } from "./types.util";
import {
  useEffect,
  useState,
  FormEvent,
  ChangeEvent,
  PropsWithChildren,
} from "react";
import axios from "axios";

export default function BlogForm(
  props: PropsWithChildren<{ blog: Blog | null }>
) {
  const [isLoading, setLoadingState] = useState<boolean>(true);
  const [data, setData] = useState<Blog>({
    key: "",
    title: "",
    description: "",
    content: "",
    thumbnail: "",
    author: {
      name: "",
      profilePicture: "",
    },
    properties: {
      createdAt: "",
      estimatedReadTime: "",
    },
  });

  useEffect(() => {
    if (props.blog) setData(props.blog);
    setLoadingState(false);
  }, [props.blog]);

  const { blog } = props;

  const handleDataChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleCreateBlog = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoadingState(true);

    axios
      .post("/blogs", data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    setLoadingState(false);
  };

  return (
    <Box
      sx={{
        marginTop: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleCreateBlog}
        noValidate
        sx={{ mt: 1 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={blog?.title}
              onChange={handleDataChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={blog?.thumbnail}
              name="thumbnail"
              label="Thumbnail"
              id="thumbnail"
              onChange={handleDataChange}
              helperText="A link to the thumbnail image"
            />
          </Grid>
        </Grid>

        <TextField
          margin="normal"
          required
          fullWidth
          value={blog?.description}
          name="description"
          label="Description"
          id="description"
          onChange={handleDataChange}
          multiline
          helperText="A short description of the blog post (max 200 characters)"
        />

        <TextField
          margin="normal"
          fullWidth
          required
          id="content"
          label="Content"
          name="content"
          value={blog?.content}
          onChange={handleDataChange}
          multiline
          helperText="Please follow the markdown syntax for the content"
        />

        <LoadingButton
          loading={isLoading}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 4, mb: 2 }}
          disabled={isLoading}
        >
          Create
        </LoadingButton>
      </Box>
    </Box>
  );
}
