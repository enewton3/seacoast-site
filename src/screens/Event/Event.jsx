import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import ChatFrame from "../../components/ChatFrame/ChatFrame";
import Logo from "../../components/Logo";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    // paddingBottom: "10vh",
    height: "100%",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
  },
  vimeoframe: {
    width: "60vw",
  },
  chatframe: {
    // width: "30%",
    // height: "70vh",
  },
}));

export default function Event({ currentGuest }) {
  const classes = useStyles();
  const history = useHistory();

  if (!currentGuest) {
    history.push("/");
  }

  return (
    <div className={classes.event}>
      <Logo />
      <div className={classes.container}>
        <div className={classes.vimeoframe}>
          <VimeoFrame />
        </div>
        <div className={classes.chatframe}>
          <ChatFrame />
        </div>
      </div>
      {/* <div className={classes.partyBlurb}>
        <p>
          To reserve your seats for House Party 2021, scheduled for October 15,
          2021:
        </p>
        <a
          href="https://www.bgcb.org/house-party-2021"
          className={classes.partyLink}
          rel="noreferrer"
          target="_blank"
        >
          <button className={classes.button}>CLICK HERE</button>
        </a>
      </div> */}
    </div>
  );
}
