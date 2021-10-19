import { makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../assets/newLogo.png";

const useStyles = makeStyles((theme) => ({
  logo: {
    maxWidth: "300px",
    alignSelf: "center",
    margin: "1vh 0 1vh 0",
    zIndex: "50",
    // backgroundColor: "white",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    backgroundColor: "white",
    // height: "10vh",
    marginBottom: "5vh",
  },
}));

export default function Logo({ width }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        className={classes.logo}
        width={width ? width : classes.logo.width}
        src={logo}
        alt="logo"
      />
    </div>
  );
}
