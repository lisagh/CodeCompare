import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import ReactDiffViewer from "react-diff-viewer";
import Form from "./Form";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  paper: {
    paddingTop: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));
function Home() {
  const classes = useStyles();
  const [input, setInput] = useState({ leftCode: "", rightCode: "" });
  const [submit, setSubmit] = useState(false);
  return (
    <div className={classes.root}>
      <Form setInput={setInput} setSubmit={setSubmit} />
      {submit && (
        <div className={classes.paper}>
          <Typography variant="h5">Result</Typography>
          <ReactDiffViewer
            oldValue={input.leftCode}
            newValue={input.rightCode}
            splitView={true}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
