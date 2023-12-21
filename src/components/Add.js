import {
  Tooltip,
  Fab,
  TextField,
  makeStyles,
  Modal,
  Container,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
  Switch,
  FormControl,
  Select,
  InputLabel,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Add as AddIcon } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
  },
  container: {
    width: 500,
    height: 600,
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: "auto",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(4),
    // "& .MuiInputLabel-formControl": {
    //   position: "absolute",
    //   top: 0,
    //   right: "0 !important",
    // },
  },
  select: {
    width: "100%",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Add({ handleSwitch, state }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = () => {
    setOpenAlert(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <>
      <Tooltip
        title="افزودن پست"
        aria-label="add"
        onClick={() => setOpen(true)}
      >
        <Fab color="secondary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          {console.log(state)}
          {/* <Switch
            checked={state}
            onChange={handleSwitch}
            inputProps={{ "aria-label": "secondary checkbox" }}
          /> */}
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField placeholder="عنوان" style={{ width: "100%" }} />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="پیام شما"
                multiline
                minRows={4}
                defaultValue="داستان خودت رو بگو ..."
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <FormControl className={classes.select}>
                <InputLabel id="demo-simple-select-helper-label">
                  انتخاب
                </InputLabel>
                <Select>
                  <MenuItem value="public">عمومی</MenuItem>
                  <MenuItem value="private">خصوصی</MenuItem>
                  <MenuItem value="friends">نمایش برای دوستان</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">دسترسی کامنت گذاری</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="everybody"
                  control={<Radio size="small" />}
                  label="برای همه"
                />
                <FormControlLabel
                  value="friend"
                  control={<Radio size="small" />}
                  label="برای دوستان"
                />
                <FormControlLabel
                  value="nobody"
                  control={<Radio size="small" />}
                  label="هیچکس"
                />
                <FormControlLabel
                  value="سفارسی"
                  disabled
                  control={<Radio size="small" />}
                  label="سفارشی(کاربران ویژه)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginLeft: "10px" }}
                onClick={() => setOpenAlert(true)}
              >
                ارسال
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                انصراف
              </Button>
            </div>
          </form>
        </Container>
      </Modal>

      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          این پست با موفقیت ارسال شد!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Add;
