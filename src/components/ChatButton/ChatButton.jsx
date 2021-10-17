import { IconButton, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ChatBubble from "@material-ui/icons/ChatBubble";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(6, 34, 42, .8)",
    color: "white",
    width: "100px",
    fontSize: "2rem",
    height: "100px",
    borderRadius: "100px",
  },
}));

export default function ChatButton({ sendit }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      variant="outlined"
      onClick={sendit}
      size="large"
    >
      <ChatBubble fontSize="large" />
    </Button>
  );
}
