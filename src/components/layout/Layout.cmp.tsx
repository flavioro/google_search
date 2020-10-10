import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  CssBaseline,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";
import SearcherView from "../searcherView/SearcherView.container";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  footer: {
    top: "auto",
    bottom: 0,
  },
}));

export const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={"header-cmp"}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Google/Bing searcher
          </Typography>
        </Toolbar>
      </AppBar>
      <SearcherView />
      <AppBar className={classes.footer}>
        <Toolbar>
          <Typography color="inherit">
            Written by{" "}
            <Link href="https://www.linkedin.com/in/judicavi/" color="inherit">
              Juan Diego Castaño Villada
            </Link>{" "}
            A.K.A{" "}
            <Link href="https://github.com/judicavi" color="inherit">
              @judicavi
            </Link>
            .
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
