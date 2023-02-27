import * as React from "react";
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
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import { RiAdminFill, RiUserFill } from "react-icons/ri";
import {
  MdAddCircleOutline,
  MdAddShoppingCart,
  MdOutlineAdminPanelSettings,
  MdOutlineRateReview,
  MdOutlineShoppingCart,
  MdProductionQuantityLimits,
} from "react-icons/md";

const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        {!admin && (
          <>
            <ListItem>
              <Link to="/dashboard/my-order">
                <ListItemButton>
                  <MdOutlineShoppingCart className="mr-5" />
                  My Orders
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/dashboard/add-review">
                <ListItemButton>
                  <MdOutlineRateReview className="mr-5" />
                  Add review
                </ListItemButton>
              </Link>
            </ListItem>
          </>
        )}
        {admin && (
          <>
            <ListItem>
              <Link to="/dashboard/add-product">
                <ListItemButton>
                  <MdAddCircleOutline className="mr-5" />
                  Add Product
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/dashboard/manage-product">
                <ListItemButton>
                  <MdProductionQuantityLimits className="mr-5" />
                  Manage Product
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/dashboard/manage-order">
                <ListItemButton>
                  <MdAddShoppingCart className="mr-5" />
                  Manage Orders
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/dashboard/users">
                <ListItemButton>
                  <MdOutlineAdminPanelSettings className="mr-5" />
                  Make Admin
                </ListItemButton>
              </Link>
            </ListItem>
          </>
        )}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#FEBF04",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            variant="h6"
            noWrap
            component="div"
          >
            Dashboard{" "}
            {admin ? (
              <RiAdminFill className="mx-5" />
            ) : (
              <RiUserFill className="mx-5" />
            )}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
