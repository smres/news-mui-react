import { createTheme } from "@material-ui/core";
import { purple, pink } from "@material-ui/core/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
  myButton: {
    backgroundColor: pink[400],
    color: "#fff",
    border: "1px solid black",
  },
  shape: {
    borderRadius: 18,
  },
});
