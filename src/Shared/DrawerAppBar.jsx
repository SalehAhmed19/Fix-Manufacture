import * as React from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#FFC001" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button sx={{ color: "#000" }}>
              <Link to="/parts">Spare Parts</Link>
            </Button>
          </ListItemButton>
        </ListItem>
        {user ? (
          <ListItem disablePadding>
            <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
              <Button sx={{ color: "#000" }} onClick={handleSignOut}>
                Logout <AiOutlineLogout className="text-2xl mx-2" />
              </Button>
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
              <Link to="/login">
                <Button sx={{ color: "#000" }}>
                  Login <AiOutlineLogin className="text-2xl mx-2" />
                </Button>
              </Link>
            </ListItemButton>
          </ListItem>
        )}
        {!user && (
          <ListItem disablePadding>
            <ListItemButton sx={{ display: "flex", justifyContent: "center" }}>
              <Button sx={{ color: "#000" }}>
                <Link to="/signup">Registration</Link>
              </Button>
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#FFC001" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "#000" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "#000",
            }}
          >
            <Link to="/">FIX MANUFACTURER</Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/parts">
              <Button sx={{ color: "#000" }}>Spare Parts</Button>
            </Link>
            {user && (
              <Link to="/dashboard">
                <Button sx={{ color: "#000" }}>Dashboard</Button>
              </Link>
            )}
            {user ? (
              <Button sx={{ color: "#000" }} onClick={handleSignOut}>
                Logout <AiOutlineLogout className="text-2xl mx-2" />
              </Button>
            ) : (
              <Link to="/login">
                <Button sx={{ color: "#000" }}>
                  Login <AiOutlineLogin className="text-2xl mx-2" />
                </Button>
              </Link>
            )}
            {!user && (
              <Link to="/signup">
                <Button sx={{ color: "#000" }}>Sign Up</Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
