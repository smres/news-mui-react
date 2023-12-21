import {
  makeStyles,
  alpha,
  AppBar,
  Badge,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  IconButton,
  Container,
} from "@material-ui/core";
import { Search, Mail, Notifications, Cancel } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    transition: "all 0.2s linear",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "60%",
    },
  },
  input: {
    color: "#fff",
    width: "100%",
    marginRight: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
  searchButton: {
    marginLeft: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  icon: {
    display: (props) => (props.open ? "none" : "flex"),
    alignItems: "center",
  },
  badge: {
    marginLeft: theme.spacing(2),
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <div>
      <AppBar color="primary">
        <Container maxWidth="xl">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>
              <span style={{ color: "#2aff00" }}>مــاتـریــکــس</span> نـیوز
            </Typography>
            <Typography variant="h6" className={classes.logoSm}>
              <span style={{ color: "#2aff00" }}>مــاتـریــکــس</span> نـیوز
            </Typography>
            <div className={classes.search}>
              <Search />
              <InputBase
                placeholder="جستجو کنید ..."
                className={classes.input}
              />
              <Cancel
                className={classes.cancel}
                onClick={() => setOpen(false)}
              />
            </div>
            <div className={classes.icon}>
              <Search
                className={classes.searchButton}
                onClick={() => setOpen(true)}
              />
              <Badge
                overlap="rectangular"
                badgeContent={5}
                color="secondary"
                className={classes.badge}
              >
                <IconButton style={{ padding: "6px", color: "#fff" }}>
                  <Mail />
                </IconButton>
              </Badge>
              <Badge
                overlap="rectangular"
                badgeContent={3}
                color="secondary"
                className={classes.badge}
              >
                <IconButton style={{ padding: "6px", color: "#fff" }}>
                  <Notifications />
                </IconButton>
              </Badge>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
