import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import logo from "../../assets/logo.webp";
export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Sift")) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <div className="mx-auto container w-full">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#4E007A" }}>
          {/* Menu Icon for small screens */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)} // Open the drawer on click
            sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: "2px",
              textAlign: { xs: "center", md: "left" },
            
            }}
          >
            {/* <img src={logo} className="w-10 h-10 rounded-full"/><p></p> */}
            <p className="pacifico-regular">Akils_Portfolio  </p>
          </Typography>

          {/* Menu items - show only on medium screens and up */}
          <Box
            component="ul"
            sx={{
              display: { xs: "none", md: "flex" }, // Hide on small screens
              gap: 2,
              listStyle: "none",
              padding: 0,
              margin: 0,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography component="li">Education</Typography>
            <Typography component="li">Experience</Typography>
            <Typography component="li">Projects</Typography>
          </Box>
        </Toolbar>
        <Box display="flex" backgroundColor="white" color="purple" alignItems="center" justifyContent="center" gap={2}>
          <Button
            color="inherit"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            <SlSocialInstagram />
          </Button>
          <Button
            color="inherit"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            <SlSocialGithub />
          </Button>
          <Button
            color="inherit"
            style={{ fontSize: "18px", fontWeight: "bold" }}
          >
            <SlSocialLinkedin />
          </Button>
        </Box>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ width: 250 }}
        >
          <List>
            {["Education", "Experience", "Projects"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box></div>
  );
}
