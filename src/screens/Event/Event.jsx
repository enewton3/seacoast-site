import React, { useCallback, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import VimeoFrame from "../../components/VimeoFrame/VimeoFrame";
import ChatFrame from "../../components/ChatFrame/ChatFrame";
import Logo from "../../components/Logo";
import ChatButton from "../../components/ChatButton/ChatButton";
import PopupWrapper from "../../components/PopupWrapper/PopupWrapper";

const useStyles = makeStyles((theme) => ({
  event: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "",
    height: "100%",
  },
  container: {
    display: "flex",
    flexFlow: "row wrap",
  },
  vimeoframe: {
    width: "50vw",
    "@media(max-width: 1400px)": {
      width: "50vw",
    },
    "@media(max-width: 1200px)": {
      width: "60vw",
    },
    "@media(max-width: 900px)": {
      width: "80vw",
    },
    "@media(max-width: 800px)": {
      width: "90vw",
    },
    "@media(max-width: 700px)": {
      width: "100vw",
    },
  },
  chatframe: {},
  chatButton: {
    position: "fixed",
    bottom: "5vh",
    right: "5vw",
  },
}));

export default function Event({ currentGuest }) {
  const classes = useStyles();
  const history = useHistory();

  const [width, setWidth] = useState(window.innerWidth);
  // const [chatButton, setChatButton] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  if (!currentGuest) {
    history.push("/");
  }

  // let isMobile = width <= 768;

  const handleWindowSizeChange = useCallback(() => {
    setWidth(window.innerWidth);
    if (width <= 900) {
      setChatOpen(false);
    } else if (width > 900) {
      setChatOpen(true);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [handleWindowSizeChange]);

  return (
    <div className={classes.event}>
      <Logo />
      <div className={classes.container}>
        <div className={classes.vimeoframe}>
          <VimeoFrame />
        </div>
        {width > 900 ? (
          <div className={classes.chatframe}>
            <ChatFrame />
          </div>
        ) : (
          <>
            <div className={classes.chatframe}>
              <PopupWrapper chatOpen={chatOpen} anchorEl={anchorEl}>
                <ChatFrame />
              </PopupWrapper>
            </div>
            <div className={classes.chatButton}>
              <ChatButton
                sendit={(e) => {
                  setChatOpen(!chatOpen);
                  setAnchorEl(e.currentTarget);
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
