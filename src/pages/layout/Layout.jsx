import React, { useContext, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Button, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import Navigation from "../navigation/Navigation";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
const drawerWidth = 284;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
let history = [
  {
    date: "28 Apr 2024",
    title: [
      "What are the Five Pillars of Islam, and why are they important?",
      "How does Islam view women's rights and gender equality?",
      "What are the major differences between Sunni and Shia Islam, and what historical events led to their divergence?",
    ],
  },
  {
    date: "30 Apr 2024",
    title: [
      "What are the Five Pillars of Islam, and why are they important?",
      "How does Islam view women's rights and gender equality?",
      "What are the major differences between Sunni and Shia Islam, and what historical events led to their divergence?",
    ],
  },
];
const Layout = () => {
  const theme = useTheme();
  let pathname = useLocation().pathname;

  const { islamic_ai_admin_panel, logout, login } = useContext(AuthContext);
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const listButtonStyle = {
    mx: 2,
    mb: 0.5,
    borderRadius: "6px",
    color: "#969696",
    ["& .MuiTypography-root"]: {
      fontSize: "16px",
      fontWeight: 500,
      color: "#969696",
    },
    "&:hover": {
      background: "#FAFAFA",
      color: theme.palette.text.main,
      path: {
        stroke: theme.palette.text.main,
      },
      ["& .MuiTypography-root"]: {
        color: theme.palette.text.main,
      },
    },
  };

  const activeStyle = {
    background: theme.palette.primary.light,
    color: theme.palette.primary.main,
    path: {
      stroke: theme.palette.primary.main,
    },
    ["& .MuiTypography-root"]: {
      color: theme.palette.primary.main,
    },
    "&:hover": {
      background: theme.palette.primary.light,
      color: theme.palette.primary.main,
      ["& .MuiTypography-root"]: {
        color: theme.palette.primary.main,
      },
      path: {
        stroke: theme.palette.primary.main,
      },
    },
    ["&.MuiListItemButton-root"]: {
      // borderRadius: "10px",
      // "& span": {
      //   color: "#fff",
      // },
      // ["& .MuiSvgIcon-root"]: {
      //   color: "#fff",
      // },
    },
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const historyStyle = {};
  const withoutLayout = [
    "/",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/otp",
  ];
  if (withoutLayout.includes(pathname)) {
    return <Navigation />;
  } else if (!islamic_ai_admin_panel.token) {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{ background: "none", boxShadow: "none" }}
        >
          <Toolbar sx={{ justifyContent: "end" }}>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton> */}

            <IconButton
              sx={{ borderRadius: "12px", border: "1px solid #E5E5E5" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0201 2.90991C8.71009 2.90991 6.02009 5.59991 6.02009 8.90991V11.7999C6.02009 12.4099 5.76009 13.3399 5.45009 13.8599L4.30009 15.7699C3.59009 16.9499 4.08009 18.2599 5.38009 18.6999C9.69009 20.1399 14.3401 20.1399 18.6501 18.6999C19.8601 18.2999 20.3901 16.8699 19.7301 15.7699L18.5801 13.8599C18.2801 13.3399 18.0201 12.4099 18.0201 11.7999V8.90991C18.0201 5.60991 15.3201 2.90991 12.0201 2.90991Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </IconButton>
            <Button
              onClick={handleClick}
              size="small"
              sx={{
                ml: 3,
                color: "#222",
                fontSize: "16px",
                fontWeight: 600,
                px: 3,
                py: 1,
              }}
              aria-controls={menuOpen ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? "true" : undefined}
            >
              Nayon &nbsp;
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={"/user22.png"}
              ></Avatar>
            </Button>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={menuOpen}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  px: 2.5,

                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                  "& .MuiMenuItem-root": {
                    minWidth: "150px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#555",
                    borderBottom: `1px solid #E5E5E5`,
                    px: 0,
                    py: 1.25,
                  },
                  "& .MuiMenuItem-root:last-child": {
                    borderBottom: `none`,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Box onClick={handleClose}>
                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                    fontSize: "20px",
                    display: "block",
                  }}
                >
                  Saad Kabir
                </Typography>
                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                    fontSize: "14px",
                    display: "block",
                    color: "#969696",
                    mb: 1.5,
                  }}
                >
                  someone@mail.com
                </Typography>
              </Box>
              <MenuItem onClick={handleClose}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10C12.3012 10 14.1667 8.13454 14.1667 5.83335C14.1667 3.53217 12.3012 1.66669 10 1.66669C7.69882 1.66669 5.83334 3.53217 5.83334 5.83335C5.83334 8.13454 7.69882 10 10 10Z"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05 12.5 2.84167 15.1083 2.84167 18.3333"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp;&nbsp; Profile
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  logout();
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.41666 6.30001C7.675 3.30001 9.21666 2.07501 12.5917 2.07501H12.7C16.425 2.07501 17.9167 3.56668 17.9167 7.29168V12.725C17.9167 16.45 16.425 17.9417 12.7 17.9417H12.5917C9.24166 17.9417 7.7 16.7333 7.425 13.7833"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 10H3.01667"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.875 7.20831L2.08334 9.99998L4.875 12.7916"
                    fill="#969696"
                  />
                  <path
                    d="M4.875 7.20831L2.08334 9.99998L4.875 12.7916"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp;&nbsp; Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: "1px solid #E5E5E5",
            },
            //   "& .MuiDrawer-paper": {
            //     justifyContent: "space-between",
            //   },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          {/* <DrawerHeader sx={{ justifyContent: "start" }}>
           
            <img src="/logo.png" alt="logo" style={{ width: "160px" }} />
          </DrawerHeader> */}
          <Grid
            container
            justifyContent="space-between"
            direction="column"
            sx={{ height: "100%", px: 3, pt: 2, pb: 2.5 }}
          >
            <Grid xs="auto">
              <img
                src="/logo.png"
                alt="logo"
                style={{ width: "160px", marginBottom: "40px" }}
              />
              <Button
                disableElevation
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  minHeight: "22px",
                  fontSize: "16px",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                  px: 2,
                  py: 1.5,
                }}
                endIcon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 9.5H17"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 14.5H14"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              >
                New Chat
              </Button>
              <Typography
                variant="base"
                color="text.light"
                sx={{ mb: 2.5, mt: 5 }}
              >
                Chat History
              </Typography>
              <Box sx={{height:"Calc(100vh - 450px)",overflow:"auto"}}>

              {history?.map((item, i) => (
                <>
                  <Typography
                    variant="medium"
                    color="text.light"
                    sx={{ mt: 2.5, fontWeight: 300 }}
                  >
                    {item?.date}
                  </Typography>
                  <List
                    sx={{
                      ...historyStyle,
                      "& .MuiListItemButton-root": {
                        px: 0,
                        py: 2,
                        borderBottom: "1px solid #EFEFEF",
                      },
                      "& .MuiTypography-root": {
                        p: 0,
                        color: "#969696",
                        fontSize: "16px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "230px",
                        display: "block",
                      },
                    }}
                  >
                    {item?.title.map((el) => (
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary={el} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </>
              ))}
              </Box>
            </Grid>
            <Grid xs="auto">
              <Box
                sx={{
                  borderRadius: "10",
                  py: 2.5,
                  px: 2,
                  background: "#FAFAFA",
                }}
              >
                <Typography
                  variant="h6"
                  color="info.main"
                  sx={{ fontWeight: 600, mb: 0.5 }}
                >
                  Free <span style={{ color: "#555" }}>plan</span>
                </Typography>
                <Typography
                  variant="base"
                  color="text.fade"
                  sx={{ fontWeight: 500, mb: 2 }}
                >
                  Points: 112/150
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "8px", position: "relative", top: 3 }}
                  >
                    <path
                      d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                      stroke="#969696"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00275 12L9.00275 8.25"
                      stroke="#969696"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00677 6L9.00004 6"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Typography>
                <Button
                  color="primary"
                  fullWidth
                  sx={{
                    background: "#fff",
                    fontSize: "16px",
                    fontWeight: 600,
                    borderRadius: "10px",
                    px: 3,
                    py: 2,
                  }}
                >
                  Upgrade Plan
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Drawer>
        <Main open={open} sx={{ padding: 0 }}>
          <DrawerHeader />
          <Navigation />
        </Main>
      </Box>
    );
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{ background: "none", boxShadow: "none" }}
        >
          <Toolbar sx={{ justifyContent: "end" }}>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton> */}

            <IconButton
              sx={{ borderRadius: "12px", border: "1px solid #E5E5E5" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0201 2.90991C8.71009 2.90991 6.02009 5.59991 6.02009 8.90991V11.7999C6.02009 12.4099 5.76009 13.3399 5.45009 13.8599L4.30009 15.7699C3.59009 16.9499 4.08009 18.2599 5.38009 18.6999C9.69009 20.1399 14.3401 20.1399 18.6501 18.6999C19.8601 18.2999 20.3901 16.8699 19.7301 15.7699L18.5801 13.8599C18.2801 13.3399 18.0201 12.4099 18.0201 11.7999V8.90991C18.0201 5.60991 15.3201 2.90991 12.0201 2.90991Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M13.8699 3.19994C13.5599 3.10994 13.2399 3.03994 12.9099 2.99994C11.9499 2.87994 11.0299 2.94994 10.1699 3.19994C10.4599 2.45994 11.1799 1.93994 12.0199 1.93994C12.8599 1.93994 13.5799 2.45994 13.8699 3.19994Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                />
              </svg>
            </IconButton>
            <Button
              onClick={handleClick}
              size="small"
              sx={{
                ml: 3,
                color: "#222",
                fontSize: "16px",
                fontWeight: 600,
                px: 3,
                py: 1,
              }}
              aria-controls={menuOpen ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? "true" : undefined}
            >
              Nayon &nbsp;
              <Avatar
                sx={{ width: 32, height: 32 }}
                src={"/user22.png"}
              ></Avatar>
            </Button>

            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={menuOpen}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  px: 2.5,

                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                  "& .MuiMenuItem-root": {
                    minWidth: "150px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#555",
                    borderBottom: `1px solid #E5E5E5`,
                    px: 0,
                    py: 1.25,
                  },
                  "& .MuiMenuItem-root:last-child": {
                    borderBottom: `none`,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <Box onClick={handleClose}>
                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                    fontSize: "20px",
                    display: "block",
                  }}
                >
                  Saad Kabir
                </Typography>
                <Typography
                  sx={{
                    color: "#222",
                    fontWeight: 500,
                    fontSize: "14px",
                    display: "block",
                    color: "#969696",
                    mb: 1.5,
                  }}
                >
                  someone@mail.com
                </Typography>
              </Box>
              <MenuItem onClick={handleClose}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 10C12.3012 10 14.1667 8.13454 14.1667 5.83335C14.1667 3.53217 12.3012 1.66669 10 1.66669C7.69882 1.66669 5.83334 3.53217 5.83334 5.83335C5.83334 8.13454 7.69882 10 10 10Z"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05 12.5 2.84167 15.1083 2.84167 18.3333"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp;&nbsp; Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.41666 6.30001C7.675 3.30001 9.21666 2.07501 12.5917 2.07501H12.7C16.425 2.07501 17.9167 3.56668 17.9167 7.29168V12.725C17.9167 16.45 16.425 17.9417 12.7 17.9417H12.5917C9.24166 17.9417 7.7 16.7333 7.425 13.7833"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.5 10H3.01667"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.875 7.20831L2.08334 9.99998L4.875 12.7916"
                    fill="#969696"
                  />
                  <path
                    d="M4.875 7.20831L2.08334 9.99998L4.875 12.7916"
                    stroke="#969696"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                &nbsp;&nbsp; Logout
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              borderRight: "1px solid #E5E5E5",
            },
            //   "& .MuiDrawer-paper": {
            //     justifyContent: "space-between",
            //   },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          {/* <DrawerHeader sx={{ justifyContent: "start" }}>
           
            <img src="/logo.png" alt="logo" style={{ width: "160px" }} />
          </DrawerHeader> */}
          <Grid
            container
            justifyContent="space-between"
            direction="column"
            sx={{ height: "100%", px: 3, pt: 2, pb: 2.5 }}
          >
            <Grid xs="auto">
              <img
                src="/logo.png"
                alt="logo"
                style={{ width: "160px", marginBottom: "40px" }}
              />
              <Button
                disableElevation
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  minHeight: "22px",
                  fontSize: "16px",
                  justifyContent: "space-between",
                  borderRadius: "10px",
                  px: 2,
                  py: 1.5,
                }}
                endIcon={
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 9.5H17"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 14.5H14"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                }
              >
                New Chat
              </Button>
            </Grid>
            <Grid xs="auto">
              <Box
                sx={{
                  borderRadius: "10",
                  py: 2.5,
                  px: 2,
                  background: "#FAFAFA",
                }}
              >
                <Typography
                  variant="h6"
                  color="info.main"
                  sx={{ fontWeight: 600, mb: 0.5 }}
                >
                  Free <span style={{ color: "#555" }}>plan</span>
                </Typography>
                <Typography
                  variant="base"
                  color="text.fade"
                  sx={{ fontWeight: 500, mb: 2 }}
                >
                  Points: 112/150
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginLeft: "8px", position: "relative", top: 3 }}
                  >
                    <path
                      d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z"
                      stroke="#969696"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00275 12L9.00275 8.25"
                      stroke="#969696"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.00677 6L9.00004 6"
                      stroke="#969696"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Typography>
                <Button
                  color="primary"
                  fullWidth
                  sx={{
                    background: "#fff",
                    fontSize: "16px",
                    fontWeight: 600,
                    borderRadius: "10px",
                    px: 3,
                    py: 2,
                  }}
                >
                  Upgrade Plan
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Drawer>
        <Main open={open}>
          {/* <DrawerHeader /> */}
          <Navigation />
        </Main>
      </Box>
    );
  }
};

export default Layout;
