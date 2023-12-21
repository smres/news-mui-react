import React, { useState } from "react";
import { create } from "jss";
import { createTheme } from "@material-ui/core/styles";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import { ThemeProvider } from "@material-ui/styles";

import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";

import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Add from "./components/Add";

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles((theme) => ({
  left: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function App() {
  const [direction, setDirection] = useState("rtl");
  const [state, setState] = useState(false);

  const theme = createTheme({ direction });

  const handleSwitch = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr");
    setState((prevState) => (prevState = !prevState));
  };
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <Rightbar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.left}>
          <Leftbar />
        </Grid>
      </Grid>

      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Add handleSwitch={handleSwitch} state={state} />
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
}

export default App;
