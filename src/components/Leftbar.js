import {
  Container,
  makeStyles,
  Avatar,
  Typography,
  ImageList,
  ImageListItem,
  Link,
  Divider,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    border: "1px solid #f8f8f8",
    height: "100vh",
    position: "sticky",
    top: "0",
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },
  imageList: {
    left: "auto",
    right: "0",
    transform: "translateX(0%)",
    top: 0,
  },
  link: {
    fontSize: 16,
    color: "#555",
    marginRight: 10,
  },
}));

function Leftbar() {
  const classes = useStyles();
  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        دوستان آنلاین
      </Typography>
      <AvatarGroup
        max={6}
        style={{ marginBottom: "20px", display: "flex", flexWrap: "wrap" }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://v4.mui.com//static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://v4.mui.com/static/images/image-list/burgers.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://v4.mui.com/static/images/image-list/camera.jpg"
        />
        <Avatar alt="Agnes Walker" src="" />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/image-list/morning.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/image-list/hats.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        گالری
      </Typography>
      <ImageList
        rowHeight={100}
        className={classes.imageList}
        style={{ marginBottom: "20px" }}
        cols={3}
      >
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/burgers.jpg"
            alt=""
            className={classes.imageList}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
            alt=""
            className={classes.imageList}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/burgers.jpg"
            alt=""
            className={classes.imageList}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
            alt=""
            className={classes.imageList}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/morning.jpg"
            alt=""
            className={classes.imageList}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
            alt=""
            className={classes.imageList}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/hats.jpg"
            alt=""
            className={classes.imageList}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
            alt=""
            className={classes.imageList}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
            alt=""
            className={classes.imageList}
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        دسته بندی ها
      </Typography>
      <Link component="button" href="" className={classes.link} variant="body2">
        ورزشی
      </Link>
      <Link component="button" href="" className={classes.link} variant="body2">
        سیاسی
      </Link>
      <Divider flexItem style={{ marginBottom: "10px" }} />
      <Link component="button" href="" className={classes.link} variant="body2">
        علمی
      </Link>
      <Link component="button" href="" className={classes.link} variant="body2">
        اقتصادی
      </Link>
    </Container>
  );
}

export default Leftbar;
