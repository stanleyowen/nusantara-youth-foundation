import React, { ReactNode, Fragment, MouseEvent } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Button,
  Fade,
  Fab,
  Container,
  useScrollTrigger,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
} from "@mui/icons-material";
import Link from "next/link";
import { useAuthContext } from "@/firebase/auth";

interface Props {
  window?: () => Window;
  children?: ReactNode;
}

function ScrollTop(props: Props) {
  const { window, children } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 32, right: 32, zIndex: 100 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function NavigationBar(props: Props) {
  const { user }: any = useAuthContext();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const navItems = ["About", "Contact", user?.email ? "Logout" : "Login"];

  const drawer = (
    <Box onClick={handleDrawerToggle} className="align-center">
      <Typography variant="h6" className="my-10">
        <Link href={"/"}>Psychopal</Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item.toLowerCase()} key={item}>
            <ListItem disablePadding>
              <ListItemButton className="align-center">
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Fragment>
      <CssBaseline />
      <AppBar
        component="nav"
        color="transparent"
        sx={{ backdropFilter: "blur(10px)" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link href={"/"}>Psychopal</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item}>
                <Link href={item.toLowerCase()}>{item}</Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar id="back-to-top-anchor" />

      <Container>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "100%",
                opacity: 0.7,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Container>

      <ScrollTop {...props}>
        <Tooltip title="Scroll to top">
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </ScrollTop>
    </Fragment>
  );
}
